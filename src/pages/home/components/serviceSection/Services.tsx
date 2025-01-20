import React from "react";
import { Button } from "../../../../components";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import XpaddingWrapper from "../../../../components/XpaddingWrapper";
import { MdArrowOutward, MdOutlineSms } from "react-icons/md";
import ServiceCard from "./ServiceCard";
import Contact from "./contactSection/Contact";

const Services: React.FC = () => {
  const ServicesData = [
    {
      title: "Graphic Design",
      description:
        "We offer a wide range of graphic design services, including logo design, branding, web design, and more.",
      icon: <MdOutlineSms size={25} />,
    },
    {
      title: "Web Development",
      description:
        "We specialize in building custom websites and web applications for businesses of all sizes.",
      icon: <MdArrowOutward size={25} />,
    },
    {
      title: "Digital Marketing",
      description:
        "We provide digital marketing services, including search engine optimization, social media marketing, and email marketing.",
      icon: <MdOutlineSms size={25} />,
    },
    {
      title: "SEO",
      description:
        "We offer search engine optimization services to help businesses improve their online visibility and drive more traffic to their websites.",
      icon: <MdArrowOutward size={25} />,
    },
  ];
  return (
    <div className="relative xl:mx-24 ">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("https://wallpaper.dog/large/5486501.png")`,
          backgroundSize: "cover",
          // backgroundPosition: "",
          backgroundRepeat: "no-repeat",
        }}
        className=" py-28  absolute h-[30rem]  -top-60 left-0 right-0 z-50 bg-gray-100 "
      >
        <h1 className=" absolute top-16 lg:left-24 left-[2vw] sm:text-6xl text-5xl font-bold  bg-gradient-to-b from-blue-950/80  via-blue-950/20 to-transparent bg-clip-text text-transparent -z-30">
          SERVICES
        </h1>
        <XpaddingWrapper>
          <div className="flex  items-center justify-start gap-5 text-OMblue ">
            <HiOutlineViewGridAdd size={25} />

            <h1 className="font-semibold md:text-base text-xs">WHAT WE DO</h1>
          </div>
          <div className="flex md:flex-row flex-col gap-3 justify-between text-white md:text-[3vw] sm:text-[6vw] text-[6.5vw] 3xl:text-5xl leading-[1.1] font-bold   ">
            We Provide Exclusive Service <br /> For Your Business{" "}
            <Button
              title="VIEW ALL SERVICES"
              Icon={<MdArrowOutward size={20} />}
              className="px-3 text-sm font-normal h-10  md:self-end self-start rounded-sm hover:bg-OMblue/90"
            />
          </div>
        </XpaddingWrapper>
      </div>

      <div className="  mx-auto   mt-14 py-12   ">
        <div className="absolute  z-50 xl:left-24  xl:right-24  left-0 right-0 flex px-12 py-12  justify-between gap-4 overflow-scroll scrollbar-hide">
          {ServicesData.map((service, index) => (
            <ServiceCard
              key={`SERVICES_${index}`}
              title={service.title}
              description={service.description}
              Icon={service.icon}
            />
          ))}
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default Services;
