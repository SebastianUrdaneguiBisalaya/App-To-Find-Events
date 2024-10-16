import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import * as AuthService from "../services/AuthService";
import { AuthState } from "../types/Authentication/AuthStore.types";
import { LoginRequest, SignUpRequest } from "../types/Authentication/AuthService.types";

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set, get) => ({
        isAuthenticated: false,
        rememberedEmail: null,
        token: null,
        error: null,
        login: async (params: LoginRequest) => {
          const { email, password } = params;
          try {
            const response = await AuthService.login(email, password);
            set({ isAuthenticated: true, token: response.data.accessToken });
          } catch (e) {
            if (e instanceof Error) {
              set({ error: e.message });
            }
          }
        },
        signUp: async (params: SignUpRequest) => {
          try {
            await AuthService.signUp(params);
            // Activar la autenticación aquí si es necesario
            // set({ isAuthenticated: true });
          } catch (e) {
            if (e instanceof Error) {
              set({ error: e.message });
            }
          }
        },
        logout: async () => {
          await AuthService.logout();
          set({ isAuthenticated: false, token: null });
        },
        setRememberedEmail: (email: string | null) => set({ rememberedEmail: email }),
        getRememberedEmail: () => get().rememberedEmail,
      }),
      {
        name: "auth-storage",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
