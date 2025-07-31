"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CardType {
    id: number;
    title: string;
    description: string;
    image: string;
    brandimage: string;
    bgColor?: string;
    visitlink?: string;
    btntext?: string;
    btnlink?: string;
    btnicon?: string;
}

interface AccordionCardProps {
    card: CardType;
    isOpen: boolean;
    setOpenCardId: (id: number | null) => void;
}

const AccordionCard = ({ card, isOpen, setOpenCardId }: AccordionCardProps) => {

    const [showFullDescription, setShowFullDescription] = useState(false);
    const descriptionRef = useRef<HTMLParagraphElement>(null);

    // Character limit constant
    const CHARACTER_LIMIT = 150;

    // Check if description exceeds character limit
    const shouldShowViewMore = card.description.length > CHARACTER_LIMIT;

    // Get truncated description
    const getTruncatedDescription = () => {
        if (card.description.length <= CHARACTER_LIMIT) {
            return card.description;
        }

        // Find the last space before the character limit to avoid cutting words
        const truncated = card.description.substring(0, CHARACTER_LIMIT);
        const lastSpaceIndex = truncated.lastIndexOf(' ');

        if (lastSpaceIndex > 0) {
            return card.description.substring(0, lastSpaceIndex) + "...";
        }

        return truncated + "...";
    };

    const displayDescription = showFullDescription
        ? card.description
        : getTruncatedDescription();

    const handleToggle = () => {
        // setOpenCardId(isOpen ? null : card.id);
        if (!isOpen) {
            setOpenCardId(card.id); // always open, never close
        }

    };

    const handleViewMoreToggle = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <motion.div
            style={{
                backgroundColor: card.bgColor
            }}
            className={` text-[#4d2c1b] py-9 px-7 rounded-md shadow-sm `}
            whileHover={{
                boxShadow: "0 10px 25px rgba(77, 44, 27, 0.1)"
            }}
            transition={{ duration: 0.5 }}
        >
            {/* Title Row */}
            <motion.div
                className="flex justify-between items-center cursor-pointer"
                onClick={handleToggle}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
            >
                <h2 className="leading-[30px] text-2xl font-medium font-firaSans-condensed">{card.title}</h2>
                <Image className={`${isOpen ? "rotate-0" : "-rotate-90"}`} src={"/icons/down-arrow.svg"} width={15} height={8} alt="arrow" />
            </motion.div>

            {/* Animated Content */}
            <motion.div
                initial={false}
                animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                }}
                transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                    opacity: { duration: isOpen ? 0.3 : 0.2 }
                }}
                className="overflow-hidden"
            >
                {isOpen && (
                    <div className="pt-2">
                        {/* Brand Logo */}
                        <motion.div
                            className="mt-2 flex justify-between items-center"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.3 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Image
                                    src={`/images/${card.brandimage}`}
                                    alt={card.title}
                                    width={120}
                                    height={30}
                                    className="object-contain max-w-[117px] w-full"
                                />
                            </motion.div>
                            <div className="flex gap-2 items-center flex-wrap justify-end">
                                <Link href={`${card.visitlink}`} >
                                    <motion.button
                                        className="flex flex-row gap-3 rounded-[6px] bg-white/20 py-2 px-2.5 border items-center border-browndark/30"
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="leading-[100%] text-[13px] font-medium font-inter text-bgbrown">
                                            WEBSITE
                                        </span>
                                        <Image
                                            src={"/icons/ForkKnife.png"}
                                            width={15}
                                            height={17}
                                            alt="ForkKnife"
                                        />
                                    </motion.button>
                                </Link>
                                <Link href={`${card.btnlink}`} >
                                    <motion.button
                                        className="flex flex-row gap-3 rounded-[6px] bg-browndark py-2 px-2.5 items-center"
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Image
                                            src={`/icons/${card.btnicon}`}
                                            width={20}
                                            height={17}
                                            alt="DELIVERY"
                                            className="max-w-[15px] h-[17px]"
                                        />
                                        <span className="leading-[100%] text-[13px] font-medium font-inter text-white">
                                            {card.btntext}
                                        </span>
                                    </motion.button>
                                </Link >
                            </div>
                        </motion.div>

                        {/* Restaurant Image */}
                        <motion.div
                            className="mt-5"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.25, duration: 0.3 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Image
                                src={`/images/${card.image}`}
                                alt={card.title}
                                width={500}
                                height={250}
                                className=" w-full h-[193px] md:h-[400px] object-cover"
                            />
                        </motion.div>

                        {/* Description with Animated Text Reveal */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.3 }}
                        >
                            <motion.div
                                layout
                                className="mt-[27px]"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={showFullDescription ? 'full' : 'truncated'}
                                        ref={descriptionRef}
                                        className="leading-[27px] text-base font-semibold font-firaSans-condensed text-lightblack/60"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        {displayDescription}
                                    </motion.p>
                                </AnimatePresence>
                            </motion.div>

                            {shouldShowViewMore && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.45, duration: 0.2 }}
                                >
                                    <motion.button
                                        className="text-darkpink mt-2 leading-[27px] text-base font-semibold font-firaSans-condensed relative overflow-hidden"
                                        onClick={handleViewMoreToggle}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <motion.span
                                            key={showFullDescription ? 'less' : 'more'}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{
                                                duration: 0.2,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            {showFullDescription ? "READ LESS" : "READ MORE"}
                                        </motion.span>

                                        {/* Animated underline */}
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-0.5 bg-darkpink"
                                            initial={{ width: 0 }}
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.button>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default AccordionCard;