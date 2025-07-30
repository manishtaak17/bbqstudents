

import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <>
            <div className="max-w-[100%] mt-[60px] md:mt-[90px] px-5">
                <Image src="/images/home-v2.jpg" height={500} width={1400} alt="Food" className="hidden md:flex m-auto" />
                <Image src="/images/drink-investor-page.jpg" height={500} width={1400} alt="Food" className="md:hidden m-auto" />
            </div>
        </>
    )
}

export default HeroSection