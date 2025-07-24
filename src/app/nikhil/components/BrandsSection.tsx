import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const BrandsSection = () => {

    const brands = [
        {
            brandImage: "/images/Barbeque.png",
            brandTitle: "Barbeque",
            websiteLink: "www.linkintime.co.in",
            email: "compliance@barbequenation.com",
            phoneNumber: "+91 22 49186000",
        },
        {
            brandImage: "/images/TOSCANO.png",
            brandTitle: "TOSCANO",
            websiteLink: "www.linkintime.co.in",
            email: "compliance@barbequenation.com",
            phoneNumber: "+91 22 49186000",
        },
        {
            brandImage: "/images/SALT.png",
            brandTitle: "SALT",
            websiteLink: "www.linkintime.co.in",
            email: "compliance@barbequenation.com",
            phoneNumber: "+91 22 49186000",
        },
        {
            brandImage: "/images/omm-nom-nomm.png",
            brandTitle: "omm nom nomm",
            websiteLink: "www.linkintime.co.in",
            email: "compliance@barbequenation.com",
            phoneNumber: "+91 22 49186000",
        },
        {
            brandImage: "/images/Dum-Safar.png",
            brandTitle: "Dum Safar",
            websiteLink: "www.linkintime.co.in",
            email: "compliance@barbequenation.com",
            phoneNumber: "+91 22 49186000",
        },
        {
            brandImage: "/images/UBQ.png",
            brandTitle: "UBQ",
            websiteLink: "www.linkintime.co.in",
            email: "compliance@barbequenation.com",
            phoneNumber: "+91 22 49186000",
        },


    ]

    return (
        <>
            <section className='container  pt-[0px] pb-[142px] md:pt-[0px] lg:pt-[15px] lg:pb-[178px]'>
                <div className='w-full max-w-full lg:max-w-[1169px] mx-auto'>
                    <div className='flex items-center justify-start gap-[17px] w-full max-w-[410px] mb-14 md:mb-15'>
                        <span className='inline-block size-3 bg-darkpink '></span>
                        <h4 className='uppercase tracking-[-1%] leading-[50px] italic text-[24px] md:text-[30px] font-semibold font-firaSans-condensed text-darkpink'>BrandS</h4>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-x-[30px] xl:gap-x-[78px] gap-y-[65px] xl:gap-y-[87px]'>
                        {
                            brands?.map((brand,index) => {
                                return (
                                    <div className='pt-[21px] border-t-[1.5px] border-darkpink' key={index}>
                                        <Image src={brand.brandImage} alt={brand.brandTitle} width={338} height={134} />
                                        <h4 className='uppercase tracking-[-1%] leading-[31px] md:leading-[40px] text-[26px] md:text-[30px] italic font-semibold font-firaSans-condensed text-darkgray pt-[12px] pb-[23px] md:pt-[22px] md:pb-[13px]'>{brand.brandTitle}</h4>
                                        <div className='flex items-start justify-start gap-2 '>
                                            <p className='leading-[26px] text-[16px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-darkgray'>Website:</p>
                                            <Link href={`${brand.websiteLink}`} className='break-all leading-[26px] text-[16px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-darkgray '>{brand.websiteLink}</Link>
                                        </div>
                                        <div className='flex items-start justify-start gap-1 py-[5px] md:py-[6px]'>
                                            <p className='leading-[26px] text-[16px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-darkgray'>Email:</p>
                                            <Link href={`mailto:${brand.email}`} className='break-all leading-[26px] text-[16px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-darkgray '>{brand.email}</Link>
                                        </div>
                                        <div className='flex items-start justify-start gap-1'>
                                            <p className='leading-[26px] text-[16px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-darkgray'>Tel:</p>
                                            <Link href={`tel:${brand.phoneNumber}`} className='leading-[26px] text-[16px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-darkgray'>{brand.phoneNumber}</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default BrandsSection