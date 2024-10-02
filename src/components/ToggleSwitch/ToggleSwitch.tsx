import { useState } from "react";

export const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className=" relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <div className={`block w-10 h-6 rounded-full ${isChecked ? "bg-secondary" : "bg-gray-300"}`}></div>
      <div
        className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${isChecked ? "transform translate-x-4" : ""}`}
      ></div>
    </label>
  );
};
