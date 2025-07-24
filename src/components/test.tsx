import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTimeline = () => {
  const [selectedYear, setSelectedYear] = useState('2006');
  const [showAll, setShowAll] = useState(false);
  const timelineData = {
    '2006': {
      title: 'Hello Bahrain',
      subtitle: 'Opened at Dana Mall, Bahrain',
      description: 'Expanded to Mumbai @ Seawoods Mall Navi Mumbai and Andheri',
      image: '/images/foodimg.png'
    },
    '2010': {
      title: 'Mumbai Expansion',
      subtitle: 'Seawoods Mall Growth',
      description: 'Expanded to Mumbai @ Seawoods Mall Navi Mumbai and Andheri',
      image: '../images/foodimg.png'
    },
    '2018': {
      title: 'Major Expansion',
      subtitle: 'Multiple Locations',
      description: 'Expanded to Mumbai @ Seawoods Mall Navi Mumbai and Andheri',
      image: '/images/foodimg.png'
    },
    '2019': {
      title: 'Continued Growth',
      subtitle: 'New Ventures',
      description: 'Expanded to Mumbai @ Seawoods Mall Navi Mumbai and Andheri',
      image: '/images/foodimg.png'
    },
    '2020': {
      title: 'Pandemic Resilience',
      subtitle: 'Adaptation Phase',
      description: 'Expanded to Mumbai @ Seawoods Mall Navi Mumbai and Andheri',
      image: '/images/foodimg.png'
    },
    '2022': {
      title: 'Recognition Year',
      subtitle: 'Top Workplace Award',
      description: '200th Outlet One of the top 10 best workplaces in India for the 4th time in a row',
      image: '/images/foodimg.png'
    },
    '2023': {
      title: 'Hello Bahrain Returns',
      subtitle: 'International Expansion',
      description: 'Hello Bahrain opened at Dana Mall, Bahrain',
      image: '/images/foodimg.png'
    },
    '2024': {
      title: 'Latest Milestone',
      subtitle: 'Continued Excellence',
      description: 'Expanded to Mumbai @ Seawoods Mall Navi Mumbai and Andheri',
      image: '/images/foodimg.png'
    }
  };

  const years = Object.keys(timelineData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12 px-4">
      <div className="max-w-[1205px] mx-auto">
        {/* Mobile Layout (Below md) */}
        <div className="md:hidden space-y-0">
          <motion.div layout initial={false} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <AnimatePresence initial={false}>
              {(showAll ? years : years.slice(0, 3)).map((year) => (
                <motion.div
                  key={year}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="flex justify-between items-center gap-5 border-b border-gray-300 px-3 py-7"
                >
                  <div className="flex-1">
                    <h3 className="font-firaSans-condensed font-medium text-[35.78px] text-[#5b2b27] leading-[100%] mb-1">
                      {year}
                    </h3>
                    <p className="font-firaSans-condensed font-normal text-[17.89px] text-[#5b2b27] leading-[24.15px]">
                      {timelineData[year].description}
                    </p>
                  </div>
                  <div className="size-[116px] shrink-0 rounded overflow-hidden">
                    <img
                      src={timelineData[year].image}
                      alt={timelineData[year].title}
                      className="w-full h-full object-cover border border-blue-300"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Toggle */}
          {years.length > 3 && (
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

        {/* Desktop/Tablet Layout (md and above) */}
        <div className="hidden md:flex gap-0 md:gap-[25px] lg:gap-[80px]">
          {/* Timeline Section */}
          <div className="order-1 md:order-2 md:w-[55%] lg:w-[60%] max-w-[702px]">
            <div className="relative">
              <div className="space-y-0">
                {years.map((year) => (
                  <motion.div
                    key={year}
                    className={`relative cursor-pointer transition-all duration-300 ${selectedYear === year ? 'scale-100 bg-darkcream' : 'hover:scale-102'
                      }`}
                    onHoverStart={() => setSelectedYear(year)}
                    onClick={() => setSelectedYear(year)}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="transition-all duration-300 flex justify-between items-center gap-10 px-[14px] py-8 border-b border-black">
                      <span
                        className={`text-darkgray font-firaSans-condensed font-semibold text-[40px] tracking-[-1%] transition-colors duration-300 ${selectedYear === year ? 'text-darkgray' : 'text-gray-600'
                          }`}
                      >
                        {year}
                      </span>
                      <p
                        className={`font-firaSans-condensed font-normal text-xl max-w-[446px] transition-colors duration-300 ${selectedYear === year ? 'text-gray-700' : 'text-gray-500'
                          }`}
                      >
                        {timelineData[year].description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Image & Content */}
          <div className="order-2 md:order-1 md:w-[45%] lg:w-[40%] max-w-[442px]">
            <div className="sticky top-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedYear}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={timelineData[selectedYear].image}
                      alt={timelineData[selectedYear].title}
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
                      {timelineData[selectedYear].title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="font-firaSans-condensed italic text-2xl lg:text-2xl leading-[130%] font-normal text-darkgray"
                    >
                      {timelineData[selectedYear].subtitle}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default InteractiveTimeline;