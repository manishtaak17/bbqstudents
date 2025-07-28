"use client"
import CounterSection from '@/components/common/CounterSection';
import React, { useState, useRef, useEffect } from 'react';
import StockExchangeSection from './StockExchangeSection';
import ResourcesSection from './ResourcesSection';
import Slider from './Slider';
import InvestorTabs from './InvestorTabs';

const Page = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="">
                <div className="max-w-[1342px] mx-auto px-5">
                    <div className="pt-[65px] md:pt-[80px] lg:pt-[147px] pb-[45px] md:pb-[60px] lg:pb-[80px]">
                        <div className="">
                            <h1 className="text-brown font-firaSans-condensed font-medium text-[45px] md:text-[80px] lg:text-[100px] leading-[45px] md:leading-[100%] lg:leading-[95px] tracking-[-1%] md:tracking-[0] uppercase md:max-w-[90%] lg:max-w-[847px]">
                                <span>Driven by Passion, Powered by growth </span>
                                <span className='inline-flex items-center gap-3'>
                                    <span className="block size-2 md:size-5 bg-redbrown animate-dotPulse"></span>
                                    <span className="block size-2 md:size-5 bg-darkgray animate-dotPulse "></span>
                                </span>
                            </h1>
                        </div>
                        <div className=" flex justify-center md:justify-end mt-6 md:mt-12">
                            <Slider />
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Progress */}
            <section className=" ">
                <div className="max-w-[1342px] mx-auto px-5">
                    <div className="flex justify-between gap-0 md:gap-6 flex-wrap  lg:flex-nowrap">
                        <div className="w-full max-w-[100%] lg:max-w-[35%]">
                            <h5 className="text-darkpink font-firaSans-condensed font-semibold italic text-2xl md:text-3xl leading-[40px] tracking-[-1%] uppercase flex items-center gap-2 ">
                                <span className="block size-2 md:size-5 bg-redbrown animate-dotPulse"></span>
                                COMPANY Progress
                            </h5>
                        </div>
                        <div className="w-full max-w-[100%] lg:max-w-[65%] mt-[20px] lg:mt-[-20px]">
                            <p className="text-brown font-firaSans-condensed font-normal text-[26px] md:text-[42px] lg:text-[50px] leading-[40px] md:leading-[120%] lg:leading-[75px] tracking-[-1%] md:tracking-[0%] max-w-[100%] lg:max-w-[778px]">Our vision is to scale memorable, high-quality dining experiences in India and abroad, which is reflected in our performance, strategy, and milestones.</p>

                        </div>
                    </div>
                </div>
            </section>
            {/* Counter Section */}
            <section>
                <div className="max-w-[1072px] m-auto pt-[80px] md:pt-[150px] lg:pt-[246px] pb-[120px] px-5">
                    <CounterSection />
                </div>
            </section>
            {/* INSIGHTS & Updates */}
            <section className=" ">
                <div className="max-w-[1342px] mx-auto px-5">
                    <div className="flex justify-between gap-0 md:gap-6 flex-wrap lg:flex-nowrap">
                        <div className="w-full max-w-[100%] lg:max-w-[35%]">
                            <h5 className="text-darkpink font-firaSans-condensed font-semibold italic text-2xl md:text-3xl leading-[40px] tracking-[-1%] uppercase flex items-center gap-2 ">
                                <span className="block size-2 md:size-5 bg-redbrown animate-dotPulse"></span>
                                INSIGHTS & Updates
                            </h5>
                        </div>
                        <div className="w-full max-w-[100%] lg:max-w-[65%] mt-[20px] lg:mt-[-20px]">
                            <p className="text-brown font-firaSans-condensed font-normal text-[26px] md:text-[42px] lg:text-[50px] leading-[40px] md:leading-[120%] lg:leading-[75px] tracking-[-1%] md:tracking-[0%] max-w-[100%] lg:max-w-[778px]">Our company reports provide a comprehensive overview of our financial performance, strategic initiatives, and operational progress. </p>

                        </div>
                    </div>
                </div>
            </section>
             {/* Investor Tabs */}
            <section className="mb-[158px] mt-[148px]">
                <InvestorTabs />
            </section>

            {/* Stock exchange  */}
            <section className="bg-bgcream md:bg-lightgray2 pt-[69px] pb-[92px]">
                <StockExchangeSection />
            </section>

            {/* Resources */}
            <section className="">
                <ResourcesSection />
            </section>

        </>
    );
};

export default Page;