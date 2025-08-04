"use client"
import HeroSection from "./components/HeroSection"
import OurStory from "./components/OurStory"
import BrandsSectionContent from "./components/BrandsSectionContent"
import OurJurney from "./components/Ourjurney"
import OurSocialResponsibility from "./components/OurSocialResponsibility"
import InvestorCareersSection from "./components/InvestorCareersSection"

const page = () => {
    return (
        <>
            <HeroSection />
            <OurStory />
            <BrandsSectionContent />
            <OurJurney />
            <OurSocialResponsibility />
            <InvestorCareersSection />

        </>
    )
}

export default page