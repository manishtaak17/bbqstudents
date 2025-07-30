"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface OurJurney {
  subtitle: string;
  description: string;
}

interface TimelineItem {
  year: string;
  text: string;
}

const OurJurney: React.FC = () => {
  // Journey section content
  const content: OurJurney = {
    subtitle: 'OUR JOURNEY',
    description:
      'Our portfolio brings together a diverse range of food experiences that are suited to any occasion, and designed to create memorable experiences.',
  };

  // Timeline data
  const timelineData: TimelineItem[] = [
    { year: '2010', text: 'First Barbeque Nation restaurant was open in Mumbai' },
    { year: '2011', text: 'Another restaurant in the Indranagar, Bangalore' },
    { year: '2012', text: 'GSI Guest Satisfaction index was introduced' },
    { year: '2013', text: 'GSI Guest Satisfaction index was introduced' },
    { year: '2014', text: 'GSI Guest Satisfaction index was introduced' },
    { year: '2015', text: 'GSI Guest Satisfaction index was introduced' },
    { year: '2016', text: 'GSI Guest Satisfaction index was introduced' },
    { year: '2017', text: 'GSI Guest Satisfaction index was introduced' },
    { year: '2009', text: 'GSI Guest Satisfaction index was introduced last' },
  ];

  // TimelineScrollSection component
  const TimelineScrollSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollTrackRef = useRef<HTMLDivElement>(null);
    const [scrollAmount, setScrollAmount] = useState(0);
    const [horizontalProgress, setHorizontalProgress] = useState(0);
    const isScrollingHorizontally = useRef(false);
    const [showAllMobile, setShowAllMobile] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
      if (isMobile) return;

      const handleWheel = (e: WheelEvent) => {
        if (!sectionRef.current || !scrollTrackRef.current) return;

        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;

        const sectionInView = sectionTop <= viewportHeight * 0.7 && sectionBottom >= viewportHeight * 0.3;

        if (sectionInView) {
          const totalScroll = scrollTrackRef.current.scrollWidth - window.innerWidth;

          if (totalScroll > 0) {
            const canScrollHorizontally =
              (horizontalProgress < 1 && e.deltaY > 0) || (horizontalProgress > 0 && e.deltaY < 0);

            if (canScrollHorizontally) {
              e.preventDefault();
              isScrollingHorizontally.current = true;

              const delta = e.deltaY;
              const sensitivity = 0.0008;
              let newProgress = horizontalProgress + delta * sensitivity;
              newProgress = Math.min(Math.max(newProgress, 0), 1);

              setHorizontalProgress(newProgress);

              const easedProgress = newProgress * newProgress * (3 - 2 * newProgress);
              const newScrollAmount = easedProgress * totalScroll;
              setScrollAmount(newScrollAmount);

              if (newProgress <= 0 || newProgress >= 1) {
                isScrollingHorizontally.current = false;
              }
            } else {
              isScrollingHorizontally.current = false;
            }
          }
        } else {
          if (sectionTop > viewportHeight * 0.7) {
            setHorizontalProgress(0);
            setScrollAmount(0);
            isScrollingHorizontally.current = false;
          }
        }
      };

      window.addEventListener('wheel', handleWheel, { passive: false });
      return () => window.removeEventListener('wheel', handleWheel);
    }, [horizontalProgress, isMobile]);

    const visibleItems = isMobile ? (showAllMobile ? timelineData : timelineData.slice(0, 3)) : timelineData;

    return (
      <div
        ref={sectionRef}
        className={`w-full relative overflow-hidden ${isMobile ? 'py-7' : 'h-[175px]'} flex justify-center items-center`}
      >
        <div className="w-full overflow-hidden px-[20px] lg:px-[100px]">
          <div
            ref={scrollTrackRef}
            className={`transition-transform duration-300 ease-out flex gap-5 ${
              isMobile ? 'flex-col transition-all duration-500 ease-in-out max-h-[2000px]' : 'flex-row'
            }`}
            style={{
              transform: isMobile ? 'none' : `translateX(-${scrollAmount}px)`,
              paddingRight: isMobile ? '0' : '40px',
            }}
          >
            {visibleItems.map((item, idx) => (
              <div
                key={idx}
                className={`min-w-[341px] border-black last:min-w-[400px] last:pr-32 ${
                  isMobile ? 'border-b pb-7' : 'border-r'
                }`}
              >
                <h3 className="text-brown font-firaSans-condensed font-medium md:font-normal text-[45px] md:text-[50px] leading-[45px] md:leading-[130%] tracking-[-1%] mt-2 md:mt-12">
                  {item.year}
                </h3>
                <p className="text-brown font-firaSans-condensed font-normal text-[17px] md:text-xl lg:text-2xl leading-[130%] max-w-[316px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          {isMobile && timelineData.length > 3 && (
            <button
              className="flex md:hidden items-center gap-4 text-darkgray font-fira-sans-condensed font-semibold text-lg leading-[30px] m-auto mt-[35px]"
              onClick={() => setShowAllMobile(!showAllMobile)}
            >
              {showAllMobile ? 'VIEW LESS' : 'VIEW MORE'}
              <Image
                src={'/icons/arrowdown.png'}
                alt="icon"
                width={15}
                height={7}
                className={`transition-transform duration-300 ${showAllMobile ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="">
      <div className="max-w-[1328px] m-auto px-5">
        <h5 className="text-darkpink font-firaSans-condensed font-semibold italic text-2xl md:text-3xl leading-[40px] tracking-[-1%] uppercase flex items-center gap-2 mt-[60px] md:mt-[62px]">
          <span className="block size-2 md:size-5 bg-[#F47F43] animate-dotPulse"></span>
          {content.subtitle}
        </h5>
        <p className="text-bgbrown font-firaSans-condensed font-normal text-lg md:text-2xl leading-[26px] md:leading-[130%] mb-[10px] md:mb-[46px] pl-2 md:pl-6">
          {content.description}
        </p>
      </div>
      <TimelineScrollSection />
    </section>
  );
};

export default OurJurney;