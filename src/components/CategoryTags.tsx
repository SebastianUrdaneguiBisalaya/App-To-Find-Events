const categoryColors: Record<string, string> = {
  Concierto: "bg-blue-100",
  Fiesta: "bg-green-100",
  Teatro: "bg-red-100",
  Ballet: "bg-purple-100",
  Otros: "bg-yellow-100",
};

interface CategoryTagsProps {
  category: string;
}

export const CategoryTags: React.FC<CategoryTagsProps> = ({ category }) => {
  const bgColor = categoryColors[category] || "bg-gray-300";

  return (
    <span className={`inline-block mx-1 px-3 py-1 rounded-lg font-poppins font-normal text-xs ${bgColor}`}>
      {category}
    </span>
  );
};
