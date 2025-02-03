import { WideScreenHandler } from "@/components";
import React from "react";
import ServiceTitle from "./ServiceTitle";
import missedcall from "@/assets/images/missedCall.png";
import WhoNeed from "./WhoNeed";
import Client from "@/pages/home/components/clientSection/Client";
import { banking, customercare, leadGeneration, ngos } from "./logos";

interface whoNeedTypes {
  title: string;
  icon: string;
}
const whoNeed: whoNeedTypes[] = [
  {
    title: "Telecom Banking",
    icon: banking,
  },
  {
    title: "Customer Serivces",
    icon: customercare,
  },
  {
    title: "Goverment & NGOs",
    icon: ngos,
  },
  {
    title: "Consumer Survey",
    icon: customercare,
  },
  {
    title: "Lead Generation",
    icon: leadGeneration,
  },
];

const MissedCall: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="  w-full text-4xl ">
        <ServiceTitle
          title="MISSED CALL"
          uoperTitle="Our Missed Call Service"
        />
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-black/60 mt-6 xl:text-lg text-base lg:w-8/12">
            The missed call alert service is a lead generation value added
            service that allows mobile operators to equip the customers with an
            easy to use call log and notification system, for the calls missed
            while the called party was unreachable or his mobile device was
            switched-off.
          </h1>
        </div>
        <div className="flex flex-col w-full items-center py-24">
          <h1 className="text-center w-full text-blue-950">How It Works ?</h1>
          <div className="flex items-center justify-center  xl:w-9/12 py-12">
            <img src={missedcall} alt="how_its_work" />
          </div>
        </div>
      </div>
      {/* <Benifits/> */}
      <WhoNeed whoNeed={whoNeed} />
      <Client />
    </WideScreenHandler>
  );
};

export default MissedCall;
