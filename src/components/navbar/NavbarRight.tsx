import React from "react";
import { IoMenu } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { useNavbarStore } from "../../store";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const NavbarRight: React.FC = () => {
  const { openNavbar } = useNavbarStore();

  return (
    <div className="flex gap-3 items-center">
      {/* Call Button */}
      <Link to={"/contact-us"} className="border border-gray-800/20 bg-white hover:bg-OMblue/10 duration-300 rounded-full p-3 h-12 aspect-square flex items-center justify-center cursor-pointer">
        <MdCall color="black" />
      </Link>


      {/* Login Button */}
      <Link to={"/login"}>
      <Button title="LOGIN" className="md:flex hidden" />
      </Link>
      {/* Mobile Menu Button */}
      <button
        onClick={openNavbar}
        className="lg:hidden flex items-center justify-center bg-gradient-to-br from-OMblue/60 to-OMblue hover:bg-OMblue/80 duration-300 h-12 aspect-square rounded-md text-white"
      >
        <IoMenu size={25} />
      </button>
    </div>
  );
};

export default NavbarRight;