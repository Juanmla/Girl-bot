import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/19857-learn-more-about-something.json";

const WomanLottie = ({ history }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSetting: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleClick = () => {
    history.push("/chat");
  };

  return (
    <div onClick={handleClick}>
      <Lottie options={defaultOptions} height={450} width={450} />
    </div>
  );
};

export default WomanLottie;
