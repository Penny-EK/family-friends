import Image from "next/image";
import { Suspense } from "react";

const FilterOptions = () => {
  return (
    <Suspense>
      <FetchCategories />
    </Suspense>
  );
};

const FetchCategories = async () => {
  const response = await fetch("https://dummyjson.com/products/categories");
  const categories = await response.json();
  return categories.map((category) => (
    <article
      key={category.slug}
      className="flex w-fit shrink-0 flex-row items-center gap-[9px] rounded-full border border-gray-300 p-2.5 pr-[25px]"
    >
      <Image
        src="https://dummyjson.com/products"
        alt="Missing picture"
        width={32}
        height={32}
        loading="eager"
        className="h-8 w-8 rounded-full object-cover"
      />
      <p className="text-[#333333]/40">{category.name}</p>
    </article>
  ));
};
export default FilterOptions;
