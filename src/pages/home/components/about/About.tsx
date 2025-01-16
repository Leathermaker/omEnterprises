import React from "react";
import { WideScreenHandler } from "../../../../components";
import AboutImageSection from "./AboutImageSection";
import AboutContentSection from "./AboutContentSection";
import XpaddingWrapper from "../../../../components/XpaddingWrapper";

const About: React.FC = () => {
  return (
    <WideScreenHandler>
      <XpaddingWrapper className="py-24">
        <div className="grid grid-cols-12  ">
          <div className="col-span-12 md:col-span-6 ">
            <AboutImageSection />
          </div>
          <div className="col-span-12 md:col-span-6 py-12 md:py-0">
            <AboutContentSection />
          </div>
        </div>
      </XpaddingWrapper>
    </WideScreenHandler>
  );
};

export default About;
