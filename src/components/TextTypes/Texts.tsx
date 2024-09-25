type PropTitle = {
  text: string;
  type: "title" | "subtitle" | "body" | "secondary";
  color: string;
};

function styles(type: PropTitle["type"]) {
  switch (type) {
    case "title":
      return "font-bold text-[2rem]";
    case "subtitle":
      return "font-semibold text-3xl";
    case "body":
      return `font-normal text-lg`;
    case "secondary":
      return "font-normal text-sm";
  }
}

export const Texts = ({ text, type, color = "black" }: PropTitle): JSX.Element => {
  return (
    <h2
      className={`${styles(type)} font-poppins`}
      style={{ color: color }}
    >
      {text}
    </h2>
  );
};
