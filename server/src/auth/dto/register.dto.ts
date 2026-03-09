import { IsEmail, IsNotEmpty, IsString, MinLength, Validate } from 'class-validator';
import { IsPasswordMatchingConstraint } from 'src/libs/common/decorators/is-password-matching-constraint';

export class RegisterDto {
	@IsString({ message: 'Name must be a string' })
	@IsNotEmpty({ message: 'Name is required' })
	name: string;

	@IsString({ message: 'Name must be a string' })
	@IsEmail({}, { message: 'Invalid email' })
	@IsNotEmpty({ message: 'Email is required' })
	email: string;

	@IsString({ message: 'Password must be a string' })
	@IsNotEmpty({ message: 'Password is required' })
	@MinLength(8, { message: 'Password must be at least 8 characters long' })
	password: string;

	@IsString({ message: 'Password repeat must be a string' })
	@IsNotEmpty({ message: 'Password repeat is required' })
	@MinLength(8, {
		message: 'Password repeat must be at least 8 characters long',
	})
	@Validate(IsPasswordMatchingConstraint, {
		message: 'Passwords do not match',
	})
	passwordRepeat: string;
}
