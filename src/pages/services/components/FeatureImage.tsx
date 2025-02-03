import React from "react";
import feature from "../../../assets/images/feature.svg";

const FeatureImage: React.FC = () => {
  return (
    <>
      <div className="flex items-start gap-2 md:ps-4 ps-0">
        <div className="md:h-4 h-2 aspect-square bg-amber-500 border border-black/5  rounded-full" />
        <div className="md:h-4 h-2 aspect-square bg-amber-500 border border-black/5  rounded-full" />
        <div className="md:h-4 h-2 aspect-square bg-amber-500 border border-black/5  rounded-full" />
      </div>
      <div className=" rounded-lg w-full aspect-square  md:p-12   p-4 ">
        <img
          loading="lazy"
          src={feature}
          alt="BlogImage"
          className="w-full h-full object-contain "
        />
      </div>
    </>
  );
};

export default FeatureImage;
