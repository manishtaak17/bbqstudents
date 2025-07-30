"use client"
import OURBrands from "./components/OURBrands"
import TimelineScrollSection from "./components/TimelineSection"
import OurSocialResponsibility from "./components/OurSocialResponsibility"
import Image from "next/image"
import Hero from "./components/Hero"

const page = () => {
    return (
        <>
        <section>
            <Hero/>
        </section>
            <section>
                <div className="container">
                    <div className=" max-w-[748px] mr-0 ml-auto mt-[60px] md:mt-[144px]">
                        <h2 className='text-brown font-firaSans-condensed font-medium text-[43.26px] md:text-[56px] lg:text-[90px] leading-[49.51px] md:leading-[108%] tracking-[-1%] uppercase text-center md:text-left '>We bring India’s most loved food experiences into one growing family.</h2>
                    </div>

                    <div className=" max-w-[748px] mr-0 ml-auto">
                        <h5 className="text-darkpink font-firaSans-condensed font-semibold italic text-2xl md:text-3xl leading-[40px] tracking-[-1%] uppercase flex items-center gap-2 mt-[60px] md:mt-[48px] mb-[10px] md:mb-[33px]">
                            <span className="block size-2 md:size-5 bg-redbrown animate-dotPulse"></span>
                            OUR STORY
                        </h5>

                        <p className="text-brown font-firaSans-condensed font-normal text-[26px] md::text-[32px] lg:text-[50px] leading-[42px] md:leading-[40px] lg:leading-[76px] tracking-[-2%]">We are a platform for culinary stories, cultures, and communities to come together. Whether you're dining in, ordering out, or celebrating with your favorite people, we’re here to make those moments more flavorful, more joyful, and more meaningful.</p>
                    </div>


                </div>
            </section>
            {/* OUR Brands */}
            <section>
                <div className="max-w-[1288px] m-auto bg-bgbrown mt-[60px] md:mt-[100px] lg:mt-[189px]">
                    <div className="flex justify-between gap-5 h-[auto]  md:h-[702px] ">

                        <div className="relative w-full max-w-[100%] md:max-w-[460px] md:w-2/4 flex flex-wrap flex-col justify-between mt-[35px] mb-[40px] md:mb-[72px] mr-[20px] md:mr-[0px] ml-[20px] lg:ml-[60px]">
                            <h5 className="text-white font-firaSans-condensed font-semibold italic text-2xl md:text-3xl leading-[40px] tracking-[-1%] uppercase flex items-center gap-2 mb-[10px] md:mb-[33px]">
                                <span className="block size-2 md:size-5 bg-[#F47F43] animate-dotPulse"></span>
                                OUR Brands
                            </h5>
                            <div className="flex md:hidden justify-center w-full relative max-w-[100%] h-[396px] mb-10 mt-5 before:content-[''] before:absolute before:top-0 before:w-full before:h-[94px] before:z-50 before:bg-[linear-gradient(0deg,rgba(93,55,64,0)_0%,#5D3740_100%)] after:content-[''] after:absolute after:bottom-0 after:w-full after:h-[94px] after:z-50 after:bg-[linear-gradient(180deg,rgba(93,55,64,0)_0%,#5D3740_100%)]">
                                <OURBrands />
                            </div>
                            <div className="">
                                <h4 className="text-white font-firaSans-condensed font-semibold text-[28px] md:text-[46px] leading-[42px] md:leading-[56px] mb-[30px]">United by great taste</h4>
                                <p className="text-white font-firaSans-condensed font-normal text-base md:text-[27.27px] leading-[26px] md:leading-[130%]">Our portfolio brings together a diverse range of food experiences that are suited to any occasion, and designed to create memorable experiences.</p>
                            </div>
                            <button className="group text-bgbrown font-firaSans-condensed font-medium text-[18.59px] md:text-[25.92px] leading-[100%] rounded-[30.24px] bg-bgcream w-full max-w-[165px] md:max-w-[230px] py-3 flex justify-center gap-4 m-auto md:m-0 mt-6 md:mt-0" >Learn More <img className=" opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" src="/icons/btn-icon.svg" alt="->" /> </button>
                        </div>
                        <div className="w-2/4 overflow-hidden relative md:flex justify-center pr-5 hidden ">

                            <div className="w-full max-w-[420px]  before:content-[''] before:absolute before:top-0 before:w-full before:h-[146px] before:z-50 before:bg-[linear-gradient(0deg,rgba(93,55,64,0)_0%,#5D3740_100%)] after:content-[''] after:absolute after:bottom-0 after:w-full after:h-[146px] after:z-50 after:bg-[linear-gradient(180deg,rgba(93,55,64,0)_0%,#5D3740_100%)]">
                                <OURBrands />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* Our JOURNEY */}
            <section className="">
                <div className="max-w-[1328px] m-auto px-5">

                    <h5 className="text-darkpink font-firaSans-condensed font-semibold italic text-2xl md:text-3xl leading-[40px] tracking-[-1%] uppercase flex items-center gap-2 mt-[60px] md:mt-[62px]">
                        <span className="block size-2 md:size-5 bg-[#F47F43] animate-dotPulse"></span>
                        our JOURNEY
                    </h5>
                    <p className="text-bgbrown font-firaSans-condensed font-normal text-lg md:text-2xl leading-[26px] md:leading-[130%]  mb-[10px] md:mb-[46px] pl-2 md:pl-6">Our portfolio brings together a diverse range of food experiences that are suited to any occasion, and designed to create memorable experiences.</p>

                </div>
                <TimelineScrollSection />

            </section>
            {/* Our Social Responsibility */}
            <section>
                <OurSocialResponsibility />
            </section>


            <section className='max-w-[1328px] m-auto px-5 '>

                <div className="flex gap-5 justify-between flex-wrap md:flex-nowrap mt-[38px]">

                    <div className="bg-lightcream2 w-full lg:w-2/4 max-w-[100%] lg:max-w-[632px] px-10 md:px-[30px] lg:px-[70px] py-8 md:pt-[50px] lg:pt-[80px] md:pb-[40px] lg:pb-[60px]  ">
                        <div className=" flex items-center gap-3.5">
                            <span className="bg-darkpink size-2 md:size-5"></span>
                            <h5 className="text-darkpink font-firaSans-condensed font-semibold italic text-[18.47px] md:text-3xl leading-[50.74px] tracking-[-1%]">INVESTORS</h5>
                        </div>
                        <h3 className="text-brown font-firaSans-condensed font-normal text-[40px] md:text-[42px] lg:text-[70px] leading-[46.79px] lg:leading-[76px] tracking-[2%] pt-3 md:pt-[20px] lg:pt-[24px] pb-[23px] md:pb-[30px] lg:pb-[42px] ">Everything beyond the food empire</h3>
                        <p className="text-darkgray font-firaSans font-normal leading-[16.62px] md:leading-[27px] text-[12px] md:text-xl max-w-[400px]">Expanded to Mumbai @ Seawoods Mall Navi Mumbai and Andheri </p>
                        <button className="group text-bgbrown font-firaSans-condensed font-medium text-[15.96px] md:text-[25.92px] leading-[100%] rounded-[30.24px] bg-bgcream w-full max-w-[141px] md:max-w-[230px] py-2 md:py-3 flex justify-center gap-4 mt-8 md:mt-[60px]">Learn More <img className=" opacity-100 md:opacity-110 group-hover:opacity-100 transition-opacity duration-300" src="/icons/btn-icon.svg" alt="->" /> </button>
                    </div>
                    <div className="bg-lightcream2 w-full lg:w-2/4 max-w-[100%] lg:max-w-[632px] px-10 md:px-[30px] lg:px-[70px] py-8 md:pt-[50px] lg:pt-[80px] md:pb-[40px] lg:pb-[60px]  ">
                        <div className=" flex items-center gap-3.5">
                            <span className="bg-bgbrown size-2 md:size-5"></span>
                            <h5 className=" text-bgbrown font-firaSans-condensed font-semibold italic text-[18.47px] md:text-3xl leading-[50.74px] tracking-[-1%]  ">CAREERS</h5>
                        </div>
                        <h3 className="text-brown font-firaSans-condensed font-normal text-[40px] md:text-[42px] lg:text-[70px] leading-[46.79px] lg:leading-[76px] tracking-[2%] pt-3 md:pt-[20px] lg:pt-[24px] pb-[23px] md:pb-[30px] lg:pb-[42px] ">Let’s build the future of food, together</h3>
                        <p className="text-darkgray font-firaSans font-normal leading-[16.62px] md:leading-[27px] text-[12px] md:text-xl max-w-[400px]">Expanded to Mumbai @ Seawoods Mall Navi Mumbai and Andheri </p>
                        <button className="group text-bgbrown font-firaSans-condensed font-medium text-[15.96px] md:text-[25.92px] leading-[100%] rounded-[30.24px] bg-bgcream w-full max-w-[141px] md:max-w-[230px] py-2 md:py-3 flex justify-center gap-4 mt-8 md:mt-[60px]">Learn More <img className=" opacity-100 md:opacity-110 group-hover:opacity-100 transition-opacity duration-300" src="/icons/btn-icon.svg" alt="->" /> </button>
                    </div>



                </div>
            </section>

        </>
    )
}

export default page