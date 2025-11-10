import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

import InfoCard from "@/components/InfoCard";

const details = () => {
  return (
    <>
      {/* hero */}
      <div className="grid grid-cols-1 grid-rows-1">
        {/* img */}
        <Image
          src="https://cataas.com/cat"
          alt="Adoptable cat"
          width={339}
          height={360}
          loading="eager"
          className="col-[1/2] row-[1/2] h-[360px] w-[339px] rounded-4xl object-cover"
        />
        <button
          onClick={console.log("fav")}
          className="col-[1/2] row-[1/2] m-6 self-start justify-self-end rounded-full bg-[#FEFEFE]/40 p-1"
        >
          <FaRegStar className="self-center justify-self-center" />
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
            src="https://cataas.com/cat"
            alt="Adoptable cat"
            width={32}
            height={32}
            loading="eager"
            className="col-[1/2] row-[1/3] h-8 w-8 rounded-lg object-cover"
          />
          <p className="w-20 justify-start text-center font-['Manrope'] text-xs leading-4 font-medium text-white/90">
            Baton Rouge
          </p>
        </div>
      </div>
      {/* information */}
      <h1 className="my-3 justify-start font-['Manrope'] text-3xl leading-8 font-bold text-zinc-800">
        Samojed Willie
      </h1>
      <div className="my-4 flex gap-2">
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
      <div className="h-24 w-80 justify-start font-['Manrope'] text-base leading-6 font-medium text-zinc-800 opacity-75">
        Den venligste Samojed, vi nogensinde har mødt. Elsker at lege med bolde
        og er venlig over for andre dyr. På trods af sin hvide pels elsker den
        regn og vandpytter. <br />
      </div>
      <div className="justify-start font-['Manrope'] text-xs leading-5 font-medium text-zinc-800 opacity-50">
        Opdateret den 13. juli.
      </div>
      <div className="my-2 inline-flex w-full items-center justify-center gap-2.5 rounded-[60px] bg-red-300 px-2.5 py-4">
        <div className="justify-start">
          <span className="font-['Manrope'] text-base leading-6 font-bold text-white">
            Adopter
          </span>
          <span className="font-['Manrope'] text-base leading-6 font-medium text-white">
            {" "}
            Samojed Willie
          </span>
        </div>
      </div>
    </>
  );
};

export default details;
