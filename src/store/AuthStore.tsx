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
        user: null,
        userId: null,
        login: async (params: LoginRequest) => {
          const controller = new AbortController();
          const response = await AuthService.login(params, controller.signal);
          if (response.error) {
            set({ user: null, isAuthenticated: false });
          }
          set({ isAuthenticated: true, user: response.data });
          return {
            response,
            abort: () => controller.abort(),
          };
        },
        signUp: async (params: SignUpRequest) => {
          const controller = new AbortController();
          const response = await AuthService.signUp(params, controller.signal);
          if (response.error) {
            set({ user: null, isAuthenticated: false });
          }
          set({ isAuthenticated: true, user: response.data });
          return {
            response,
            abort: () => controller.abort(),
          };
        },

        logout: async () => {
          await AuthService.logout();
          set({ isAuthenticated: false, user: null });
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
