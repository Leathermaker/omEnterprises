import React from "react";
import { HeroContent} from "..";
import XpaddingWrapper from "../../../../components/XpaddingWrapper";
import { WideScreenHandler } from "../../../../components";
import ThreeD from "./ThreeD";
import FloatingBalls from "../../../../components/animation/FloatingBalls";
import HoverGlowingButton from "../../../../components/ui/hoverGLowingBtn/HoverGlowingButton";

const Hero: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="grid grid-cols-12 md:h-[48rem] h-auto w-full relative overflow-hidden bg-OMlightBlu ">

     
      {/* <div className="absolute w-full  md:h-[48rem] z-10 ">
        <FloatingBalls/>
      </div> */}
      <div className="absolute w-full  md:h-[48rem] -z-10 blur-">
        <FloatingBalls/>
      </div>

        {/* Hero Content */}
        <div className="col-span-12 h-full md:col-span-6 order-2 md:order-1 py-12 md:py-0">
          <XpaddingWrapper className="lg:pe-0 h-full">
            <HeroContent />
          </XpaddingWrapper>
        </div>

        {/* Hero Image */}
        {/* <div className="col-span-12 md:col-span-6 xl:h-[50rem] flex items-center justify-center order-1 md:order-2 pt-12 md:pt-0"> */}
        <div className="col-span-12 md:col-span-6 h-[40rem] md:h-full pb-12 order-1 md:order-2  flex  flex-1 relative ">
          <div className="absolute  bottom-16 right-4 bg-black rounded-md">
          <HoverGlowingButton title={"Explore"} />
          </div>
          {/* <HeroImage />  */}
          <ThreeD/>
        </div>

      
        {/* Background Overlay */}
        <div className="bg-OMblue/10 h-[40rem] w-[150%] absolute -bottom-[35rem]  translate-x-[12rem] -rotate-[25deg] -z-10 overflow-hidden" />
        <div className="bg-OMblue/10 h-[40rem] w-[250%] absolute -bottom-[85rem] -right-[70rem] translate-x-[12rem] -rotate-[25deg] -z-10 overflow-hidden" />
      </div>

    </WideScreenHandler>
  );
};

export default Hero;
