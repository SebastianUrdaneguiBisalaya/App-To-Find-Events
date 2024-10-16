import React from "react";
import { ToggleSwitch } from "./ToggleSwitch";
import { Control, useController } from "react-hook-form";

interface ToggleSwitchFieldProps {
  label: string;
  name: string;
  control: Control<any>;
}

export const ToggleSwitchField: React.FC<ToggleSwitchFieldProps> = ({ label, name, control }) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    defaultValue: false,
  });

  return (
    <div className="md:w-[20rem] max-w-[20rem] flex items-center justify-between">
      <span className="font-poppins font-normal text-base black">{label}</span>
      <ToggleSwitch
        checked={value}
        onChange={onChange}
      />
    </div>
  );
};
