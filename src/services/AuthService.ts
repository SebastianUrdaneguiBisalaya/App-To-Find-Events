import {
  LoginRequest,
  LoginResponse,
  ResponseApi,
  SignUpRequest,
  SignUpResponse,
} from "../types/Authentication/AuthService.types";
import { fetchDataPost } from "./FetchData";

export const login = async (params: LoginRequest, signal?: AbortSignal): Promise<ResponseApi<LoginResponse>> => {
  const response = await fetchDataPost({
    baseUrl: `${import.meta.env.VITE_API_LOGIN}`,
    signal,
    options: {
      method: "POST",
      body: JSON.stringify(params),
      credentials: "include",
    },
  });
  console.log(response);
  return response;
};

export const logout = async (): Promise<ResponseApi<LoginResponse>> => {
  const response = await fetchDataPost({
    baseUrl: `${import.meta.env.VITE_API_LOGOUT}`,
    options: {
      method: "POST",
      credentials: "include",
    },
  });
  return response;
};

export const signUp = async (params: SignUpRequest, signal?: AbortSignal): Promise<ResponseApi<SignUpResponse>> => {
  const response = await fetchDataPost({
    baseUrl: `${import.meta.env.VITE_API_SIGNUP}`,
    signal,
    options: {
      method: "POST",
      body: JSON.stringify(params),
    },
  });
  return response;
};
