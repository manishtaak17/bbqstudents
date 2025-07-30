"use client";

import React from 'react';

interface SectionContent {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  spanColor: string;
  subtitleColor: string;
}

const InvestorCareersSection: React.FC = () => {
  const sections: SectionContent[] = [
    {
      subtitle: 'INVESTORS',
      title: 'Everything beyond the food empire',
      description: 'Expanded to Mumbai @ Seawoods Mall Navi Mumbai and Andheri',
      buttonText: 'Learn More',
      spanColor: 'bg-darkpink',
      subtitleColor: 'text-darkpink',
    },
    {
      subtitle: 'CAREERS',
      title: 'Let’s build the future of food, together',
      description: 'Expanded to Mumbai @ Seawoods Mall Navi Mumbai and Andheri',
      buttonText: 'Learn More',
      spanColor: 'bg-bgbrown',
      subtitleColor: 'text-bgbrown',
    },
  ];

  return (
    <section className="max-w-[1328px] m-auto px-5">
      <div className="flex gap-5 justify-between flex-wrap md:flex-nowrap mt-[38px]">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-lightcream2 w-full lg:w-2/4 max-w-[100%] lg:max-w-[632px] px-10 md:px-[30px] lg:px-[70px] py-8 md:pt-[50px] lg:pt-[80px] md:pb-[40px] lg:pb-[60px]"
          >
            <div className="flex items-center gap-3.5">
              <span className={`${section.spanColor} size-2 md:size-5`}></span>
              <h5
                className={`${section.subtitleColor} font-firaSans-condensed font-semibold italic text-[18.47px] md:text-3xl leading-[50.74px] tracking-[-1%]`}
              >
                {section.subtitle}
              </h5>
            </div>
            <h3 className="text-brown font-firaSans-condensed font-normal text-[40px] md:text-[42px] lg:text-[70px] leading-[46.79px] lg:leading-[76px] tracking-[2%] pt-3 md:pt-[20px] lg:pt-[24px] pb-[23px] md:pb-[30px] lg:pb-[42px]">
              {section.title}
            </h3>
            <p className="text-darkgray font-firaSans font-normal leading-[16.62px] md:leading-[27px] text-[12px] md:text-xl max-w-[400px]">
              {section.description}
            </p>
            <button className="group text-bgbrown font-firaSans-condensed font-medium text-[15.96px] md:text-[25.92px] leading-[100%] rounded-[30.24px] bg-bgcream w-full max-w-[141px] md:max-w-[230px] py-2 md:py-3 flex justify-center gap-4 mt-8 md:mt-[60px]">
              {section.buttonText}
              <img
                className="opacity-100 md:opacity-110 group-hover:opacity-100 transition-opacity duration-300"
                src="/icons/btn-icon.svg"
                alt="->"
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestorCareersSection;