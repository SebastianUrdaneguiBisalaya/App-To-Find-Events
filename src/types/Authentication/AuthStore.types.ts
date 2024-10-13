import { LoginRequest, SignUpRequest } from "./AuthService.types";

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  error: string | null;
  rememberedEmail: string | null;
  login: (params: LoginRequest) => Promise<void>;
  signUp: (params: SignUpRequest) => Promise<void>;
  logout: () => void;
  getRememberedEmail: () => string | null;
  setRememberedEmail: (email: string | null) => void;
}
