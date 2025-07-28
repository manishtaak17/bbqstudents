import Image from "next/image";
import { useEffect, useRef, useState } from "react";

  
const ResourcesSection = () => {
    const [showLastDiv, setShowLastDiv] = useState(false);
    const lastDivRef = useRef<HTMLDivElement>(null);
    const [lastDivHeight, setLastDivHeight] = useState(0);

    useEffect(() => {
        if (lastDivRef.current) {
            setLastDivHeight(lastDivRef.current.scrollHeight);
        }
    }, []);

    const toggleLastDiv = () => {
        setShowLastDiv(!showLastDiv);
    };

    return (
            <div className="max-w-[1262px] m-auto px-5 pt-[40px] md:pt-[80px] pb-[50px] md:pb-[175px]">
                <div className="">
                    <h5 className="text-darkpink font-firaSans-condensed font-semibold italic text-2xl md:text-3xl leading-[40px] tracking-[-1%] uppercase flex items-center gap-2 ">
                        <span className="block size-2 md:size-3 bg-redbrown animate-dotPulse"></span>RESOURCES</h5>
                    <p className="text-darkgray font-firaSans-condensed font-normal text-2xl leading-[130%] mt-5 ml-0 md:ml-5 max-w-[100%] lg:max-w-[296px] mb-[60px]">For any specific queries, reach out to our team members.</p>
                </div>
                <div className="ml-0 md:ml-5 flex justify-center md:justify-between gap-7 md:gap-5 flex-wrap lg:flex-nowrap">
                    <div className="flex flex-row md:flex-col justify-between w-full md:w-[48%] gap-5 md:gap-0 border-t md:border-0 border-darkpink pt-4 md:pt-0" >
                        <h5 className="border-0 md:border-t border-darkpink w-full max-w-[50%] md:max-w-[100%] lg:max-w-[295px] text-darkgray font-firaSans-condensed font-medium text-lg md:text-2xl leading-[28px] md:leading-[30px]  pt-5 ">For Shareholders' Grievance Redressal</h5>
                        <div className="w-full max-w-[100%]">
                            <div className="mb-6 md:mb-8 max-w-[100%] lg:max-w-[295px]">
                                <h5 className="text-darkgray font-firaSans-condensed font-medium md:font-normal text-lg md:text-2xl leading-[23px] md:leading-[30px] md:mt-8 mb-5 md:mb-0 ">Ms. Nagamani CY</h5>
                                <p className="text-darkgray font-firaSans-condensed font-normal text-sm md:text-lg leading-[17px] md:leading-[27px] ">Company Secretary & Compliance Officer</p>
                            </div>
                            <p className="text-darkgray font-firaSans-condensed font-normal text-sm md:text-lg leading-[17px] md:leading-[27px] flex gap-1 flex-wrap">
                                <b>Email:</b><a href="mailto:compliance@barbequenation.com" className="break-all">compliance@barbequenation.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-col justify-between w-full md:w-[48%] gap-5 md:gap-0 border-t md:border-0 border-darkpink pt-4 md:pt-0" >
                        <h5 className="border-0 md:border-t border-darkpink w-full max-w-[50%] md:max-w-[100%] lg:max-w-[295px] text-darkgray font-firaSans-condensed font-medium text-lg md:text-2xl leading-[28px] md:leading-[30px]  pt-5 ">For Shareholders' Grievance Redressal</h5>
                        <div className="w-full max-w-[100%]">
                            <div className="mb-6 md:mb-8 max-w-[100%] lg:max-w-[295px]">
                                <h5 className="text-darkgray font-firaSans-condensed font-medium md:font-normal text-lg md:text-2xl leading-[23px] md:leading-[30px] md:mt-8 mb-5 md:mb-0 ">Ms. Nagamani CY</h5>
                                <p className="text-darkgray font-firaSans-condensed font-normal text-sm md:text-lg leading-[17px] md:leading-[27px] ">Company Secretary & Compliance Officer</p>
                            </div>
                            <p className="text-darkgray font-firaSans-condensed font-normal text-sm md:text-lg leading-[17px] md:leading-[27px] flex gap-1 flex-wrap">
                                <b>Email:</b><a href="mailto:compliance@barbequenation.com" className="break-all">compliance@barbequenation.com</a>
                            </p>
                        </div>
                    </div>
                    <div
                        ref={lastDivRef}
                        className={`flex flex-row md:flex-col justify-between w-full md:w-[48%] gap-5 md:gap-0 border-t md:border-0 border-darkpink pt-4 md:pt-0 transition-all duration-300 ease-in-out transform ${showLastDiv
                            ? 'max-h-[1000px] opacity-100 translate-y-0 mb-8'
                            : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden md:max-h-none md:opacity-100 md:translate-y-0 mb-0'
                            }`}
                    >
                        <h5 className="border-0 md:border-t border-darkpink w-full max-w-[50%] md:max-w-[100%] lg:max-w-[295px] text-darkgray font-firaSans-condensed font-medium text-lg md:text-2xl leading-[28px] md:leading-[30px]  pt-5 ">For Shareholders' Grievance Redressal</h5>
                        <div className="w-full max-w-[100%]">
                            <div className="mb-6 md:mb-8 max-w-[100%] lg:max-w-[295px]">
                                <h5 className="text-darkgray font-firaSans-condensed font-medium md:font-normal text-lg md:text-2xl leading-[23px] md:leading-[30px] md:mt-8 mb-5 md:mb-0 ">Ms. Nagamani CY</h5>
                                <p className="text-darkgray font-firaSans-condensed font-normal text-sm md:text-lg leading-[17px] md:leading-[27px] ">Company Secretary & Compliance Officer</p>
                            </div>
                            <p className="text-darkgray font-firaSans-condensed font-normal text-sm md:text-lg leading-[17px] md:leading-[27px] flex gap-1 flex-wrap">
                                <b>Email:</b><a href="mailto:compliance@barbequenation.com" className="break-all">compliance@barbequenation.com</a>
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    className="flex md:hidden items-center gap-4 text-darkgray font-fira-sans-condensed font-semibold text-lg leading-[30px] m-auto mt-[35px]"
                    onClick={toggleLastDiv}
                >
                    {showLastDiv ? 'LESS' : 'MORE'}
                    <Image
                        src={'/icons/arrowdown.png'}
                        alt="icon"
                        width={15}
                        height={7}
                        className={`transition-transform duration-300 ${showLastDiv ? 'rotate-180' : 'rotate-0'}`}
                    />
                </button>
            </div>
    );
};

export default ResourcesSection
