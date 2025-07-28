
// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const InvestorTabs = () => {
//     const [selectedCategory, setSelectedCategory] = useState("Quarterly Updates");
//     const [selectedYear, setSelectedYear] = useState("2024-2025");
//     const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});
//     const [visibleFaqs, setVisibleFaqs] = useState<Record<string, number>>({});
//     const [isMobile, setIsMobile] = useState(false);

//     const categoryData: Record<string, Record<string, { title: string; pdfs: string[] }[]>> = {
//         "2023-2024": {
//             "Quarterly Updates": [
//                 { title: "Financial Results", pdfs: ["Q1_23-24.pdf", "Q2_23-24.pdf", "Q3_23-24.pdf", "Q4_23-24.pdf"] },
//                 { title: "Earnings Presentation", pdfs: ["Q1_23-24.pdf", "Q2_23-24.pdf", "Q3_23-24.pdf", "Q4_23-24.pdf"] },
//                 { title: "Investor Presentation", pdfs: ["Q1_23-24.pdf", "Q2_23-24.pdf", "Q3_23-24.pdf", "Q4_23-24.pdf"] },
//                 { title: "Earnings Call Invite", pdfs: ["Q1_23-24.pdf", "Q2_23-24.pdf", "Q3_23-24.pdf", "Q4_23-24.pdf"] },
//                 { title: "Earnings Call Audio", pdfs: ["Q1_23-24.pdf", "Q2_23-24.pdf", "Q3_23-24.pdf", "Q4_23-24.pdf"] },
//                 { title: "Earnings Call Transcript", pdfs: ["Q1_23-24.pdf", "Q2_23-24.pdf", "Q3_23-24.pdf", "Q4_23-24.pdf"] },
//                 { title: "Shareholding Pattern", pdfs: ["Q1_23-24.pdf", "Q2_23-24.pdf", "Q3_23-24.pdf", "Q4_23-24.pdf"] },
//                 { title: "Extra Item 1", pdfs: ["Q1_23-24.pdf", "Q2_23-24.pdf", "Q3_23-24.pdf", "Q4_23-24.pdf"] },
//                 { title: "Extra Item 2", pdfs: ["Q1_23-24.pdf", "Q2_23-24.pdf", "Q3_23-24.pdf", "Q4_23-24.pdf"] },
//             ],
//             "Annual Updates": [
//                 { title: "Annual Report", pdfs: ["2023.pdf"] },
//                 { title: "Subsidiary Financials", pdfs: ["A_23-24.pdf", "B_23-24.pdf", "C_23-24.pdf"] },
//                 { title: "BRSR", pdfs: ["2023.pdf"] },
//                 { title: "AGM", pdfs: ["2023.pdf"] },
//                 { title: "Unclaimed / Unpaid Dividends", pdfs: ["2023.pdf"] },
//                 { title: "Extra Annual 1", pdfs: ["2023.pdf"] },
//                 { title: "Extra Annual 2", pdfs: ["2023.pdf"] },
//                 { title: "Extra Annual 3", pdfs: ["2023.pdf"] },
//             ],
//             "Others": [
//                 { title: "Board Structure", pdfs: ["2023.pdf"] },
//                 { title: "Policies & Codes", pdfs: ["PolicyA_23-24.pdf", "PolicyB_23-24.pdf", "PolicyCodeA_23-24.pdf"] },
//                 { title: "Credit Ratings", pdfs: ["2023.pdf"] },
//                 { title: "EGM / Postal Ballots", pdfs: ["2023.pdf"] },
//                 { title: "Stock Exchange Intimations", pdfs: ["2023.pdf"] },
//                 { title: "Extra Other 1", pdfs: ["2023.pdf"] },
//                 { title: "Extra Other 2", pdfs: ["2023.pdf"] },
//                 { title: "Extra Other 3", pdfs: ["2023.pdf"] },
//             ],
//         },
//         "2024-2025": {
//             "Quarterly Updates": [
//                 { title: "Financial Results", pdfs: ["Q1_24-25.pdf", "Q2_24-25.pdf", "Q3_24-25.pdf", "Q4_24-25.pdf"] },
//                 { title: "Earnings Presentation", pdfs: ["Q1_24-25.pdf", "Q2_24-25.pdf", "Q3_24-25.pdf", "Q4_24-25.pdf"] },
//                 { title: "Investor Presentation", pdfs: ["Q1_24-25.pdf", "Q2_24-25.pdf", "Q3_24-25.pdf", "Q4_24-25.pdf"] },
//                 { title: "Earnings Call Invite", pdfs: ["Q1_24-25.pdf", "Q2_24-25.pdf", "Q3_24-25.pdf", "Q4_24-25.pdf"] },
//                 { title: "Earnings Call Audio", pdfs: ["Q1_24-25.pdf", "Q2_24-25.pdf", "Q3_24-25.pdf", "Q4_24-25.pdf"] },
//                 { title: "Earnings Call Transcript", pdfs: ["Q1_24-25.pdf", "Q2_24-25.pdf", "Q3_24-25.pdf", "Q4_24-25.pdf"] },
//                 { title: "Shareholding Pattern", pdfs: ["Q1_24-25.pdf", "Q2_24-25.pdf", "Q3_24-25.pdf", "Q4_24-25.pdf"] },
//                 { title: "Extra Item 1", pdfs: ["Q1_24-25.pdf", "Q2_24-25.pdf", "Q3_24-25.pdf", "Q4_24-25.pdf"] },
//                 { title: "Extra Item 2", pdfs: ["Q1_24-25.pdf", "Q2_24-25.pdf", "Q3_24-25.pdf", "Q4_24-25.pdf"] },
//             ],
//             "Annual Updates": [
//                 { title: "Annual Report", pdfs: ["2024.pdf"] },
//                 { title: "Subsidiary Financials", pdfs: ["A_24-25.pdf", "B_24-25.pdf", "C_24-25.pdf"] },
//                 { title: "BRSR", pdfs: ["2024.pdf"] },
//                 { title: "AGM", pdfs: ["2024.pdf"] },
//                 { title: "Unclaimed / Unpaid Dividends", pdfs: ["2024.pdf"] },
//                 { title: "Extra Annual 1", pdfs: ["2024.pdf"] },
//                 { title: "Extra Annual 2", pdfs: ["2024.pdf"] },
//                 { title: "Extra Annual 3", pdfs: ["2024.pdf"] },
//             ],
//             "Others": [
//                 { title: "Board Structure", pdfs: ["2024.pdf"] },
//                 { title: "Policies & Codes", pdfs: ["PolicyA_24-25.pdf", "PolicyB_24-25.pdf", "PolicyCodeA_24-25.pdf"] },
//                 { title: "Credit Ratings", pdfs: ["2024.pdf"] },
//                 { title: "EGM / Postal Ballots", pdfs: ["2024.pdf"] },
//                 { title: "Stock Exchange Intimations", pdfs: ["2024.pdf"] },
//                 { title: "Extra Other 1", pdfs: ["2024.pdf"] },
//                 { title: "Extra Other 2", pdfs: ["2024.pdf"] },
//                 { title: "Extra Other 3", pdfs: ["2024.pdf"] },
//             ],
//         },
//         "2025-2026": {
//             "Quarterly Updates": [
//                 { title: "Financial Results", pdfs: ["Q1_25-26.pdf", "Q2_25-26.pdf", "Q3_25-26.pdf", "Q4_25-26.pdf"] },
//                 { title: "Earnings Presentation", pdfs: ["Q1_25-26.pdf", "Q2_25-26.pdf", "Q3_25-26.pdf", "Q4_25-26.pdf"] },
//                 { title: "Investor Presentation", pdfs: ["Q1_25-26.pdf", "Q2_25-26.pdf", "Q3_25-26.pdf", "Q4_25-26.pdf"] },
//                 { title: "Earnings Call Invite", pdfs: ["Q1_25-26.pdf", "Q2_25-26.pdf", "Q3_25-26.pdf", "Q4_25-26.pdf"] },
//                 { title: "Earnings Call Audio", pdfs: ["Q1_25-26.pdf", "Q2_25-26.pdf", "Q3_25-26.pdf", "Q4_25-26.pdf"] },
//                 { title: "Earnings Call Transcript", pdfs: ["Q1_25-26.pdf", "Q2_25-26.pdf", "Q3_25-26.pdf", "Q4_25-26.pdf"] },
//                 { title: "Shareholding Pattern", pdfs: ["Q1_25-26.pdf", "Q2_25-26.pdf", "Q3_25-26.pdf", "Q4_25-26.pdf"] },
//                 { title: "Extra Item 1", pdfs: ["Q1_25-26.pdf", "Q2_25-26.pdf", "Q3_25-26.pdf", "Q4_25-26.pdf"] },
//                 { title: "Extra Item 2", pdfs: ["Q1_25-26.pdf", "Q2_25-26.pdf", "Q3_25-26.pdf", "Q4_25-26.pdf"] },
//             ],
//             "Annual Updates": [
//                 { title: "Annual Report", pdfs: ["2025.pdf"] },
//                 { title: "Subsidiary Financials", pdfs: ["A_25-26.pdf", "B_25-26.pdf", "C_25-26.pdf"] },
//                 { title: "BRSR", pdfs: ["2025.pdf"] },
//                 { title: "AGM", pdfs: ["2025.pdf"] },
//                 { title: "Unclaimed / Unpaid Dividends", pdfs: ["2025.pdf"] },
//                 { title: "Extra Annual 1", pdfs: ["2025.pdf"] },
//                 { title: "Extra Annual 2", pdfs: ["2025.pdf"] },
//                 { title: "Extra Annual 3", pdfs: ["2025.pdf"] },
//             ],
//             "Others": [
//                 { title: "Board Structure", pdfs: ["2025.pdf"] },
//                 { title: "Policies & Codes", pdfs: ["PolicyA_25-26.pdf", "PolicyB_25-26.pdf", "PolicyCodeA_25-26.pdf"] },
//                 { title: "Credit Ratings", pdfs: ["2025.pdf"] },
//                 { title: "EGM / Postal Ballots", pdfs: ["2025.pdf"] },
//                 { title: "Stock Exchange Intimations", pdfs: ["2025.pdf"] },
//                 { title: "Extra Other 1", pdfs: ["2025.pdf"] },
//                 { title: "Extra Other 2", pdfs: ["2025.pdf"] },
//                 { title: "Extra Other 3", pdfs: ["2025.pdf"] },
//             ],
//         },
//     };

