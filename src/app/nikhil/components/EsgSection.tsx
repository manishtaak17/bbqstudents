"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface EsgData {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  listdata: string[];
  imgtitle: string;
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
      imgtitle: "United FoodBrands ESG Profile",
      listdata: [
        "Adoption of energy-efficient practices including LED lighting, IOT-based electricity monitoring, and energy-saving kitchen appliances across outlets.",
        "Food waste is actively minimized and redirected to NGOs and food banks, reducing landfill load.",
        "Use of air scrubbers, biodegradable packaging, and sustainable takeaway solutions to reduce pollution and plastic use.",
        "Sustainable sourcing of seafood and meat with BAP/HACCP certifications; emphasis on organic and locally procured ingredients wherever possible.",
        "Tree plantation drives across campuses and ongoing efforts to build environmental awareness among staff and guests.",
      ]
    },
    {
      id: 2,
      title: "Social Responsibility",
      subtitle: "Putting people at the heart of everything we do",
      image: "/images/Social-Responsibility.png",
      imgtitle: "United FoodBrands ESG Profile",
      listdata: [
        "Ranked among India’s Best Companies to Work For, with employee-first initiatives like ‘Breaking Barriers – Safalta ki Aur’ and the Structured Career Progression Model.",
        "Empowering women through ‘Her Power’, ‘Aapki Saheli’, and our mascot Barbeque Rani, resulting in a jump from ~5% to 12% women workforce in two years.",
        "Skill-building through partnerships with over 50 hotel management institutes, as well as impacting over 3,000 youth under PMKVY 4.0.",
        "The ‘Big Appetite, Bigger Hearts’ campaign served 40,000+ meals to underprivileged children across India and international locations, reinforcing our commitment to community care."
      ]
    },
    {
      id: 3,
      title: "Governance",
      subtitle: "Leading with integrity, accountability, and transparency.",
      image: "/images/Governance.png",
      imgtitle: "United FoodBrands ESG Profile",
      listdata: [
        "Transparent stakeholder communication is central to how we operate — keeping customers, employees, investors, and regulators informed and engaged.",
        "Our Board includes 6 non-executive directors, of which 3 (including the Chairman) are independent — ensuring strong checks and balances.",
        "We uphold a zero-tolerance policy towards unethical practices, with robust frameworks like our Whistleblower Policy, Anti-Sexual Harassment Policy, and Code of Conduct.",
      ]
    },
  ];

  // 🧠 Expanded state tracked per ESG section by ID
  const [expandedSection, setExpandedSection] = useState<number[]>([]);
  const toggleSection = (id: number) => {
    setExpandedSection((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

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
    <section className="container pt-[97px] lg:pt-[180px] pb-[20px] md:pb-[100px] lg:pb-50 ">
      <div className="flex flex-col lg:flex-row lg:gap-5" >
        {isLargeScreen && (
          <div className="w-full max-w-[581px] sticky top-[100px] h-[600px] overflow-hidden">
            <div className="relative w-full h-full">
              {esgData.map((item, index) => (
                <div
                  key={item.id}
                  className={`transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0'
                    } absolute top-0 left-0 w-full h-full flex flex-col items-start`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={581}
                    height={510}
                    className="w-full h-[510px] object-contain"
                  />
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const ref = sectionRefs.current[index];
                      if (ref) {
                        ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="mt-5 cursor-pointer py-2.5 px-5 border border-darkgray rounded-full max-w-fit block text-center"
                  >
                    <span className="leading-[20px] md:leading-[30px] text-base md:text-2xl font-medium font-firaSans-condensed text-darkgray">
                      {item.imgtitle}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="w-full md:max-w-[667px]">
          {esgData.map((esgdata, index) => {
            const isExpanded = expandedSection.includes(esgdata.id);
            const shouldShowToggle = esgdata.listdata.length > 2;
            const visibleItems = isExpanded || !shouldShowToggle
              ? esgdata.listdata
              : esgdata.listdata.slice(0, 2);
            return (
              <div
                key={esgdata.id}
                ref={isLargeScreen ? (el: any) => (sectionRefs.current[index] = el) : undefined}
                className="flex flex-col items-start justify-between gap-[0px] lg:gap-5 mb-[100px] lg:mb-[200px] last:mb-0"
              >
                <div className="w-full md:max-w-[581px] flex flex-col items-center">
                  {/* Mobile heading and image with expand */}
                  {!isLargeScreen && (
                    <div className="w-full">
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
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          const ref = sectionRefs.current[index];
                          if (ref) {
                            ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            setActiveIndex(index);
                          }
                        }}
                        className="cursor-pointer py-2.5 px-5 border border-darkgray rounded-full max-w-fit mb-4 block text-center"
                      >
                        <span className="leading-[20px] md:leading-[30px] text-base md:text-2xl font-medium font-firaSans-condensed text-darkgray">
                          {esgdata.imgtitle}
                        </span>
                      </a>
                      <h4 className="leading-[31px] md:leading-[56px] text-[26px] md:text-[46px] font-semibold font-firaSans-condensed text-brown pt-[10px] pb-[20px]">
                        {esgdata.subtitle}
                      </h4>
                      <ul className="ml-[25px] md:ml-[31px]">
                        <AnimatePresence initial={false}>
                          {visibleItems.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4 }}
                              className="text-[16px] md:text-[24px] leading-[26px] md:leading-[130%] font-firaSans-condensed font-normal text-brown md:text-black/60 mb-[28px] md:mb-[50px] last:mb-0 list-[square] marker:text-[#5B3840]"
                            >
                              {item}
                            </motion.li>
                          ))}
                        </AnimatePresence>
                      </ul>
                      {shouldShowToggle && (
                        <div
                          onClick={() => toggleSection(esgdata.id)}
                          className="text-brown leading-[23px] mt-[37px] text-[18px] cursor-pointer font-medium font-firaSans-condensed w-full text-center underline"
                        >
                          {isExpanded ? "View Less" : "View More"}
                        </div>
                      )}
                    </div>
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
                  {isLargeScreen && (
                    <>
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
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EsgSection;