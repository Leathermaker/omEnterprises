import React from "react";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import CompaignSecion from "./components/CompaignSection/Compaign";
import { AwardSection, Strategy } from "./components";
import Client from "./components/clientSection/Client";
import Provider from "./components/provider/Provider";
import Testinomials from "./components/testinomials/Testinomials";
import TargetClient from "./components/targetCustomer/TargetClient";
import Features from "./components/features/Features";
import Faq from "./components/faq/Faq";
import Why from "./components/why/contactSection/why";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <AwardSection />
      {/* <Service /> */}
      <Why/>
      <CompaignSecion />
      <Provider/>
      <Strategy /> 
      <Testinomials/>
      {/* <CanvasRevealEffectDemo/> */}
      <Features/>
      <TargetClient/>
      <Client />
      <Faq/>
    </>
  );
};

export default Home;
