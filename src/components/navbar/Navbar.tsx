import React from "react";
import logo from "../../assets/logo.png";
import Navmenu from "./Navmenu";
import NavbarRight from "./NavbarRight";
import XpaddingWrapper from "../XpaddingWrapper";

const Navbar: React.FC = () => {
  return (
    <div className="bg-OMlightBlue py-12 ">
        <XpaddingWrapper className="flex  items-center justify-between w-full">
        <img src={logo} alt="Logo" className="w-16" />
        <Navmenu />
        <NavbarRight />
    </XpaddingWrapper>
      </div>
  );
};

export default Navbar;
