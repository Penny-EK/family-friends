import { Suspense } from "react";
import FilterOption from "./FilterOption";

const FilterContainer = ({ selectedCategory }) => {
  return (
    <Suspense>
      <FetchCategories selectedCategory={selectedCategory} />
    </Suspense>
  );
};

const FetchCategories = async ({ selectedCategory }) => {
  "use server";
  const response = await fetch("https://dummyjson.com/products/categories");
  const categories = await response.json();
  return categories.map((category) => (
    <FilterOption
      key={category.slug}
      category={category}
      isSelected={selectedCategory === category.slug}
    />
  ));
};
export default FilterContainer;
