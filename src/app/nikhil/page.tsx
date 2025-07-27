import React from 'react'
import Link from 'next/link';
import BrandsSection from './components/BrandsSection';
import EsgSection from './components/EsgSection';
import SustainabilitySection from './components/SustainabilitySection';

const page = () => {
  return (
    <>
      {/* Banner Section */}
      <section className='bg-bgcream container pt-[64px] pb-[146px] md:pt-[100px] lg:pt-[191px] lg:pb-[233px] '>
        <div className='flex items-start justify-between gap-15 lg:gap-2 flex-col lg:flex-row'>
          <div className='w-full max-w-full lg:max-w-[662px]'>
            <h1 className='inline uppercase tracking-[-1%] leading-[45px] md:leading-[95px] text-[45px] md:text-[115px] font-medium font-firaSans-condensed text-brown'>Reach out to us anytime</h1>
            <div className='inline'>
              <span className='inline-block w-full max-w-[14px] h-[14px] md:max-w-[27px] md:h-[27px] bg-lightgray2 ml-3 mr-[11px] md:mr-[19px]'></span>
              <span className='inline-block w-full max-w-[14px] h-[14px] md:max-w-[27px] md:h-[27px] bg-darkpink mr-[11px] md:mr-[19px]'></span>
              <span className='inline-block w-full max-w-[14px] h-[14px] md:max-w-[27px] md:h-[27px] bg-darkgray '></span>
            </div>
          </div>
          <div className='border-t-[1.5px] border-darkpink pl-2.5 w-full max-w-[385px] mr-[0px] lg:mr-[74px]'>
            <h4 className='uppercase tracking-[-1%] italic pt-[18px] pb-[15px] leading-[40px] text-[30px] font-semibold font-firaSans-condensed text-darkgray'>United Foodbrands</h4>
            <p className='leading-[27px] text-[18px] font-normal font-firaSans text-darkgray'>MUFG Intime India Private Limited
              <br />C-101, 247 Park,
              <br />LBS Marg, Vikhroli West,
              <br />Mumbai – 400 083, Maharashtra, India</p>
            <div className='flex items-start justify-start gap-1 pt-[22px] pb-[11px]'>
              <p className='leading-[28px] text-[18px] md:text-[20px] font-medium font-firaSans text-darkgray'>Email:</p>
              <Link href="mailto:compliance@barbequenation.com" className='break-all leading-[28px] text-[18px] md:text-[20px] font-normal font-firaSans text-darkgray underline'>compliance@barbequenation.com</Link>
            </div>
            <div className='flex items-start justify-start gap-1 '>
              <p className='leading-[28px] text-[18px] md:text-[20px] font-medium font-firaSans text-darkgray'>Tel:</p>
              <Link href="tel:+91 22 49186000" className='leading-[28px] text-[18px] md:text-[20px] font-normal font-firaSans text-darkgray'>+91 22 49186000</Link>
            </div>
          </div>
        </div>
      </section>


      <BrandsSection />


      <EsgSection />

      <section className='container'>
        <div className='bg-lightgray2 pt-[33px] pb-[20px] md:pt-[100px] lg:pt-[141px] lg:pb-[75px] px-6 md:px-8'>
          <div className='w-full max-w-[1054px] mx-auto '>
            <h2 className='tracking-[0%] md:tracking-[-1.2px] leading-[31px] md:leading-[51px] lg:leading-[83px] text-[26px] md:text-[40px] lg:text-[60px] font-semibold font-firaSans-condensed text-brown mb-[133px] md:mb-[103px]'>"These initiatives are not just programs, but our philosophy where career growth, dignity, and inclusion are non-negotiable. Together, we are building a workplace that is not only high-performing, but truly human."</h2>
            <div className='w-full max-w-full  flex justify-end'>
              <h4 className='tracking-[0%] md:tracking-[-1.2px] leading-[26px] md:leading-[47px] text-[16px] md:text-[25px] lg:text-[37px] font-normal font-firaSans-condensed text-brown  w-full max-w-[248px] md:max-w-[545px]'> — Kayum R. Dhanani,<br /> MD, Barbeque Nation Hospitality Ltd.</h4>
            </div>
          </div>
        </div>
      </section>
      <SustainabilitySection/>


      <section className='container pt-[118px] pb-[124px] md:pt-[200px] lg:pb-[200px]'>
            <div className='flex align-top justify-between gap-[0px] lg:gap-[49px] flex-col md:flex-row'>
                <div className='w-full  max-w-[160px]'>
                    <div className='flex items-center justify-start gap-[19px] w-full '>
                        <span className='inline-block size-3 bg-darkpink '></span>
                        <h4 className='uppercase tracking-[-1%] leading-[50px] italic text-[24px] lg:text-[30px] font-semibold font-firaSans-condensed text-darkpink'>Our goal</h4>
                    </div>  
                </div>
                <div className='w-full max-w-[864px]'>
                    <h2 className='tracking-[-0.6px] md:tracking-[0px] leading-[40px] md:leading-[50px] lg:leading-[75px] text-[26px] md:text-[36px] lg:text-[50px] font-normal font-firaSans-condensed text-brown  '>At Barbeque Nation, ESG isn’t a separate agenda — it’s the guiding force that drives us. From sustainable sourcing to inclusive hiring, and from ethical governance to community upliftment, we believe in creating long-term value that goes beyond profit.</h2>
                </div>
            </div>
        </section>
    </>
  )
}

export default page