//     const years: string[] = ["2023-2024", "2024-2025", "2025-2026"];
//     const faqsPerPage: number = 7;

//     const toggleFaq = (index: number) => {
//         setFaqOpen(prev => {
//             const newFaqOpen: Record<number, boolean> = { [index]: !prev[index] };
//             Object.keys(prev).forEach(i => {
//                 if (i !== index.toString()) newFaqOpen[parseInt(i)] = false;
//             });
//             return newFaqOpen;
//         });
//     };

//     const handleViewMore = () => {
//         setVisibleFaqs(prev => ({
//             ...prev,
//             [selectedCategory]: (prev[selectedCategory] || faqsPerPage) + faqsPerPage
//         }));
//     };

//     const currentCategoryData = categoryData[selectedYear][selectedCategory];
//     const visibleItems = currentCategoryData.slice(0, visibleFaqs[selectedCategory] || faqsPerPage);

//     useEffect(() => {
//         const handleResize = () => setIsMobile(window.innerWidth < 768);
//         handleResize();
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     // Animation variants for tab content
//     const tabVariants = {
//         initial: { opacity: 0, y: 20 },
//         animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
//         exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } }
//     };

//     // Animation variants for individual FAQ items
//     const itemVariants = {
//         initial: { opacity: 0, y: 10 },
//         animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
//     };

