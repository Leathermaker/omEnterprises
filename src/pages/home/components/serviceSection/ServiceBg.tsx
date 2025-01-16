import React from "react";
import grain from '../../../../assets/images/grainBg.png'
interface ServiceBgProps {
  children: React.ReactNode;
}
const ServiceBg: React.FC<ServiceBgProps> = ({ children }) => {
  return (
    <div className="relative h-auto w-full bg-white">
      <div className="md:h-[20rem] h-[12rem] w-full " />
      <div style={{
        backgroundImage: `url(${grain})`,
      }} className=" h-auto w-full bg-OMlightBlue/80 relative ">
      {children}
      </div>
    </div>
  );
};

export default ServiceBg;
