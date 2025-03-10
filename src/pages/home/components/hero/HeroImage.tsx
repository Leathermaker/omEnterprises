import React from "react";
import { Tilt } from "react-tilt";
import AnilSirImaged from "../../../../assets/images//anil.png";
const HeroImage: React.FC = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 5, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <div>
      <Tilt options={defaultOptions} className=" md:h-[40rem] h-[25rem] w-full bg-red-300 overflow-hidden " >
      {/* <div className=" md:h-[40rem] h-[20rem] w-full bg-red-300 overflow-hidden "> */}
        <img
          src={AnilSirImaged}
          alt="Image"
          className="h-full w-full object-cover "
        />
      </Tilt>
    </div>
  );
};

export default HeroImage;
