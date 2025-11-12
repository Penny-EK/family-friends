// import AdoptCard from "./AdoptCard";
import Link from "next/link";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { Suspense } from "react";

const PetList = ({ category }) => {
  return (
    <Suspense>
      <FetchProducts category={category} />
    </Suspense>
  );
};

const FetchProducts = async ({ category }) => {
  "use server";
  console.log(category);
  const colors = [
    "#f5d0c7",
    "#ec8b84",
    "#efa9b3",
    "#ebbd59",
    "#bbedec",
    "#a2cf8a",
  ];
  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : "https://dummyjson.com/products";
  const response = await fetch(url);
  const { products } = await response.json();
  return products.map((product) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
      <Link
        href={`/details/${product.id}`}
        className="h-fit w-40 rounded-2xl bg-white shadow-[0_4px_16px_0_rgba(19,21,68,0.06)]"
        key={product.id}
      >
        <div
          className="grid grid-cols-1 grid-rows-1 rounded-2xl"
          style={{ backgroundColor: randomColor }}
        >
          <Image
            src={product.images[0]}
            alt={product.title}
            width={160}
            height={114}
            loading="eager"
            className="col-[1/2] row-[1/2] h-[114px] w-40 rounded-2xl object-cover"
          />
          <button className="col-[1/2] row-[1/2] m-2 self-start justify-self-end rounded-full bg-[#FEFEFE]/40 p-1">
            <FaRegStar
              className="self-center justify-self-center"
              color="#ffff"
            />
          </button>
        </div>
        <div className="grid grid-cols-2 px-2.5 pt-2 pb-4">
          <h2 className="text-[15px] font-bold text-[#333333] capitalize">
            {product.title}
          </h2>
          <h3 className="self-end justify-self-end text-[12px] text-[#ADADAD] capitalize">
            {product.price},-
          </h3>

          <h3 className="justify-start text-xs leading-4 font-medium text-zinc-800 capitalize opacity-40">
            {product.brand ? product.brand : "Unknown Brand"}
          </h3>
        </div>
      </Link>
    );
  });
};

export default PetList;
