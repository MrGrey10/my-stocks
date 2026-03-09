import { ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UserService } from 'src/user/user.service';
import { AuthMethod, User } from 'prisma/generated';
import { Request, Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { verify } from 'argon2';
import { ConfigService } from '@nestjs/config';
import { ProviderService } from './provider/provider.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmailConfirmationService } from './email-confirmation/email-confirmation.service';
import { TwoFactorAuthService } from './two-factor-auth/two-factor-auth.service';

@Injectable()
export class AuthService {
	public constructor(
		private readonly prisma: PrismaService,
		private readonly userService: UserService, 
		private readonly configService: ConfigService,
		private readonly providerService: ProviderService,
		private readonly emailConfirmationService: EmailConfirmationService,
		private readonly twoFactorAuthService: TwoFactorAuthService,
	) {}

	public async register(req: Request, dto: RegisterDto) {
		const isExist = await this.userService.findByEmail(dto.email);
		
		if (isExist) {
			throw new ConflictException('User already exists');
		}

		const user = await this.userService.create(dto.email, dto.password, dto.name, '', AuthMethod.EMAIL, false);

		await this.emailConfirmationService.sendVerificationToken(user.email);

		return {
			message: 'User created successfully. Please check your email for verification.',
		}
	}

	public async login(req: Request, dto: LoginDto) {
		const user = await this.userService.findByEmail(dto.email);

		if (!user || !user.password) {
			throw new NotFoundException('User not found');
			
		}
		const isPasswordValid = await verify(user.password, dto.password);
		
		if (!isPasswordValid) {
			throw new UnauthorizedException('Invalid password');
		}
		
		if(!user.verified) {
			await this.emailConfirmationService.sendVerificationToken(user.email);
			throw new UnauthorizedException('Email not verified');
		}

		if(user.twoFactorEnabled) {
			if(!dto.code) {
				await this.twoFactorAuthService.sendTwoFactorToken(user.email);

				return {
					message: 'Two-factor authentication code sent to email',
				}
			}

			await this.twoFactorAuthService.validateTwoFactorToken(user.email, dto.code);
		}

		return this.saveSession(req, user);
	}

	public async extractProfileByCode(req: Request, provider: string, code: string) {
		const providerInstance = this.providerService.findByService(provider);
		const profile = await providerInstance.findUserByCode(code);

		// Користувач вже є по email (реєстрація через email або попередній OAuth) — лише логінимо
		let user = await this.userService.findByEmail(profile.email);
		if (user) {
			const existing = await this.prisma.session.findFirst({
				where: { userId: user.id, provider: profile.provider },
			});
			const refreshToken = profile.refresh_token ?? '';
			if (existing) {
				await this.prisma.session.update({
					where: { id: existing.id },
					data: {
						accessToken: profile.access_token,
						refreshToken,
						expiresAt: profile.expires_at,
					},
				});
			} else {
				await this.prisma.session.create({
					data: {
						type: 'oauth',
						userId: user.id,
						provider: profile.provider,
						accessToken: profile.access_token,
						refreshToken,
						expiresAt: profile.expires_at,
					},
				});
			}
			return this.saveSession(req, user);
		}

		user = await this.userService.create(
			profile.email,
			'',
			profile.name,
			profile.picture ?? '',
			profile.provider.toUpperCase() as AuthMethod,
			true,
		);

		const refreshToken = profile.refresh_token ?? '';
		await this.prisma.session.create({
			data: {
				type: 'oauth',
				userId: user.id,
				provider: profile.provider,
				accessToken: profile.access_token,
				refreshToken,
				expiresAt: profile.expires_at,
			},
		});

		return this.saveSession(req, user);
	}

	public async logout(req: Request, res: Response): Promise<void> {
		return new Promise((resolve, reject) => {
			req.session.destroy((err) => {
				if (err) {
					return reject(new InternalServerErrorException('Failed to destroy session'));
				}
				res.clearCookie(this.configService.getOrThrow<string>('SESSION_NAME'));
				resolve();
			});
		});
	}

	public async saveSession(req: Request, user: User) {
		return new Promise((resolve, reject) => {
			req.session.userId = user.id;
			
			req.session.save((err) => {
				if (err) {
					return reject(new InternalServerErrorException('Failed to save session'));
				}
				resolve({ user });
			});
		});
	}
}
