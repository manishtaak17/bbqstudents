"use client";
import { useState } from "react";

const InvestorTabs = () => {

    const [selectedCategory, setSelectedCategory] = useState("Quarterly Updates");
    const [selectedYear, setSelectedYear] = useState("2024-2025");
    const [faqOpen, setFaqOpen] = useState({});
    const [visibleFaqs, setVisibleFaqs] = useState({});

    const categoryData = {
        "2023-2024": {
            "Quarterly Updates": [
                {
                    title: "Financial Results",
                    pdfs: ["Q1_23-24.pdf",
                        "Q2_23-24.pdf",
                        "Q3_23-24.pdf",
                        "Q4_23-24.pdf"
                    ]
                },
                { title: "Earnings Presentation", pdfs: ["Q1_23-24.pdf", "Q2_23-24.pdf", "Q3_23-24.pdf", "Q4_23-24.pdf"] },
                { title: "Investor Presentation", pdfs: ["Q1_23-24.pdf", "Q2_23-24.pdf", "Q3_23-24.pdf", "Q4_23-24.pdf"] },
                { title: "Earnings Call Invite", pdfs: ["Q1_23-24.pdf", "Q2_23-24.pdf", "Q3_23-24.pdf", "Q4_23-24.pdf"] },
                { title: "Earnings Call Audio", pdfs: ["Q1_23-24.pdf", "Q2_23-24.pdf", "Q3_23-24.pdf", "Q4_23-24.pdf"] },
                { title: "Earnings Call Transcript", pdfs: ["Q1_23-24.pdf", "Q2_23-24.pdf", "Q3_23-24.pdf", "Q4_23-24.pdf"] },
                { title: "Shareholding Pattern", pdfs: ["Q1_23-24.pdf", "Q2_23-24.pdf", "Q3_23-24.pdf", "Q4_23-24.pdf"] },
                { title: "Extra Item 1", pdfs: ["Q1_23-24.pdf", "Q2_23-24.pdf", "Q3_23-24.pdf", "Q4_23-24.pdf"] },
                { title: "Extra Item 2", pdfs: ["Q1_23-24.pdf", "Q2_23-24.pdf", "Q3_23-24.pdf", "Q4_23-24.pdf"] },
            ],
            "Annual Updates": [
                { title: "Annual Report", pdfs: ["2023.pdf"] },
                { title: "Subsidiary Financials", pdfs: ["A_23-24.pdf", "B_23-24.pdf", "C_23-24.pdf"] },
                { title: "BRSR", pdfs: ["2023.pdf"] },
                { title: "AGM", pdfs: ["2023.pdf"] },
                { title: "Unclaimed / Unpaid Dividends", pdfs: ["2023.pdf"] },
                { title: "Extra Annual 1", pdfs: ["2023.pdf"] },
                { title: "Extra Annual 2", pdfs: ["2023.pdf"] },
                { title: "Extra Annual 3", pdfs: ["2023.pdf"] },
            ],
            "Others": [
                { title: "Board Structure", pdfs: ["2023.pdf"] },
                { title: "Policies & Codes", pdfs: ["PolicyA_23-24.pdf", "PolicyB_23-24.pdf", "PolicyCodeA_23-24.pdf"] },
                { title: "Credit Ratings", pdfs: ["2023.pdf"] },
                { title: "EGM / Postal Ballots", pdfs: ["2023.pdf"] },
                { title: "Stock Exchange Intimations", pdfs: ["2023.pdf"] },
                { title: "Extra Other 1", pdfs: ["2023.pdf"] },
                { title: "Extra Other 2", pdfs: ["2023.pdf"] },
                { title: "Extra Other 3", pdfs: ["2023.pdf"] },
            ],
        },
        "2024-2025": {
            "Quarterly Updates": [
                { title: "Financial Results", pdfs: ["Q1_24-25.pdf", "Q2_24-25.pdf", "Q3_24-25.pdf", "Q4_24-25.pdf"] },
                { title: "Earnings Presentation", pdfs: ["Q1_24-25.pdf", "Q2_24-25.pdf", "Q3_24-25.pdf", "Q4_24-25.pdf"] },
                { title: "Investor Presentation", pdfs: ["Q1_24-25.pdf", "Q2_24-25.pdf", "Q3_24-25.pdf", "Q4_24-25.pdf"] },
                { title: "Earnings Call Invite", pdfs: ["Q1_24-25.pdf", "Q2_24-25.pdf", "Q3_24-25.pdf", "Q4_24-25.pdf"] },
                { title: "Earnings Call Audio", pdfs: ["Q1_24-25.pdf", "Q2_24-25.pdf", "Q3_24-25.pdf", "Q4_24-25.pdf"] },
                { title: "Earnings Call Transcript", pdfs: ["Q1_24-25.pdf", "Q2_24-25.pdf", "Q3_24-25.pdf", "Q4_24-25.pdf"] },
                { title: "Shareholding Pattern", pdfs: ["Q1_24-25.pdf", "Q2_24-25.pdf", "Q3_24-25.pdf", "Q4_24-25.pdf"] },
                { title: "Extra Item 1", pdfs: ["Q1_24-25.pdf", "Q2_24-25.pdf", "Q3_24-25.pdf", "Q4_24-25.pdf"] },
                { title: "Extra Item 2", pdfs: ["Q1_24-25.pdf", "Q2_24-25.pdf", "Q3_24-25.pdf", "Q4_24-25.pdf"] },
            ],
            "Annual Updates": [
                { title: "Annual Report", pdfs: ["2024.pdf"] },
                { title: "Subsidiary Financials", pdfs: ["A_24-25.pdf", "B_24-25.pdf", "C_24-25.pdf"] },
                { title: "BRSR", pdfs: ["2024.pdf"] },
                { title: "AGM", pdfs: ["2024.pdf"] },
                { title: "Unclaimed / Unpaid Dividends", pdfs: ["2024.pdf"] },
                { title: "Extra Annual 1", pdfs: ["2024.pdf"] },
                { title: "Extra Annual 2", pdfs: ["2024.pdf"] },
                { title: "Extra Annual 3", pdfs: ["2024.pdf"] },
            ],
            "Others": [
                { title: "Board Structure", pdfs: ["2024.pdf"] },
                { title: "Policies & Codes", pdfs: ["PolicyA_24-25.pdf", "PolicyB_24-25.pdf", "PolicyCodeA_24-25.pdf"] },
                { title: "Credit Ratings", pdfs: ["2024.pdf"] },
                { title: "EGM / Postal Ballots", pdfs: ["2024.pdf"] },
                { title: "Stock Exchange Intimations", pdfs: ["2024.pdf"] },
                { title: "Extra Other 1", pdfs: ["2024.pdf"] },
                { title: "Extra Other 2", pdfs: ["2024.pdf"] },
                { title: "Extra Other 3", pdfs: ["2024.pdf"] },
            ],
        },
        "2025-2026": {
            "Quarterly Updates": [
                { title: "Financial Results", pdfs: ["Q1_25-26.pdf", "Q2_25-26.pdf", "Q3_25-26.pdf", "Q4_25-26.pdf"] },
                { title: "Earnings Presentation", pdfs: ["Q1_25-26.pdf", "Q2_25-26.pdf", "Q3_25-26.pdf", "Q4_25-26.pdf"] },
                { title: "Investor Presentation", pdfs: ["Q1_25-26.pdf", "Q2_25-26.pdf", "Q3_25-26.pdf", "Q4_25-26.pdf"] },
                { title: "Earnings Call Invite", pdfs: ["Q1_25-26.pdf", "Q2_25-26.pdf", "Q3_25-26.pdf", "Q4_25-26.pdf"] },
                { title: "Earnings Call Audio", pdfs: ["Q1_25-26.pdf", "Q2_25-26.pdf", "Q3_25-26.pdf", "Q4_25-26.pdf"] },
                { title: "Earnings Call Transcript", pdfs: ["Q1_25-26.pdf", "Q2_25-26.pdf", "Q3_25-26.pdf", "Q4_25-26.pdf"] },
                { title: "Shareholding Pattern", pdfs: ["Q1_25-26.pdf", "Q2_25-26.pdf", "Q3_25-26.pdf", "Q4_25-26.pdf"] },
                { title: "Extra Item 1", pdfs: ["Q1_25-26.pdf", "Q2_25-26.pdf", "Q3_25-26.pdf", "Q4_25-26.pdf"] },
                { title: "Extra Item 2", pdfs: ["Q1_25-26.pdf", "Q2_25-26.pdf", "Q3_25-26.pdf", "Q4_25-26.pdf"] },
            ],
            "Annual Updates": [
                { title: "Annual Report", pdfs: ["2025.pdf"] },
                { title: "Subsidiary Financials", pdfs: ["A_25-26.pdf", "B_25-26.pdf", "C_25-26.pdf"] },
                { title: "BRSR", pdfs: ["2025.pdf"] },
                { title: "AGM", pdfs: ["2025.pdf"] },
                { title: "Unclaimed / Unpaid Dividends", pdfs: ["2025.pdf"] },
                { title: "Extra Annual 1", pdfs: ["2025.pdf"] },
                { title: "Extra Annual 2", pdfs: ["2025.pdf"] },
                { title: "Extra Annual 3", pdfs: ["2025.pdf"] },
            ],
            "Others": [
                { title: "Board Structure", pdfs: ["2025.pdf"] },
                { title: "Policies & Codes", pdfs: ["PolicyA_25-26.pdf", "PolicyB_25-26.pdf", "PolicyCodeA_25-26.pdf"] },
                { title: "Credit Ratings", pdfs: ["2025.pdf"] },
                { title: "EGM / Postal Ballots", pdfs: ["2025.pdf"] },
                { title: "Stock Exchange Intimations", pdfs: ["2025.pdf"] },
                { title: "Extra Other 1", pdfs: ["2025.pdf"] },
                { title: "Extra Other 2", pdfs: ["2025.pdf"] },
                { title: "Extra Other 3", pdfs: ["2025.pdf"] },
            ],
        },
    };

    const years = ["2023-2024", "2024-2025", "2025-2026"];
    const faqsPerPage = 7;

    const toggleFaq = (index: number) => {
        setFaqOpen(prev => {
            const newFaqOpen = { [index]: !prev[index] };
            Object.keys(prev).forEach(i => {
                if (i !== index.toString()) newFaqOpen[i] = false;
            });
            return newFaqOpen;
        });
    };

    const handleViewMore = () => {
        setVisibleFaqs(prev => ({
            ...prev,
            [selectedCategory]: (prev[selectedCategory] || faqsPerPage) + faqsPerPage
        }));
    };

    const currentCategoryData = categoryData[selectedYear][selectedCategory];
    const visibleItems = currentCategoryData.slice(0, visibleFaqs[selectedCategory] || faqsPerPage);

    return (
        <div className="container">
            <div className="max-w-[1172px] m-auto flex justify-between items-center mb-6">

                <div className="flex flex-wrap gap-7 justify-center ">
                    {Object.keys(categoryData["2024-2025"]).map((category, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setSelectedCategory(category);
                                setFaqOpen({});
                                setVisibleFaqs(prev => ({ ...prev, [category]: faqsPerPage }));
                            }}
                            className={` font-firaSans-condensed font-normal text-2xl leading-[130%] pb-[12px] transition-colors duration-200  ${selectedCategory === category
                                ? 'text-darkpink border-b-8 border-darkpink'
                                : ' text-darkgray hover:text-darkpink  border-b-8 border-[transparent]'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="relative inline-block text-left w-full md:w-auto mb-4 md:mb-0">
                    <select
                        value={selectedYear}
                        onChange={(e) => {
                            setSelectedYear(e.target.value);
                            setSelectedCategory("Quarterly Updates");
                            setFaqOpen({});
                            setVisibleFaqs({});
                        }}
                        className="focus:outline-none text-darkgray font-firaSans-condensed font-normal text-2xl leading-[130%]  "
                    >
                        {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
            </div>

            {selectedCategory && (
                <div className="">
                    {selectedCategory === "Quarterly Updates" ? (
                        <div className="space-y-0">
                            {visibleItems.map((item: any, idx: number) => (
                                <div
                                    key={idx}
                                    className={`w-full flex justify-between items-center py-[35px] px-[5%] hover:bg-darkcream ${idx === 0 ? "hover:border-darkcream border-b border-gray1 " : "hover:border-darkcream border-b border-gray1"} `}
                                >
                                    <div className="text-black font-firaSans-condensed font-medium text-2xl">{item.title}</div>
                                    <div className="flex justify-between w-full max-w-[336px]">
                                        {item.pdfs.map((pdf: any, pIdx: number) => (
                                            <a
                                                key={pIdx}
                                                href={`/${pdf}`}
                                                download
                                                className="text-darkgray hover:text-darkpink hover:underline font-firaSans-condensed font-normal text-2xl flex items-center"
                                            >
                                                {/* Optionally display actual pdf name or "Q1", etc */}
                                                Q{pIdx + 1}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* Show View More only if needed */}
                            {currentCategoryData.length > faqsPerPage && visibleItems.length < currentCategoryData.length && (
                                <button
                                    onClick={handleViewMore}
                                    className="flex items-center gap-4 text-darkgray font-fira-sans-condensed font-semibold text-lg leading-[30px] m-auto mt-[35px]"
                                >
                                    View More
                                    
                                </button>
                            )}
                        </div>
                    ) : (
                        <>
                            {visibleItems.map((item, idx) => (
                                <div key={idx} className="border-b border-gray-200">
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full text-left bg-bgcream hover:bg-darkcream flex justify-between items-center focus:outline-none py-[35px] px-[5%]"
                                    >
                                        <span className="text-black font-firaSans-condensed font-medium text-2xl">{item.title}</span>

                                        <svg className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${faqOpen[idx] ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                                            <path d="M1.20312 1.513L8.92969 9.24054L16.9241 1.24609" stroke="#5B3840" stroke-width="3" />
                                        </svg>
                                    </button>
                                    {faqOpen[idx] && (
                                        <div className="w-full  bg-darkcream focus:outline-none py-[0px] px-[5%]">
                                            {item.pdfs.map((pdf: any, pIdx: number) => (
                                                <a
                                                    key={pIdx}
                                                    href={`/${pdf}`}
                                                    download
                                                    className="font-firaSans-condensed font-normal text-2xl leading-[130%] text-darkgray w-full text-left bg-darkcream flex justify-between items-center focus:outline-none py-[23px] pl-[3%]"
                                                >{pdf}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                                        <path d="M13.6719 17.6497V2.31641M13.6719 17.6497L7.28299 11.2609M13.6719 17.6497L20.0608 11.2609M25.1719 17.6497V22.7609C25.1719 23.4386 24.9026 24.0886 24.4234 24.5679C23.9441 25.0472 23.2941 25.3164 22.6163 25.3164H4.72743C4.04966 25.3164 3.39964 25.0472 2.92038 24.5679C2.44112 24.0886 2.17188 23.4386 2.17188 22.7609V17.6497" stroke="#5B3840" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Show View More only for accordion case */}
                            {currentCategoryData.length > faqsPerPage && visibleItems.length < currentCategoryData.length && (
                                <button
                                    onClick={handleViewMore}
                                    className="flex items-center gap-4 text-darkgray font-fira-sans-condensed font-semibold text-lg leading-[30px] m-auto mt-[35px]"
                                >
                                    View More
                                </button>
                            )}
                        </>
                    )}
                </div>
            )}


        </div>
    );

};

export default InvestorTabs; 