interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-[10vw] py-[1.5vw] font-semibold text-white bg-[#761CBC] rounded-[10px] hover:bg-[#0DCDAA] font-poppins"
    >
      {text}
    </button>
  );
};
