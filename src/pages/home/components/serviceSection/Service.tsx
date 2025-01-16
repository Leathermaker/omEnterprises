import React from "react";
import ServiceBg from "./ServiceBg";
import Services from "./Services";
import { WideScreenHandler } from "../../../../components";

const Service: React.FC = () => {
  return (
    <ServiceBg>
      <WideScreenHandler>
      <Services />
      </WideScreenHandler>
    </ServiceBg>
  );
};

export default Service;
