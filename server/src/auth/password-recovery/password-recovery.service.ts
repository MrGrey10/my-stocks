import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MailService } from '../mail/mail.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { TokenType } from 'prisma/generated';
import { v4 as uuidv4 } from 'uuid';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { hash } from 'argon2';
import { NewPasswordDto } from './dto/new-password.dto';

@Injectable()
export class PasswordRecoveryService {
	public constructor(
		private readonly prisma: PrismaService,
		private readonly mailService: MailService,
		private readonly userService: UserService,
	) {}

	public async resetPassword(dto: ResetPasswordDto) {
		const user = await this.userService.findByEmail(dto.email);
		
		if (!user) {
			throw new NotFoundException('User not found');
		}

		const token = await this.generatePasswordResetToken(user.email);
		await this.mailService.sendPasswordResetEmail(user.email, token.token);

		return true;
	}

	public async newPassword(dto: NewPasswordDto, token: string) {
		const existingToken = await this.prisma.token.findFirst({
			where: {
				token: token,
				type: TokenType.PASSWORD_RESET,
			},
		});

		if (!existingToken) {
			throw new NotFoundException('Invalid token');
		}

		const hasExpired = new Date(existingToken.expiresIn) < new Date();
		
		if (hasExpired) {
			throw new BadRequestException('Token has expired');
		}

		const user = await this.userService.findByEmail(existingToken.email);
		
		if (!user) {
			throw new NotFoundException('User not found');
		}
		await this.prisma.user.update({
			where: { id: user.id },
			data: { password: await hash(dto.password) },
		});

		await this.prisma.token.delete({
			where: { id: existingToken.id, type: TokenType.PASSWORD_RESET },
		});

		return true;
	}

	private async generatePasswordResetToken(email: string) {
		const token = uuidv4();
		const expiresIn = new Date(new Date().getTime() + 3600 * 1000);
		const existingToken = await this.prisma.token.findFirst({
			where: {
				email,
				type: TokenType.PASSWORD_RESET,
			},
		});

		if (existingToken) {
			await this.prisma.token.delete({
				where: { id: existingToken.id },
			});
		}

		const verificationToken = await this.prisma.token.create({
			data: { email, type: TokenType.PASSWORD_RESET, token, expiresIn },
		});

		return verificationToken;
	}
}
