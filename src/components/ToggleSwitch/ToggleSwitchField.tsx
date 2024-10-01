import React  from "react";
import { ToggleSwitch } from "./ToggleSwitch";

interface ToggleSwitchFieldProps {
  label: string;
}

export const ToggleSwitchField: React.FC<ToggleSwitchFieldProps> = ({ label }) => {
  return (
    <div className="md:w-[22rem] max-w[22rem] flex items-center justify-between">
      <span className="font-poppins font-normal text-base black">{label}</span>
      <ToggleSwitch />
    </div>
  );
};
