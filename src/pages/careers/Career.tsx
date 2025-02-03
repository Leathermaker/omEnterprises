import React from "react";
import CareerHero from "./components/CareerHero";
import { WideScreenHandler } from "@/components";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import Job from "./components/Job";

const Career: React.FC = () => {
  return (
    <WideScreenHandler>
      <XpaddingWrapper>
        <CareerHero />
        <Job/>
      </XpaddingWrapper>
    </WideScreenHandler>
  );
};

export default Career;
