import React from "react";
import PricingCard from "./components/PricingCard";
import { WideScreenHandler } from "@/components";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import Client from "../home/components/clientSection/Client";
import ContactForm from "./components/ContactForm";
import { useQuery } from "@tanstack/react-query";
import {
  getPromotionalPlans,
  getTransactionalPlans,
} from "@/services/services";
import PricingCardSkeleton from "./components/PricingCardSkelton";

// Type for individual description in the "descriptions" array
type Description = string;

// Type for a pricing plan object
interface PricingPlanTypes {
  _id: string; // Unique identifier for the pricing plan
  title: string; // Title of the plan
  category: "promotional" | "transactional"; // Category can either be "promotional" or "transactional"
  price: number; // Price for the SMS pack
  descriptions: Description[]; // Array of descriptions for the plan
  __v: number; // Version key (usually used by MongoDB)
}

const PricingPage: React.FC = () => {
  
  const { data: transactionalData, isPending: isPendingTransactional } =
    useQuery(getTransactionalPlans());
  const { data: promotionalData, isPending: isPendingPromotional } = useQuery(
    getPromotionalPlans()
  );

 
  return (
    <WideScreenHandler>
      <XpaddingWrapper>
        <ContactForm />
      </XpaddingWrapper>
      <XpaddingWrapper>
        <div className="relative mt-24 ">
          <h1 className="text-5xl font-bold absolute -top-7 left-0 right-0 text-center text-blue-950 bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent">
            PRICING
          </h1>
          <h1 className=" text-4xl font-bold text-center text-blue-950">
            Pricing For Transactional SMS
          </h1>
          <p className="text-xs font-semibold text-center text-OMblue">
            No Hidden Setup Fees. Forever Free To Use Platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  place-items-center gap-y-12 mb-24  mt-12 Perspective-parent ">
          {isPendingTransactional ? (
            <PricingCardSkeleton />
          ) : (
            transactionalData?.map((plan: PricingPlanTypes) => {
              return (
                <PricingCard
                  key={plan._id}
                  title={plan.title}
                  price={plan.price}
                  features={plan.descriptions || []}
                />
              );
            })
          )}
        </div>
      </XpaddingWrapper>

      <XpaddingWrapper>
        <div className="relative mt-24 ">
          <h1 className="text-5xl font-bold absolute -top-7 left-0 right-0 text-center text-blue-950 bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent">
            PRICING
          </h1>
          <h1 className=" text-4xl font-bold text-center text-blue-950">
            Pricing For Promotional SMS
          </h1>
          <p className="text-xs font-semibold text-center text-OMblue">
            No Hidden Setup Fees. Forever Free To Use Platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  place-items-center gap-y-12 mb-24  mt-12 Perspective-parent ">
          {isPendingPromotional ? (
            <PricingCardSkeleton />
          ) : (
            promotionalData.map((plan: PricingPlanTypes) => (
              <PricingCard
                key={plan._id}
                title={plan.title}
                price={plan.price}
                features={plan.descriptions || []}
              />
            ))
          )}
        </div>
      </XpaddingWrapper>
      <Client />
    </WideScreenHandler>
  );
};

export default PricingPage;
