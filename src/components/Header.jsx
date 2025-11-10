import Image from "next/image";

import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <header className="flex w-full justify-between self-center justify-self-center py-4">
      <Image
        src="/FamilyFriends.svg"
        alt="Family Friends logo"
        width={120}
        height={22}
        loading="eager"
      />
      <IoMdNotificationsOutline size={28} />
    </header>
  );
};

export default Header;
