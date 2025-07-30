import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
    {
        title: 'OUR BRANDS',
        links: ['Barbeque Nation', 'Toscano', 'Salt', 'UBQ', 'Om nom nomm', 'Dum Safar'],
    },
    {
        title: 'Company',
        links: ['About', 'Our Brands', 'Investors', 'Careers'],
    },
    {
        title: 'Contact',
        links: ['Get in Touch', 'ESG', 'News', 'Partners'],
    },
    {
        title: 'More',
        links: ['Terms & Conditions', 'Privacy', 'Legal'],
    },
];

const socialIcons = [
    { src: '/icons/FacebookLogo.png', alt: 'Facebook', href: "#" },
    { src: '/icons/LinkedinLogo.png', alt: 'LinkedIn', href: "#" },
];

const footerBottomLinks = ['Privacy', 'Terms', 'Legal'];

const Footer = () => {
    return (
        <>
        <footer className='container'>
            <Image className='w-full max-w-[1300px] mx-auto'  src="/images/sectionimg.png"
                                alt="United Foodbrands Logo"
                                width={1200}
                                height={335}/>
        <div className="w-full bg-bgcream pt-[52px] pb-[45px] md:pt-[63px] md:pb-[66px]">
            <div className="max-w-[1305px] mx-auto px-[35px]">
                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
                    {/* Left Section */}
                    <div className="flex flex-row md:flex-col gap-[22.5px] md:gap-[30px]">
                        <Link href={"/"} >
                            <Image
                                className="max-w-[60px] h-[60px] md:h-[80px] md:max-w-[82.35px] w-full"
                                src="/images/uflogo.png"
                                alt="United Foodbrands Logo"
                                width={82.35}
                                height={80}
                            />
                        </Link>
                        <div>
                            <p className="leading-[30px] md:leading-[27px] text-[24px] md:text-lg font-medium md:font-normal text-gray3 font-firaSans-condensed md:font-firaSans">
                                United Foodbrands
                            </p>
                            <p className="leading-[30px] md:leading-[27px] text-[24px] md:text-lg font-medium md:font-normal text-gray3 font-firaSans-condensed md:font-firaSans">
                                Pvt Ltd
                            </p>
                        </div>
                    </div>

                    {/* Dynamic Columns */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 text-[14px]">
                        {footerLinks.map((section, index) => (
                            <div key={index}>
                                <h4 className="text-darkpink mb-[5px] md:mb-[15px] leading-[27px] text-lg md:text-[22px] font-normal font-firaSans-condensed">
                                    {section.title}
                                </h4>
                                <ul className="space-y-[5px]">
                                    {section.links.map((linkText, i) => (
                                        <li
                                            key={i}
                                            className="leading-[27px] text-base md:text-lg font-normal font-firaSans text-gray3"
                                        >
                                            <Link href="#">{linkText}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Links */}
                <div className="flex flex-col lg:flex-row gap-3 justify-between items-center mt-[68px] text-sm text-gray-500">
                    <div className="flex gap-3 mt-2">
                        {socialIcons && socialIcons?.map((icon, index) => (
                            <Link href={icon.href} key={index} >
                                <Image
                                    key={index}
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={30}
                                    height={30}
                                />
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-row gap-[56px]">
                        <p className="leading-[27px] text-[18px] font-normal font-firaSans text-lightgray">
                            2025 - United Food brands
                        </p>
                        <div className="hidden lg:flex gap-6">
                            {footerBottomLinks && footerBottomLinks?.map((text, index) => (
                                <p
                                    key={index}
                                    className="leading-[27px] text-[18px] font-normal font-firaSans text-lightgray"
                                >
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div> </div>
        </footer>
        </>
    );
};

export default Footer;
