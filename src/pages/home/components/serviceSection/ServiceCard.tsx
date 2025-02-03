import React from "react";
import { Button } from "../../../../components";
import { MdArrowOutward,} from "react-icons/md";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: React.ReactNode;

}
const ServiceCard: React.FC<ServiceCardProps> = ({title, description, Icon}) => {
  return (
    <div className="relative bg-white py-14 hover:bg-OMblue transition-colors duration-300 group min-w-[19rem] w-[19rem]  rounded-lg shadow-[1px_-2px_24px_-2px_rgba(0,_0,_0,_0.1)] p-6 flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="font-semibold text-2xl text-center text-blue-950 group-hover:text-white transition-colors duration-300">
         {title}
        </h1>
        <p className="text-center text-black/40 group-hover:text-white duration-500 transition-colors ">
          {description}
        </p>
        <Button
          title="READ MORE"
          Icon={<MdArrowOutward size={20} />}
          className="group-hover:bg-white duration-300 group-hover:text-OMblue transition-colors"
        />
      </div>

      {/* ripple buton */}
      <div className=" h-14 aspect-square bg-OMblue group-hover:bg-white rounded-full flex items-center justify-center absolute top-0  -translate-y-1/2  transition-transform duration-500 z-10 ">
         <div className="bg-OMblue group-hover:bg-white  h-12  aspect-square rounded-full absolute -z-10 slow-ping "/>
         {Icon}
      </div>
    </div> 
  );
};

export default ServiceCard;
