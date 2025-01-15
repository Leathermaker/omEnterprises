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
      name: "About Us",
      link: "/about",
    },
    {
      name: "Product & Services",
      link: "/contact",
    },
    {
      name: "Plan & Pricing",
      link: "/blog",
    },
    {
      name: "Blog",
      link: "/shop",
    },
  ];
  return (
    <div className="flex items-center justify-center gap-4 ">
      {menus.map((menu, index) => (
        <Link to={menu.link} key={`MENU_${index}`} className=" cursor-pointer ">
          <h1
            className={`font-semibold text-black/80 text-lg hover:text-OMblue ${
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
