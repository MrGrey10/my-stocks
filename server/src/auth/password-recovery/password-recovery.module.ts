import { Module } from '@nestjs/common';
import { PasswordRecoveryService } from './password-recovery.service';
import { PasswordRecoveryController } from './password-recovery.controller';
import { MailService } from '../mail/mail.service';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [PasswordRecoveryController],
  providers: [PasswordRecoveryService, MailService, UserService],
})
export class PasswordRecoveryModule {}
