import Image from 'next/image';
import Link from 'next/link';

export default function SocialResponsibility() {
    return (
        <section className=" pt-[24px] md:pt-[50px] lg:pt-[105px] pb-[52px] md:pb-[75px]">
            <div className='container' >
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-start">
                    {/* LEFT + IMAGE + TEXT */}
                    <div className="order-2 md:order-1 md:max-w-[482px] w-full">
                        <p className="leading-[23px] md:leading-[100%] md:text-[31.73px] text-lg font-medium font-firaSans-condensed text-darkpink md:italic flex items-center gap-2 md:pb-[13px]">
                            <span className="w-3 h-3  bg-darkpink pb-[3px] md:pb-[13px]" /> OUR SOCIAL RESPONSIBILITY
                        </p>
                        <h2 className="leading-[30px] md:leading-[100%] md:text-[46.62px] text-[24px] font-medium text-darkgray font-firaSans-condensed mb-8">Good food, greater impact</h2>

                        {/* IMAGE shown between text on mobile */}
                        <div className="grid gap-4 order-1 md:hidden gap-x-[9px] gap-y-[5px]">
                            <div className="col-span-2">
                                <Image src="/images/foodimg.png" alt="Food" width={600} height={300} className="w-full object-cover  " />
                            </div>
                            <div>
                                <Image src="/images/foodimg2.png" alt="Earth" width={300} height={300} className="w-full h-[179px] object-cover  " />
                            </div>
                            <div className="bg-[#D3D3C4] flex items-center justify-center p-4 text-center text-[#2D2D2D] font-semibold text-base ">
                                <p>We do our part today<br />for a greener tomorrow</p>
                            </div>
                        </div>

                        <p className="leading-[26px] text-base font-normal font-firaSans-condensed max-[768px]:pt-[13px] text-black/60">
                            We believe good food should do good too: for the planet, our people, and our communities.
                        </p>

                        <Link className='max-w-[150px] w-full' href="#">
                            <button style={{
                                animation: 'subtle-float 3s ease-in-out infinite'
                            }}
                                className="bg-darkpink  cursor-pointer font-firaSans-condensed leading-[23px] mt-[35px] text-lg font-medium text-white px-[14px] md:px-5 py-[6px] md:py-[10px] rounded-full transition">
                                Learn More
                            </button>
                        </Link>
                    </div>

                    {/* RIGHT SIDE IMAGE GRID (desktop only) */}
                    <div className="hidden md:grid grid-cols-2 gap-4 order-1 ">
                        <div className="col-span-2 overflow-hidden  ">
                            <Image src="/images/foodimg.png" alt="Food" width={256} height={270} className="w-full h-[179px] object-cover md:h-[270px] hover:scale-110 duration-500 " />
                        </div>
                        <div className='overflow-hidden' >
                            <Image src="/images/foodimg2.png" alt="Earth" width={227} height={262} className="w-full h-[174px] object-cover md:h-[262px] hover:scale-110 duration-500 " />
                        </div>
                        <div className="bg-gray5 flex items-center justify-center p-4 text-center text-[#2D2D2D] font-semibold text-base ">
                            <p className='leading-[23px] md:leading-[33px] text-lg md:text-[31px] font-medium font-firaSans-condensed md:font-firaSans text-lightblack/90 text-start' >We do our part today<br />for a greener tomorrow</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
