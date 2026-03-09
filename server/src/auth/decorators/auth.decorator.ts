import { applyDecorators, UseGuards } from '@nestjs/common';
import { Role } from 'prisma/generated';
import { Roles } from './roles.decorator';
import { AuthGuard } from '../guards/auth.guard';
import { RolesGuard } from '../guards/roles.guard';

export const ROLES_KEY = 'roles';

export const Authorization = (...roles: Role[]) => {
	if(roles.length > 0) {
		return applyDecorators(Roles(...roles), UseGuards(AuthGuard, RolesGuard))
	}

	return applyDecorators(UseGuards(AuthGuard))
}