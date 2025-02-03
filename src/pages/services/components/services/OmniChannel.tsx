import { WideScreenHandler } from "@/components";
import Client from "@/pages/home/components/clientSection/Client";
import React from "react";
import omnichannel from "@/assets/images/services/omnichanel.png";
import ServiceTitle from "./ServiceTitle";
import { ecommerce, education, goverment, media } from "./logos";
import WhoNeed from "./WhoNeed";


interface whoNeedTypes{
  title: string;
  icon : string;
}
const whoNeed:whoNeedTypes[] = [  
  {
    title : "Media",
    icon:  media
  },
  {
    title : "Education",
    icon: education
  },
  {
    title : "Goverment & NGOs",
    icon: goverment
  },
 
  {
    title : "E-Commerce",
    icon: ecommerce
  },

]
const OmniChannel: React.FC = () => {
  return (
    <WideScreenHandler>
      <div className="  w-full text-4xl ">
        <ServiceTitle
          title=" OMNICHANNEL"
          uoperTitle="Omni Channel Communication"
        />
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-black/60 mt-6 xl:text-lg text-base lg:w-8/12">
            Omni Channel Communication Providers retail strategy is an approach
            to sales and marketing that provides customers with a
            fully-integrated shopping experience by uniting user experiences
            from brick-and-mortar to mobile-browsing and everything in between.
          </h1>
        </div>
        <div className="flex flex-col w-full items-center py-24">
          <h1 className="text-center w-full text-blue-950">How It Works ?</h1>
          <div className="flex items-center justify-center  xl:w-9/12">
            <img src={omnichannel} alt="how_its_work" />
          </div>
        </div>
      </div>
      <WhoNeed whoNeed={whoNeed}/>
      <Client />
    </WideScreenHandler>
  );
};

export default OmniChannel;
