import { Body, Heading, Link, Tailwind, Text } from '@react-email/components';
import { Html } from '@react-email/html';
import * as React from 'react';

interface ResetPasswordTemplateProps {
	domain: string;
	token: string;
}

export function ResetPasswordTemplate({ domain, token }: ResetPasswordTemplateProps) {
	const confirmLink = `${domain}/auth/new-password?token=${token}`;
	return (
		<Tailwind>
			<Html>
				<Body className="text-black">
					<Heading>Reset your password</Heading>
					<Text>
						Thank you for requesting a password reset. Please click the button below to reset your password.
					</Text>
					<Link href={confirmLink}>Reset your password</Link>
					<Text>This link will expire in 1 hour.</Text>
				</Body>
			</Html>
		</Tailwind>
	);
};