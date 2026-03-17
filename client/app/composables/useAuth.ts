import type {
  RegisterPayload,
  LoginPayload,
  ResetPasswordPayload,
  NewPasswordPayload,
  ConfirmationPayload,
  AuthResponse,
  OAuthConnectResponse,
  ApiError,
} from '@auth/types';

export const useAuth = () => {
	const toast = useToast();
	const config = useRuntimeConfig();
	const baseURL = config.public.apiBase;
	const userStore = useUserStore();

	const handleError = (error: any, options?: { silent?: boolean }): ApiError => {
		if (error.data) {
			if (!options?.silent) {
				toast.add({
					title: 'Error',
					description: error.data.message || 'An error occurred',
					color: 'error',
				});
			}
			return {
				message: error.data.message || 'An error occurred',
				statusCode: error.statusCode || 500,
			};
		}
		return {
			message: error.message || 'An error occurred',
			statusCode: 500,
		};
	};

	const register = async (payload: RegisterPayload) => {
		try {
			const data = await $fetch<AuthResponse>(`${baseURL}/auth/register`, {
				method: 'POST',
				body: payload,
				credentials: 'include',
			});
			// if (data?.user) {
			// 	useState<{ isAuthenticated: boolean }>('auth').value = {
			// 		isAuthenticated: true,
			// 	};
			// }
			return { data, error: null };
		} catch (error: any) {
			return { data: null, error: handleError(error) };
		}
	};

	const login = async (payload: LoginPayload) => {
		try {
			const data = await $fetch<AuthResponse>(`${baseURL}/auth/login`, {
				method: 'POST',
				body: payload,
				credentials: 'include',
			});
			useState<{ isAuthenticated: boolean }>('auth').value = {
				isAuthenticated: true,
			};
			return { data, error: null };
		} catch (error: any) {
			const apiError = handleError(error, { silent: error.data?.message === 'Email not verified' });
			return { data: null, error: apiError };
		}
	};

	const logout = async () => {
		try {
			await $fetch(`${baseURL}/auth/logout`, {
				method: 'POST',
				credentials: 'include',
			});
			useState<{ isAuthenticated: boolean }>('auth').value = {
				isAuthenticated: false,
			};
			userStore.clearProfile();
			await navigateTo('/login');
			return { error: null };
		} catch (error: any) {
			return { error: handleError(error) };
		}
	};

	const resetPassword = async (payload: ResetPasswordPayload) => {
		try {
			const data = await $fetch<{ message: string }>(
				`${baseURL}/auth/password-recovery/reset`,
				{
					method: 'POST',
					body: payload,
					credentials: 'include',
				},
			);

			return { data, error: null };
		} catch (error: any) {
			return { data: null, error: handleError(error) };
		}
	};

	const newPassword = async (token: string, payload: NewPasswordPayload) => {
		try {
			const data = await $fetch<{ message: string }>(
				`${baseURL}/auth/password-recovery/new/${token}`,
				{
					method: 'POST',
					body: payload,
					credentials: 'include',
				},
			);

			return { data, error: null };
		} catch (error: any) {
			return { data: null, error: handleError(error) };
		}
	};

	const confirmEmail = async (payload: ConfirmationPayload) => {
		try {
			const data = await $fetch<AuthResponse>(
				`${baseURL}/auth/email-confirmation`,
				{
					method: 'POST',
					body: payload,
					credentials: 'include',
				},
			);
			if (data?.user) {
				useState<{ isAuthenticated: boolean }>('auth').value = {
					isAuthenticated: true,
				};
			}
			return { data, error: null };
		} catch (error: any) {
			return { data: null, error: handleError(error) };
		}
	};

	const getOAuthUrl = async (provider: 'google' | 'github' | 'facebook') => {
		try {
			const data = await $fetch<OAuthConnectResponse>(
				`${baseURL}/auth/oauth/connect/${provider}`,
				{
					method: 'GET',
					credentials: 'include',
				},
			);

			return { data, error: null };
		} catch (error: any) {
			return { data: null, error: handleError(error) };
		}
	};

	const connectOAuth = async (provider: 'google' | 'github' | 'facebook') => {
		const { data, error } = await getOAuthUrl(provider);

		if (error || !data?.url) {
			return {
				error: error || { message: 'Failed to get OAuth URL', statusCode: 500 },
			};
		}

		window.location.href = data.url;
		return { error: null };
	};

	return {
		register,
		login,
		logout,
		resetPassword,
		newPassword,
		confirmEmail,
		getOAuthUrl,
		connectOAuth,
	};
};
