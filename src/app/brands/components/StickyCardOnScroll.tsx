import React, { Fragment, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import StickyCard from './StickCard';
import AccordionCard from './AccordionCard';

const cardData = [
    {
        id: 1,
        title: "BBQ Nation",
        brandimage: "barbequenation.png",
        image: "bbqmissionimg1.png",
        description: "Toscano brings the soul of Italy to India with artisanal dishes that honor heritage and elevate flavor. From hand-tossed pizzas and handmade ",
        color: "",
        bgColor: "lightbrown",
        topOffset: 50
    },
    {
        id: 2,
        title: "Toscano",
        brandimage: "toscanobrandpizzeria1.png",
        image: "Toscanorestaurant.png",
        description: "Toscano brings the soul of Italy to India with artisanal dishes that honor heritage and elevate flavor. From hand-tossed pizzas and handmade pastas to expertly curated wines, every meal is a sensory journey through Tuscany. Its elegant ambiance, immersive dining events, and warm hospitality make every visit feel authentically Italian.",
        color: "",
        bgColor: "lightbrown",
        topOffset: 60
    },
    {
        id: 3,
        title: "Salt",
        brandimage: "saltbrand.png",
        image: "saltrestaurant.png",
        description: "SALT brings Indian cuisine into the now with a modern dining experience that blends tradition and innovation. With over 150 thoughtfully curated dishes, a bold cocktail menu, and signature touches like buffet-at-the-table service, SALT is a go-to for everyday dinners and special celebrations alike.",
        color: "",
        bgColor: "lightbrown",
        topOffset: 70
    },
    {
        id: 4,
        title: "UBQ Thalis, Meals & Bowls",
        brandimage: "ubqbrand.png",
        image: "ubqrestaurant.png",
        description: "UBQ is a modern cloud kitchen that serves up Indian thalis, bowls, and meals designed for everyday deliciousness. From comforting classics like Rajma Chawal to indulgent combos, each dish is flavorful, affordable, and made to fit into busy lives. With fresh ingredients, desk-friendly packaging, and quick delivery, UBQ blends traditional taste with modern convenience.",
        color: "",
        bgColor: "lightbrown",
        topOffset: 80
    },
    {
        id: 5,
        title: "Dum Safar Biryani",
        image: "dsrestaurant.png",
        brandimage: "dumsafarbrand.png",
        description: "Dum Safar Biryani celebrates the magic of biryani and the joy of shared meals. Crafted in the traditional dum style with long-grain rice, rich spices, and tender ingredients, each biryani comes with wholesome sides and indulgent touches. Delivered in specially designed boxes, Dum Safar offers a soulful dining experience that’s perfect for solo cravings or festive get-togethers.",
        color: "",
        bgColor: "lightbrown",
        topOffset: 80
    },
    {
        id: 6,
        title: "Om Nom Nomm",
        image: "onnrestaurant.png",
        brandimage: "nombrand.png",
        description: "Omm Nom Nomm is a luxury French-style ice cream brand that redefines indulgence with integrity. Made in small batches using real ingredients, every scoop is rich, honest, and unapologetically indulgent. With no artificial additives, just pure flavor and smooth texture, Omm Nom Nomm is for those who believe that dessert should be as clean as it is luxurious.",
        color: "",
        bgColor: "lightbrown",
        topOffset: 80
    },
];

const StickyCardsStack = () => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const [openCardId, setOpenCardId] = useState<number | null>(null);

    return (
        <>
            <div className=" hidden min-[991px]:block max-w-[1074px] mx-auto w-full">
                <motion.div
                    ref={containerRef}
                    className="relative flex flex-col  gap-6 mx-auto items-center px-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {cardData.map((card, index) => (
                        <Fragment key={card.id + Date.now() + index}>
                            <StickyCard key={card.id} card={card} />
                        </Fragment>
                    ))}
                </motion.div>
            </div>
            <div className="min-[991px]:hidden">
                {cardData.map((card, index) => (
                    <Fragment key={card.id + Date.now() + index}>
                        <AccordionCard
                            key={card.id}
                            card={card}
                            isOpen={openCardId === card.id}
                            setOpenCardId={setOpenCardId}
                        />
                    </Fragment>
                ))}
            </div>
        </>
    );
};

export default StickyCardsStack;
