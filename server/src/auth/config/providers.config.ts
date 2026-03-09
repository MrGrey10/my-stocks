import { ConfigService } from '@nestjs/config';
import { ProviderOptions } from '../provider/provider.constants';
import { GoogleProvider } from '../provider/services/google-provider';

export const getProvidersConfig = async (configService: ConfigService): Promise<ProviderOptions> => ({
	baseUrl: configService.getOrThrow<string>('APPLICATION_URL'),
	services: [
		new GoogleProvider({
			client_id: configService.getOrThrow<string>('GOOGLE_CLIENT_ID'),
			client_secret: configService.getOrThrow<string>('GOOGLE_CLIENT_SECRET'),
			scopes: ['email', 'profile'],
		}),
	],
}); 