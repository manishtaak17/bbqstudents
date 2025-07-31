"use client"

import React from 'react'
import Hero from './components/Hero';
import StickyCardsStack from './components/StickyCardOnScroll';
import OurBrands from './components/OurBrands';
import BrandShowcase from './components/BrandShowcase';

const Page = () => {
    return (
        <>
            <Hero />
            <OurBrands />
            <StickyCardsStack />
            <section className='pt-[85px] md:pt-[120px] lg:pt-[169px] pb-[95px] md:pb-[120px] lg:pb-[187px]'>
             <BrandShowcase />
            </section>
        </>
    )
}

export default Page
