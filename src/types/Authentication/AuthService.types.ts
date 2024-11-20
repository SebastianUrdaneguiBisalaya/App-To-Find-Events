export interface ErrorResponse {
  message: string;
}
export interface ResponseApi<T> {
  data?: T;
  error?: ErrorResponse;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  expireIn: number;
}

export interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignUpResponse {
  success: boolean;
}
