import React from "react";
import { IoMenu } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { useNavbarStore } from "../../store";
import Button from "../ui/Button";

const NavbarRight: React.FC = () => {
  const { openNavbar } = useNavbarStore();

  return (
    <div className="flex gap-3 items-center">
      {/* Call Button */}
      <div className="border border-gray-800/20 bg-white hover:bg-OMblue/10 duration-300 rounded-full p-3 h-12 aspect-square flex items-center justify-center cursor-pointer">
        <MdCall color="black" />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={openNavbar}
        className="md:hidden flex items-center justify-center bg-OMblue hover:bg-OMblue/80 duration-300 h-12 aspect-square rounded-md text-white"
      >
        <IoMenu size={25} />
      </button>

      {/* Login Button */}
      <Button title="LOGIN"  />
    </div>
  );
};

export default NavbarRight;