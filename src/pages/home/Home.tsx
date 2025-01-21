import React from "react";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Service from "./components/serviceSection/Service";
import CompaignSecion from "./components/CompaignSection/Compaign";
import { AwardSection, Strategy } from "./components";
import Client from "./components/clientSection/Client";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <AwardSection />
      <Service />
      <Strategy />
      <CompaignSecion />
      <Client />
    </>
  );
};

export default Home;
