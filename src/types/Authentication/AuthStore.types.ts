import { LoginRequest, LoginResponse, ResponseApi, SignUpRequest, SignUpResponse } from "./AuthService.types";

export interface AuthState {
  isAuthenticated: boolean;
  user: Record<string, any> | null;
  rememberedEmail: string | null;
  userId: string | null;
  login: (params: LoginRequest) => Promise<{ response: ResponseApi<LoginResponse>; abort: () => void }>;
  signUp: (params: SignUpRequest) => Promise<{ response: ResponseApi<SignUpResponse>; abort: () => void }>;
  logout: () => void;
  getRememberedEmail: () => string | null;
  setRememberedEmail: (email: string | null) => void;
}
