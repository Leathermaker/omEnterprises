import React, { useRef } from "react";
import Lottie from "react-lottie";
import featureAnimation from "../../assets/animations/features.json";

interface FeatureAnimationProps {
  className?: string;
}

const FeatureAnimation: React.FC<FeatureAnimationProps> = ({ className }) => {
  const lottieRef = useRef<Lottie | null>(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: featureAnimation,
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
      className={`${className ? className : " object-cover"}`}
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

export default FeatureAnimation;