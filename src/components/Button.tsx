interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: "submit" | "button";
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, className = "", type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-3 font-medium text-white bg-[#761CBC] rounded-[10px] hover:bg-[#0DCDAA] font-poppins ${className}`}
    >
      {text}
    </button>
  );
};
