import React from "react";
import FooterBottom from "./FooterBottom";
import footerBG from "../../assets/images/process_bg_1.png"; // Correct the path if needed
import FooterMain from "./FooterMain";

const Footer: React.FC = () => {
  return (
    <div className="relative bg-slate-900 ">
      {/* Background Image with Reduced Opacity */}
      <div
        style={{
          backgroundImage: `url(${footerBG})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          opacity: 0.2, // Reduce opacity of the background image
        }}
        className="absolute inset-0 z-0"
      />

      {/* Content */}
      <div className="relative z-10">
        <FooterMain />
        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;