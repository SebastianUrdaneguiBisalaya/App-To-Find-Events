import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  startDate: string;
  endDate: string;
  searchQuery: string;
};

type InputSearchProps = {
  onSearch: (startDate: string, endDate: string, searchQuery: string) => void;
};

export const InputSearch: React.FC<InputSearchProps> = ({ onSearch }) => {
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      startDate: "",
      endDate: "",
      searchQuery: "",
    },
  });
  const startDate = watch("startDate");
  const endDate = watch("endDate");

  const validateDates = () => {
    if ((startDate && !endDate) || (!startDate && endDate)) {
      return "Debes ingresar ambas fechas o ninguna";
    }
    return true;
  };

  // const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   onSearch(startDate, endDate, searchQuery);
  // };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    onSearch(data.startDate, data.endDate, data.searchQuery);
  };
  return (
    <div className="w-full max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row items-end gap-2 py-2 px-4 bg-white sm:rounded-full rounded-2xl shadow-lg"
      >
        <div className="w-full sm:w-auto">
          <label
            htmlFor="date-start"
            className="text-[0.7rem]"
          >
            Desde:
          </label>
          <input
            id="date-start"
            type="date"
            value={startDate}
            // onChange={(e) => setStartDate(e.target.value)}
            {...register("startDate", { validate: validateDates })}
            className="w-full sm:w-[10rem] px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus_ring-2 focus:ring-primary text-sm"
            placeholder="Fecha inicio"
          />
        </div>
        <div className="w-full sm:w-auto">
          <label
            htmlFor="date-end"
            className="text-[0.7rem]"
          >
            Hasta:
          </label>
          <input
            id="date-end"
            type="date"
            value={endDate}
            // onChange={(e) => setEndDate(e.target.value)}
            {...register("endDate", { validate: validateDates })}
            className="w-full sm:w-[10rem] px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus_ring-2 focus:ring-primary text-sm"
            placeholder="Fecha fin"
          />
        </div>
        <input
          type="text"
          // onChange={(e) => setSearchQuery(e.target.value)}
          {...register("searchQuery")}
          placeholder="Buscar eventos"
          className="w-full sm:flex-grow px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="sr-only">Buscar</span>
        </button>
      </form>
      {errors.startDate && <p className="text-red-500 text-[0.7rem] text-center mt-1">{errors.startDate.message}</p>}
    </div>
  );
};
