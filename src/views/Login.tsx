import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, PasswordInput, TextInput, ToggleSwitchField } from "../components";
import { useAuthStore } from "../store/AuthStore";
import { LoginFormFields, LoginSchema } from "../schema/Login.schema";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const { login, getRememberedEmail, setRememberedEmail, isAuthenticated } = useAuthStore((state) => state);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<LoginFormFields>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });

  useEffect(() => {
    const rememberedEmail = getRememberedEmail();
    if (rememberedEmail) {
      setValue("email", rememberedEmail);
      setValue("rememberMe", true);
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
    try {
      const { response } = await login({ email: data.email, password: data.password });
      if (response?.error) {
        setError(response.error.message);
      }
      if (response?.data) {
        if (data.rememberMe) {
          setRememberedEmail(data.email);
        } else {
          setRememberedEmail(null);
        }
      }
    } catch (err: any) {
      setError(err.message);
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
              src="./src/assets/celebration.png"
              alt="Celebration illustration"
              className="max-h-[26.6rem] w-full hidden md:block"
            />
          </div>
          <div className="md:flex-1 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center ">
              <h2 className="black font-bold text-3xl">Bienvenido</h2>
              <h2 className="text-primary font-medium text-lg md:text-xl mt-2 md:mb-6">
                Encuentra el evento perfecto para ti
              </h2>
              <img
                src="./src/assets/celebration.svg"
                alt="Celebration illustration"
                className=" mi-w-[15rem] min-h-[14rem] w-[15rem] h-[14rem] sm:w-[20rem] sm:h-[18rem] md:hidden"
              />
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-8 md:gap-6"
              >
                <TextInput
                  label="Correo Electrónico"
                  placeholder="name@example.com"
                  type="email"
                  {...register("email")}
                  error={errors.email?.message}
                />
                <PasswordInput
                  label="Contraseña"
                  placeholder="Ingresa tu contraseña"
                  {...register("password")}
                  error={errors.password?.message}
                />
                <ToggleSwitchField
                  label="Recuérdame"
                  name="rememberMe"
                  control={control}
                />
                {error && <span className="text-red-500 text-sm text-center">{error}</span>}
                <Button
                  text="Iniciar sesión"
                  type="submit"
                  className="mt-2 font-semibold text-base w-[20rem]"
                />
              </form>

              <div className="mt-4 text-center">
                <p className="text-base font-normal">¿Aún no tienes una cuenta? </p>
                <Link
                  className="text-base font-medium hover:text-primary"
                  to={"/signup"}
                >
                  Regístrate aquí
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
