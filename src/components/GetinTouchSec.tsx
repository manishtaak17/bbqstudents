import Link from 'next/link'
import React from 'react'

const GetinTouchSec = () => {
    return (
        <div className='max-w-[1342px] w-full md:px-[30px]  mx-auto' >
            <section className="w-full bg-darkgray pt-[57px]   md:pt-[100px] pb-[100px] px-[30px] md:px-[60px] lg:px-[112px]">

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[40px]">
                    {/* Text Section */}
                    <div className="text-bgcream text-2xl sm:text-3xl font-semibold leading-snug">
                        <p className='leading-[49px] lg:leading-[83.48px] md:leading-[55px] md:text-[40px] lg:text-[80px] text-[30px] font-medium font-firaSans-condensed' >
                            Have a question,<br className="sm:hidden" />
                            <span className="hidden sm:inline"> </span>
                            idea, or opportunity?
                            {/* Animated Dots */}
                            <span className="inline-flex items-center md:block  space-x-[14px] ml-3 align-middle">
                                <span className="w-3 h-3 bg-redbrown  animate-dotPulse" />
                                <span className="w-3 h-3 bg-whitecream  animate-dotPulse " />
                                <span className="w-3 h-3 bg-gray4  animate-dotPulse " />
                            </span>
                        </p>
                    </div>

                    {/* Button */}
                    <Link href={"#"} className='md:max-w-[163px] max-w-[120px]  w-full ' >
                        <button style={{
                            animation: 'subtle-float 3s ease-in-out infinite'
                        }}
                            className="bg-bgcream leading-[23px] md:leading-[30px] cursor-pointer md:text-xl text-lg font-medium font-firaSans-condensed  text-[#5B353A]  rounded-full px-[14px] py-[6px] md:px-5 md:py-2.5 transition-all hover:opacity-90">
                            Get in Touch
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default GetinTouchSec
