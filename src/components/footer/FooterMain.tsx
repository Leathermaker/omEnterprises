import React from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaAsterisk } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "../../assets/logo.png";
import GlowingBottomLine from "./GlowingBottomLine";

const Services = [
  { type: "services", title: "Bulk SMS " },
  { type: "services", title: "Web Development" },
  { type: "services", title: "Digital Marketing" },
  { type: "services", title: "App Development" },
  { type: "services", title: "Graphic Design" },
  { type: "services", title: "SEO" },
];

const NavigationLinks = [
  { type: "nav", title: "About", href: "/about" },
  { type: "nav", title: "Products & Services", href: "/products&services" },
  { type: "nav", title: "Plan & Pricing", href: "/plan&pricing" },
  { type: "nav", title: "Blog", href: "/blog" },
];

const Contact = [
  { type: "contact", title: "Model Town, Jalandhar", href: "/contact-us" },
  { type: "contact", title: "Punjab (INDIA)", href: "/contact-us" },
  { type: "contact", title: "+91 9815300730", href: "/contact-us" },
  { type: "contact", title: "+91 9872144408", href: "/contact-us" },
  {
    type: "contact",
    title: " info@omenterprisesgroup.in",
    href: "/contact-us",
  },
  {
    type: "contact",
    title: " anil@omenterprisesgroup.in",
    href: "/contact-us",
  },
];

const FooterMain: React.FC = () => {
  const [visibleType, setVisibleType] = React.useState("");

  const isVisibleHandler = (type: string) => {
    if (visibleType === type) {
      setVisibleType("");
    } else {
      setVisibleType(type);
    }
  };

  return (
    <div className="grid grid-cols-12 bg-elite-dark pt-12 pb-20 px-4 lg:px-12 relative ">
      {/* Left Section */}
      <div className="lg:col-span-6 col-span-12 flex flex-col gap-8">
        <div className="">
          <img src={logo} alt="logo" className="h-32 " />
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-2 text-white">
            Get latest updates and special offers
          </h1>
          <div className="flex items-center bg-white border-2 w-full lg:w-fit rounded-full gap-2 bg-elite-whiteSmoke ps-4">
            <input
              type="email"
              className="border-0 bg-elite-whiteSmoke rounded-full focus:border-0 focus:outline-none w-full py-2"
              placeholder="Example@gmail.com"
            />
            <div className="bg-blue-200/50 flex justify-center items-center bg-elite-green rounded-full p-3 aspect-square scale-75">
              <RiSendPlaneLine size={25} />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:col-span-6 col-span-12 text-white lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services */}
          <div className="mt-12 lg:mt-0 cursor-pointer">
          <div
              className="font-bold flex  justify-between items-center lg:border-b-0 border-b-[1px] border-white/75 pb-2 "
              onClick={() => isVisibleHandler("nav")}
            >
              <div className=" w-full flex justify-between">
                <div className="flex flex-col gap-2">
                  Services
                  <GlowingBottomLine />
                </div>
                <MdKeyboardArrowDown
                  className={`lg:hidden transition-transform ${
                    visibleType === "nav" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 py-6">
              {Services.map((service, index) => (
                <h1
                  key={`SERVICES_${index}`}
                  className={`text-sm text-white cursor-pointer  ${
                    visibleType === "services" ? "block" : "hidden lg:block"
                  }`}
                >
                  {service.title}
                </h1>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="mt-1 lg:mt-0 cursor-pointer">
            <div
              className="font-bold flex  justify-between items-center lg:border-b-0 border-b-[1px] border-white/75 pb-2 "
              onClick={() => isVisibleHandler("nav")}
            >
              <div className=" w-full flex justify-between">
                <div className="flex flex-col gap-2">
                  Company
                  <GlowingBottomLine />
                </div>
                <MdKeyboardArrowDown
                  className={`lg:hidden transition-transform ${
                    visibleType === "nav" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 py-6">
              {NavigationLinks.map((link, index) => (
                <h1
                  key={`NAVIGATION_${index}`}
                  className={`text-sm text-white ${
                    visibleType === "nav" ? "block" : "hidden lg:block"
                  }`}
                >
                  {link.title}
                </h1>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="mt-1 lg:mt-0 cursor-pointer">
          <div
              className="font-bold flex  justify-between items-center lg:border-b-0 border-b-[1px] border-white/75 pb-2 "
              onClick={() => isVisibleHandler("nav")}
            >
              <div className=" w-full flex justify-between">
                <div className="flex flex-col gap-2">
                  Contact
                  <GlowingBottomLine />
                </div>
                <MdKeyboardArrowDown
                  className={`lg:hidden transition-transform ${
                    visibleType === "nav" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 py-6">
              {Contact.map((con, index) => (
                <Link
                  to={con.href}
                  key={`CONTACT_${index}`}
                  className={`text-sm text-white ${
                    visibleType === "contact" ? "block" : "hidden lg:block"
                  }`}
                >
                  {con.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Privacy and Policy */}
      <Link
        to="/privacy-and-policy"
        className="absolute flex bottom-12 right-12 text-white text-sm items-center gap-2"
      >
        <FaAsterisk color="#fffff" /> Privacy and Policy
      </Link>
    </div>
  );
};

export default FooterMain;
