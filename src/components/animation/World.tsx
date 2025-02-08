import React, { useRef } from "react";
import Lottie from "react-lottie";
import worldAnimation from "../../assets/animations/world2.json";

interface FeatureAnimationProps {
  className?: string;
}

const WorldAnimation: React.FC<FeatureAnimationProps> = ({ className }) => {
  const lottieRef = useRef<any | null>(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: worldAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleClick = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  };

  return (
    <div
      className={`${className ? className : " object-contain   sm:scale-110  hover:scale-125 duration-700"}`}
      onClick={handleClick}
    >
      <Lottie
        ref={lottieRef}
        options={defaultOptions}
        height={'100%'}
        width={'100%'}
        isClickToPauseDisabled={true}
      />
    </div>
  );
};

export default WorldAnimation;