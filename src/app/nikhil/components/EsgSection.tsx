'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface EsgData {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  listdata: string[];
}

const EsgSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const esgData: EsgData[] = [
    {
      id: 1,
      title: "Environmental Stewardship",
      subtitle: "Growing sustainably, one initiative at a time.",
      image: "/images/Environmental-Stewardship.png",
      listdata: [
        "Adoption of energy-efficient practices including LED lighting, IOT-based electricity monitoring, and energy-saving kitchen appliances across outlets.",
        "Food waste is actively minimized and redirected to NGOs and food banks, reducing landfill load.",
        "Use of air scrubbers, biodegradable packaging, and sustainable takeaway solutions to reduce pollution and plastic use.",
        "Sustainable sourcing of seafood and meat with BAP/HACCP certifications; emphasis on organic and locally procured ingredients wherever possible.",
        "Tree plantation drives across campuses and ongoing efforts to build environmental awareness among staff and guests.",
      ],
    },
    {
      id: 2,
      title: "Social Responsibility",
      subtitle: "Putting people at the heart of everything we do",
      image: "/images/Social-Responsibility.png",
      listdata: [
        "Ranked among India’s Best Companies to Work For, with employee-first initiatives like ‘Breaking Barriers – Safalta ki Aur’ and the Structured Career Progression Model.",
        "Empowering women through ‘Her Power’, ‘Aapki Saheli’, and our mascot Barbeque Rani, resulting in a jump from ~5% to 12% women workforce in two years.",
        "Skill-building through partnerships with over 50 hotel management institutes, as well as impacting over 3,000 youth under PMKVY 4.0.",
        "The ‘Big Appetite, Bigger Hearts’ campaign served 40,000+ meals to underprivileged children across India and international locations, reinforcing our commitment to community care.",
      ],
    },
    {
      id: 3,
      title: "Governance",
      subtitle: "Leading with integrity, accountability, and transparency.",
      image: "/images/Governance.png",
      listdata: [
        "Transparent stakeholder communication is central to how we operate — keeping customers, employees, investors, and regulators informed and engaged.",
        "Our Board includes 6 non-executive directors, of which 3 (including the Chairman) are independent — ensuring strong checks and balances.",
        "We uphold a zero-tolerance policy towards unethical practices, with robust frameworks like our Whistleblower Policy, Anti-Sexual Harassment Policy, and Code of Conduct.",
      ],
    },
  ];

  // Handle window resize to detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll handler for large screens
  useEffect(() => {
    if (!isLargeScreen) return;

    const handleScroll = () => {
      let newActiveIndex = activeIndex;

      sectionRefs.current.forEach((ref, index) => {
        if (ref instanceof HTMLElement) {
          const rect = ref.getBoundingClientRect();
          const triggerPoint = window.innerHeight * 0.2;
          if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
            newActiveIndex = index;
          }
        }
      });

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex, isLargeScreen]);

  return (
    <section className="container pt-[97px] lg:pt-[180px] pb-[20px] md:pb-[100px] lg:pb-[200px]">
      <div className="flex flex-col lg:flex-row lg:gap-5">
        {/* Sticky Image Section for Desktop */}
        {isLargeScreen && (
          <div className="w-full max-w-[581px] sticky top-[100px] h-[510px] overflow-hidden">
            <div className="relative w-full h-full">
              {esgData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={{
                    y: `${(index - activeIndex) * 100}%`,
                    opacity: index === activeIndex ? 1 : 0,
                    zIndex: index === activeIndex ? 2 : 1,
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute top-0 left-0 w-full h-full"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={581}
                    height={510}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Content Sections */}
        <div className="w-full max-w-[667px]">
          {esgData.map((esgdata, index) => (
            <div
              key={esgdata.id}
              ref={isLargeScreen ? (el:any) => (sectionRefs.current[index] = el) : undefined}
              className="flex flex-col items-start justify-between gap-[0px] lg:gap-5 mb-[100px] lg:mb-[200px] last:mb-0"
            >
              <div className="w-full max-w-[581px]">
                {/* Mobile heading and image */}
                {!isLargeScreen && (
                  <>
                    <div className="flex items-center justify-start gap-[19px] w-full mb-[21px]">
                      <span className="inline-block size-3 bg-darkpink"></span>
                      <h4 className="uppercase tracking-[-1%] leading-[50px] italic text-[24px] font-semibold font-firaSans-condensed text-darkpink">
                        {esgdata.title}
                      </h4>
                    </div>
                    <Image
                      src={esgdata.image}
                      alt={esgdata.title}
                      width={581}
                      height={510}
                      className="w-full h-auto object-contain mb-[21px]"
                    />
                  </>
                )}
                {/* Desktop heading */}
                {isLargeScreen && (
                  <div className="items-center justify-start gap-[19px] w-full flex">
                    <span className="inline-block size-3 bg-darkpink"></span>
                    <h4 className="uppercase tracking-[-1%] leading-[50px] italic text-[30px] font-semibold font-firaSans-condensed text-darkpink">
                      {esgdata.title}
                    </h4>
                  </div>
                )}
              </div>
              <div className="w-full max-w-[667px] pl-[0px] md:pl-[31px]">
                <h4 className="leading-[31px] md:leading-[56px] text-[26px] md:text-[46px] font-semibold font-firaSans-condensed text-brown pt-[37px] pb-[22px] lg:pt-[10px] lg:pb-[40px]">
                  {esgdata.subtitle}
                </h4>
                <ul className="ml-[25px] md:ml-[31px]">
                  {esgdata.listdata.map((item, i) => (
                    <li
                      key={i}
                      className="text-[16px] md:text-[24px] leading-[26px] md:leading-[130%] font-firaSans-condensed font-normal text-brown md:text-black/60 mb-[28px] md:mb-[50px] last:mb-0 list-[square] marker:text-[#5B3840]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EsgSection;