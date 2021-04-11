import React from "react";
import Lottie from "react-lottie";

export default function DisplayLottie({ animationData }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
}
