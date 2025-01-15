import React from "react";
import { MdCall } from "react-icons/md";

const NavbarRight: React.FC = () => {
  return (
    <div className=" flex gap-3">
      <div className="border border-gray-800/20 bg-white hover:bg-violet-300/80 duration-300 rounded-full p-3 h-12 aspect-square flex items-center justify-center ">
        <MdCall color="black" className=" " />
      </div>
      <button className="bg-OMblue hover:bg-OMblue/80 duration-300 px-12 py-2 rounded-md text-white">
        <h1> Login </h1>
      </button>
    </div>
  );
};

export default NavbarRight;
