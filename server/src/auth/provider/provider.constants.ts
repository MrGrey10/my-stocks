import { FactoryProvider, ModuleMetadata } from '@nestjs/common';
import { BaseOauthService } from './services/base-oauth.service';

export const ProviderOptionsSymbol = Symbol('');

export type ProviderOptions = {
	baseUrl: string;
	services: BaseOauthService[];
}

export type ProviderAsyncOptions = Pick<ModuleMetadata, 'imports'> & Pick<FactoryProvider<ProviderOptions>, 'useFactory' | 'inject'>