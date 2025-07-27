"use client"
import CounterSection from '@/components/common/CounterSection';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Slider component defined outside the page component
const Slider = () => {
    const images = [
        '/images/food-plate-investor-page.jpg',
        '/images/drink-investor-page.jpg',
        '/images/view-investor-page.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-[481px] h-[415px] md:h-[541px] overflow-hidden">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}
        </div>
    );
};


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

            {/* INSIGHTS & Updates */}
            <section className="bg-bgcream md:bg-lightgray2 pt-[69px] pb-[92px]">
                <div className="max-w-[1262px] mx-auto px-5">
                    <div className="flex justify-between gap-0 md:gap-0 flex-wrap md:flex-nowrap">
                        <div className="w-full max-w-[100%] md:max-w-[290px] flex items-center  lg:items-end border-b md:border-b-0 border-darkgray pb-5 md:pb-0">
                            <h5 className="text-darkpink font-firaSans-condensed font-semibold italic text-2xl md:text-3xl leading-[33px] md:leading-[40px] tracking-[-1%] uppercase flex items-start md:items-center gap-4 md:gap-2 max-w-[301px]">
                                <p className="block size-5 md:size-3 bg-redbrown mt-2 md:mt-0 "></p>
                                <span> Stock exchange <br /> information</span>
                            </h5>
                        </div>
                        <div className="w-full max-w-[100%] md:max-w-[747px] flex justify-between flex-wrap md:flex-nowrap gap-5 mt-[66px] md:mt-0 px-4 md:px-0">
                            <div className="w-full max-w-[100%] md:max-w-[292px] ">
                                <div className="border-b-0 md:border-b border-darkgray pb-0 md:pb-5 mb-5">
                                    <p className='text-darkgray font-firaSans-condensed font-normal md:font-semibold not-italic md:italic text-2xl md:text-3xl leading-[40px] tracking-[-1%] uppercase flex justify-between md:justify-start items-center gap-5 '>BSE <Image src={'/icons/areo-45.svg'} alt='icon' width={20} height={20} /></p>
                                </div>
                                <div className="border-b md:border-b-0 border-darkgray pb-4 md:pb-0">
                                    <h5 className='flex justify-between items-center gap-5 text-bgbrown font-firaSans-condensed italic md:not-italic font-semibold text-[30px] md:text-[46px] leading-[40px] md:leading-[56px]'>3,500 <Image src={'/icons/stock.svg'} className='mb-[-19px] md:mb-0' alt='icon' width={62} height={35} /></h5>
                                    <p className='text-bgbrown font-firaSans-condensed font-normal md:font-medium text-[22px] md:text-2xl leading-[27px] md:leading-[56px]'>−6.75 (1.76%)today</p>
                                </div>
                            </div>
                            <div className="w-full max-w-[100%] md:max-w-[292px] ">
                                <div className="border-b-0 md:border-b border-darkgray pb-0 md:pb-5 mb-5">
                                    <p className='text-darkgray font-firaSans-condensed font-normal md:font-semibold not-italic md:italic text-2xl md:text-3xl leading-[40px] tracking-[-1%] uppercase flex justify-between md:justify-start items-center gap-5 '>BSE <Image src={'/icons/areo-45.svg'} alt='icon' width={20} height={20} /></p>
                                </div>
                                <div className="pb-4 md:pb-0">
                                    <h5 className='flex justify-between items-center gap-5 text-bgbrown font-firaSans-condensed italic md:not-italic font-semibold text-[30px] md:text-[46px] leading-[40px] md:leading-[56px]'>3,500 <Image src={'/icons/stock.svg'} className='mb-[-19px] md:mb-0' alt='icon' width={62} height={35} /></h5>
                                    <p className='text-bgbrown font-firaSans-condensed font-normal md:font-medium text-[22px] md:text-2xl leading-[27px] md:leading-[56px]'>−6.75 (1.76%)today</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* <section className=''>
                <div className="max-w-[1262px] m-auto px-5">
                    <div className="">
                        <h5 className="text-darkpink font-firaSans-condensed font-semibold italic text-2xl md:text-3xl leading-[40px] tracking-[-1%] uppercase flex items-center gap-2 ">
                            <span className="block size-2 md:size-3 bg-redbrown animate-dotPulse"></span>RESOURCES</h5>
                        <p className="text-darkgray font-firaSans-condensed font-normal text-2xl leading-[130%] mt-5 ml-5 max-w-[296px] mb-[60px]">For any specific queries, reach out to our team members.</p>
                    </div>
                    <div className="ml-5 flex justify-between gap-5">
                        <div className="border-t border-darkpink max-w-[295px] pt-5 flex flex-col justify-between">
                            <h5 className="text-darkgray font-firaSans-condensed font-medium text-lg md:text-2xl leading-[28px] md:leading-[30px] ">For Shareholders' Grievance Redressal</h5>
                            <div className=" mb-8">
                                <h5 className="text-darkgray font-firaSans-condensed font-normal text-lg md:text-2xl leading-[23px] md:leading-[30px] mt-8 ">Ms. Nagamani CY</h5>
                                <p className="text-darkgray font-firaSans-condensed font-normal text-sm md:text-lg leading-[17px] md:leading-[27px] ">Company Secretary & Compliance Officer</p>
                            </div>
                            <p className="text-darkgray font-firaSans-condensed font-normal text-sm md:text-lg leading-[17px] md:leading-[27px] flex gap-1"><b>Email:</b> compliance@barbequenation.com</p>
                        </div>
                        <div className="border-t border-darkpink max-w-[295px] pt-5">
                            <h5 className="text-darkgray font-firaSans-condensed font-medium text-lg md:text-2xl leading-[28px] md:leading-[30px] ">For Shareholders' Grievance Redressal</h5>
                            <div className=" mb-8">
                                <h5 className="text-darkgray font-firaSans-condensed font-normal text-lg md:text-2xl leading-[23px] md:leading-[30px] mt-8 ">Ms. Nagamani CY</h5>
                                <p className="text-darkgray font-firaSans-condensed font-normal text-sm md:text-lg leading-[17px] md:leading-[27px] ">Company Secretary & Compliance Officer</p>
                            </div>
                            <p className="text-darkgray font-firaSans-condensed font-normal text-sm md:text-lg leading-[17px] md:leading-[27px] flex gap-1"><b>Email:</b> compliance@barbequenation.com</p>
                        </div>
                        <div className="border-t border-darkpink max-w-[295px] pt-5">
                            <h5 className="text-darkgray font-firaSans-condensed font-medium text-lg md:text-2xl leading-[28px] md:leading-[30px] ">For Shareholders' Grievance Redressal</h5>
                            <div className=" mb-8">
                                <h5 className="text-darkgray font-firaSans-condensed font-normal text-lg md:text-2xl leading-[23px] md:leading-[30px] mt-8 ">Ms. Nagamani CY</h5>
                                <p className="text-darkgray font-firaSans-condensed font-normal text-sm md:text-lg leading-[17px] md:leading-[27px] ">Company Secretary & Compliance Officer</p>
                            </div>
                            <p className="text-darkgray font-firaSans-condensed font-normal text-sm md:text-lg leading-[17px] md:leading-[27px] flex gap-1"><b>Email:</b> compliance@barbequenation.com</p>
                            <p className="text-darkgray font-firaSans-condensed font-normal text-sm md:text-lg leading-[17px] md:leading-[27px] flex gap-1"><b>Email:</b> compliance@barbequenation.com</p>
                            <p className="text-darkgray font-firaSans-condensed font-normal text-sm md:text-lg leading-[17px] md:leading-[27px] flex gap-1"><b>Email:</b> compliance@barbequenation.com</p>
                        </div>
                         
                        

                    </div>
                </div>
            </section> */}
        </>
    );
};

export default Page;