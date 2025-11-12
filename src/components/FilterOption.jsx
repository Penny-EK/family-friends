"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
const FilterOption = ({ category, isSelected }) => {
  const router = useRouter();
  return (
    <div
      className={`flex w-fit shrink-0 cursor-pointer flex-row items-center gap-[9px] rounded-full border p-2.5 pr-[25px] transition-all ${
        isSelected
          ? "border-[#F2968F] bg-[#F2968F] shadow-md"
          : "border-gray-300 bg-white"
      }`}
      onClick={() => router.push(`?category=${category.slug}`)}
    >
      <div className="h-8 w-8 rounded-full bg-[#F2968F] object-cover"></div>
      <p
        className={isSelected ? "font-medium text-white" : "text-[#333333]/40"}
      >
        {category.name}
      </p>
    </div>
  );
};

export default FilterOption;
