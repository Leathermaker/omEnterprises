import React from 'react'
import { useLocation } from 'react-router-dom';

const NavbarMobileMenu:React.FC = () => {

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
    <div>
      {
        menus.map((menu, index) =>

          <div 
          key={index} 
          className={`flex items-center justify-between py-4 border-b border-gray-200 ps-4 ${pathname === menu.link ? "border-b-OMblue" : "border-b-gray-200"}`}>
              <p>{menu.name}</p>
          </div>
        )
      }
    </div>
  )
}

export default NavbarMobileMenu
