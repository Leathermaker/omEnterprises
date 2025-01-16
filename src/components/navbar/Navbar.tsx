import React from "react";
import logo from "../../assets/logo.png";
import Navmenu from "./Navmenu";
import NavbarRight from "./NavbarRight";
import XpaddingWrapper from "../XpaddingWrapper";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="bg-OMlightBlue py-3 ">
      <XpaddingWrapper className="flex  items-center justify-between w-full">
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="w-16" />
        </Link>
        <div className="md:block hidden">
          <Navmenu />
        </div>
        <NavbarRight />
      </XpaddingWrapper>
    </div>
  );
};

export default Navbar;
