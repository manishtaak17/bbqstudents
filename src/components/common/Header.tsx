"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');

    const navItems = [
        { name: 'About Us', href: '/about' },
        { name: 'Brands', href: '/brands' },
        { name: 'Investor', href: '/investor' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact Us', href: '/contactUs' },
    ];



    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleItemClick = (itemName: string) => {
        setActiveItem(itemName);
        setIsMenuOpen(false);
    };

    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;
    return (
        <>
            {/* Desktop Navigation */}
            <nav className='bg-bgcream pt-5 md:pt-[52.48px]' >
                <div className='container'>
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href={"/"} >
                            <Image className='lg:max-w-[288px] w-full max-w-[250px] ' alt='logo' src={"/images/logo.png"} width={288} height={74} />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline  space-x-[20px] lg:space-x-[39px]">
                                {navItems.map((item, index) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="relative group"
                                    >
                                        <span
                                            className={`
                                                transition-colors duration-300 font-firaSans font-normal text-lg leading-[27px]
                                                ${isActive(item.href) ? 'text-darkpink font-semibold' : 'text-black'}
                                            `}
                                        >
                                            {item.name}
                                        </span>

                                        {/* Underline effect */}
                                        <span
                                            className={`
                                                absolute left-0 -bottom-1 h-[4px] bg-darkpink rounded-full transition-all duration-300
                                                ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}
                                            `}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md  transition-all duration-300"
                            >
                                <div className="relative w-6 h-6">
                                    <Image className={`absolute inset-0 transform transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                                        }`} alt='logo' src={"/icons/togglebar.png"} width={27} height={18} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Sidebar - Right Side Full Screen */}
                <div className={`md:hidden fixed inset-0 z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    {/* Full Screen Sidebar */}
                    <div className="w-full h-full bg-bgbrown shadow-2xl">
                        {/* Header with logo and close button */}
                        <div className="flex items-center justify-between pt-[27px] px-[30px] pb-[60px]">
                            <Image alt='logo' src={"/images/logores.png"} width={158} height={24} />
                            <Image
                                onClick={toggleMenu}
                                alt='close'
                                src={"/icons/close.png"}
                                width={15}
                                height={15}
                                className="cursor-pointer hover:scale-110 transition-transform duration-200"
                            />
                        </div>

                        {/* Navigation Items */}
                        <div className="px-[30px]">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => handleItemClick(item.name)}
                                    className={`flex flex-col py-[25px] font-firaSans text-white leading-[30px] font-medium text-2xl transform transition-all duration-300 hover:translate-x-2 hover:text-red-300 ${index !== navItems.length - 1 ? 'border-b border-gray1/30' : ''
                                        }`}
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                        opacity: isMenuOpen ? 1 : 0,
                                        transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                                        transition: `all 0.3s ease ${index * 0.1}s`
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
