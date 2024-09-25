const categoryColors: Record<string, string> = {
  Concert: "bg-blue-100",
  Party: "bg-green-100",
  Theater: "bg-red-100",
  Bar: "bg-purple-100",
  Other: "bg-yellow-100",
};

interface CategoryTagsProps {
  category: string;
}

export const CategoryTags: React.FC<CategoryTagsProps> = ({ category }) => {
  const bgColor = categoryColors[category] || "bg-gray-300";

  return <span className={`inline-block px-3 py-1 rounded-lg ${bgColor}`}>{category}</span>;
};
