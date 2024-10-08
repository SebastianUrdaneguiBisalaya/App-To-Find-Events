import React from "react";
import { Button, TextInput } from "../components";

export const SignUp: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-[1500px] min-h-screen flex flex-col items-center justify-center m-auto md:gap-8 md:p-4">
      <div className="w-full lg:w-[1000px] hidden md:block">
        <h1 className="text-primary font-bold text-3xl">ExploreQ</h1>
      </div>
      <div className="w-full lg:w-[1000px]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
          {/* Image section */}
          <div>
            <img
              src="./src/assets/celebration.png"
              alt="Celebration illustration"
              className="h-full w-full hidden md:block"
            />
          </div>
          {/* Form section */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="black font-bold text-3xl md:text-center text-left mb-4">Crear Cuenta</h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 md:gap-4"
            >
              <TextInput
                label="Apellidos"
                placeholder="Ingresa los apellidos completos"
                type="text"
                name="LastName"
              />
              <TextInput
                label="Nombres"
                placeholder="Ingresa los nombres completos"
                type="text"
                name="First Name"
              />
              <TextInput
                label="Correo Electrónico"
                placeholder="name@example.com"
                type="email"
                name="email"
              />
              <TextInput
                label="Crear Contraseña"
                name="password"
                placeholder="Ingresa tu contraseña"
              />
              <TextInput
                label="Repetir Contraseña"
                name="confirmPassword"
                placeholder="Confirmar contraseña"
              />
              <Button
                text="Regístrate"
                type="submit"
                className="mt-2 font-semibold text-base w-[20rem]"
              />
            </form>
            <div className="mt-2 text-center">
              <a
                href="#"
                className="text-base font-medium hover:text-primary"
              >
                Iniciar Sesion
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
