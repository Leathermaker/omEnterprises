import { WideScreenHandler } from "@/components";
import React from "react";
import ServiceTitle from "./ServiceTitle";
import WhoNeed from "./WhoNeed";
import Client from "@/pages/home/components/clientSection/Client";
import { airlines, ecommerce, entertainment, media, telecome } from "./logos";
import sms2call from "@/assets/images/sms2call.png";
import XpaddingWrapper from "@/components/XpaddingWrapper";

interface whoNeedTypes {
  title: string;
  icon: string;
}
const whoNeed: whoNeedTypes[] = [
  {
    title: "Aviation",
    icon: airlines,
  },
  {
    title: "Entertainment",
    icon: entertainment,
  },
  {
    title: "E-Commerce",
    icon: ecommerce,
  },
  {
    title: "Media",
    icon: media,
  },
  {
    title: "Telecom & IT",
    icon: telecome,
  },
];

const Sms2Call: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="  w-full text-4xl ">
        <ServiceTitle title="SMS2CALL" uoperTitle="Our SMS2CALL Service" />
        <XpaddingWrapper>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-black/60 mt-6 xl:text-lg text-base lg:w-8/12">
              This Service allows clients to transform their SMS into voice
              calls with no need to implement any infrastructure on their side.
            </h1>
          </div>
        </XpaddingWrapper>
        <div className="flex flex-col w-full items-center py-24">
          <h1 className="text-center w-full text-blue-950">How It Works ?</h1>
          <div className="flex items-center justify-center  xl:w-9/12 py-12">
            <img src={sms2call} alt="how_its_work" />
          </div>
        </div>
      </div>
      {/* <Benifits/> */}
      <WhoNeed whoNeed={whoNeed} />
      <Client />
    </WideScreenHandler>
  );
};

export default Sms2Call;
