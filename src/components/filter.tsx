import React, { useState } from "react";

interface FilterProps {
  filters: string[];
}

const Filter = ({ filters }: FilterProps) => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  return (
    <div className="flex space-x-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4  rounded-xl font-semibold ${
            activeFilter === filter
              ? "bg-primary text-white"
              : "border-2 border-primary text-primary bg-white"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filter;
