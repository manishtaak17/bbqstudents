import Link from "next/link";
import Image from "next/image";
import React from "react";

interface ServiceCardProps {
    imageSrc: string;
    title: string;
    date: string;
    href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, date, href }) => {

    return (
        <Link href={href} className="block group w-full  max-w-[380px] mx-auto rounded overflow-hidden">
            <div className="relative  overflow-hidden ">
                <Image
                    src={`/images/${imageSrc}`}
                    alt={title}
                    width={365}
                    height={365}
                    className=" transition-transform h-[226px] md:h-[365px]  duration-500 group-hover:scale-110"
                />
            </div>
            <div className=" pt-[15px] md:pt-5  flex md:items-start items-center flex-row gap-[40px] md:gap-0 justify-between  md:flex-col">
                <h3 className=" leading-[26px] md:leading-[140%] md:text-[22px] text-base  font-normal font-firaSans-condensed text-black group-hover:text-brown duration-400 ">{title}</h3>
                <p className="leading-[17px] md:leading-[27px] md:text-lg md:pt-2.5 text-[14px] font-normal font-firaSans text-black/40">{date}</p>
            </div>
        </Link>
    );
};

export default ServiceCard;
