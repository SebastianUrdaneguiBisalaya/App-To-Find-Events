import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextInput } from "../components";
import { useAuthStore } from "../store/AuthStore";
import { SignUpFormFields, SignUpSchema } from "../schema/SignUp.schema";

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { signUp, isAuthenticated } = useAuthStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormFields>({
    resolver: zodResolver(SignUpSchema),
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });

  const onSubmit: SubmitHandler<SignUpFormFields> = async (data) => {
    try {
      setIsLoading(true);
      const { response } = await signUp(data);
      if (response?.error) {
        setError(response.error.message);
      }
      navigate("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-[1500px] min-h-screen flex flex-col items-center justify-center m-auto md:gap-8 md:p-4">
      <div className="w-full lg:w-[1000px]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 items-center justify-center">
          <div>
            <div className="w-full lg:w-[1000px] hidden md:block mb-4">
              <h1 className="text-primary font-bold text-3xl">ExploreQ</h1>
            </div>
            <img
              src="https://res.cloudinary.com/drzumfcdp/image/upload/v1732673008/Frame_tayo1k.png"
              alt="Celebration illustration"
              className="max-h-[26.6rem] w-full hidden md:block"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="black font-bold text-3xl md:text-center text-left mb-4">Crear Cuenta</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 md:gap-4"
            >
              <TextInput
                label="Apellidos"
                placeholder="Ingresa los apellidos completos"
                type="text"
                {...register("lastName")}
                error={errors.lastName?.message}
              />
              <TextInput
                label="Nombres"
                placeholder="Ingresa los nombres completos"
                type="text"
                {...register("firstName")}
                error={errors.firstName?.message}
              />
              <TextInput
                label="Correo Electrónico"
                placeholder="name@example.com"
                type="email"
                {...register("email")}
                error={errors.email?.message}
              />
              <TextInput
                label="Crear Contraseña"
                placeholder="Ingresa tu contraseña"
                {...register("password")}
                error={errors.password?.message}
              />
              <TextInput
                label="Repetir Contraseña"
                placeholder="Confirmar contraseña"
                {...register("confirmPassword")}
                error={errors.confirmPassword?.message}
              />
              {error && <span className="text-red-500 text-sm text-center">{error}</span>}
              <Button
                text={isLoading ? "Cargando..." : "Regístrate"}
                type="submit"
                className="mt-2 font-semibold text-base w-[20rem]"
              />
            </form>
            <div className="mt-2 text-center">
              <Link
                className="text-base font-medium hover:text-primary"
                to={"/login"}
              >
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
