"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function TermsAndConditions() {
    const [selectedSection, setSelectedSection] = useState("Privacy Policy");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const router = useRouter();

    const sections = [
        "Overview",
        "General Use of Information",
        "Privacy Rules Regarding Collection Of Information",
        "Fair Use",
        "Enforcement of Legal Obligations",
        "Cookies",
        "Amendment to this Policy",

    ];

    // Optional scroll offset helper for sticky headers
    const scrollWithOffset = (element: HTMLElement, offset: number = 60) => {
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
    };

    const handleSectionChange = (section: string) => {
        setSelectedSection(section);
        setIsDropdownOpen(false); // close dropdown

        // Delay to allow dropdown closing animation
        setTimeout(() => {
            const sectionElement = sectionRefs.current[section];
            if (sectionElement) {
                scrollWithOffset(sectionElement);
            }
        }, 100);
    };

    useEffect(() => {
        const sectionElement = sectionRefs.current[selectedSection];
        if (sectionElement) {
            scrollWithOffset(sectionElement);
        }
    }, []);

    return (
        <section className="pt-[20px] pb-[20px] md:pt-[104px] md:pb-[113px] container">
            <div className="flex items-start justify-between gap-20 md:gap-5 flex-col md:flex-row">
                {/* Dropdown / Sidebar */}
                <div className="w-full max-w-full md:max-w-[225px] sticky top-[0px] md:top-[104px] self-start bg-lightcream2 md:bg-transparent z-20">
                    <motion.div
                        className="flex justify-between items-center cursor-pointer leading-[26px] text-[16px] md:leading-[130%] md:text-[24px] font-normal font-firaSans-condensed text-darkgray px-6 md:px-0 py-3 md:py-0 mb-[0px] pb-[12px] md:mb-[21px] md:pb-[14px] border-b-[0px] md:border-b-[2px] border-darkgray"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <p className="text-ellipsis line-clamp-1">
                            {selectedSection || "Privacy Policy"}
                        </p>
                        <img
                            src="/icons/down-arrow.svg"
                            alt="Dropdown Icon"
                            className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                        />
                    </motion.div>

                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="bg-lightcream2 md:bg-transparent px-6 md:px-0 overflow-y-auto max-h-[40vh] custom-scrollbar absolute top-full left-0 w-full leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black pb-[12px] z-10"
                            >
                                {sections.map((section) => (
                                    <div
                                        key={section}
                                        className="mb-3 cursor-pointer text-ellipsis line-clamp-1"
                                        onClick={() => handleSectionChange(section)}
                                    >
                                        {section}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Content Section */}
                <div className="w-full max-w-[873px]">
                    <h1 className="leading-[31px] md:leading-[46px] lg:leading-[56px] text-[26px] md:text-[36px] lg:text-[46px] font-semibold font-firaSans-condensed text-darkgray mb-[23px] md:mb-[36px]">
                        Privacy Policies
                    </h1>

                    {sections.map((section) => (
                        <div
                            key={section}
                            id={section.replace(/\s+/g, "-").toLowerCase()}
                            ref={(el: any) => (sectionRefs.current[section] = el)}
                        >
                            {section === "Overview" && (
                                <div>
                                    <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                                        This website is owned by “UNITED FOOD BRANDS LIMITED” [the Company]. This Privacy
                                        Policy is intended to inform the user about our practices concerning the collection, use,
                                        processing and disclosure of personal and non-personal information provided by you while
                                        accessing or using the website. We encourage you to read this Privacy Policy before using the
                                        website or submitting any information through it.
                                        <span className="block">Consent</span>
                                    </p>
                                    <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                                        By using the Services (as defined under the T&amp;C) on this site, you [the “User”] acknowledge and
                                        agree to the terms of this Privacy Policy. By submitting information via this site, you provide
                                        your explicit consent to the collection, processing, use and disclosure of such information in
                                        accordance with this Privacy Policy and the applicable laws in the territory of India. The
                                        Information collected by the Company across its websites, digital platforms, mobile
                                        applications, publications, and associated Services, online communities (collectively referred
                                        as “Online Forums”) participation in promotions, contests, surveys, polls, feedback forms,
                                        newsletter or subscriptions shall be governed by this Privacy Policy and you acknowledge that
                                        you have read, understood the same. We may also collect certain non-personal information
                                        when you browse our web pages such as browser type, operating system, IP address and the
                                        domain name to enhance the user experience and optimize our Services.<br />
                                        In case of any changes to the Privacy Policy, continued use of the Services shall constitute your
                                        acceptance of those changes.
                                    </p>
                                </div>
                            )}

                            {section === "General Use of Information" && (
                                <div>
                                    <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                                        General Use of Information
                                    </h4>
                                    <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                                        UNITED FOOD BRANDS LIMITED may use the information you provide about yourself to fulfill
                                        your requests related to our Services, programs and inquiries that we believe may be relevant
                                        or of interest to you. The information may also be used to communicate with you or to contact
                                        you about your account, inquiries, reservations, transactions, product offers, updates and
                                        promotional content related to our brands such as Barbeque Nation, UBQ, Bricks, Fiesta, Dum
                                        Safar, Toscano, Salt, Omm Nom Nomm and any other brands belonging to us. If you choose to
                                        submit content for publication (in any form), we may publish your name, screen name and
                                        other information you provide, in accordance with this Privacy Policy.<br />
                                        The information collected through our Online Forums is used to enhance user engagement and
                                        customer experience. Such information may also be used in the aggregate form to analyze
                                        usage trends, and to offer our products, programs, or Services.<br /> <br />
                                        The Company shall disclose information maintained as and when required by law, such as a
                                        court order, legal process, or request from law enforcement agencies.<br />
                                        The company may also share the aggregated and individual, anonymized and non-anonymized
                                        data to our subsidiaries/affiliates/associated entities & service providers for the purpose of
                                        analysis, research, performance improvement, personalization, content delivery and user
                                        experience across all the brands of UNITED FOOD BRANDS LIMITED.<br />
                                        You may withdraw your consent at any time while using the Services by submitting a written
                                        request to the contact details provided below. Upon receipt of such request, we will take
                                        reasonable steps to cease further usage or removal of such information from its database,
                                        subject to legal and contractual obligations.<br />
                                        If any person under the age of 18 years accesses or uses the Services, it shall be deemed that
                                        such access and use is authorized and granted with the consent and under the supervision of
                                        their parent or legal guardian. UNITED FOOD BRANDS LIMITED does not control or verify the
                                        authenticity of any personal information and data, if any, collected from minors and shall have
                                        no responsibility towards collection of such data in its usual course of business. If the personal
                                        data of a minor is inadvertently collected, it can be removed from our database upon a request
                                        from parent(s) or legal guardian as per the provisions of this policy.
                                    </p>
                                </div>
                            )}
                            {section === "Privacy Rules Regarding Collection Of Information" && (
                                <div>
                                    <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                                        Privacy Rules Regarding Collection Of Information
                                    </h4>
                                    <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                                        UNITED FOOD BRANDS LIMITED is solely responsible for ensuring that all Sensitive Personal
                                        Information is collected, received, possessed, stored, dealt with and handled in compliance with
                                        all applicable laws and the Data Protection Regulations in the territory of India.<br /><br />
                                        In accordance with Indian legal requirements all entities that collect, receive, possess, store,
                                        deal and handle personal information, including Sensitive Personal Information, must:<br />
                                        1. Publish a comprehensive privacy policy explaining how such data is collected, used and
                                        protected by the Company.<br />
                                        2. Obtain consent from all Users in writing through established mode of communications
                                        and/or through electronic means before collecting personal data, and specifying the
                                        purpose of such collection.<br />
                                        3. Not collect sensitive personal data or information unless (a) the information is collected
                                        for a lawful purpose connected with a function or activity of United Food Brands
                                        Limited or any entity/ person on its behalf; and (b) the collection of the sensitive
                                        personal data or information is considered necessary for that purpose.<br /><br />
                                        While collecting Sensitive Personal Information, United Food Brands Limited shall ensure that
                                        Users are informed about:<br />
                                        1. the fact that the information is being collected<br />
                                        2. the purpose for collection of such information<br />
                                        3. the intended recipients of the information<br />
                                        4. the name and address of the agency, if any, engaged by United Food Brands Limited for
                                        collection and/or retention of such information.<br />
                                        5. that information not being retained for longer than required for the purposes for which
                                        the information may lawfully be used or is otherwise required under any law for the
                                        time being in force.<br />
                                        6. use such information for the stated purpose.<br />
                                        7. permit the Users, the right to review their Sensitive Personal Information upon request.<br />
                                        8. ensure that any personal information or Sensitive Personal Information found to be
                                        inaccurate or deficient shall be corrected or amended as feasible.<br />
                                        9. prior to the collection of information, including Sensitive Personal Information, provide
                                        an option to User to not to provide the data or information sought to be collected.<br />
                                        10. to provide each User, at any time, an option to withdraw its consent given earlier.<br />
                                        11. take all security and protection measures to safeguard such information, as per
                                        applicable laws.<br /><br />

                                        Disclosure of Sensitive Personal Information by one Party to another requires, by law, the prior
                                        permission from the provider of such information (such as Users), unless otherwise agreed in
                                        the contract between a Party and the User. Therefore, if the Company is required to collect,
                                        receive, possess, store, deal or handle personal information (including any Sensitive Personal
                                        Information), the Company shall ensure that each such User has consented to UNITED FOOD
                                        BRANDS LIMITED’s collection, receipt, possession, storage, dealing or handling of all such
                                        personal information. All third-parties, with access to such sensitive personal information will
                                        be contractually obligated to maintain strict confidentiality and security standards.<br />

                                        For the purposes of this document, “Sensitive Personal Information” means personal data
                                        relating to any individual’s: (i) password; (ii) financial information such as Bank account or
                                        credit card or debit card or other payment instrument details etc.; (iii) physical, physiological
                                        and mental health condition; (iv) age and sexual orientation; (v) address; (vi) Biometric data;
                                        (vii) any detail related to the above that is provided for availing any Services. Information that
                                        is freely available or accessible in public domain or furnished under any law for the time being
                                        in force shall not be regarded as sensitive personal data or information for the purposes of
                                        these rules. The Company &amp; it’s digital platforms may use third-party Services (e.g., CRM
                                        platforms, payment gateways, loyalty apps) that adhere to industry-standard privacy
                                        safeguards and only process data on behalf of the Company. Users may access and request
                                        correction of their personal data submitted to UNITED FOOD BRANDS LIMITED as per the
                                        Information Technology Act &amp; Rules framed thereunder.<br />
                                        When enabled, UNITED FOOD BRANDS LIMITED may access your device’s location to offer
                                        location-specific Services such as nearest outlets or offers. Location access is voluntary and can
                                        be declined by the User. Any such data collected is used solely for service enhancement and
                                        handled per applicable laws.

                                    </p>
                                </div>
                            )}
                            {section === "Fair Use" && (
                                <div>
                                    <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                                        Fair Use
                                    </h4>
                                    <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                                        As required by law, Users must not, host, display, upload, modify, publish, transmit, update or
                                        share any information that:<br />
                                        1. belongs to another person without proper legal authorization.<br />
                                        2. is grossly harmful, harassing, defamatory, obscene, pornographic, pedophilic, libelous,
                                        invasive of another’s privacy, hateful, racially, ethnically objectionable, disparaging, or
                                        otherwise unlawful in any manner.<br />
                                        3. encourages money laundering or gambling or harm minors in any way<br />
                                        4. infringes any intellectual property rights or other proprietary rights<br />
                                        5. deceives or misleads about the origin of such messages or impersonates another
                                        person<br />
                                        6. contains software viruses or any other computer code, files or programs designed to
                                        interrupt, destroy or disrupts the functionality of digital systems<br />
                                        7. threatens the unity, integrity, defence, security or sovereignty of India, friendly relations
                                        with foreign states, or public order or causes incitement to the commission of any
                                        cognizable offence or prevents investigation of any offence or is insulting any other
                                        nation<br /><br />
                                        UNITED FOOD BRANDS LIMITED shall not directly or indirectly do the following, and shall
                                        ensure that Users do not:<br />
                                        1. access (or attempt to access) any service by any means other than as permitted in this
                                        Agreement and by the law circumvent, disable or otherwise interfere with security related
                                        features or features that prevent or restrict use or copying of any Content or third party
                                        content or enforce limitations on use of the website or the Content and third party content
                                        therein.<br />
                                        2. attempt to access restricted areas of the site, misuse promotional codes, manipulation,
                                        tampering or misuse of online reservation process, or post unverified, fake, malicious and
                                        slanderous comments, reviews and information.<br />
                                        3. access the website to upload the Content to cause a breach of security or any Networks or
                                        interfere with the proper working of the website.<br />
                                        4. delete the copyright and other proprietary rights notices<br />
                                    </p>
                                </div>
                            )}
                            {section === "Enforcement of Legal Obligations" && (
                                <div>
                                    <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                                        Enforcement of Legal Obligations
                                    </h4>
                                    <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                                        The User acknowledges that UNITED FOOD BRANDS LIMITED may suspend or terminate the
                                        User’s account and remove the Content and other Network Data and from its digital platforms
                                        as well as disable the User’s access to any and all Networks at any time for violations of this
                                        policy without notice and without any liability to the Company. The User is solely responsible
                                        and liable for complying with all applicable laws including privacy laws.<br />
                                        The User acknowledges that UNITED FOOD BRANDS LIMITED also reserves the right to
                                        remove, preserve, and disclose any information or Content or account it deems necessary or
                                        appropriate to (a) satisfy any applicable law, regulation, legal process or governmental request,
                                        (b) enforce this policy, including investigation of potential violations hereof, (c) detect, prevent
                                        and address fraud, security, or technical issues as per governing laws, (d) respond to User
                                        support requests, (e) protect the rights, property, or safety of UNITED FOOD BRANDS<br /><br />
                                        LIMITED, its Users, and the general public, or (f) investigate or defend ourselves against third-
                                        party claims or allegations.<br />
                                        Grievance Redressal Mechanism<br />
                                        In accordance with Rule 5(9) of the Information Technology (Reasonable Security Practices
                                        and Procedures and Sensitive Personal Data or Information) Rules, 2011, the Company has
                                        appointed a Grievance Officer to address any concerns or complaints arising out of the
                                        processing of personal or sensitive personal data. The contact details of the Grievance Officer
                                        are as follows:<br />
                                        Grievance Officer [Details to be filled-in by IT team]<br />
                                        Name: [Insert Full Name]<br />
                                        Email: [Insert Email ID]<br />
                                        Phone: [Insert Contact Number]<br />
                                        Office Hours: Monday to Friday, 10:00 AM to 6:00 PM (excluding public holidays)<br />
                                        Address: [Insert Registered Office Address of United Food Brands Limited]<br />
                                        All grievances received through proper channels shall be acknowledged within 48 hours and
                                        resolved within 30 (thirty) days from the date of receipt, unless otherwise mandated by
                                        applicable law.
                                    </p>
                                </div>
                            )}
                            {section === "Cookies" && (
                                <div>
                                    <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                                        Cookies
                                    </h4>
                                    <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                                        To enhance your online experience UNITED FOOD BRANDS LIMITED uses “cookies”. Cookies
                                        are text files placed in your computer’s browser to store preferences. Cookies, by themselves,
                                        do not reveal your e-mail address or other personally information unless you choose to
                                        provide this information by, for example, registering at one of our sites. However, once you
                                        choose to furnish the site with personally information, this information may be linked to the
                                        data stored in the cookie. Cookies are used to understand Internet usage and to improve our
                                        content, offerings, and advertisements.<br />
                                        UNITED FOOD BRANDS LIMITED may also use small pieces of code called “web beacons” or
                                        “clear gifs” to collect anonymous and aggregate advertising metrics, such as counting page
                                        views, promotion views or advertising responses. These “web beacons” may be used to deliver
                                        cookies that conform to our cookie policy.<br />
                                        Our Commitment to Security<br />
                                        Appropriate physical, electronic, and managerial procedures have been put in place to
                                        safeguard and help prevent unauthorized access, maintain data security, and correctly use the
                                        information collected.<br />
                                        To protect User’s privacy and security, reasonable steps should be taken to help verify the
                                        User’s identity before granting access or making corrections.<br />
                                    </p>
                                </div>
                            )}

                            {section === 'Amendment to this Policy' && (
                                <div>
                                    <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                                        Amendment to this Policy
                                    </h4>
                                    <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 ">
                                        This Privacy Policy may be revised at any time by UNITED FOOD BRANDS LIMITED with or
                                        without notice to the user. Updates will be posted on this page to keep you informed about
                                        what data we collect, how we use it, and under what conditions it may be disclosed. Users are
                                        encouraged to review this page periodically to stay informed about how we are protecting the
                                        personal information we collect.
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
