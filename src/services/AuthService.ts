import { LoginResponse, ResponseApi, SignUpRequest, SignUpResponse } from "../types/Authentication/AuthService.types";

// TO DELETE
const generateFakeJwt = (email: string) => {
  const header = { alg: "HS256", typ: "JWT" };
  const payload = { email, exp: Math.floor(Date.now() / 1000) + 60 * 60 };
  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(payload));
  return `${encodedHeader}.${encodedPayload}.fakeSignature`;
};

export const login = (email: string, password: string): Promise<ResponseApi<LoginResponse>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@admin.com" && password === "admin123") {
        const token = generateFakeJwt(email);
        resolve({ data: { accessToken: token, expireIn: 3600 }, status: 200 });
      } else {
        reject(new Error("Credenciales incorrectas"));
      }
    }, 1000);
  });
};

export const signUp = (params: SignUpRequest): Promise<ResponseApi<SignUpResponse>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { success: true }, status: 200 });
    }, 1000);
  });
};

export const logout = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, status: 200 });
    }, 1000);
  });
};
