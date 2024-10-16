import { z } from "zod";

export const SignUpSchema = z
  .object({
    firstName: z.string().min(1, "El nombre es requerido").max(50, "Máximo 50 caracteres"),
    lastName: z.string().min(1, "El apellido es requerido").max(50, "Máximo 50 caracteres"),
    email: z.string().email("Debe ser un correo válido"),
    password: z.string().min(6, "Mínimo 6 caracteres").max(12, "Máximo 12 caracteres"),
    confirmPassword: z.string().min(6, "Mínimo 6 caracteres").max(12, "Máximo 12 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type SignUpFormFields = z.infer<typeof SignUpSchema>;
