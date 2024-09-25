import React from "react";
import { Label } from "../Label/Label";

interface TextInputProps {
  label: string;
  placeholder: string;
  name: string;
  type?: "text" | "email";
}

export const TextInput: React.FC<TextInputProps> = ({ label, placeholder, name, type = "text" }) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <input
        className="font-poppins font-normal text-base placeholder:text-base w-full px-2 py-2 border-b outline-none focus:ring-0 focus:border-primary-color"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
