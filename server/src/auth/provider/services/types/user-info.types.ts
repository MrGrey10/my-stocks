export type UserInfo = {
	id: string;
	email: string;
	name: string;
	displayName: string;
	picture: string;
	access_token?: string | null;
	refresh_token?: string | null;
	expires_at?: number | null;
	provider: string;
}