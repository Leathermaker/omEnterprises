import { WideScreenHandler } from "@/components";
import React from "react";
import ServiceTitle from "./ServiceTitle";
import WhoNeed from "./WhoNeed";
import Client from "@/pages/home/components/clientSection/Client";
import ivr from "@/assets/images/ivr.png";
import { airlines, banking, ecommerce, hospital, media } from "./logos";
import XpaddingWrapper from "@/components/XpaddingWrapper";

interface whoNeedTypes {
  title: string;
  icon: string;
}
const whoNeed: whoNeedTypes[] = [
  {
    title: "Telephone Banking",
    icon: banking,
  },
  {
    title: "Order Management",
    icon: ecommerce,
  },
  {
    title: " Airlines",
    icon: airlines,
  },

  {
    title: "Hospitals",
    icon: hospital,
  },
  {
    title: "Media",
    icon: media,
  },
];

const Ivr: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="  w-full text-4xl ">
        <ServiceTitle title="IVR" uoperTitle="Our IVR Service" />
        <XpaddingWrapper>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-black/60 mt-6 xl:text-lg text-base lg:w-8/12">
              A2P sms services A2P, or application-to-person messaging,a2p sms
              Services is any kind of traffic in which a person is receiving
              messages from an application. A2P messaging includes (but is not
              limited to) marketing messages, appointment reminders, chat bots
              or virtual assistants, notifications, and one-time passwords
              (OTPs) or PIN codes.Consult Now For a2p sms Services. Call Us :-
              9815300730
            </h1>
          </div>
        </XpaddingWrapper>
        <div className="flex flex-col w-full items-center py-24">
          <h1 className="text-center w-full text-blue-950">How It Works ?</h1>
          <div className="flex items-center justify-center  xl:w-9/12 py-12">
            <img src={ivr} alt="how_its_work" />
          </div>
        </div>
      </div>
      {/* <Benifits/> */}
      <WhoNeed whoNeed={whoNeed} />
      <Client />
    </WideScreenHandler>
  );
};

export default Ivr;
