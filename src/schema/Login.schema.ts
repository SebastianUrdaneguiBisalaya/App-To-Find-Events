import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Debe ser un correo válido"),
  password: z.string().min(1, "El password es requerido"),
  rememberMe: z.boolean(),
});

export type LoginFormFields = z.infer<typeof LoginSchema>;
