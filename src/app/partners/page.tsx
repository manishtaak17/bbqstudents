"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'


const page = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);
    

    const timelineData = [
        {
            title: 'Technology',
            description: 'Let’s build smarter kitchens and smoother operations with the right tech, tools, and systems that help us serve better every day.',
            image: '/images/foodimg.png',
        },
        {
            title: 'Food & Beverage',
            description: 'Good food starts with great partners; help us bring fresh ingredients, inspiring flavors, and great beverages to the table.',
            image: '/images/foodimg.png',
        },
        {
            title: 'HORECA',
            description: 'From sturdy cookware to stylish serveware, we’re looking for partners who can help our back-of-house run smoothly and beautifully.',
            image: '/images/foodimg.png',
        },
        {
            title: 'Project Equipment',
            description: 'We’re growing fast and we need dependable partners for furniture, AC systems, kitchen equipment, and more to help us do it right.',
            image: '/images/foodimg.png',
        },
        {
            title: 'Service Providers',
            description: 'Whether it’s HR, media, maintenance, or housekeeping, we’d love to team up with service partners who care as much about quality as we do.',
            image: '/images/foodimg.png',
        },
    ];

    const selectedItem = timelineData[selectedIndex];

    return (
        <>
        <section className='container pt-[65px] pb-[68px] md:pt-[100px] md:pb-[100px] lg:pt-[178px] lg:pb-[159px]'>
            <div className='flex items-start justify-between gap-4 md:gap-5 w-full max-w-[1066px] mx-auto flex-col md:flex-row'>
                <h1 className='w-full max-w-[544px] tracking-[0] md:tracking-[-0.32px] uppercase leading-[55px] md:leading-[85px] lg:leading-[95px] text-[66px] md:text-[75px] lg:text-[100px] font-medium font-firaSans-condensed text-brown'>JOIN US ON our next chapter</h1>
                <h2 className='w-full max-w-[504px] tracking-[-0.16px] md:tracking-[0] leading-[40px] md:leading-[55px] text-[26px] md:text-[50px] font-normal font-firaSans-condensed text-brown'>Become A Partner and walk with us as we build the future of food together</h2>
            </div>
            <div className='w-full max-w-[1133px] mx-auto pt-[70px] pb-[118px] md:pt-[168px] md:pb-[93px]'>
                <Image src="/images/partner.jpg" alt="partner-image" width={1133} height={635} className="object-cover hidden md:block" />
                <Image src="/images/partner-mobile.jpg" alt="partner-image" width={1133} height={590} className="object-cover  block md:hidden" />
            </div>
            <div className='flex items-start justify-between gap-0 md:gap-5 w-full max-w-[1108px] mx-auto flex-col md:flex-row'>
                <div>
                    <div className='flex items-center justify-start gap-[19px] w-full '>
                        <span className='inline-block size-3 bg-darkgray1 '></span>
                        <h4 className='uppercase tracking-[-0.16px] leading-[33px] md:leading-[40px] italic text-[24px] lg:text-[30px] font-semibold font-firaSans-condensed text-darkpink'>REAL ESTATE</h4>
                    </div>
                    <h2 className='mt-[26px] w-full max-w-[504px] tracking-[-0.48px] leading-[65px] text-[50px] font-normal font-firaSans-condensed text-brown'>If you have properties that match our vision</h2>
                </div>
                <div className='mt-[22px] md:mt-[58px]'>
                    <h2 className='w-full max-w-[575px] tracking-[-0.16px] leading-[40px] md:leading-[44px] text-[26px] md:text-[30px] font-normal font-firaSans-condensed text-darkgray'>We're looking for high-potential locations across India and internationally to help expand our growing portfolio of restaurant brands.</h2>
                    <Link href={"#"} className='max-w-[192px]   w-full inline-block mt-6.5 md:mt-8' >
                        <button style={{
                            animation: 'subtle-float 3s ease-in-out infinite'
                        }}
                            className="bg-darkgray flex items-center justify-between gap-[19px] w-full  leading-[100%] cursor-pointer text-[24px] text-lg font-normal font-firaSans-condensed text-white rounded-3xl px-[14px] py-[13px] md:px-3.5 md:py-[13px] transition-all hover:opacity-90">
                            Get in Touch
                            <Image src="/icons/right-arrow.svg" alt="partner-image" width={21} height={21} className="object-cover" />
                        </button>
                    </Link>
                </div>
            </div>

           
        </section>
        <section className='container'>
             <div className="min-h-screen ">

                <div className="max-w-[1205px] mx-auto">
                    <div className='flex items-center justify-start gap-[19px] w-full mb-[41px]'>
                        <span className='inline-block size-3 bg-darkgray1 '></span>
                        <h4 className='uppercase tracking-[-0.16px] leading-[33px] md:leading-[40px] italic text-[24px] lg:text-[30px] font-semibold font-firaSans-condensed text-darkpink'>Other PartnersHIPS</h4>
                    </div>
                    {/* ✅ Mobile Layout */}
                    <div className="md:hidden space-y-0">
                        <motion.div layout initial={false} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                            <AnimatePresence initial={false}>
                                {(showAll ? timelineData : timelineData.slice(0, 3)).map((item, index) => (
                                    <motion.div
                                        key={index}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, height: 0, scale: 0.95 }}
                                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                                        className="flex justify-between items-center gap-5 border-b border-gray-300 px-3 py-7"
                                    >
                                        <div className="flex-1">
                                            <h3 className="font-firaSans-condensed font-medium text-[28px] text-[#5b2b27] leading-[100%] mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="font-firaSans-condensed font-normal text-[16px] text-[#5b2b27] leading-[24.15px]">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="size-[116px] shrink-0 rounded overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover border border-blue-300"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {/* Toggle */}
                        {timelineData.length > 3 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-center mt-6 text-[#5b2b27] font-semibold text-sm tracking-wide cursor-pointer"
                                onClick={() => setShowAll(!showAll)}
                            >
                                {showAll ? (
                                    <>
                                        VIEW LESS <span className="inline-block">⌃</span>
                                    </>
                                ) : (
                                    <>
                                        VIEW MORE <span className="inline-block rotate-180">⌄</span>
                                    </>
                                )}
                            </motion.div>
                        )}
                    </div>

                    {/* ✅ Desktop Layout */}
                    <div className="hidden md:flex gap-[40px]">
                        

                        {/* List */}
                        <div className="w-[60%] max-w-[702px]">
                            <div className="space-y-0">
                                {timelineData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className={`py-8 border-b border-black last-b-0 relative cursor-pointer transition-all duration-300 hover:scale-102 ${selectedIndex === index ? '' : ''
                                            }`}
                                        onMouseEnter={() => setSelectedIndex(index)}  // 👈 ONLY THIS LINE CHANGED
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="transition-all duration-300   ">
                                            <h4
                                                className={`text-darkgray font-firaSans-condensed font-semibold text-[28px] tracking-[-1%] ${selectedIndex === index ? 'text-darkgray' : 'text-gray-600'
                                                    }`}
                                            >
                                                {item.title}
                                            </h4>
                                            <p
                                                className={`font-firaSans-condensed font-normal text-xl max-w-[446px] transition-colors duration-300 ${selectedIndex === index ? 'text-gray-700' : 'text-gray-500'
                                                    }`}
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}


                            </div>
                        </div>

                        {/* Sticky Image Content */}
                        <div className="w-[40%] max-w-[442px] sticky top-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={selectedItem.image}
                                            alt={selectedItem.title}
                                            className="w-full max-w-[422px] h-[513px] object-cover"
                                        />
                                    </div>
                                    <div className="p-0">
                                        <motion.h3
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="font-firaSans-condensed italic text-2xl lg:text-2xl leading-[130%] font-normal text-darkgray mt-[17px]"
                                        >
                                            {selectedItem.title}
                                        </motion.h3>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </div>
        </section>
</>
    );
};

export default page;