//     // Animation variants for FAQ content
//     const faqVariants = {
//         initial: { height: 0, opacity: 0 },
//         animate: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
//         exit: { height: 0, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }
//     };

//     return (
//         <div className="container">
//             <div className="max-w-[1172px] m-auto flex justify-between items-center border-b border-gray1 md:border-0 pb-5 md:pb-0">
//                 {isMobile ? (
//                     <div className="w-full md:hidden">
//                         <div className="relative inline-block text-left w-full max-w-[171px] md:max-w-none">
//                             <select
//                                 value={selectedCategory}
//                                 onChange={(e) => {
//                                     setSelectedCategory(e.target.value);
//                                     setFaqOpen({});
//                                     setVisibleFaqs(prev => ({ ...prev, [e.target.value]: faqsPerPage }));
//                                 }}
//                                 className="w-full max-w-[171px] md:max-w-none p-0 md:pr-10 md:pl-4 md:py-2 focus:outline-none text-darkpink md:text-darkgray font-firaSans-condensed font-medium md:font-normal text-lg md:text-2xl leading-[130%] appearance-none"
//                             >
//                                 {Object.keys(categoryData["2024-2025"]).map((category) => (
//                                     <option key={category} value={category}>
//                                         {category}
//                                     </option>
//                                 ))}
//                             </select>
//                             <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
//                                 <svg className="w-4 md:w-5 h-4 md:h-5 text-gray-600 transform transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
//                                     <path d="M1.20312 1.513L8.92969 9.24054L16.9241 1.24609" stroke="#5B3840" stroke-width="2" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="flex flex-wrap gap-7 justify-center">
//                         {Object.keys(categoryData["2024-2025"]).map((category, idx) => (
//                             <button
//                                 key={idx}
//                                 onClick={() => {
//                                     setSelectedCategory(category);
//                                     setFaqOpen({});
//                                     setVisibleFaqs(prev => ({ ...prev, [category]: faqsPerPage }));
//                                 }}
//                                 className={`font-firaSans-condensed font-normal text-2xl leading-[130%] pb-[2px] lg:pb-[12px] transition-colors duration-200 ${selectedCategory === category
//                                     ? 'text-darkpink border-b-8 border-darkpink'
//                                     : 'text-darkgray hover:text-darkpink border-b-8 border-[transparent]'
//                                     }`}
//                             >
//                                 {category}
//                             </button>
//                         ))}
//                     </div>
//                 )}
//                 <div className="relative inline-block text-left w-full max-w-[100px] md:max-w-none md:w-auto mb-0 md:mb-3 lg:mb-0">
//                     <select
//                         value={selectedYear}
//                         onChange={(e) => {
//                             setSelectedYear(e.target.value);
//                             setSelectedCategory("Quarterly Updates");
//                             setFaqOpen({});
//                             setVisibleFaqs({});
//                         }}
//                         className="appearance-none w-full p-0 md:pr-10 md:pl-4 md:py-2 focus:outline-none text-darkgray font-firaSans-condensed font-normal text-base md:text-2xl leading-[130%]"
//                         name="year"
//                     >
//                         {years.map((year) => (
//                             <option key={year} value={year}>
//                                 {year}
//                             </option>
//                         ))}
//                     </select>
//                     <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
//                         <svg className="w-4 md:w-5 h-4 md:h-5 text-gray-600 transform transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
//                             <path d="M1.20312 1.513L8.92969 9.24054L16.9241 1.24609" stroke="#5B3840" stroke-width="2" />
//                         </svg>
//                     </div>
//                 </div>
//             </div>

