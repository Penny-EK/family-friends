import Image from "next/image";
const FilterOption = () => {
  return (
    <article className="flex w-fit shrink-0 flex-row items-center gap-[9px] rounded-full border border-gray-300 p-2.5 pr-[25px]">
      <Image
        src="https://dummyjson.com/products"
        alt="Adoptable cat"
        width={32}
        height={32}
        loading="eager"
        className="h-8 w-8 rounded-full object-cover"
      />
      <p className="text-[#333333]/40">Katte</p>
    </article>
  );
};

export default FilterOption;
