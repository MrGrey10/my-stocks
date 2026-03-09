export type BaseProviderOptions = {
	name: string;
	authorize_url: string;
	access_url: string;
	profile_url: string;
	client_id: string;
	client_secret: string;
	scopes: string[];
}