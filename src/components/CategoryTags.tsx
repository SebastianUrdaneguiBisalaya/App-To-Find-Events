const categoryColors: Record<string, { normal: string; hover: string }> = {
  Concierto: { normal: "bg-blue-100", hover: "bg-blue-300" },
  Fiesta: { normal: "bg-green-100", hover: "bg-green-300" },
  Teatro: { normal: "bg-red-100", hover: "bg-red-300" },
  Ballet: { normal: "bg-purple-100", hover: "bg-purple-300" },
  Otros: { normal: "bg-yellow-100", hover: "bg-yellow-300" },
};

interface CategoryTagsProps {
  category: string;
  isSelected: boolean;
  onClick: (category: string) => void;
}

export const CategoryTags: React.FC<CategoryTagsProps> = ({ category, onClick, isSelected }) => {
  const { normal, hover } = categoryColors[category] || { normal: "bg-gray-300", hover: "bg-gray-300" };

  return (
    <button
      className={`inline-block mx-1 px-3 py-1 rounded-lg font-poppins font-normal text-sm cursor-pointer ${normal} ${isSelected && hover}`}
      onClick={() => onClick(category)}
    >
      {category}
    </button>
  );
};
