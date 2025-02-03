import React, { useEffect } from "react";
import AboutHero from "./components/AboutHero";
import Team from "./components/Team";
import shape from "../../assets/images/shape1.png";
import { WideScreenHandler } from "@/components";

const About: React.FC = () => {
  useEffect(() => {
    console.log("Shape SVG path:", shape);
  }, []);

  return (
    <div className="">
      <WideScreenHandler>
        <div
          style={{
            backgroundImage: `url(${shape})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            minHeight: "50rem",
          }}
          className="relative  "
        >
          <AboutHero />
        </div>
          <Team />
      </WideScreenHandler>
    </div>
  );
};

export default About;
