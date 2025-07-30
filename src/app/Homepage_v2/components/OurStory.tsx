import React from 'react';

interface ContentSection {
    title: string;
    subtitle: string;
    description: string;
}

const OurStory: React.FC = () => {
    const content: ContentSection = {
        title: "We bring India’s most loved food experiences into one growing family.",
        subtitle: "OUR STORY",
        description: "We are a platform for culinary stories, cultures, and communities to come together. Whether you're dining in, ordering out, or celebrating with your favorite people, we’re here to make those moments more flavorful, more joyful, and more meaningful."
    };

    return (
        <section>
            <div className="container">
                <div className="max-w-[748px] mr-0 ml-auto mt-[60px] md:mt-[144px]">
                    <h2 className="text-brown font-firaSans-condensed font-medium text-[43.26px] md:text-[56px] lg:text-[90px] leading-[49.51px] md:leading-[108%] tracking-[-1%] uppercase text-center md:text-left">
                        {content.title}
                    </h2>
                </div>

                <div className="max-w-[748px] mr-0 ml-auto">
                    <h5 className="text-darkpink font-firaSans-condensed font-semibold italic text-2xl md:text-3xl leading-[40px] tracking-[-1%] uppercase flex items-center gap-2 mt-[60px] md:mt-[48px] mb-[10px] md:mb-[33px]">
                        <span className="block size-2 md:size-5 bg-redbrown animate-dotPulse"></span>
                        {content.subtitle}
                    </h5>

                    <p className="text-brown font-firaSans-condensed font-normal text-[26px] md:text-[32px] lg:text-[50px] leading-[42px] md:leading-[40px] lg:leading-[76px] tracking-[-2%]">
                        {content.description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurStory;