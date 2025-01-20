import React from "react";
import FooterBottom from "./FooterBottom";
import footerBG from "../../.../../assets/images/footer_bg.jpg";
import FooterMain from "./FooterMain";
const Footer: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${footerBG})`,
      }}
      className=" bg-blend-multiply bg-slate-900 "
    >
      <FooterMain/>
      <FooterBottom />
    </div>
  );
};

export default Footer;
