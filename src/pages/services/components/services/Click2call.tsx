import { WideScreenHandler } from "@/components";
import React from "react";
import ServiceTitle from "./ServiceTitle";
import Client from "@/pages/home/components/clientSection/Client";
import WhoNeed from "./WhoNeed";
import { ecommerce, goverment, media, ngos } from "./logos";
import click2call from "@/assets/images/click2call.png";

interface whoNeedTypes {
  title: string;
  icon: string;
}
const whoNeed: whoNeedTypes[] = [
  {
    title: "Goverment & NGOs",
    icon: ngos,
  },

  {
    title: "E-Commerce",
    icon: ecommerce,
  },
  {
    title: "Government & NGOs",
    icon: goverment,
  },
  {
    title: "Media",
    icon: media,
  },
];

const Click2call: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="  w-full text-4xl ">
        <ServiceTitle title="CLICK2CALL" uoperTitle="Our Click2call Service" />
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-black/60 mt-6 xl:text-lg text-base lg:w-8/12">
            Click-to-Call (click-2-call, click-to-dial, click-to-call-out,
            click-to call-in, call-me-now, etc.) is a feature that is unique to
            VoIP. Click2Call uses a hyperlink that sends a command to initiate
            two phone calls at once—one to the VoIP subscriber’s phone, and the
            other to an outbound number, usually a customer. A click to call
            widget can be used by either the VoIP subscriber or a by potential
            or existing client visiting a web site.
          </h1>
        </div>
        <div className="flex flex-col w-full items-center py-24">
          <h1 className="text-center w-full text-blue-950">How It Works ?</h1>
          <div className="flex items-center justify-center  xl:w-9/12 py-12">
            <img src={click2call} alt="how_its_work" />
          </div>
        </div>
      </div>
      {/* <Benifits/> */}
      <WhoNeed whoNeed={whoNeed} />
      <Client />
    </WideScreenHandler>
  );
};

export default Click2call;
