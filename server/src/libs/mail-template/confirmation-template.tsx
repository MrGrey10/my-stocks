import { Body, Heading, Link, Tailwind, Text } from '@react-email/components';
import { Html } from '@react-email/html';
import * as React from 'react';

interface ConfirmationTemplateProps {
	domain: string;
	token: string;
}

export function ConfirmationTemplate({
	domain,
	token,
}: ConfirmationTemplateProps) {
	const confirmLink = `${domain}/verify-email?token=${token}`;
	return (
		<Tailwind>
			<Html>
				<Body className="text-black">
					<Heading>Confirm your email</Heading>
					<Text>
						Thank you for registering. Please click the button below to confirm
						your email.
					</Text>
					<Link href={confirmLink}>Confirm your email</Link>
					<Text>This link will expire in 1 hour.</Text>
				</Body>
			</Html>
		</Tailwind>
	);
}
