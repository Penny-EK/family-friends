import Link from "next/link";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const AdoptCard = () => {
  return (
    <article className="h-fit w-40 rounded-2xl bg-white shadow-[0_4px_16px_0_rgba(19,21,68,0.06)]">
      {/* link */}
      <Link href="/details">
        <div className="grid grid-cols-1 grid-rows-1">
          {/* img */}
          <Image
            src="https://cataas.com/cat"
            alt="Adoptable cat"
            width={160}
            height={114}
            loading="eager"
            className="col-[1/2] row-[1/2] h-[114px] w-40 rounded-2xl object-cover"
          />
          <button
            onClick={console.log("fav")}
            className="col-[1/2] row-[1/2] m-2 self-start justify-self-end rounded-full bg-[#FEFEFE]/40 p-1"
          >
            <FaRegStar className="self-center justify-self-center" />
          </button>
        </div>
        {/* information */}
        <div className="grid grid-cols-2 px-2.5 pt-2 pb-4">
          {/* name */}
          <h2 className="text-[15px] font-bold text-[#333333] capitalize">
            harry
          </h2>
          {/* age */}
          <h3 className="self-end justify-self-end text-[12px] text-[#ADADAD] capitalize">
            Young
          </h3>
          {/* race */}
          <h3 className="h-7 w-20 justify-start font-['Manrope'] text-xs leading-4 font-medium text-zinc-800 capitalize opacity-40">
            Yorkshire Terrier
          </h3>
        </div>
      </Link>
    </article>
  );
};

export default AdoptCard;
