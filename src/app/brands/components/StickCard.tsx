import React, { useRef, } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
interface CardType {
    id: number;
    title: string;
    description: string;
    image: string;
    brandimage: string;
    bgColor?: string;
    topOffset?: number;
    visitlink?: string;
    btntext?: string;
    btnlink?: string;
    btnicon?: string;
};

const StickyCard = ({ card }: { card: CardType }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
    const smoothY = useSpring(y, { stiffness: 100, damping: 50 });
    return (
        <motion.div
            ref={cardRef}
            className="mx-5 md:mx-0 sticky flex items-center justify-center text-white overflow-hidden cursor-pointer  "
            style={{
                top: `${card.topOffset}px`,
                background: `${card.bgColor}`,
                y: smoothY,
                opacity,
                scale
            }}
            initial={{ opacity: 0, y: 100 }}
        >
            <div className="relative w-full h-full  flex flex-col justify-center z-10">
                <div className='px-10 pt-[29px] pb-10 flex flex-row  md:gap-[40px] lg:gap-[89px] items-center' >
                    <div>
                        <h2 className='leading-[30px] text-2xl font-medium font-firaSans-condensed text-lightblack' >{card.title}</h2>
                        <Image className='mt-[32px] object-contain max-w-[150px] w-full' src={`/images/${card.brandimage}`} width={150} height={93} alt={`${card.brandimage}`} />
                        <div className='flex flex-row gap-2 items-center mt-4' >
                            <Link href={`${card.btnlink}`} target="_blank" >
                                <button className='flex flex-row gap-3 rounded-[6px] bg-browndark py-2 px-2.5 items-center' >
                                    <Image src={`/icons/${card.btnicon}`} width={15} height={17} alt='DELIVERY' />
                                    <span className='leading-[100%] text-[14.29px] font-medium font-inter text-white' >{card.btntext}</span>
                                </button>
                            </Link>
                            <Link href={`${card.visitlink}`} target="_blank" >
                                <button className='flex flex-row gap-3  rounded-[6px] py-2 px-2.5 border items-center border-browndark/30' >
                                    <span className='leading-[100%] text-[14.29px] font-medium font-inter text-bgbrown' >VISIT WEBSITE </span>
                                    <Image src={"/icons/ForkKnife.png"} width={15} height={17} alt='ForkKnife' />
                                </button>
                            </Link>
                        </div>
                        <p className='leading-[27px] text-lg font-normal font-firaSans text-lightblack pt-5' >{card.description}</p>
                    </div>
                    <Image src={`/images/${card.image}`} width={444} height={444} alt={`${card.image}`} />
                </div>
            </div>
        </motion.div>
    );
};

export default StickyCard;