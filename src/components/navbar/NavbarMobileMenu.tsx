import { useNavbarStore } from '@/store';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const NavbarMobileMenu:React.FC = () => {
    const { pathname } = useLocation();
    const navigator = useNavigate();
    const {closeNavbar} = useNavbarStore();
    const [showServicesMenu, setShowServicesMenu] = useState(false);

    const menus = [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About Us",
        link: "/about-us",
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
        name: "Contact",
        link: "/contact-us",
      },
      {
        name: "Blog",
        link: "/blog",
      },
    ];

    const navigateToPage = (link:string, menuName?: string) => {
      if (menuName === "Services") {
        setShowServicesMenu(!showServicesMenu);
        return;
      }
      navigator(link);
      closeNavbar();
    }

    return (
      <div>
        {menus.map((menu, index) => (
          <React.Fragment key={index}>
            <div
              onClick={() => navigateToPage(menu.link, menu.name)}
              className={`flex items-center justify-between py-4 border-b border-gray-200 ps-4 ${pathname === menu.link ? "border-b-OMblue" : "border-b-gray-200"}`}
            >
              <p>{menu.name}</p>
              {menu.name === "Services" && (
                <span className="pr-4">
                  {showServicesMenu ? "−" : "+"}
                </span>
              )}
            </div>
            {menu.name === "Services" && showServicesMenu && (
              <div className="bg-gray-50">
                <MobileServicesSubmenu onServiceSelect={(id) => {
                  closeNavbar();
                  navigator('/services');
                }} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
}

interface MobileServicesSubmenuProps {
  onServiceSelect: (id: number) => void;
}

const MobileServicesSubmenu: React.FC<MobileServicesSubmenuProps> = ({ onServiceSelect }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  
  const servicesData = {
    Messaging: [
      { id: 1, title: "A2P Messaging" },
      { id: 2, title: "RCS Business Messaging" },
      { id: 3, title: "Viber Business Messages" },
      { id: 4, title: "Whatsapp Business Messages" },
      { id: 5, title: "2 Way Solution" },
      { id: 6, title: "Acculync" },
      { id: 7, title: "Mail 2 SMS" },
      { id: 8, title: "CPAAS" },
      { id: 9, title: "Omnichannel Communications" },
    ],
    Operator: [
      { id: 10, title: "SMSC" },
      { id: 11, title: "Instant Virtual Number" },
    ],
    Voice: [
      { id: 12, title: "Outbound Dealer" },
      { id: 13, title: "IVR" },
      { id: 14, title: "Missed Call" },
      { id: 15, title: "Click 2 Call" },
      { id: 16, title: "SMS 2 Call" },
    ],
    Marketing: [{ id: 17, title: "Email Marketing" }],
    Identity: [{ id: 18, title: "Verified SMS" }],
    "Website Development": [
      { id: 19, title: "Front-End Development" },
      { id: 20, title: "Back-End Solutions" },
    ],
  };

  return (
    <div className="pl-8">
      {Object.entries(servicesData).map(([category, items]) => (
        <div key={category} className="border-b border-gray-200 last:border-b-0">
          <div
            className="py-3 flex items-center justify-between pr-4 font-medium"
            onClick={() => setExpandedCategory(expandedCategory === category ? null : category)}
          >
            <span>{category}</span>
            <span>{expandedCategory === category ? "−" : "+"}</span>
          </div>
          {expandedCategory === category && (
            <div className="pb-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="py-2 pl-4 text-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => onServiceSelect(item.id)}
                >
                  {item.title}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavbarMobileMenu
