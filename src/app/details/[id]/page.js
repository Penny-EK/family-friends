import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { Suspense } from "react";

import InfoCard from "@/components/InfoCard";

const details = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return (
    <Suspense>
      <div className="grid grid-cols-1 grid-rows-1 rounded-4xl bg-[#EABC4E]">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={339}
          height={360}
          loading="eager"
          className="col-[1/2] row-[1/2] h-[360px] w-[339px] rounded-4xl object-cover"
        />
        <button className="col-[1/2] row-[1/2] m-6 self-start justify-self-end rounded-full bg-[#FEFEFE]/40 p-1">
          <FaRegStar
            className="self-center justify-self-center"
            color="#ffff"
          />
        </button>

        <Link
          href="/"
          className="col-[1/2] row-[1/2] m-6 self-start justify-self-start rounded-full bg-[#F8F8F8] p-1"
        >
          <IoIosArrowBack
            className="h-[18] w-[18px] self-center justify-self-center"
            width={18}
            height={18}
          />
        </Link>
        <div className="col-[1/2] row-[1/2] m-6 inline-flex items-start justify-start gap-2 self-end justify-self-start rounded-2xl bg-white/20 py-2 pr-4 pl-2 backdrop-blur-lg">
          <Image
            src={product.images[0]}
            alt={product.title}
            width={32}
            height={32}
            loading="eager"
            className="col-[1/2] row-[1/3] h-8 w-8 rounded-lg object-cover"
          />
          <p className="w-20 justify-start text-center text-xs leading-4 font-medium text-white/90">
            Baton Rouge
          </p>
        </div>
      </div>
      <h1 className="my-3 justify-start text-3xl leading-8 font-bold text-zinc-800">
        {product.title}
      </h1>
      <div className="my-4 flex gap-2">
        {product.tags?.map((tag, index) => (
          <InfoCard key={index} tag={tag} />
        ))}
      </div>
      <div className="h-24 w-80 justify-start text-base leading-6 font-medium text-zinc-800 opacity-75">
        {product.description}
      </div>
      <div className="my-6 justify-start text-xs leading-5 font-medium text-zinc-800 opacity-50">
        Rating: {product.rating}★
      </div>
      <div className="my-2 inline-flex w-full items-center justify-center gap-2.5 rounded-[60px] bg-red-300 px-2.5 py-4">
        <div className="justify-start">
          <span className="text-base leading-6 font-bold text-white">BUY</span>
          <span className="mx-[5px] text-base leading-6 font-medium text-white">
            {product.title}
          </span>
        </div>
      </div>
    </Suspense>
  );
};

export default details;