//             {selectedCategory && (
//                 <AnimatePresence mode="wait">
//                     <motion.div
//                         key={`${selectedYear}-${selectedCategory}`}
//                         variants={tabVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                     >
//                         {selectedCategory === "Quarterly Updates" ? (
//                             isMobile ? (
//                                 <div className="space-y-0">
//                                     <AnimatePresence>
//                                         {visibleItems.map((item: { title: string; pdfs: string[] }, idx: number) => (
//                                             <motion.div
//                                                 key={idx}
//                                                 variants={itemVariants}
//                                                 initial="initial"
//                                                 animate="animate"
//                                                 className="border-b border-gray-200"
//                                             >
//                                                 <button
//                                                     onClick={() => toggleFaq(idx)}
//                                                     className="w-full text-left bg-bgcream hover:bg-darkcream flex justify-between items-center focus:outline-none py-[16px] md:py-[35px] px-0 lg:px-[5%]"
//                                                 >
//                                                     <span className="text-black font-firaSans-condensed font-medium text-base md:text-2xl">{item.title}</span>
//                                                     <svg className={`w-5 h-5 text-gray-600 transform transition-transform pb-0.5 p-1 md:p-0 duration-200 rounded-[50px] bg-darkcream md:bg-[transparent] ${faqOpen[idx] ? 'rotate-0 md:rotate-180' : '-rotate-90 md:rotate-0'}`} xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
//                                                         <path d="M1.20312 1.513L8.92969 9.24054L16.9241 1.24609" stroke="#5B3840" stroke-width="3" />
//                                                     </svg>
//                                                 </button>
//                                                 <AnimatePresence>
//                                                     {faqOpen[idx] && (
//                                                         <motion.div
//                                                             variants={faqVariants}
//                                                             initial="initial"
//                                                             animate="animate"
//                                                             exit="exit"
//                                                             className="w-full bg-darkcream focus:outline-none py-[0px] px-0 lg:px-[5%]"
//                                                         >
//                                                             <div className="flex justify-between w-full max-w-full md:max-w-[336px]">
//                                                                 {item.pdfs.map((pdf: string, pIdx: number) => (
//                                                                     <a
//                                                                         key={pIdx}
//                                                                         href={`/${pdf}`}
//                                                                         download
//                                                                         className="text-darkgray hover:text-darkpink hover:underline font-firaSans-condensed font-normal text-base md:text-2xl flex items-center py-2 md:py-[23px] pr-4 md:pr-0 pl-6 md:pl-5 lg:pl-[3%]"
//                                                                     >
//                                                                         Q{pIdx + 1}
//                                                                     </a>
//                                                                 ))}
//                                                             </div>
//                                                         </motion.div>
//                                                     )}
//                                                 </AnimatePresence>
//                                             </motion.div>
//                                         ))}
//                                     </AnimatePresence>
//                                     {currentCategoryData.length > faqsPerPage && visibleItems.length < currentCategoryData.length && (
//                                         <button
//                                             onClick={handleViewMore}
//                                             className="flex items-center gap-4 text-darkgray font-fira-sans-condensed font-medium text-lg leading-[30px] m-auto mt-[35px]"
//                                         >
//                                             View More
//                                             <svg className="w-4 md:w-5 h-4 md:h-5 text-gray-600 transform transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
//                                                 <path d="M1.20312 1.513L8.92969 9.24054L16.9241 1.24609" stroke="#5B3840" stroke-width="2" />
//                                             </svg>
//                                         </button>
//                                     )}
//                                 </div>
//                             ) : (
//                                 <div className="space-y-0">
//                                     <AnimatePresence>
//                                         {visibleItems.map((item: { title: string; pdfs: string[] }, idx: number) => (
//                                             <motion.div
//                                                 key={idx}
//                                                 variants={itemVariants}
//                                                 initial="initial"
//                                                 animate="animate"
//                                                 className={`w-full flex justify-between items-center py-3 md:py-[35px] px-0 lg:px-[5%] hover:bg-darkcream ${idx === 0 ? "hover:border-darkcream border-b border-gray1" : "hover:border-darkcream border-b border-gray1"}`}
//                                             >
//                                                 <div className="text-black font-firaSans-condensed font-medium text-base md:text-2xl">{item.title}</div>
//                                                 <div className="flex justify-between w-full max-w-full md:max-w-[336px]">
//                                                     {item.pdfs.map((pdf: string, pIdx: number) => (
//                                                         <a
//                                                             key={pIdx}
//                                                             href={`/${pdf}`}
//                                                             download
//                                                             className="text-darkgray hover:text-darkpink hover:underline font-firaSans-condensed font-normal text-base md:text-2xl flex items-center"
//                                                         >
//                                                             Q{pIdx + 1}
//                                                         </a>
//                                                     ))}
//                                                 </div>
//                                             </motion.div>
//                                         ))}
//                                     </AnimatePresence>
//                                     {currentCategoryData.length > faqsPerPage && visibleItems.length < currentCategoryData.length && (
//                                         <button
//                                             onClick={handleViewMore}
//                                             className="flex items-center gap-4 text-darkgray font-fira-sans-condensed font-medium text-lg leading-[30px] m-auto mt-[35px]"
//                                         >
//                                             View More
//                                             <svg className="w-4 md:w-5 h-4 md:h-5 text-gray-600 transform transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
//                                                 <path d="M1.20312 1.513L8.92969 9.24054L16.9241 1.24609" stroke="#5B3840" stroke-width="2" />
//                                             </svg>
//                                         </button>
//                                     )}
//                                 </div>
//                             )
//                         ) : (
//                             <AnimatePresence>
//                                 {visibleItems.map((item: { title: string; pdfs: string[] }, idx: number) => (
//                                     <motion.div
//                                         key={idx}
//                                         variants={itemVariants}
//                                         initial="initial"
//                                         animate="animate"
//                                         className="border-b border-gray-200"
//                                     >
//                                         <button
//                                             onClick={() => toggleFaq(idx)}
//                                             className="w-full text-left bg-bgcream hover:bg-darkcream flex justify-between items-center focus:outline-none py-[16px] md:py-[35px] pr-4 md:pr-0 px-0 lg:px-[5%]"
//                                         >
//                                             <span className="text-black font-firaSans-condensed font-medium text-base md:text-2xl">{item.title}</span>
//                                             <svg className={`w-5 h-5 text-gray-600 transform transition-transform pb-0.5 p-1 md:p-0 duration-200 rounded-[50px] bg-darkcream md:bg-[transparent] ${faqOpen[idx] ? 'rotate-0 md:rotate-180' : '-rotate-90 md:rotate-0'}`} xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
//                                                 <path d="M1.20312 1.513L8.92969 9.24054L16.9241 1.24609" stroke="#5B3840" stroke-width="3" />
//                                             </svg>
//                                         </button>
//                                         <AnimatePresence>
//                                             {faqOpen[idx] && (
//                                                 <motion.div
//                                                     variants={faqVariants}
//                                                     initial="initial"
//                                                     animate="animate"
//                                                     exit="exit"
//                                                     className="w-full bg-darkcream focus:outline-none py-[0px] px-0 lg:px-[5%]"
//                                                 >
//                                                     {item.pdfs.map((pdf: string, pIdx: number) => (
//                                                         <a
//                                                             key={pIdx}
//                                                             href={`/${pdf}`}
//                                                             download
//                                                             className="font-firaSans-condensed font-normal text-base md:text-2xl leading-[130%] text-darkgray w-full text-left bg-darkcream flex justify-between items-center focus:outline-none py-2 md:py-[23px] pr-4 pl-6 md:pl-5 lg:pl-[3%]"
//                                                         >
//                                                             {pdf}
//                                                             <svg className="w-4 md:w-7 h-4 md:h-7" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
//                                                                 <path d="M13.6719 17.6497V2.31641M13.6719 17.6497L7.28299 11.2609M13.6719 17.6497L20.0608 11.2609M25.1719 17.6497V22.7609C25.1719 23.4386 24.9026 24.0886 24.4234 24.5679C23.9441 25.0472 23.2941 25.3164 22.6163 25.3164H4.72743C4.04966 25.3164 3.39964 25.0472 2.92038 24.5679C2.44112 24.0886 2.17188 23.4386 2.17188 22.7609V17.6497" stroke="#5B3840" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
//                                                             </svg>
//                                                         </a>
//                                                     ))}
//                                                 </motion.div>
//                                             )}
//                                         </AnimatePresence>
//                                     </motion.div>
//                                 ))}
//                                 {currentCategoryData.length > faqsPerPage && visibleItems.length < currentCategoryData.length && (
//                                     <button
//                                         onClick={handleViewMore}
//                                         className="flex items-center gap-4 text-darkgray font-fira-sans-condensed font-medium text-lg leading-[30px] m-auto mt-[35px]"
//                                     >
//                                         View More
//                                         <svg className="w-4 md:w-5 h-4 md:h-5 text-gray-600 transform transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
//                                             <path d="M1.20312 1.513L8.92969 9.24054L16.9241 1.24609" stroke="#5B3840" stroke-width="2" />
//                                         </svg>
//                                     </button>
//                                 )}
//                             </AnimatePresence>
//                         )}
//                     </motion.div>
//                 </AnimatePresence>
//             )}
//         </div>
//     );
// };

