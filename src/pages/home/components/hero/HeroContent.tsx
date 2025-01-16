import React from "react";
import { Button, RippleAnimation } from "../../../../components";
import { MdArrowOutward } from "react-icons/md";

const HeroContent: React.FC = () => {
  return (
    <div className="flex  h-full w-full relative ">
      <div className="flex flex-col gap-3 text-xl text-OMblue font-semibold justify-center md:items-start items-center ">
        <p className="text-sm md:text-base">BEST MARKETING SERVICE</p>
        <h1 className="2xl:text-6xl md:text-[4vw] text-4xl text-center md:text-start  leading-tight font-bold text-blue-950">
          India's No. 1 Bulk
          <br />
          SMS Platform
        </h1>
        <p className=" text-violet-950/50 text-sm md:text-base  font-normal text-center md:text-start">
          Energistically harness ubiquitous imperatives without state of the art
          collaboration and idea-sharing. Monotonectally parallel task
          cross-unit experiences and front-end.
        </p>
        <div>
          <Button
            title="ABOUT US"
            Icon={<MdArrowOutward size={20} />}
            className="text-sm font-normal"
          />
        </div>
      </div>

      <RippleAnimation className="absolute opacity-65 md:top-20 -top-48 -left-48 -z-40" />
    </div>
  );
};

export default HeroContent;
