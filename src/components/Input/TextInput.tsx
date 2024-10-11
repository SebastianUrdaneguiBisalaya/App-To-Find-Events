import React, { InputHTMLAttributes } from "react";
import { Label } from "../Label/Label";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  name: string;
  type?: "text" | "email";
}

export const TextInput: React.FC<TextInputProps> = ({ label, placeholder, name, type = "text", ...customProps }) => {
  return (
    <div className="md:w-[20rem] max-w-[20rem]">
      <Label htmlFor={name}>{label}</Label>
      <input
        className="font-poppins font-normal text-base placeholder:text-base w-full px-2 py-1 border-b outline-none focus:ring-0 focus:border-primary"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...customProps}
      />
    </div>
  );
};
