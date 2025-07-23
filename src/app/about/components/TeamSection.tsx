
import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const teamData = [
    {
        name: 'Azhar Yusuf Dhanani',
        role: 'Non Executive Director',
        image: '/images/ManagementTeam.png',
        description: 'Ajay Nanavati Vipin comes with 35+ years global experience. Former MD of 3M India. Chairman of Allicon Castalloy Ltd and Quantum Advisors. Board member at IIM-Bs Centre for Corporate Governance.',
    },
    {
        name: 'Ajay Nanavati Vipin.',
        role: 'Independent Director',
        image: '/images/ManagementTeam.png',
        description:
            'Ajay Nanavati Vipin comes with 35+ years global experience. Former MD of 3M India. Chairman of Allicon Castalloy Ltd and Quantum Advisors. Board member at IIM-Bs Centre for Corporate Governance.',
    },
    {
        name: 'Revathy Ashok',
        role: 'Independent Director',
        image: '/images/ManagementTeam.png',
        description:
            'Ajay Nanavati Vipin comes with 35+ years global experience. Former MD of 3M India. Chairman of Alicon Castalloy Ltd and Quantum Advisors. Board member at IIM-B’s Centre for Corporate Governance.',
    },
    {
        name: 'Kayum Dhanani',
        role: 'Managing Director',
        image: '/images/ManagementTeam.png',
        description:
            'Ajay Nanavati Vipin comes with 35+ years global experience. Former MD of 3M India. Chairman of Alicon Castalloy Ltd and Quantum Advisors. Board member at IIM-B’s Centre for Corporate Governance.',
    },
    {
        name: 'Rahul Agrawal',
        role: 'CEO/Director',
        image: '/images/ManagementTeam.png',
        description:
            'Ajay Nanavati Vipin comes with 35+ years global experience. Former MD of 3M India. Chairman of Alicon Castalloy Ltd and Quantum Advisors. Board member at IIM-B’s Centre for Corporate Governance.',
    },
    {
        name: 'Raoof Dhanani',
        role: 'Non executive Director',
        image: '/images/ManagementTeam.png',
        description:
            'Ajay Nanavati Vipin comes with 35+ years global experience. Former MD of 3M India. Chairman of Alicon Castalloy Ltd and Quantum Advisors. Board member at IIM-B’s Centre for Corporate Governance.',
    },
];

const HoverCard = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-[#fdf4e1] min-h-screen p-4 sm:p-10">
            {teamData.map((member, index) => {
                const isOpen = openIndex === index;
                const isHovered = hoveredIndex === index;

                return (
                    <motion.div
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`relative w-full flex flex-col border-b border-gray6 transition-all py-6 ease-in-out duration-500 cursor-pointer overflow-visible 
              ${isHovered && !isOpen ? 'bg-[#dfd0c1]  px-[67px]' : ' px-[48px]'}
              ${isOpen ? 'bg-[#dfd0c1] px-8 py-[31px]' : ''}
            `}
                    >
                        {/* Header Row */}
                        <div
                            onClick={() => handleToggle(index)}
                            className="grid  grid-cols-2 justify-between items-center"
                        >
                            <div className='grid min-[1180px]:grid-cols-2 grid-cols-1 gap-2' >
                                <p className="leading-[30px] text-[19.65px] md:text-2xl font-medium text-black font-firaSans-condensed">{member.name}</p>
                                <p className="md:leading-[140%] md:text-[22px] text-[17.47px] font-firaSans font-normal text-black">{member.role}</p>
                            </div>
                            <div className="flex items-center justify-end gap-2">
                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ type: 'tween', duration: 0.3 }}
                                >
                                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </motion.div>
                            </div>
                        </div>

                        {/* Hover Image (Only on Desktop) */}
                        <AnimatePresence>
                            {isHovered && !isOpen && member.image && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.4, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: 25 }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                                    className="hidden min-[991px]:block absolute right-50 min-[1180px]:right-70 top-1/2 transform -translate-y-1/2 z-50"
                                >
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={230}
                                        height={270}
                                        className="rounded-md border-2 max-w-[230px] w-full h-[270px] border-white shadow-xl"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ type: 'spring', stiffness: 180, damping: 20 }}
                                    className="relative flex flex-row-reverse min-[991px]:flex-row justify-between items-start gap-6 mt-4"
                                >
                                    {member.image && (
                                        <div className="relative min-[991px]:absolute min-[991px]:right-[20%] min-[991px]:top-[-200px] z-10">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={120}
                                                height={160}
                                                className="rounded-md border-1 max-w-[213px] w-full h-[244px] border-white shadow-xl"
                                            />
                                        </div>
                                    )}
                                    <p className="leading-[150%] text-base font-normal font-lato text-black max-w-3xl w-[50%] pt-[11px]">{member.description}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default HoverCard;