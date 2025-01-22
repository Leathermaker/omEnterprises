import React from "react";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import XpaddingWrapper from "../../../../../components/XpaddingWrapper";
import CircularProgress from "./RadialButton";
import maskMan from "../../../../../assets/images/maskman.jpg";

const Contact: React.FC = () => {
  return (
    <XpaddingWrapper className=" mb-12 mt-[28rem] w-full  grid grid-cols-12 relative">
      <div className="lg:col-span-7 col-span-12 lg:order-1 order-2  mt-14 lg:mt-0">
        <div className="relative ">
          <h1 className="absolute left-0 right-0  lg:-top-10 -top-11 sm:text-6xl text-5xl font-bold text-center md:text-start  bg-gradient-to-b from-blue-950/80  via-blue-950/20 to-transparent bg-clip-text text-transparent">
            WHY ?
          </h1>
          <div className="flex  items-center md:justify-start justify-center gap-5 text-OMblue ">
            <HiOutlineViewGridAdd size={25} />
            <h1 className="font-semibold md:text-base text-xs">
              WHY SMS MARKETING ?
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


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Row */}
              <div className="flex gap-4 w-full  p-4  ps-0">
                <CircularProgress percentage={98} />
                <div>
                  <h1 className="text-xl font-bold">Unparalleled Open Rate</h1>
                  <p className="2xl:w-1/2 text-xs md:text-sm">
                    Boost engagement with consistently high open rates.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 w-full p-4 rounded-lg ps-0">
                <CircularProgress percentage={20} />
                <div>
                  <h1 className="text-xl font-bold">
                    Highest Click Through Rate
                  </h1>
                  <p className="2xl:w-1/2 text-xs md:text-sm">
                    Elevate campaigns with industry-leading CTR success.
                  </p>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex gap-4 w-full  p-4  ps-0">
                <CircularProgress percentage={90} />
                <div>
                  <h1 className="text-xl font-bold">Fastest Response Time</h1>
                  <p className="2xl:w-1/2 text-xs md:text-sm">
                    Lead the market with the fastest response rates.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 w-full p-4 ps-0">
                <CircularProgress percentage={90} />
                <div>
                  <h1 className="text-xl font-bold">Extreme Read Rate</h1>
                  <p className="2xl:w-1/2 text-xs md:text-sm">
                    Achieve maximum visibility with extreme read rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-5 col-span-12  lg:order-2 order-1 mt-12 lg:mt-0 ">
        <div className="md:h-[42rem] h-[30rem]">
          <img
            src={maskMan}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </XpaddingWrapper>
  );
};

export default Contact;
