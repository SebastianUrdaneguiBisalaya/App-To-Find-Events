import { API_BASE_URL } from "../constants/constants";
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
    baseUrl: `${API_BASE_URL}/auth/login`,
    signal,
    options: {
      method: "POST",
      body: JSON.stringify(params),
      credentials: "include",
    },
  });
  return response;
};

export const logout = async (): Promise<ResponseApi<LoginResponse>> => {
  const response = await fetchDataPost({
    baseUrl: `${API_BASE_URL}/auth/logout`,
    options: {
      method: "POST",
      credentials: "include",
    },
  });
  return response;
};

export const getUser = () => {
  const response = fetch(`${API_BASE_URL}/users/b232305e-777b-46c1-b5d1-180be250f462`, {
    credentials: "include",
  });
  return response;
};

export const signUp = async (params: SignUpRequest, signal?: AbortSignal): Promise<ResponseApi<SignUpResponse>> => {
  const response = await fetchDataPost({
    baseUrl: `${API_BASE_URL}/auth/sign-up`,
    signal,
    options: {
      method: "POST",
      body: JSON.stringify(params),
    },
  });
  return response;
};
