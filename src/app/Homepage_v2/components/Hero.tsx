
"use client";
import { useLottie } from "lottie-react";
import animationData from "../../../../public/lottie/uf opening .json";

const Hero = () => {
    const defaultOptions = {
        animationData: animationData,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(defaultOptions);

    return <div>{View}</div>;
};

export default Hero;