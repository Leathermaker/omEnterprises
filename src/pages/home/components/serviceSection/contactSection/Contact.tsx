import React from "react";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { Button } from "../../../../../components";
import XpaddingWrapper from "../../../../../components/XpaddingWrapper";
import CircularProgress from "./RadialButton";
import { MdArrowOutward } from "react-icons/md";

const Contact: React.FC = () => {
  return (
    <XpaddingWrapper className=" mb-12 mt-[28rem] w-full  grid grid-cols-12 relative">
      <div className="lg:col-span-7 col-span-12 lg:order-1 order-2  mt-14 lg:mt-0">
        <div className="relative ">
          <h1 className="absolute left-0 right-0  lg:-top-10 -top-11 sm:text-6xl text-5xl font-bold text-center md:text-start  bg-gradient-to-b from-blue-950/80  via-blue-950/20 to-transparent bg-clip-text text-transparent">
            CHOOSE US
          </h1>
          <div className="flex  items-center md:justify-start justify-center gap-5 text-OMblue ">
            <HiOutlineViewGridAdd size={25} />
            <h1 className="font-semibold md:text-base text-xs">
              WHY CHOOSE US
            </h1>
          </div>
          <div className=" flex flex-col gap-8  md:items-start items-center   ">
            <h1 className="text-blue-950 md:text-[3vw] sm:text-[6vw] text-[6.5vw] 3xl:text-4xl  leading-[1.1] font-bold ">
              {" "}
              24+ Years Experience <br />
              We Provide <span className=" text-OMblue"> SMS Services</span>
            </h1>
            <p className="text-violet-950/50 md:text-base text-sm font-semibold md:w-3/4 w-full">
              Collaboratively envisioneer user friendly supply chains and cross
              unit imperative. Authoritativel fabricate competitive resource and
              holistic. Holisticly restore real time resources whereas
              standardized networks.
            </p>

            <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row items-start  justify-start">
              <div className="flex  gap-4 w-fit">
                <CircularProgress />
                <div>
                  <h1 className="text-xl font-bold">Business Grow </h1>
                  <p className="md:w-1/2 text-xs md:text-sm">
                    Efficiently transition top-line ideas before market.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CircularProgress percentage={50} />
                <div>
                  <h1 className="text-xl font-bold">Business Grow </h1>
                  <p className="md:w-1/2 text-xs md:text-sm">
                    Efficiently transition top-line ideas before market.
                  </p>
                </div>
              </div>
            </div>

            <Button title="LEARN MORE" Icon={<MdArrowOutward size={20} />} />
          </div>
        </div>
      </div>
      <div className="lg:col-span-5 col-span-12  lg:order-2 order-1 mt-12 lg:mt-0 ">
        <div className="md:h-[42rem] h-[30rem]">
          <img
            src={
              "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
            }
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </XpaddingWrapper>
  );
};

export default Contact;
