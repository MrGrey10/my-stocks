import { BadRequestException, forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TokenType } from 'prisma/generated';
import { PrismaService } from 'src/prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { MailService } from '../mail/mail.service';
import { UserService } from 'src/user/user.service';
import { AuthService } from '../auth.service';
import { ConfirmationDto } from '../dto/confirmation.dto';
import { Request } from 'express';

@Injectable()
export class EmailConfirmationService {
	public constructor(
		private readonly prisma: PrismaService,
		private readonly mailService: MailService,
		private readonly userService: UserService,

		@Inject(forwardRef(() => AuthService))
		private readonly authService: AuthService,
	) {}

	public async newVerifucation(req: Request, dto: ConfirmationDto) {
		const existingToken = await this.prisma.token.findUnique({
			where: {
				token: dto.token,
				type: TokenType.VERIFICATION,
			},
		});

		if(!existingToken) {
			throw new NotFoundException('Invalid token');
		}

		const hasExpired = new Date(existingToken.expiresIn) < new Date();

		if(hasExpired) {
			throw new BadRequestException('Token has expired');
		}

		const existingUser = await this.userService.findByEmail(existingToken.email);
		
		if(!existingUser) {
			throw new NotFoundException('User not found');
		}

		await this.prisma.user.update({
			where: { id: existingUser.id },
			data: { verified: true },
		});

		await this.prisma.token.delete({
			where: { id: existingToken.id, type: TokenType.VERIFICATION },
		});

		return this.authService.saveSession(req, existingUser);
	}

	public async sendVerificationToken(email: string) {
		const verificationToken = await this.generateVerificationToken(email);

		await this.mailService.sendConfirmationEmail(verificationToken.email, verificationToken.token);

		return true;
	}

	private async generateVerificationToken(email: string) {
		const token = uuidv4();
		const expiresIn = new Date(new Date().getTime() + 3600 * 1000);
		const existingToken = await this.prisma.token.findFirst({
			where: {
				email,
				type: TokenType.VERIFICATION,
			},
		});

		if (existingToken) {
			await this.prisma.token.delete({
				where: { id: existingToken.id },
			});
		}

		const verificationToken = await this.prisma.token.create({
			data: { email, type: TokenType.VERIFICATION, token, expiresIn },
		});

		return verificationToken;
	}
}
