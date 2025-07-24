

const Banner = () => {

    const Brands = () => {
        return (
            <div className="grid grid-cols-3 gap-[5px]">
                <div className="bg-bgcream rounded-[35px] w-full size-[116px] md:size-[171px] h-full p-5 text-center transition-transform duration-300 hover:scale-90 flex flex-col items-center justify-center ">
                    <img src="/images/nom.png" alt="" />
                </div>
                <div className="bg-darkcream rounded-[35px] w-full size-[116px] md:size-[171px] p-5 text-center transition-transform duration-300 hover:scale-90 flex flex-col items-center justify-center">
                    <img src="/images/tds.png" alt="" />
                </div>
                <div className="bg-darkcream rounded-[35px] w-full size-[116px] md:size-[171px] p-5 transition-transform duration-300 hover:scale-90 flex flex-col items-center justify-center">
                    <img src="/images/salt.png" alt="" />
                </div>
                <div className="bg-darkcream rounded-[35px] w-full size-[116px] md:size-[171px] p-5 transition-transform duration-300 hover:scale-90 flex flex-col items-center justify-center">
                    <img src="/images/dum.png" alt="" />
                </div>
                <div className="bg-bgcream rounded-[35px] w-full size-[116px] md:size-[171px] p-5 transition-transform duration-300 hover:scale-90 flex flex-col items-center justify-center">
                    <img src=" " alt="" />
                </div>
                <div className="bg-bgcream rounded-[35px] w-full size-[116px] md:size-[171px] p-5 transition-transform duration-300 hover:scale-90 flex flex-col items-center justify-center">
                    <img src="/images/barbe.png" alt="" />
                </div>
                <div className="bg-bgcream rounded-[35px] w-full size-[116px] md:size-[171px] p-5 transition-transform duration-300 hover:scale-90 flex flex-col items-center justify-center">
                    <img src=" " alt="" />
                </div>
                <div className="bg-darkcream rounded-[35px] w-full size-[116px] md:size-[171px] p-5 transition-transform duration-300 hover:scale-90 flex flex-col items-center justify-center">
                    <img src="/images/ubq.png" alt="" />
                </div>
                <div className="bg-lightcream2 rounded-[35px] w-full size-[116px] md:size-[171px] opacity-40 p-5 text-center transition-transform duration-300 hover:scale-90 flex flex-col items-center justify-center">
                    <h5 className="text-bgbrown font-firaSans-condensed font-semibold text-[27.92px] md:text-[40px] leading-[100%]">+15</h5>
                    <p className="text-bgbrown font-firaSans-condensed font-normal text-[21.59px] leading-[21.98px] md:leading-[100%]">More</p>
                </div>

            </div>
        )
    }

    return (
        <>
            <section className='max-w-[1288px] m-auto'>
                <div className=" bg-bgbrown pt-7 md:pt-[65px] pb-[30px] md:pb-[115px] px-7 " >
                    <div className=" max-w-[1156px] m-auto  flex gap-20 lg:gap-5 justify-between items-center flex-wrap">

                        <div className="w-full lg:w-2/5 max-w-[100%] lg:max-w-[527px]">
                            <div className=" flex items-center gap-3.5">
                                <span className="bg-[#F47F43] size-5"></span>
                                <h5 className="text-bgcream font-firaSans-condensed font-semibold italic text-2xl md:text-3xl leading-[50.74px] tracking-[-1%]">OUR Brands</h5>

                            </div>
                            <h2 className="text-bgcream font-firaSans-condensed font-semibold text-[28px] md:text-[46px] leading-[42px] md:leading-[56px] tracking-[-1%] md:tracking-[0%] pt-4 md:pt-[25px] lg:pt-[54px] pb-5 md:pb-[35px] lg:pb-[79px] ">Let’s build the future of food, together.</h2>
                            <div className="w-full lg:w-[60%] max-w-[523px] m-auto lg:m-0 block md:hidden"> <Brands /></div>
                            <p className="text-bgcream font-firaSans-condensed font-normal leading-[26px] md:leading-[130%] text-base md:text-[27px] mb-[40px] lg:mb-[79px] max-w-[100%] lg:max-w-[460px] mt-[80px] md:mt-0">To bridge cultures through food by offering accessible, high-quality culinary experiences that reflect both Indian traditions and global tastes.</p>
                            <button className="group text-bgbrown font-firaSans-condensed font-medium text-[18.59px] md:text-[25.92px] leading-[100%] rounded-[30.24px] bg-bgcream w-full max-w-[165px] md:max-w-[230px] py-3 flex justify-center gap-4 m-auto md:m-0" >Learn More <img className=" opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" src="/icons/btn-icon.svg" alt="->" /> </button>
                        </div>
                        <div className="w-full lg:w-[60%] max-w-[523px] m-auto lg:m-0 hidden md:block"> <Brands /></div>


                    </div>
                </div>
            </section>



            <section className='max-w-[1328px] m-auto px-5'>

                <div className="flex gap-5 justify-between flex-wrap md:flex-nowrap">

                    <div className="bg-lightcream2 w-full lg:w-2/4 max-w-[100%] lg:max-w-[632px] px-10 md:px-[30px] lg:px-[70px] py-8 md:pt-[50px] lg:pt-[80px] md:pb-[40px] lg:pb-[60px]  ">
                        <div className=" flex items-center gap-3.5">
                            <span className="bg-darkpink size-2 md:size-5"></span>
                            <h5 className="text-darkpink font-firaSans-condensed font-semibold italic text-[18.47px] md:text-3xl leading-[50.74px] tracking-[-1%]">INVESTORS</h5>
                        </div>
                        <h3 className="text-brown font-firaSans-condensed font-normal text-[40px] lg:text-[70px] leading-[46.79px] lg:leading-[76px] tracking-[2%] pt-3 md:pt-[20px] lg:pt-[24px] pb-[23px] md:pb-[30px] lg:pb-[42px] ">Everything beyond the food empire</h3>
                        <p className="text-darkgray font-firaSans font-normal leading-[16.62px] md:leading-[27px] text-[12px] md:text-xl max-w-[400px]">Expanded to Mumbai @ Seawoods Mall Navi Mumbai and Andheri </p>
                        <button className="group text-bgbrown font-firaSans-condensed font-medium text-[15.96px] md:text-[25.92px] leading-[100%] rounded-[30.24px] bg-bgcream w-full max-w-[141px] md:max-w-[230px] py-2 md:py-3 flex justify-center gap-4 mt-8 md:mt-[60px]">Learn More <img className=" opacity-100 md:opacity-110 group-hover:opacity-100 transition-opacity duration-300" src="/icons/btn-icon.svg" alt="->" /> </button>
                    </div>
                    <div className="bg-lightcream2 w-full lg:w-2/4 max-w-[100%] lg:max-w-[632px] px-10 md:px-[30px] lg:px-[70px] py-8 md:pt-[50px] lg:pt-[80px] md:pb-[40px] lg:pb-[60px]  ">
                        <div className=" flex items-center gap-3.5">
                            <span className="bg-bgbrown size-2 md:size-5"></span>
                            <h5 className="text-bgbrown font-firaSans-condensed font-semibold italic text-[18.47px] md:text-3xl leading-[50.74px] tracking-[-1%]">CAREERS</h5>
                        </div>
                        <h3 className="text-brown font-firaSans-condensed font-normal text-[40px] lg:text-[70px] leading-[46.79px] lg:leading-[76px] tracking-[2%] pt-3 md:pt-[20px] lg:pt-[24px] pb-[23px] md:pb-[30px] lg:pb-[42px] ">Let’s build the future of food, together</h3>
                        <p className="text-darkgray font-firaSans font-normal leading-[16.62px] md:leading-[27px] text-[12px] md:text-xl max-w-[400px]">Expanded to Mumbai @ Seawoods Mall Navi Mumbai and Andheri </p>
                        <button className="group text-bgbrown font-firaSans-condensed font-medium text-[15.96px] md:text-[25.92px] leading-[100%] rounded-[30.24px] bg-bgcream w-full max-w-[141px] md:max-w-[230px] py-2 md:py-3 flex justify-center gap-4 mt-8 md:mt-[60px]">Learn More <img className=" opacity-100 md:opacity-110 group-hover:opacity-100 transition-opacity duration-300" src="/icons/btn-icon.svg" alt="->" /> </button>
                    </div>
                     
                      

                </div>
            </section>
        </>
    )
}

export default Banner
