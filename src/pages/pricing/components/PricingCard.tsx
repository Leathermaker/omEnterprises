import { Button } from "@/components";
import { scrollToTop } from "@/components/functionality/ScrollToTop";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
}) => {
  return (
    <div className=" flex flex-col justify-between w-full sm:w-[19rem] h-full border rounded-md border-black/10 bg-OMblue/5 hover:bg-OMblue/10 duration-700 md:hover:scale-105 hover:shadow-2xl hover:shadow-OMblue/10 p-8 ">
      <div className="  flex flex-col gap-2  cursor-pointer ">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <h1 className="text-5xl text-black/70 font-serif">{price}</h1>

        {features.map((feature, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="flex-shrink-0 min-w-[20px] min-h-[20px]">
              <MdCheckCircle color="#9b59b6" size={20} className="w-5 h-5" />
            </div>
            <p className="text-black/60">{feature}</p>
          </div>
        ))}
      </div>
      <div onClick={scrollToTop}>
        <Button
          title="ENQUIRY NOW"
          className="w-full rounded-md hover:shadow-lg hover:shadow-OMblue/50 duration-300 cursor-pointer px-4 mt-12 "
        />
      </div>
    </div>
  );
};

export default PricingCard;
