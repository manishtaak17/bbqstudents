// "use client";

// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { Swiper as SwiperType } from "swiper";
// import ServiceCard from "./cards/ServiceCard";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import "swiper/css";
// import "swiper/css/navigation";

// const newsData = [
//   {
//     imageSrc: "toscano.png",
//     title: "1st Indian full service CDR brand with ₹1000+ Crore annual revenues",
//     date: "July 2025",
//     href: "#",
//   },
//   {
//     imageSrc: "toscano.png",
//     title: "United Foodbrands to go public in the next Quarter of 2025",
//     date: "July 2025",
//     href: "#",
//   },
//   {
//     imageSrc: "toscano.png",
//     title: "1st Indian full service CDR brand with ₹1000+ Crore annual revenues",
//     date: "July 2025",
//     href: "#",
//   },
//   {
//     imageSrc: "toscano.png",
//     title: "1st Indian full service CDR brand with ₹1000+ Crore annual revenues",
//     date: "July 2025",
//     href: "#",
//   },
//   {
//     imageSrc: "toscano.png",
//     title: "1st Indian full service CDR brand with ₹1000+ Crore annual revenues",
//     date: "July 2025",
//     href: "#",
//   },
//   {
//     imageSrc: "toscano.png",
//     title: "1st Indian full service CDR brand with ₹1000+ Crore annual revenues",
//     date: "July 2025",
//     href: "#",
//   },
// ];

// const NewsSection = () => {
//   const swiperRef = useRef<SwiperType>();

//   return (
//     <section className="bg-[#e9e1d2] px-4 py-10 md:py-20">
//       <div className="max-w-screen-xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6 md:mb-12">
//           <div>
//             <p className="text-sm md:text-base font-bold text-[#800020] uppercase">In the News</p>
//             <h2 className="text-xl md:text-3xl font-bold font-firaSans-condensed text-[#3e1f21]">
//               Our journey through the headlines
//             </h2>
//           </div>

//           {/* Navigation Buttons */}
//           <div className="hidden sm:flex gap-3">
//             <button
//               onClick={() => swiperRef.current?.slidePrev()}
//               className="w-10 h-10 border border-black text-black rounded hover:bg-black hover:text-white flex items-center justify-center transition"
//             >
//               <ArrowLeft size={20} />
//             </button>
//             <button
//               onClick={() => swiperRef.current?.slideNext()}
//               className="w-10 h-10 border border-black text-black rounded hover:bg-black hover:text-white flex items-center justify-center transition"
//             >
//               <ArrowRight size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Swiper Slider */}
//         <Swiper
//           modules={[Navigation]}
//           onBeforeInit={(swiper) => {
//             swiperRef.current = swiper;
//           }}
//           spaceBetween={24}
//           slidesPerView={1.1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//         >
//           {newsData.map((item, idx) => (
//             <SwiperSlide key={idx}>
//               <ServiceCard {...item} />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Mobile View More */}
//         <div className="md:hidden text-center mt-6">
//           <button className="text-sm font-semibold underline underline-offset-4 hover:text-[#800020]">
//             VIEW MORE ↓
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsSection;

"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import ServiceCard from "./cards/ServiceCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const newsData = [
    {
        imageSrc: "toscano.png",
        title: "1st Indian full service CDR brand with ₹1000+ Crore annual revenues",
        date: "July 2025",
        href: "#",
    },
    {
        imageSrc: "toscano.png",
        title: "United Foodbrands to go public in the next Quarter of 2025",
        date: "July 2025",
        href: "#",
    },
    {
        imageSrc: "toscano.png",
        title: "1st Indian full service CDR brand with ₹1000+ Crore annual revenues",
        date: "July 2025",
        href: "#",
    },
    {
        imageSrc: "toscano.png",
        title: "1st Indian full service CDR brand with ₹1000+ Crore annual revenues",
        date: "July 2025",
        href: "#",
    },
    {
        imageSrc: "toscano.png",
        title: "1st Indian full service CDR brand with ₹1000+ Crore annual revenues",
        date: "July 2025",
        href: "#",
    },
    {
        imageSrc: "toscano.png",
        title: "1st Indian full service CDR brand with ₹1000+ Crore annual revenues",
        date: "July 2025",
        href: "#",
    },
];

const Ourjourney = () => {
    const swiperRef = useRef<SwiperType>();

    return (
        <div className="bg-gray2" >
            <div className="container" >
                <div className="md:pt-[77px] pt-[42px] md:pb-[84px] pb-[15px] ">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-[38px] md:mb-[50px]">
                        <div>
                            <div className="flex items-start md:gap-[22px] gap-[15px]">
                                <div className="md:min-w-[12px] md:h-[12px] min-w-[9px] h-[9px] bg-darkpink md:mt-3 mt-1" />
                                <div className="flex-col items-start" >
                                    <p className="leading-[23px] md:leading-[40px] md:text-[30px] md:italic not-italic  text-lg font-medium font-firaSans-condensed text-darkpink2  uppercase">In the News</p>
                                    <h2 className="leading-[35px] text-[28px] font-semibold font-firaSans-condensed text-brown ">
                                        Our journey through the headlines
                                    </h2>
                                </div>
                            </div>

                        </div>

                        {/* Navigation Buttons */}
                        <div className="hidden sm:flex gap-4">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className=" transition cursor-pointer hover:translate-x-[-5px] duration-500"
                            > <Image src={"/icons/leftarrow.png"} alt="arrowdown" width={20} height={20} />
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="transition cursor-pointer hover:translate-x-[5px] duration-500"
                            >

                                <Image src={"/icons/rightarrow.png"} alt="right" width={20} height={20} />
                            </button>
                        </div>
                    </div>

                    {/* Swiper for Mobile */}
                    <div className="hidden sm:block">
                        <Swiper
                            modules={[Navigation]}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            spaceBetween={24}
                            slidesPerView={1.1}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                909: { slidesPerView: 3 },
                                1124: { slidesPerView: 4 },
                            }}
                        >
                            {newsData.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <ServiceCard {...item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Grid for sm and above */}
                    <div className="sm:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {newsData.map((item, idx) => (
                            <ServiceCard key={idx} {...item} />
                        ))}
                    </div>

                    {/* Mobile View More */}
                    <div className="sm:hidden mt-[34px] flex flex-row gap-[9px] items-center justify-center text-center">
                        <button className="leading-[23px] text-lg font-medium font-firaSans-condensed text-darkgray ">
                            VIEW MORE
                        </button>
                        <Image src={"/icons/arrowdown.png"} alt="arrowdown" width={15} height={7} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourjourney;
