import React from "react";
import { Label } from "../Label/Label";

interface TextInputProps {
  label: string;
  placeholder: string;
  name: string;
  type?: "text" | "email";
  required?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({ label, placeholder, name, type = "text", required = false }) => {
  return (
    <div className="md:w-[22rem] max-w[22rem]">
      <Label
        htmlFor={name}
        required={required}
      >
        {label}
      </Label>
      <input
        className="font-poppins font-normal text-base placeholder:text-base w-full px-2 py-1 border-b outline-none focus:ring-0 focus:border-primary"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
