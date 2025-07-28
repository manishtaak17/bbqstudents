import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

interface CounterItem {
    value: number;
    label: string;
    color: string;
};

const CounterItems: CounterItem[] = [
    {
        value: 195,
        label: 'Restaurants',
        color: 'bg-darkpink'
    },
    {
        value: 20,
        label: 'Brands',
        color: 'bg-bgbrown'
    },
    {
        value: 80,
        label: 'Cities',
        color: 'bg-pink'
    },
    {
        value: 5,
        label: 'Countries',
        color: 'bg-darkcream'
    },
];

const CounterSection: React.FC = () => {
    const counterRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={counterRef}
            className="flex justify-center md:justify-between flex-wrap md:flex-nowrap opacity-0 gap-[50px] md:gap-0 "
        >
            {CounterItems.map((item, index) => (
                <div key={index} className="text-center w-[40%] md:w-auto flex flex-col items-center">
                    <h3 className={`text-bgbrown font-firaSans-condensed font-medium text-[45px] md:text-[80px] lg:text-[100px] leading-[45px] md:leading-[100%] lg:leading-[95px] tracking-[-1%] md:tracking-[0] flex items-center`}>
                        <span className={`block size-2 md:size-5 mr-2 md:mr-2.5 ${item.color}`}></span>
                        {isVisible && (
                            <CountUp end={item.value} duration={2} />
                        )}
                        {item.value === 80 && isVisible ? '+' : ''}
                    </h3>
                    <p className="text-brown font-firaSans-condensed font-medium md:font-normal text-lg md:text-[24px] leading-[23px] md:leading-[130%] text-left ml-8">{item.label}</p>
                </div>
            ))}
        </div>
    );
};

export default CounterSection;