import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class NewPasswordDto {
	@IsString({ message: 'Password must be a string' })
	@IsNotEmpty({ message: 'Password is required' })
	@MinLength(8, { message: 'Password must be at least 8 characters long' })
	password: string;
}