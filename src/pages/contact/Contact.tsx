import UpSideSlider from "@/components/common/UpsideSlider";
import React from "react";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import { WideScreenHandler } from "@/components";
import Enquiry from "./components/Enquiry";
import GoogleMapEmbed from "./components/GoogleMapEmbed";
import Address from "./components/Address";

const Contact: React.FC = () => {
  return (
    <div>
      <UpSideSlider title="Contact Us" />
      <WideScreenHandler>
        <XpaddingWrapper>
          <Address />
          <Enquiry/>
        </XpaddingWrapper>
      </WideScreenHandler>
      <GoogleMapEmbed/>
    </div>
  );
};

export default Contact;
