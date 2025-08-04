"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
const TimelineComponent = () => {
    const [isExpanded, setIsExpanded] = useState(false);
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
        }
    ];
    // Duplicate timeline data for infinite scroll
    const infiniteTimelineData = [...timelineData, ...timelineData, ...timelineData];
    const displayedItems = isExpanded ? timelineData : timelineData.slice(0, 3);
    return (
        <div className="bg-gradient-to-br from-orange-50 to-red-50 min-h-screen p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
                        <h2 className="text-orange-600 font-semibold text-lg tracking-wide">
                            OUR JOURNEY
                        </h2>
                    </div>
                </motion.div>
                {/* Desktop Infinite Scrolling Timeline */}
                <div className="hidden md:block overflow-hidden">
                    <div className="relative py-20">
                        {/* Infinite Scrolling Container */}
                        <motion.div
                            className="flex gap-8"
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
                                    className="flex-shrink-0 w-80 relative"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: (index % timelineData.length) * 0.1,
                                        duration: 0.6,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -10,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    {/* Timeline Point */}
                                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-10">
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{
                                                delay: (index % timelineData.length) * 0.1 + 0.3,
                                                type: "spring",
                                                stiffness: 200
                                            }}
                                            className="w-5 h-5 bg-orange-500 rounded-full border-4 border-white shadow-xl"
                                        />
                                    </div>
                                    {/* Connecting Line to Next Item */}
                                    {index < infiniteTimelineData.length - 1 && (
                                        <div className="absolute top-2.5 left-1/2 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transform translate-x-full"></div>
                                    )}
                                    {/* Content Card */}
                                    <motion.div
                                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 mt-8 backdrop-blur-sm"
                                        whileHover={{
                                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                            borderColor: "#f97316"
                                        }}
                                    >
                                        <motion.h3
                                            className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: (index % timelineData.length) * 0.1 + 0.4 }}
                                        >
                                            {item.year}
                                        </motion.h3>
                                        <motion.p
                                            className="text-gray-700 font-medium leading-relaxed text-base"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: (index % timelineData.length) * 0.1 + 0.6 }}
                                        >
                                            {item.title}
                                        </motion.p>
                                        {item.subtitle && (
                                            <motion.p
                                                className="text-gray-500 text-sm mt-3 italic"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: (index % timelineData.length) * 0.1 + 0.8 }}
                                            >
                                                {item.subtitle}
                                            </motion.p>
                                        )}
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                        {/* Gradient Overlays for Seamless Effect */}
                        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-orange-50 to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-orange-50 to-transparent z-20 pointer-events-none"></div>
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
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200">
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "100%" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="bg-gradient-to-b from-orange-400 to-red-400 w-full"
                            />
                        </div>
                        <div className="space-y-8">
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
                                        className="relative flex items-start gap-6"
                                        layout
                                    >
                                        {/* Timeline Point */}
                                        <div className="relative z-10">
                                            <motion.div
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{
                                                    delay: index * 0.2 + 0.3,
                                                    type: "spring",
                                                    stiffness: 200
                                                }}
                                                className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"
                                            />
                                        </div>
                                        {/* Content Card */}
                                        <motion.div
                                            className="flex-1 bg-white rounded-lg p-6 shadow-lg border border-gray-100"
                                            whileHover={{
                                                scale: 1.02,
                                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <motion.h3
                                                className="text-2xl font-bold text-gray-800 mb-3"
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: index * 0.2 + 0.4 }}
                                            >
                                                {item.year}
                                            </motion.h3>
                                            <motion.p
                                                className="text-gray-600 font-medium leading-relaxed"
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: index * 0.2 + 0.6 }}
                                            >
                                                {item.title}
                                            </motion.p>
                                            {item.subtitle && (
                                                <motion.p
                                                    className="text-gray-500 text-sm mt-2"
                                                    initial={{ x: -20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: index * 0.2 + 0.8 }}
                                                >
                                                    {item.subtitle}
                                                </motion.p>
                                            )}
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
                        className="flex justify-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <motion.button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-md"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="font-medium text-gray-700">
                                {isExpanded ? 'VIEW LESS' : 'VIEW MORE'}
                            </span>
                            <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown className="w-4 h-4 text-gray-500" />
                            </motion.div>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default TimelineComponent;