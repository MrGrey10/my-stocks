import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { render } from '@react-email/components';
import { ConfirmationTemplate } from 'src/libs/mail-template/confirmation-template';
import { ResetPasswordTemplate } from 'src/libs/mail-template/reset-password-template';
import { TwoFactorAuthTemplate } from 'src/libs/mail-template/two-factor-auth-template';

@Injectable()
export class MailService {
	private readonly logger = new Logger(MailService.name);

	public constructor(
		private readonly mailerService: MailerService,
		private readonly configService: ConfigService,
	) {}

	public async sendConfirmationEmail(email: string, token: string) {
		try {
			const domain = this.configService.getOrThrow<string>('ALLOWED_ORIGIN');
			const html = await render(ConfirmationTemplate({ domain, token }));
			return await this.sendEmail(email, 'Confirm your email', html);
		} catch (error) {
			this.logger.error(`Failed to send confirmation email to ${email}:`, error);
			throw error;
		}
	}

	public async sendPasswordResetEmail(email: string, token: string) {
		try {
			const domain = this.configService.getOrThrow<string>('ALLOWED_ORIGIN');
			const html = await render(ResetPasswordTemplate({ domain, token }));
			return await this.sendEmail(email, 'Reset your password', html);
		} catch (error) {
			this.logger.error(`Failed to send password reset email to ${email}:`, error);
			throw error;
		}
	}

	public async sendTwoFactorTokenEmail(email: string, token: string) {
		try {
			const html = await render(TwoFactorAuthTemplate({ token }));
			return await this.sendEmail(email, 'Two-factor authentication', html);
		} catch (error) {
			this.logger.error(`Failed to send two-factor authentication email to ${email}:`, error);
			throw error;
		}
	}

	private async sendEmail(email: string, subject: string, html: string) {
		try {
			return await this.mailerService.sendMail({
				to: email,
				subject,
				html,
			});
		} catch (error) {
			this.logger.error(`Failed to send email to ${email}:`, error);
			throw error;
		}
	}
}
