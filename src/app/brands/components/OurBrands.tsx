

import React from "react";

interface Content {
    title: string;
    paragraph: string;
    heading: string;
}

const OurBrands: React.FC = () => {
    const content: Content = {
        title: "OUR BRANDS",
        heading: "United by a common Mission",
        paragraph:
            "Each brand under our umbrella is built with care, consistency, and a deep love for flavor, all united by our mission to serve quality, joy, and connection through food.",
    };

    return (
        <>
            <div className="max-w-[1342px] mx-auto px-5 mt-[175px]">
                <div className="flex justify-between gap-0 md:gap-6 flex-wrap lg:flex-nowrap">
                    <div className="w-full max-w-[100%] lg:max-w-[35%]">
                        <h5 className="text-darkpink font-firaSans-condensed font-semibold italic text-2xl md:text-3xl leading-[40px] tracking-[-1%] uppercase flex items-center gap-2">
                            <span className="block size-2 md:size-5 bg-redbrown animate-dotPulse"></span>
                            {content.title}
                        </h5>
                    </div>
                    <div className="w-full max-w-[100%] lg:max-w-[65%] mt-[20px] lg:mt-[-20px]">
                        <p className="text-brown font-firaSans-condensed font-normal text-[26px] md:text-[42px] lg:text-[50px] leading-[40px] md:leading-[120%] lg:leading-[75px] tracking-[-1%] md:tracking-[0%] max-w-[100%] lg:max-w-[778px]">
                            {content.paragraph}
                        </p>
                    </div>
                </div>
            </div>
            <h2 className="text-darkgray font-firaSans-condensed font-medium text-[45px] md:text-[60px] lg:text-[100px] leading-[45px] md:leading-[120%] lg:leading-[95px] tracking-[-1%] md:tracking-[0%] uppercase max-w-[100%] lg:max-w-[954px] mb-10 md:mb-[75px] mt-[200px] md:mt-[175px] m-auto px-5">{content.heading}</h2>
        </>
    );
};

export default OurBrands;