// export default InvestorTabs;





"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InvestorTabs = () => {
    const [selectedCategory, setSelectedCategory] = useState("Quarterly Updates");
    const [selectedYear, setSelectedYear] = useState("2024-2025");
    const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});
    const [visibleFaqs, setVisibleFaqs] = useState<Record<string, number>>({});
    const [isMobile, setIsMobile] = useState(false);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
    const categoryDropdownRef = useRef<HTMLDivElement>(null);
    const yearDropdownRef = useRef<HTMLDivElement>(null);

    const categoryData: Record<string, Record<string, { title: string; pdfs: string[] }[]>> = {
        "2023-2024": {
            "Quarterly Updates": [
                { title: "Financial Results", pdfs: ["Q1_23-24.pdf", "Q2_23-24.pdf", "Q3_23-24.pdf", "Q4_23-24.pdf"] },
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

    const years: string[] = ["2023-2024", "2024-2025", "2025-2026"];
    const faqsPerPage: number = 7;

    const toggleFaq = (index: number) => {
        setFaqOpen(prev => {
            const newFaqOpen: Record<number, boolean> = { [index]: !prev[index] };
            Object.keys(prev).forEach(i => {
                if (i !== index.toString()) newFaqOpen[parseInt(i)] = false;
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

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
                setIsCategoryDropdownOpen(false);
            }
            if (yearDropdownRef.current && !yearDropdownRef.current.contains(event.target as Node)) {
                setIsYearDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Animation variants for tab content
    const tabVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } }
    };

    // Animation variants for individual FAQ items
    const itemVariants = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
    };

    // Animation variants for FAQ content
    const faqVariants = {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { height: 0, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }
    };

    // Animation for dropdown
    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } }
    };

    return (
        <div className="container">
            <div className="max-w-[1172px] m-auto flex justify-between items-center border-b border-gray1 md:border-0 pb-5 md:pb-0">
                {isMobile ? (
                    <div className="w-full md:hidden">
                        <div className="relative inline-block text-left w-full max-w-[171px] md:max-w-none" ref={categoryDropdownRef}>
                            <button
                                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                                className="w-full max-w-[171px] md:max-w-none p-0 md:pr-10 md:pl-4 md:py-2 focus:outline-none text-darkpink md:text-darkgray font-firaSans-condensed font-medium md:font-normal text-lg md:text-2xl leading-[130%] flex justify-between items-center bg-bgcream hover:bg-darkcream rounded-md"
                            >
                                {selectedCategory}
                                <svg className={`w-4 md:w-5 h-4 md:h-5 text-gray-600 transform transition-transform duration-200 ${isCategoryDropdownOpen ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                                    <path d="M1.20312 1.513L8.92969 9.24054L16.9241 1.24609" stroke="#5B3840" stroke-width="2" />
                                </svg>
                            </button>
                            <AnimatePresence>
                                {isCategoryDropdownOpen && (
                                    <motion.div
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        className="absolute z-10 w-full max-w-[171px] mt-2 bg-bgcream border border-gray1 rounded-md shadow-lg"
                                    >
                                        {Object.keys(categoryData["2024-2025"]).map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => {
                                                    setSelectedCategory(category);
                                                    setFaqOpen({});
                                                    setVisibleFaqs(prev => ({ ...prev, [category]: faqsPerPage }));
                                                    setIsCategoryDropdownOpen(false);
                                                }}
                                                className="w-full text-left px-4 py-2 text-darkgray hover:text-darkpink hover:bg-darkcream font-firaSans-condensed font-normal text-lg leading-[130%]"
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-wrap gap-7 justify-center">
                        {Object.keys(categoryData["2024-2025"]).map((category, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setFaqOpen({});
                                    setVisibleFaqs(prev => ({ ...prev, [category]: faqsPerPage }));
                                }}
                                className={`font-firaSans-condensed font-normal text-2xl leading-[130%] pb-[2px] lg:pb-[12px] transition-colors duration-200 ${selectedCategory === category
                                    ? 'text-darkpink border-b-8 border-darkpink'
                                    : 'text-darkgray hover:text-darkpink border-b-8 border-[transparent]'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}
                <div className="relative inline-block text-left w-full max-w-[100px] md:max-w-none md:w-auto mb-0 md:mb-3 lg:mb-0" ref={yearDropdownRef}>
                    <button
                        onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                        className="  w-full max-w-[100px] md:max-w-[143px] p-0 md:pr-0 md:pl-0 md:py-0 focus:outline-none text-darkgray font-firaSans-condensed font-normal text-base md:text-2xl leading-[130%] flex gap-4 justify-between items-center bg-bgcream hover:bg-darkcream rounded-md"
                    >
                        {selectedYear}
                        <svg className={`w-4 md:w-5 h-4 md:h-5 text-gray-600 transform transition-transform duration-200 ${isYearDropdownOpen ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                            <path d="M1.20312 1.513L8.92969 9.24054L16.9241 1.24609" stroke="#5B3840" stroke-width="2" />
                        </svg>
                    </button>
                    <AnimatePresence>
                        {isYearDropdownOpen && (
                            <motion.div
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="absolute z-10 w-full max-w-[100px] md:max-w-[150px] mt-2 bg-bgcream border border-gray1 rounded-md shadow-lg"
                            >
                                {years.map((year) => (
                                    <button
                                        key={year}
                                        onClick={() => {
                                            setSelectedYear(year);
                                            setSelectedCategory("Quarterly Updates");
                                            setFaqOpen({});
                                            setVisibleFaqs({});
                                            setIsYearDropdownOpen(false);
                                        }}
                                        className="w-full text-left px-4 py-2 text-darkgray hover:text-darkpink hover:bg-darkcream font-firaSans-condensed font-normal text-base md:text-2xl leading-[130%]"
                                    >
                                        {year}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {selectedCategory && (
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${selectedYear}-${selectedCategory}`}
                        variants={tabVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {selectedCategory === "Quarterly Updates" ? (
                            isMobile ? (
                                <div className="space-y-0">
                                    <AnimatePresence>
                                        {visibleItems.map((item: { title: string; pdfs: string[] }, idx: number) => (
                                            <motion.div
                                                key={idx}
                                                variants={itemVariants}
                                                initial="initial"
                                                animate="animate"
                                                className="border-b border-gray-200"
                                            >
                                                <button
                                                    onClick={() => toggleFaq(idx)}
                                                    className="w-full text-left bg-bgcream hover:bg-darkcream flex justify-between items-center focus:outline-none py-[16px] md:py-[35px] px-0 lg:px-[5%]"
                                                >
                                                    <span className="text-black font-firaSans-condensed font-medium text-base md:text-2xl">{item.title}</span>
                                                    <svg className={`w-5 h-5 text-gray-600 transform transition-transform pb-0.5 p-1 md:p-0 duration-200 rounded-[50px] bg-darkcream md:bg-[transparent] ${faqOpen[idx] ? 'rotate-0 md:rotate-180' : '-rotate-90 md:rotate-0'}`} xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                                                        <path d="M1.20312 1.513L8.92969 9.24054L16.9241 1.24609" stroke="#5B3840" stroke-width="3" />
                                                    </svg>
                                                </button>
                                                <AnimatePresence>
                                                    {faqOpen[idx] && (
                                                        <motion.div
                                                            variants={faqVariants}
                                                            initial="initial"
                                                            animate="animate"
                                                            exit="exit"
                                                            className="w-full bg-darkcream focus:outline-none py-[0px] px-0 lg:px-[5%]"
                                                        >
                                                            <div className="flex justify-between w-full max-w-full md:max-w-[336px]">
                                                                {item.pdfs.map((pdf: string, pIdx: number) => (
                                                                    <a
                                                                        key={pIdx}
                                                                        href={`/${pdf}`}
                                                                        download
                                                                        className="text-darkgray hover:text-darkpink hover:underline font-firaSans-condensed font-normal text-base md:text-2xl flex items-center py-2 md:py-[23px] pr-4 md:pr-0 pl-6 md:pl-5 lg:pl-[3%]"
                                                                    >
                                                                        Q{pIdx + 1}
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                    {currentCategoryData.length > faqsPerPage && visibleItems.length < currentCategoryData.length && (
                                        <button
                                            onClick={handleViewMore}
                                            className="flex items-center gap-4 text-darkgray font-fira-sans-condensed font-medium text-lg leading-[30px] m-auto mt-[35px]"
                                        >
                                            View More
                                            <svg className="w-4 md:w-5 h-4 md:h-5 text-gray-600 transform transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                                                <path d="M1.20312 1.513L8.92969 9.24054L16.9241 1.24609" stroke="#5B3840" stroke-width="2" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            ) : (
                                <div className="space-y-0">
                                    <AnimatePresence>
                                        {visibleItems.map((item: { title: string; pdfs: string[] }, idx: number) => (
                                            <motion.div
                                                key={idx}
                                                variants={itemVariants}
                                                initial="initial"
                                                animate="animate"
                                                className={`w-full flex justify-between items-center py-3 md:py-[35px] px-0 lg:px-[5%] hover:bg-darkcream ${idx === 0 ? "hover:border-darkcream border-b border-gray1" : "hover:border-darkcream border-b border-gray1"}`}
                                            >
                                                <div className="text-black font-firaSans-condensed font-medium text-base md:text-2xl">{item.title}</div>
                                                <div className="flex justify-between w-full max-w-full md:max-w-[336px]">
                                                    {item.pdfs.map((pdf: string, pIdx: number) => (
                                                        <a
                                                            key={pIdx}
                                                            href={`/${pdf}`}
                                                            download
                                                            className="text-darkgray hover:text-darkpink hover:underline font-firaSans-condensed font-normal text-base md:text-2xl flex items-center"
                                                        >
                                                            Q{pIdx + 1}
                                                        </a>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                    {currentCategoryData.length > faqsPerPage && visibleItems.length < currentCategoryData.length && (
                                        <button
                                            onClick={handleViewMore}
                                            className="flex items-center gap-4 text-darkgray font-fira-sans-condensed font-medium text-lg leading-[30px] m-auto mt-[35px]"
                                        >
                                            View More
                                            <svg className="w-4 md:w-5 h-4 md:h-5 text-gray-600 transform transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                                                <path d="M1.20312 1.513L8.92969 9.24054L16.9241 1.24609" stroke="#5B3840" stroke-width="2" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            )
                        ) : (
                            <AnimatePresence>
                                {visibleItems.map((item: { title: string; pdfs: string[] }, idx: number) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        initial="initial"
                                        animate="animate"
                                        className="border-b border-gray-200"
                                    >
                                        <button
                                            onClick={() => toggleFaq(idx)}
                                            className="w-full text-left bg-bgcream hover:bg-darkcream flex justify-between items-center focus:outline-none py-[16px] md:py-[35px] pr-4 md:pr-0 px-0 lg:px-[5%]"
                                        >
                                            <span className="text-black font-firaSans-condensed font-medium text-base md:text-2xl">{item.title}</span>
                                            <svg className={`w-5 h-5 text-gray-600 transform transition-transform pb-0.5 p-1 md:p-0 duration-200 rounded-[50px] bg-darkcream md:bg-[transparent] ${faqOpen[idx] ? 'rotate-0 md:rotate-180' : '-rotate-90 md:rotate-0'}`} xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                                                <path d="M1.20312 1.513L8.92969 9.24054L16.9241 1.24609" stroke="#5B3840" stroke-width="3" />
                                            </svg>
                                        </button>
                                        <AnimatePresence>
                                            {faqOpen[idx] && (
                                                <motion.div
                                                    variants={faqVariants}
                                                    initial="initial"
                                                    animate="animate"
                                                    exit="exit"
                                                    className="w-full bg-darkcream focus:outline-none py-[0px] px-0 lg:px-[5%]"
                                                >
                                                    {item.pdfs.map((pdf: string, pIdx: number) => (
                                                        <a
                                                            key={pIdx}
                                                            href={`/${pdf}`}
                                                            download
                                                            className="font-firaSans-condensed font-normal text-base md:text-2xl leading-[130%] text-darkgray w-full text-left bg-darkcream flex justify-between items-center focus:outline-none py-2 md:py-[23px] pr-4 pl-6 md:pl-5 lg:pl-[3%]"
                                                        >
                                                            {pdf}
                                                            <svg className="w-4 md:w-7 h-4 md:h-7" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                                                <path d="M13.6719 17.6497V2.31641M13.6719 17.6497L7.28299 11.2609M13.6719 17.6497L20.0608 11.2609M25.1719 17.6497V22.7609C25.1719 23.4386 24.9026 24.0886 24.4234 24.5679C23.9441 25.0472 23.2941 25.3164 22.6163 25.3164H4.72743C4.04966 25.3164 3.39964 25.0472 2.92038 24.5679C2.44112 24.0886 2.17188 23.4386 2.17188 22.7609V17.6497" stroke="#5B3840" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                                {currentCategoryData.length > faqsPerPage && visibleItems.length < currentCategoryData.length && (
                                    <button
                                        onClick={handleViewMore}
                                        className="flex items-center gap-4 text-darkgray font-fira-sans-condensed font-medium text-lg leading-[30px] m-auto mt-[35px]"
                                    >
                                        View More
                                        <svg className="w-4 md:w-5 h-4 md:h-5 text-gray-600 transform transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                                            <path d="M1.20312 1.513L8.92969 9.24054L16.9241 1.24609" stroke="#5B3840" stroke-width="2" />
                                        </svg>
                                    </button>
                                )}
                            </AnimatePresence>
                        )}
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
};

export default InvestorTabs;