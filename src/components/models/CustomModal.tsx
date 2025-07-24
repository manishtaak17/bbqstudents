import React, { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';


interface CustomModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    // Handle opening and closing states
    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            setIsClosing(false);
        } else if (shouldRender) {
            setIsClosing(true);
            // Wait for animation to complete before unmounting
            const timer = setTimeout(() => {
                setShouldRender(false);
                setIsClosing(false);
            }, 300); // Animation duration
            return () => clearTimeout(timer);
        }
    }, [isOpen, shouldRender]);

    // Body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = "15px";
        } else {
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0px";
        }
        return () => {
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0px";
        };
    }, [isOpen]);

    // ESC key handler
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isOpen) {
                handleClose();
            }
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscKey);
        }
        return () => {
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [isOpen]);

    // Handle close with animation
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300); // Wait for animation to complete
    };

    // Don't render if modal should not be shown
    if (!shouldRender) return null;

    // Backdrop click handler
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 transition-all duration-300 ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'
                }`}
            onClick={handleBackdropClick}
        >
            {/* Modal Body */}
            <div
                className={`pt-[119px] md:pt-[99px] pb-[190px] px-[20px] md:px-[77px] relative w-full max-w-[1200px] max-h-[90vh] bg-bgcream rounded-t-[20px] shadow-2xl overflow-hidden transition-all duration-300 ${isClosing ? 'animate-scaleOut' : 'animate-scaleIn'
                    }`}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-[32px] right-[32px] md:top-[46px] md:right-[53px] z-10 cursor-pointer transition transform hover:scale-110 duration-200"
                >
                    <Image src="/images/close.png" alt="clock" width={24} height={24} />
                </button>

                <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
                    {/* Modal Content */}
                    <div className="">
                        <h2 className="uppercase md:capitalize w-full md:max-w-[810px] tracking-[0%] md:tracking-[-0.6px] leading-[45px] md:leading-[56px] text-[45px] md:text-[54px] font-medium font-firaSans-condensed text-brown">1st Indian full service CDR brand with ₹1000+ Crore annual revenues</h2>
                        <div className="pt-[30px] pb-[20px] md:pt-[75px] md:pb-[37px]">
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center justify-between gap-3 w-full max-w-[500px]">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center justify-between gap-3 pr-4.5 mr-4.5 border-r-[0px] md:border-r-[1px] border-[#979797]">
                                            <Image src="/images/mint.png" alt="mint" width={33} height={33} className="object-cover" />
                                            <p className="tracking-[-0.6px] leading-[160%] text-[16px] md:text-[15px] font-medium font-montserrat text-gray7">Live Mint</p>
                                        </div>
                                        <p className="hidden md:block tracking-[0%] md:tracking-[-0.6px] leading-[160%] text-[16px] md:text-[15px] font-medium font-montserrat text-gray8">VP of Marketing</p>
                                    </div>
                                    <p className="hidden md:block tracking-[0%] md:tracking-[-0.6px] leading-[160%] text-[16px] md:text-[15px] font-medium font-montserrat text-gray9">Mar 7, 2024</p>
                                </div>
                                <div className="hidden md:flex items-center justify-between gap-2">
                                    <Image src="/icons/clock.svg" alt="clock" width={18} height={18} />
                                    <p className="tracking-[0%] md:tracking-[-0.6px] leading-[160%] text-[16px] md:text-[15px] font-medium font-montserrat text-gray9">4 min read</p>
                                </div>
                            </div>
                        </div>
                        <Image src="/images/toscano-image.jpg" alt="toscano-image" width={1046} height={410} className="max-w-[382px] h-[356px] w-full md:max-w-[1046px] md:h-[410px] rounded-[0px] md:rounded-[10px] object-cover" />
                        <div className="w-full max-w-[863px] flex items-start justify-between gap-8.5 md:gap-5 mt-[25px] md:mt-[80px] ml-[0px] md-[20px] lg:ml-[43px] md:flex-row flex-col">
                            <div className="w-full max-w-full md:max-w-[20px] flex items-center  md:justify-between justify-center gap-7.5 md:flex-col flex-row">
                                <Link href="#">
                                    <Image src="/images/twitter.png" alt="clock" width={15} height={13} />
                                </Link>
                                <Link href="#">
                                    <Image src="/images/facebook.png" alt="clock" width={20} height={20} />
                                </Link>
                                <Link href="#">
                                    <Image src="/images/linkedin.png" alt="clock" width={20} height={19} />
                                </Link>
                                <Link href="#">
                                    <Image src="/images/share.png" alt="clock" width={13} height={15} />
                                </Link>
                            </div>
                            <div className="w-full max-w-[768px]">
                                <h5 className="tracking-[0%] md:tracking-[-0.6px] leading-[120%] md:leading-[150%] text-[22px] md:text-[24px] font-medium font-montserrat text-black">Overview</h5>
                                <h5 className="pt-[22px] pb-[100px] md:pt-[46px] md:pb-[80px] leading-[26px] md:leading-[130%] text-[16px] md:text-[24px] font-normal font-firaSans-condensed text-gray10">We bring together a family of food experiences designed to spark connection, celebrate flavor, and make every meal feel meaningful, no matter where you are.We bring together a family of food experiences designed to spark connection, celebrate flavor, and make every meal feel meaningful, no matter where you are.We bring together a family of food experiences designed to spark connection, celebrate flavor, and make every meal feel meaningful, no matter where you are.We bring together a family of food experiences designed to spark connection, celebrate flavor, and make every meal feel meaningful, no matter where you are.We bring together a family of food experiences designed to spark connection, celebrate flavor, and make every meal feel meaningful, no matter where you are.We bring together a family of food experiences designed to spark connection, celebrate flavor, and make every meal feel meaningful, no matter where you are.We bring together a family of food experiences designed to spark connection, celebrate flavor, and make every meal feel meaningful, no matter where you are.</h5>
                                <Image src="/images/new-toscano.jpg" alt="toscano-image" width={761} height={420} className="rounded-[0px] md:rounded-[10px] object-cover" />
                                <h5 className="mt-[31px] md:mt-[60px] lg:mt-[112px] tracking-[0%] md:tracking-[-1.2px] leading-[120%] md:leading-[170%] text-[22px] md:text-[30px] font-medium font-montserrat text-black">BBQ & Toscano</h5>
                                <h5 className="pt-[20px] pb-[60px] md:pt-[46px] md:pb-[80px] leading-[150%] md:leading-[130%] text-[18px] md:text-[24px] font-normal font-firaSans-condensed text-gray10">We bring together a family of food experiences designed to spark connection, celebrate flavor, and make every meal feel meaningful, no matter where you are.We bring together a family of food experiences designed to spark connection, celebrate flavor, and make every meal feel meaningful, no matter where you are.We bring together a family of food experiences designed to spark connection, celebrate flavor, and make every meal feel meaningful, no matter where you are.</h5>
                                <div className="border-y-[2px] border-[#979797] py-[30px] md:py-[37px] pl-[25px] md:pl-[60px]">
                                    <h5 className="w-full max-w-[300px] md:max-w-[350px] tracking-[-1.2px] leading-[160%] md:leading-[150%] text-[18px] md:text-[30px] font-medium font-montserrat text-black">“Flexibility adapting to every challenge”</h5>
                                    <h5 className=" tracking-[-0.6px] md:tracking-[-1.2px] pt-[26px] md:pt-[12px] leading-[160%] md:leading-[170%] text-[14px] md:text-[21px] font-medium font-montserrat text-gray9 ">- Rahul Agrawal</h5>
                                </div>
                                <h5 className="pt-[22px] md:pt-[75px] leading-[150%] md:leading-[130%] text-[18px] md:text-[24px] font-normal font-firaSans-condensed text-gray10">We bring together a family of food experiences designed to spark connection, celebrate flavor, and make every meal feel meaningful, no matter where you are. We bring together a family of food experiences designed to spark connection, celebrate flavor, and make every meal feel meaningful, no matter where you are.We bring together a family of food experiences designed to spark connection, celebrate flavor, and make every meal feel meaningful, no matter where you are.</h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CSS Animations */}
                <style jsx global>{`
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
                .animate-fadeOut {
                    animation: fadeOut 0.3s ease-out forwards;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out forwards;
                }
                .animate-scaleOut {
                    animation: scaleOut 0.3s ease-out forwards;
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                @keyframes fadeOut {
                    from {
                        opacity: 1;
                    }
                    to {
                        opacity: 0;
                    }
                }
                
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                
                @keyframes scaleOut {
                    from {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                    to {
                        opacity: 0;
                        transform: scale(0.95) translateY(20px);
                    }
                }
                
                /* Custom Scrollbar */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #c1c1c1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #a8a8a8;
                }
            `}</style>
            </div>
        </div>
    );
};

export default CustomModal;