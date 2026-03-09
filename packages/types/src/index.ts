export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

export interface LoginPayload {
  email: string;
  password: string;
  code?: string;
}

export interface ResetPasswordPayload {
  email: string;
}

export interface NewPasswordPayload {
  password: string;
  passwordRepeat: string;
}

export interface ConfirmationPayload {
  token: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
    picture?: string;
    verified: boolean;
    role: string;
  };
}

export interface OAuthConnectResponse {
  url: string;
}

export interface ApiError {
  message: string | string[];
  statusCode: number;
}
