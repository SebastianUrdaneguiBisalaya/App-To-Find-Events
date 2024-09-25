import React, { useState } from "react";
import { ToggleSwitch } from "./ToggleSwitch";

interface ToggleSwitchFieldProps {
  label: string;
}

export const ToggleSwitchField: React.FC<ToggleSwitchFieldProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="mb-4 flex items-center justify-between">
      <span className="font-poppins font-normal text-base black">{label}</span>
      <ToggleSwitch
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
    </div>
  );
};
