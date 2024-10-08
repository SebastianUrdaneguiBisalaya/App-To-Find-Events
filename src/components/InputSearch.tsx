import React, { useState } from "react";

export const InputSearch = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(startDate, endDate, searchQuery);
  };
  return (
    <div className="w-full max-w-3xl mx-auto">
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row items-center gap-2 p-2 bg-white sm:rounded-full rounded-2xl shadow-lg"
      >
        <div className="w-full sm:w-auto">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full sm:w-[10rem] px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus_ring-2 focus:ring-primary text-sm"
            placeholder="Fecha inicio"
          />
        </div>
        <div className="w-full sm:w-auto">
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full sm:w-[10rem] px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus_ring-2 focus:ring-primary text-sm"
            placeholder="Fecha fin"
          />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
    </div>
  );
};
