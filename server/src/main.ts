import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import { parseBoolean, timeToMs } from './libs/common/utils';
import { RedisStore } from 'connect-redis';
import { createClient } from 'redis';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const configService = app.get(ConfigService);

	app.getHttpAdapter().getInstance().set('trust proxy', 1);

	const redisClient = createClient({
		url: configService.getOrThrow<string>('REDIS_URI'),
	});

	await redisClient.connect();

	const frontendUrl = configService.getOrThrow<string>('FRONTEND_URL');

	app.enableCors({
		origin: frontendUrl,
		credentials: true,
		methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
		allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
		exposedHeaders: ['set-cookie'],
		preflightContinue: false,
		optionsSuccessStatus: 204,
	});

	app.use(cookieParser(configService.getOrThrow<string>('COOKIE_SECRET')));
	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
		}),
	);
	app.use(
		session({
			secret: configService.getOrThrow<string>('SESSION_SECRET'),
			name: configService.getOrThrow<string>('SESSION_NAME'),
			resave: true,
			saveUninitialized: false,
			cookie: {
				domain: configService.getOrThrow<string>('SESSION_DOMAIN'),
				maxAge: timeToMs(configService.getOrThrow<string>('SESSION_MAX_AGE')),
				httpOnly: parseBoolean(
					configService.getOrThrow<string>('SESSION_HTTP_ONLY'),
				),
				secure: parseBoolean(
					configService.getOrThrow<string>('SESSION_SECURE'),
				),
				sameSite: parseBoolean(configService.getOrThrow<string>('SESSION_SECURE')) ? 'none' : 'lax',
			},
			store: new RedisStore({
				client: redisClient,
				prefix: configService.getOrThrow<string>('SESSION_FOLDER'),
			}),
		}),
	);

	await app.listen(configService.getOrThrow<number>('APPLICATION_PORT'));
}
bootstrap();
