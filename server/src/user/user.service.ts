import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthMethod } from 'prisma/generated';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'argon2';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
	public constructor(private readonly prisma: PrismaService) {}

	public async findById(id: string) {
		const user = await this.prisma.user.findUnique({
			where: { id },
			include: { sessions: true },
		});

		if (!user) {
			throw new NotFoundException('User not found');
		}

		return user;
	}

	public async findByEmail(email: string) {
		const user = await this.prisma.user.findUnique({
			where: { email },
			include: { sessions: true },
		});
		return user;
	}

	public async findProfile(id: string) {
		const user = await this.prisma.user.findUnique({
			where: { id },
			select: {
				id: true,
				name: true,
				email: true,
				picture: true,
				role: true,
				verified: true,
				twoFactorEnabled: true,
				authMethod: true,
			},
		});

		if (!user) {
			throw new NotFoundException('User not found');
		}

		return user;
	}

	public async create(
		email: string,
		password: string,
		displayName: string,
		picture: string,
		authMethod: AuthMethod,
		isVerified: boolean,
	) {
		const user = await this.prisma.user.create({
			data: {
				email,
				password: password ? await hash(password) : '',
				name: displayName,
				picture,
				authMethod,
				verified: isVerified,
			},
			include: { sessions: true },
		});

		return user;
	}

	public async update(id: string, dto: UpdateUserDto) {
		const user = await this.prisma.user.update({
			where: { id },
			data: {
				name: dto.name,
				email: dto.email,
				twoFactorEnabled: dto.twoFactorEnabled,
			}
		});
		return user;
	}
}
