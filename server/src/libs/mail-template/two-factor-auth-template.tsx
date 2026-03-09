import { Body, Heading, Tailwind, Text } from '@react-email/components';
import { Html } from '@react-email/html';
import * as React from 'react';

interface TwoFactorAuthTemplateProps {
	token: string;
}

export function TwoFactorAuthTemplate({ token }: TwoFactorAuthTemplateProps) {
	return (
		<Tailwind>
			<Html>
				<Body className="text-black">
					<Heading>Two-factor authentication</Heading>
					<Text>
						Your two-factor authentication code is: <strong>{token}</strong>
					</Text>
					<Text>Please enter this code to verify your authentication.</Text>
					<Text>This link will expire in 1 hour.</Text>
				</Body>
			</Html>
		</Tailwind>
	);
};