import React from 'react'
import Image from 'next/image';

const EsgSection = () => {
    const esgData = [
        {
            id: 1,
            title: "Environmental Stewardship",
            subtitle: "Growing sustainably, one initiative at a time.",
            image: "/images/Environmental-Stewardship.png",
            listdata: [
                "Adoption of energy-efficient practices including LED lighting, IOT-based electricity monitoring, and energy-saving kitchen appliances acr oss outlets.",
                "Food waste is actively minimized and redirected to NGOs and food banks, reducing landfill load.",
                "Use of air scrubbers, biodegradable packaging, and sustainable takeaway solutions to reduce pollution and plastic use.",
                "Sustainable sourcing of seafood and meat with BAP/HACCP certifications; emphasis on organic and locally procured ingredients wherever possible.",
                "Tree plantation drives across campuses and ongoing efforts to build environmental awareness among staff and guests.",
            ]
        },
        {
            id: 2,
            title: "Social Responsibility",
            subtitle: "Putting people at the heart of everything we do",
            image: "/images/Social-Responsibility.png",
            listdata: [
                "Ranked among India’s Best Companies to Work For, with employee-first initiatives like ‘Breaking Barriers – Safalta ki Aur’ and the Structured Career Progression Model.",
                "Empowering women through ‘Her Power’, ‘Aapki Saheli’, and our mascot Barbeque Rani, resulting in a jump from ~5% to 12% women workforce in two years.",
                "Skill-building through partnerships with over 50 hotel management institutes, as well as impacting over 3,000 youth under PMKVY 4.0.",
                "The ‘Big Appetite, Bigger Hearts’ campaign served 40,000+ meals to underprivileged children across India and international locations, reinforcing our commitment to community care."
            ]
        },
        {
            id: 3,
            title: "Governance",
            subtitle: "Leading with integrity, accountability, and transparency.",
            image: "/images/Governance.png",
            listdata: [
                "Transparent stakeholder communication is central to how we operate — keeping customers, employees, investors, and regulators informed and engaged.",
                "Our Board includes 6 non-executive directors, of which 3 (including the Chairman) are independent — ensuring strong checks and balances.",
                "We uphold a zero-tolerance policy towards unethical practices, with robust frameworks like our Whistleblower Policy, Anti-Sexual Harassment Policy, and Code of Conduct.",
            ]
        },
    ]
    return (
        <section className='container pt-[97px] lg:pt-[180px] pb-[20px] md:pb-[100px] lg:pb-50'>
            <div className=''>
                {
                    esgData?.map((esgdata, index) => {
                        return (
                            <div className='flex flex-col lg:flex-row items-start justify-between gap-[0px] lg:gap-5 mb-[100px] lg:mb-50 last:mb-0 ' key={index}>
                                <div className='w-full max-w-[581px]'>
                                    <div className='flex items-center justify-start gap-[19px] w-full lg:hidden mb-[21px] lg:mb-[0px]'>
                                        <span className='inline-block size-3 bg-darkpink '></span>
                                        <h4 className='uppercase tracking-[-1%] leading-[50px] italic text-[24px] lg:text-[30px] font-semibold font-firaSans-condensed text-darkpink'>{esgdata.title}</h4>
                                    </div>
                                    <Image src={esgdata.image} alt={esgdata.title} width={581} height={510} />
                                </div>
                                <div className='w-full max-w-[667px]'>
                                    <div className='pl-[0px] md:pl-[31px]'>
                                        <div className=' items-center justify-start gap-[19px] w-full hidden lg:flex'>
                                            <span className='inline-block size-3 bg-darkpink '></span>
                                            <h4 className='uppercase tracking-[-1%] leading-[50px] italic text-[24px] md:text-[30px] font-semibold font-firaSans-condensed text-darkpink'>{esgdata.title}</h4>
                                        </div>
                                        <h4 className='leading-[31px] md:leading-[56px] text-[26px] md:text-[46px] font-semibold font-firaSans-condensed text-brown pt-[37px] pb-[22px] lg:pt-[10px] lg:pb-[40px]'>{esgdata.subtitle}</h4>
                                    </div>
                                    <ul className='ml-[25px] md:ml-[31px]'>
                                        {esgdata.listdata.map((item, i) => (
                                            <li key={i} className="text-[16px] md:text-[24px] leading-[26px] md:leading-[130%] font-firaSans-condensed font-normal text-brown md:text-black/60 mb-[28px] md:mb-[50px] last:mb-0 list-[square] marker:text-[#5B3840]">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default EsgSection