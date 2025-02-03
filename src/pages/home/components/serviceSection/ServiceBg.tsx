import React from "react";
interface ServiceBgProps {
  children: React.ReactNode;
}
const ServiceBg: React.FC<ServiceBgProps> = ({ children }) => {
  return (
    <div className="relative h-auto w-full bg-white">
      <div className="` h-[12rem] w-full  " />
      <div  className=" h-auto w-full  relative ">
      {children}
      </div>
    </div>
  );
};

export default ServiceBg;
