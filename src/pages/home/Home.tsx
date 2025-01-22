import React from "react";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Service from "./components/serviceSection/Service";
import CompaignSecion from "./components/CompaignSection/Compaign";
import { AwardSection, Strategy } from "./components";
import Client from "./components/clientSection/Client";
import Provider from "./components/provider/Provider";
import Testinomials from "./components/testinomials/Testinomials";
import CanvasRevealEffectDemo from "./components/targetCustomer/TargetClient";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <AwardSection />
      <Service />
      <CompaignSecion />
      <Provider/>
      <Strategy />  
      <Testinomials/>
      <CanvasRevealEffectDemo/>
      <Client />
    </>
  );
};

export default Home;
