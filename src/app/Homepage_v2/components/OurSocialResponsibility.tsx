"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SocialResponsibilityContent {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  image1: { src: string; alt: string; width: number; height: number };
  image2: { src: string; alt: string; width: number; height: number };
  bannerText: string;
}

const OurSocialResponsibility: React.FC = () => {
  // Dynamic content
  const content: SocialResponsibilityContent = {
    subtitle: 'OUR SOCIAL RESPONSIBILITY',
    title: 'Good food, greater impact',
    description:
      'We believe good food should do good too: for the planet, our people, and our communities.',
    buttonText: 'Learn More',
    image1: { src: '/images/good-food.png', alt: 'Food', width: 600, height: 300 },
    image2: { src: '/images/good-food-2.png', alt: 'Earth', width: 300, height: 300 },
    bannerText: 'We do our part today\nfor a greener tomorrow',
  };

  return (
    <section className="pt-[24px] md:pt-[50px] lg:pt-[105px]">
      <div className="max-w-[1288px] m-auto bg-lightcream2 p-4">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-start">
          {/* LEFT + IMAGE + TEXT */}
          <div className="order-2 md:order-1 md:max-w-[482px] w-full mt-0 md:mt-[20px] lg:mt-[45px] ml-0 md:ml-3 lg:ml-12">
            <p className="leading-[23px] md:leading-[100%] md:text-[31.73px] text-lg font-medium font-firaSans-condensed text-darkpink md:italic flex items-center gap-2 md:pb-[13px]">
              <span className="w-3 h-3 bg-darkpink pb-[3px] md:pb-[20px]" />
              {content.subtitle}
            </p>
            <h2 className="leading-[30px] md:leading-[100%] md:text-[42px] lg:text-[70px] text-[24px] font-normal text-darkgray font-firaSans-condensed mb-8">
              {content.title}
            </h2>

            {/* IMAGE shown between text on mobile */}
            <div className="grid gap-4 order-1 md:hidden gap-x-[9px] gap-y-[5px]">
              <div className="col-span-2">
                <Image
                  src={content.image1.src}
                  alt={content.image1.alt}
                  width={content.image1.width}
                  height={content.image1.height}
                  className="w-full object-cover"
                />
              </div>
              <div>
                <Image
                  src={content.image2.src}
                  alt={content.image2.alt}
                  width={content.image2.width}
                  height={content.image2.height}
                  className="w-full h-[179px] object-cover"
                />
              </div>
              <div className="bg-darkpink flex items-center justify-center p-4 text-center text-white font-semibold text-base">
                <p>{content.bannerText}</p>
              </div>
            </div>

            <p className="leading-[100%] text-base md:text-[25.38px] font-normal font-firaSans-condensed max-[768px]:pt-[13px] text-black/60 max-w-[460px] mb-10">
              {content.description}
            </p>

            <Link className="max-w-[150px] w-full" href="#">
              <button className="group text-white font-firaSans-condensed font-normal text-[18.59px] md:text-[24.32px] leading-[100%] rounded-[30.24px] bg-darkgray w-full max-w-[165px] md:max-w-[192px] py-3 flex justify-center gap-4 m-auto md:m-0">
                {content.buttonText}
                <img
                  className="opacity-100 md:opacity-100 group-hover:opacity-100 transition-opacity duration-300"
                  src="/icons/btn-icon-wht.svg"
                  alt="->"
                />
              </button>
            </Link>
          </div>

          {/* RIGHT SIDE IMAGE GRID (desktop only) */}
          <div className="hidden md:grid grid-cols-2 gap-4 order-1">
            <div className="col-span-2 overflow-hidden">
              <Image
                src={content.image1.src}
                alt={content.image1.alt}
                width={256}
                height={270}
                className="w-full h-[179px] object-cover md:h-[270px] hover:scale-110 duration-500"
              />
            </div>
            <div className="overflow-hidden">
              <Image
                src={content.image2.src}
                alt={content.image2.alt}
                width={227}
                height={262}
                className="w-full h-[174px] object-cover md:h-[262px] hover:scale-110 duration-500"
              />
            </div>
            <div className="bg-darkpink flex items-center justify-center p-4 text-center text-white font-semibold text-base">
              <p className="leading-[23px] md:leading-[33px] text-lg md:text-[31px] font-medium font-firaSans-condensed md:font-firaSans text-white text-start">
                {content.bannerText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSocialResponsibility;