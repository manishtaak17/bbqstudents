"use client"

import GetinTouchSec from '@/components/GetinTouchSec'
import Ourjourney from '@/components/Ourjourney'
import Image from 'next/image'
import React from 'react'
import SocialResponsibility from './components/SocialResponsibility'
import TeamSection from './components/TeamSection'

const page = () => {
    return (
        <>
            <div className='bg-bgcream' >
                <TeamSection />
                <Ourjourney />
                <SocialResponsibility />
                <GetinTouchSec />
                <div className='container md:hidden ' >
                    <Image src={"/images/sectionimg.png"} width={1298} height={335} alt='sectionimage' />
                </div>
            </div>
        </>
    )
}

export default page


