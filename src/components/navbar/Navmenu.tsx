import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navmenu: React.FC = () => {
  const { pathname } = useLocation();
  const menus = [
    {
      name: "Home",
      link: "/",
    },
   
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    
    {
      name: "Contact Us",
      link: "/contact-us",
    },
    {
      name: "Careers",
      link: "/careers",
    },
    {
      name: "Blog",
      link: "/blogs",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
  ];
  return (
    <div className="flex items-center justify-center gap-4 ">
      {menus.map((menu, index) => (
        <Link to={menu.link} key={`MENU_${index}`} className=" cursor-pointer ">
          <h1
            className={`font-semibold text-black/80 xl:text-lg text-sm hover:text-OMblue ${
              menu.link === pathname && "text-OMblue border-b-2 border-OMblue"
            }`}
          >
            {menu.name}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Navmenu;
