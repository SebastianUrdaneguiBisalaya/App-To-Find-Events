interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 font-semibold text-white bg-[#761CBC] rounded-[10px] hover:bg-[#0DCDAA] font-poppins ${className}`}
    >
      {text}
    </button>
  );
};
