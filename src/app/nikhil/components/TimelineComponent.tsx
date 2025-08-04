"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
const TimelineComponent = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const timelineDatadesk = [
        {
            year: '2006',
            title: 'Expanded to Mumbai @ Seawoods Mall',
            subtitle: 'Navi Mumbai and Andheri'
        },
        {
            year: '2010',
            title: 'First Barbeque Nation restaurant was open in Mumbai',
            subtitle: ''
        },
        {
            year: '2011',
            title: 'Another restaurant in the Indranagar, Bangalore',
            subtitle: ''
        },
        {
            year: '2012',
            title: 'GSI Guest Satisfaction index was introduced',
            subtitle: ''
        },
        {
            year: '2014',
            title: 'GSI Guest Satisfaction index was introduced',
            subtitle: ''
        },
        {
            year: '2018',
            title: 'Expanded to Mumbai @ Seawoods Mall',
            subtitle: 'Navi Mumbai and Andheri'
        },
        {
            year: '2006',
            title: 'Expanded to Mumbai @ Seawoods Mall',
            subtitle: 'Navi Mumbai and Andheri'
        },
        {
            year: '2010',
            title: 'First Barbeque Nation restaurant was open in Mumbai',
            subtitle: ''
        },
        {
            year: '2011',
            title: 'Another restaurant in the Indranagar, Bangalore',
            subtitle: ''
        },
        {
            year: '2012',
            title: 'GSI Guest Satisfaction index was introduced',
            subtitle: ''
        },
        {
            year: '2014',
            title: 'GSI Guest Satisfaction index was introduced',
            subtitle: ''
        },
        {
            year: '2018',
            title: 'Expanded to Mumbai @ Seawoods Mall',
            subtitle: 'Navi Mumbai and Andheri'
        },

    ];
    const timelineData = [
        {
            year: '2006',
            title: 'Expanded to Mumbai @ Seawoods Mall',
            subtitle: 'Navi Mumbai and Andheri'
        },
        {
            year: '2010',
            title: 'First Barbeque Nation restaurant was open in Mumbai',
            subtitle: ''
        },
        {
            year: '2011',
            title: 'Another restaurant in the Indranagar, Bangalore',
            subtitle: ''
        },
        {
            year: '2012',
            title: 'GSI Guest Satisfaction index was introduced',
            subtitle: ''
        },
        {
            year: '2014',
            title: 'GSI Guest Satisfaction index was introduced',
            subtitle: ''
        },
        {
            year: '2018',
            title: 'Expanded to Mumbai @ Seawoods Mall',
            subtitle: 'Navi Mumbai and Andheri'
        },
    ];
    // Duplicate timeline data for infinite scroll
    const infiniteTimelineData = [...timelineDatadesk, ...timelineDatadesk, ...timelineDatadesk];
    const displayedItems = isExpanded ? timelineData : timelineData.slice(0, 3);
    return (
        <div className="bg-bgcream  pl-[30px] xl:pl-[144px] pr-5 pt-11 md:pt-[62px] pb-[80px] lg:pb-[259px]">
            <div className="">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className=""
                >
                    <div className="flex items-center justify-start gap-[19px] w-full ">
                        <span className="inline-block size-3 bg-[#F47F43]"></span>
                        <h4 className="uppercase tracking-[-1%] leading-[50px] italic text-[24px] font-semibold font-firaSans-condensed text-darkpink">
                            our JOURNEY
                        </h4>
                    </div>
                </motion.div>
                {/* Desktop Infinite Scrolling Timeline */}
                <div className="hidden md:block overflow-hidden">
                    <div className="relative pt-11 ">
                        {/* Infinite Scrolling Container */}
                        <motion.div
                            className="flex items-end"
                            animate={{
                                x: [0, -2400], // Adjust based on card width and gap
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 40,
                                    ease: "linear",
                                },
                            }}
                            style={{ width: 'max-content' }}
                        >
                            {infiniteTimelineData.map((item, index) => (
                                <motion.div
                                    key={`${item.year}-${index}`}
                                    className="relative border-r border-black/30 mr-[35px] pr-[21px] w-1/4 max-w-[335px]"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: (index % timelineData.length) * 0.1,
                                        duration: 0.6,
                                        type: "spring",
                                        stiffness: 100
                                    }}

                                >
                                    {/* Timeline Point */}

                                    {/* Content Card */}
                                    <motion.div
                                        className="transition-all duration-300 mt-10"

                                    >
                                        <motion.h3
                                            className="text-[50px] font-normal text-brown mb-[2px] font-firaSans-condensed tracking-[-1.05px] leading-[65px]"
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: (index % timelineData.length) * 0.1 + 0.4 }}
                                        >
                                            {item.year}
                                        </motion.h3>
                                        <motion.p
                                            className="text-[24px] font-normal text-bgbrown mb-[5px] font-firaSans-condensed leading-[130%]"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: (index % timelineData.length) * 0.1 + 0.6 }}
                                        >
                                            {item.title}
                                        </motion.p>

                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </div>
                {/* Mobile Timeline */}
                <div className="md:hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >

                        <div className="mt-4">
                            <AnimatePresence>
                                {displayedItems.map((item, index) => (
                                    <motion.div
                                        key={item.year}
                                        initial={{ opacity: 0, x: -50, scale: 0.8 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: -50, scale: 0.8 }}
                                        transition={{
                                            delay: index * 0.2,
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 12
                                        }}
                                        className="relative flex items-start gap-6 border-b border-[#C4C4C4] mb-7.5 pb-7.5 "
                                        layout
                                    >

                                        {/* Content Card */}
                                        <motion.div
                                        >
                                            <motion.h3
                                                className="text-[45px] font-medium text-bgbrown mb-[5px] font-firaSans-condensed leading-[45px]"
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: index * 0.2 + 0.4 }}
                                            >
                                                {item.year}
                                            </motion.h3>
                                            <motion.p
                                                className="text-[17px] font-normal text-bgbrown mb-[5px] font-firaSans leading-[24px]"
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: index * 0.2 + 0.6 }}
                                            >
                                                {item.title}
                                            </motion.p>

                                        </motion.div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
                {/* View More Button (Mobile Only) */}
                <div className="md:hidden">
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <motion.button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex items-center gap-2 text-[18px] font-medium text-darkgray font-firaSans-condensed leading-[23px]"
                        >
                            <span className="">
                                {isExpanded ? 'VIEW LESS' : 'VIEW MORE'}
                            </span>
                            <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown className="w-4 h-4 text-darkgray" />
                            </motion.div>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default TimelineComponent;