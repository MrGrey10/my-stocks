import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { getRecaptchaConfig } from 'src/auth/config/recaptcha.config';
import { GoogleRecaptchaModule } from '@nestlab/google-recaptcha';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProviderModule } from './provider/provider.module';
import { getProvidersConfig } from './config/providers.config';
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module';
import { MailModule } from './mail/mail.module';
import { TwoFactorAuthService } from './two-factor-auth/two-factor-auth.service';

@Module({
  imports: [
		UserModule,
		MailModule,
		GoogleRecaptchaModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: getRecaptchaConfig,
			inject: [ConfigService],
		}), 
		ProviderModule.registerAsync({
			imports: [ConfigModule],
			useFactory: getProvidersConfig,
			inject: [ConfigService],
		}),
		forwardRef(() => EmailConfirmationModule),
	],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard, RolesGuard, TwoFactorAuthService],
  exports: [AuthService],
})
export class AuthModule {}
