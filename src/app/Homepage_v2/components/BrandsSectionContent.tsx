"use client";

import React from 'react';

interface BrandsSectionContent {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
}

interface Logo {
  id: number;
  name: string;
  src: string;
}

const BrandsSection: React.FC = () => {
  // Brands section content
  const content: BrandsSectionContent = {
    subtitle: 'OUR Brands',
    title: 'United by great taste',
    description: 'Our portfolio brings together a diverse range of food experiences that are suited to any occasion, and designed to create memorable experiences.',
    buttonText: 'Learn More',
  };

  // Logo data
  const logos: Logo[] = [
    { id: 1, name: "Dum Safar", src: "/placeholder.svg?height=60&width=120&text=Dum+Safar" },
    { id: 2, name: "UBQ", src: "/placeholder.svg?height=60&width=120&text=UBQ" },
    { id: 3, name: "Nom", src: "/placeholder.svg?height=60&width=120&text=nom" },
    { id: 4, name: "Toscano", src: "/placeholder.svg?height=60&width=120&text=TOSCANO" },
    { id: 5, name: "Barbeque Nation", src: "/placeholder.svg?height=60&width=120&text=BARBEQUE+NATION" },
    { id: 6, name: "Brand 6", src: "/placeholder.svg?height=60&width=120&text=Brand+6" },
    { id: 7, name: "Brand 7", src: "/placeholder.svg?height=60&width=120&text=Brand+7" },
    { id: 8, name: "Brand 8", src: "/placeholder.svg?height=60&width=120&text=Brand+8" },
  ];

  // Split logos into two columns
  const column1Logos = logos.slice(0, Math.ceil(logos.length / 2));
  const column2Logos = logos.slice(Math.ceil(logos.length / 2));

  // LogoCard component
  const LogoCard: React.FC<{ logo: Logo }> = ({ logo }) => (
    <div className="bg-darkcream rounded-[34px] md:rounded-[53.48px] p-6 h-[149px] md:h-[180px] lg:h-[230px] w-[132px] md:w-[95%] lg:w-[203px] flex-shrink-0 flex justify-center items-center">
      <img
        src={logo.src || "/placeholder.svg"}
        alt={logo.name}
        className="max-w-full max-h-16 object-contain"
      />
    </div>
  );

  // OURBrands component
  const OURBrands: React.FC = () => (
    <div className="flex gap-2 md:gap-0 overflow-hidden max-w-[420px]">
      {/* Column 1 - Moving Up */}
      <div className="flex-1 relative overflow-hidden">
        <div className="scroll-up-smooth flex flex-col gap-2">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex flex-col gap-2">
              {column1Logos.map((logo) => (
                <LogoCard key={`${setIndex}-${logo.id}`} logo={logo} />
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Column 2 - Moving Down */}
      <div className="flex-1 relative overflow-hidden">
        <div className="scroll-down-smooth flex flex-col gap-2">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex flex-col gap-2 items-end">
              {column2Logos.map((logo) => (
                <LogoCard key={`${setIndex}-${logo.id}`} logo={logo} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section>
      <div className="max-w-[1288px] m-auto bg-bgbrown mt-[60px] md:mt-[100px] lg:mt-[189px]">
        <div className="flex justify-between gap-5 h-[auto] md:h-[702px]">
          <div className="relative w-full max-w-[100%] md:max-w-[460px] md:w-2/4 flex flex-wrap flex-col justify-between mt-[35px] mb-[40px] md:mb-[72px] mr-[20px] md:mr-[0px] ml-[20px] lg:ml-[60px]">
            <h5 className="text-white font-firaSans-condensed font-semibold italic text-2xl md:text-3xl leading-[40px] tracking-[-1%] uppercase flex items-center gap-2 mb-[10px] md:mb-[33px]">
              <span className="block size-2 md:size-5 bg-[#F47F43] animate-dotPulse"></span>
              {content.subtitle}
            </h5>
            <div className="flex md:hidden justify-center w-full relative max-w-[100%] h-[396px] mb-10 mt-5 before:content-[''] before:absolute before:top-0 before:w-full before:h-[94px] before:z-50 before:bg-[linear-gradient(0deg,rgba(93,55,64,0)_0%,#5D3740_100%)] after:content-[''] after:absolute after:bottom-0 after:w-full after:h-[94px] after:z-50 after:bg-[linear-gradient(180deg,rgba(93,55,64,0)_0%,#5D3740_100%)]">
              <OURBrands />
            </div>
            <div>
              <h4 className="text-white font-firaSans-condensed font-semibold text-[28px] md:text-[46px] leading-[42px] md:leading-[56px] mb-[30px]">
                {content.title}
              </h4>
              <p className="text-white font-firaSans-condensed font-normal text-base md:text-[27.27px] leading-[26px] md:leading-[130%]">
                {content.description}
              </p>
            </div>
            <button className="group text-bgbrown font-firaSans-condensed font-medium text-[18.59px] md:text-[25.92px] leading-[100%] rounded-[30.24px] bg-bgcream w-full max-w-[165px] md:max-w-[230px] py-3 flex justify-center gap-4 m-auto md:m-0 mt-6 md:mt-0">
              {content.buttonText}
              <img
                className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                src="/icons/btn-icon.svg"
                alt="->"
              />
            </button>
          </div>
          <div className="w-2/4 overflow-hidden relative md:flex justify-center pr-5 hidden">
            <div className="w-full max-w-[420px] before:content-[''] before:absolute before:top-0 before:w-full before:h-[146px] before:z-50 before:bg-[linear-gradient(0deg,rgba(93,55,64,0)_0%,#5D3740_100%)] after:content-[''] after:absolute after:bottom-0 after:w-full after:h-[146px] after:z-50 after:bg-[linear-gradient(180deg,rgba(93,55,64,0)_0%,#5D3740_100%)]">
              <OURBrands />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;