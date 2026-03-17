import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Post,
	Query,
	Req,
	Res,
	UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { Request, Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { AuthProviderGuard } from './guards/provider.guard';
import { ProviderService } from './provider/provider.service';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
	public constructor(
		private readonly authService: AuthService,
		private readonly providerService: ProviderService,
		private readonly configService: ConfigService,
	) {}

	// @Recaptcha()
	@Post('register')
	@HttpCode(HttpStatus.OK)
	public async register(@Req() req: Request, @Body() dto: RegisterDto) {
		return this.authService.register(req, dto);
	}

	// @Recaptcha()
	@Post('login')
	@HttpCode(HttpStatus.OK)
	public async login(@Req() req: Request, @Body() dto: LoginDto) {
		return this.authService.login(req, dto);
	}

	@Get('/oauth/callback/:provider')
	@UseGuards(AuthProviderGuard)
	@HttpCode(HttpStatus.OK)
	public async callback(
		@Req() req: Request,
		@Res({ passthrough: true }) res: Response,
		@Query('code') code: string,
		@Param('provider') provider: string,
	) {
		const origin = this.configService.getOrThrow<string>('ALLOWED_ORIGIN');

		if (!code) {
			return res.redirect(`${origin}/login?error=Authorization+code+is+missing`);
		}

		try {
			await this.authService.extractProfileByCode(req, provider, code);
			return res.redirect(origin);
		} catch (error: any) {
			const message = encodeURIComponent(error?.message ?? 'OAuth login failed');
			return res.redirect(`${origin}/login?error=${message}`);
		}
	}

	@UseGuards(AuthProviderGuard)
	@Get('/oauth/connect/:provider')
	@HttpCode(HttpStatus.OK)
	public async connect(@Param('provider') provider: string) {
		const providerInstance = this.providerService.findByService(provider);

		return {
			url: providerInstance.getAutheUrl(),
		};
	}

	@Post('logout')
	@HttpCode(HttpStatus.OK)
	public async logout(
		@Req() req: Request,
		@Res({ passthrough: true }) res: Response,
	) {
		return this.authService.logout(req, res);
	}
}
