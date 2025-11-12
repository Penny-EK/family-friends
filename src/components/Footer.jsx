import { BiHomeAlt } from "react-icons/bi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex h-20 w-full justify-around rounded-4xl bg-white/20 backdrop-blur-lg">
      <BiHomeAlt size={28} color="#F2968F" />
      <FaRegStar size={28} color="#ACACAC" />
      <IoChatbubbleOutline size={28} color="#ACACAC" />
      <BsPerson size={28} color="#ACACAC" />
    </footer>
  );
};

export default Footer;
