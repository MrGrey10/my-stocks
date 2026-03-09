import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MailService } from '../mail/mail.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenType } from 'prisma/generated';

@Injectable()
export class TwoFactorAuthService {
	public constructor(
		private readonly prisma: PrismaService,
		private readonly mailService: MailService,
	) {}

	public async validateTwoFactorToken(email: string, code: string) {
		const existingToken = await this.prisma.token.findFirst({
			where: {
				email,
				type: TokenType.TWO_FACTOR,
			},
		});

		if (!existingToken) {
			throw new NotFoundException('Two-factor authentication token not found');
		}

		if(existingToken.token !== code) {
			throw new BadRequestException('Invalid two-factor authentication code');
		}

		const hasExpired = new Date(existingToken.expiresIn) < new Date();

		if (hasExpired) {
			throw new BadRequestException('Two-factor authentication token has expired');
		}

		await this.prisma.token.delete({
			where: { id: existingToken.id, type: TokenType.TWO_FACTOR },
		});

		return true;
	}

	public async sendTwoFactorToken(email: string) {
		const token = await this.generateTwoFactorToken(email);
		await this.mailService.sendTwoFactorTokenEmail(email, token.token);
		return true;
	}

	private async generateTwoFactorToken(email: string) {
		const token = Math.floor(100000 + Math.random() * (1000000 - 100000)).toString();
		const expiresIn = new Date(new Date().getTime() + 300000);
		const existingToken = await this.prisma.token.findFirst({
			where: {
				email,
				type: TokenType.TWO_FACTOR,
			},
		});

		if (existingToken) {
			await this.prisma.token.delete({
				where: { id: existingToken.id, type: TokenType.TWO_FACTOR, },
			});
		}

		const verificationToken = await this.prisma.token.create({
			data: { email, type: TokenType.TWO_FACTOR, token, expiresIn },
		});

		return verificationToken;
	}
}
