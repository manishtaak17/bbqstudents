import React from 'react'

const SustainabilitySection = () => {
    const sustainability = [
        {
            listTitle: "Culinary Excellence & Ethical Sourcing",
        },
        {
            listTitle: "Environmental Stewardship",
        },
        {
            listTitle: "Employee Growth & Well-being",
        },
        {
            listTitle: "Community Impact",
        },

    ]
    return (
        <section className='container pt-[95px] pb-[92px] md:pt-[200px] lg:pb-[120px]'>
            <div className='flex align-top justify-between gap-[20px] lg:gap-[49px] flex-col md:flex-row'>
                <div className='w-full max-w-[389px] hidden md:block'>
                    <h2 className='leading-[31px] md:leading-[46px] lg:leading-[56px] text-[26px] md:text-[36px] lg:text-[46px] font-semibold font-firaSans-condensed text-brown  md:mt-[114px]'>We operate under a clearly defined four-pillar framework:</h2>
                </div>
                <div className='w-full max-w-[864px]'>
                    <div className='flex items-center justify-start gap-[19px] w-full '>
                        <span className='inline-block size-3 bg-darkpink '></span>
                        <h4 className='uppercase tracking-[-1%] leading-[50px] italic text-[24px] lg:text-[30px] font-semibold font-firaSans-condensed text-darkpink'>Sustainability Framework</h4>
                    </div>
                    <div className='w-full max-w-[389px] block md:hidden pt-3'>
                        <h2 className='leading-[31px] md:leading-[46px] lg:leading-[56px] text-[26px] md:text-[36px] lg:text-[46px] font-semibold font-firaSans-condensed text-brown  md:mt-[114px]'>We operate under a clearly defined four-pillar framework:</h2>
                    </div>
                    <ul className='mt-[15px] mb-[39px] md:mt-[74px] md:mb-[56px]'>
                        {sustainability?.map((item, index) => (
                            <li key={index} className="pl-0 py-[24px] md:pl-5 leading-[23px] md:leading-[50px] xl:leading-[75px] text-[18px] md:text-[30px] xl:text-[50px] font-medium md:font-normal font-firaSans-condensed text-brown border-b-[1px] border-darkgray "><span className="mr-[12px]">{index + 1}.</span>{item.listTitle}</li>
                        ))}
                    </ul>
                    <h4 className='w-full max-w-[332px] md:max-w-[860px]  tracking-[0%] md:tracking-[-0.6px] leading-[26px] md:leading-[44px] text-[16px] md:text-[30px] font-normal font-firaSans-condensed text-brown'>Together, these pillars help us align with the <span className='text-darkpink'>UN Sustainable Development Goals (SDGs)</span> and ensure we grow responsibly while contributing to the world around us.</h4>
                </div>
            </div>
        </section>
    )
}

export default SustainabilitySection