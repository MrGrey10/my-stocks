import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Module({
  controllers: [UserController],
  providers: [UserService, AuthGuard, RolesGuard],
  exports: [UserService],
})
export class UserModule {}
