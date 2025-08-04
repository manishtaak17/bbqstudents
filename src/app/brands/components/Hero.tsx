"use client";

import React from "react";
import { useLottie } from "lottie-react";
import animationData from "../../../../public/lottie/our brands header v2.json";

const Hero = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <div className="mt-10">{View}</div>
  );
};

export default Hero;