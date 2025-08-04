"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function TermsAndConditions() {
  const [selectedSection, setSelectedSection] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const router = useRouter();

  const sections = [
    "Overview",
    "Section 1",
    "Section 2",
    "Section 3",
    "Section 4",
    "Section 5",
    'Section 6',
    'Section 7',
    'Section 8',
    'Section 9',
    'Section 10',
    'Section 11',
    'Section 12',
    'Section 13',
    'Section 14',
    'Section 15',
    'Section 16',
    'Section 17',
    'Section 18',
    'Section 19',
    'Section 20',
    'Section 21',
    'Section 22',
    'Section 23',
    'Section 24',
    'Section 25',
    'Section 26'
  ];

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
        <div className="w-full max-w-full md:max-w-[225px] sticky top-[0px] md:top-[104px] self-start bg-lightcream2 md:bg-transparent">
          <motion.div
            className="flex justify-between items-center cursor-pointer leading-[26px] text-[16px] md:leading-[130%] md:text-[24px] font-normal font-firaSans-condensed text-darkgray px-6 md:px-0 py-3 md:py-0 mb-[0px] pb-[12px] md:mb-[21px] md:pb-[14px] border-b-[0px] md:border-b-[2px] border-darkgray"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedSection || "Terms & Conditions"}
            <img
              src="/icons/down-arrow.svg"
              alt="Dropdown Icon"
              className="ml-2 w-4 h-4"
            />
          </motion.div>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-lightcream2 md:bg-bgcream px-6 md:px-0 overflow-y-auto max-h-[40vh] custom-scrollbar absolute top-full left-0 w-full leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black pb-[12px] z-10"
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

        <div className="w-full max-w-[873px]">
          <h1 className="leading-[31px] md:leading-[46px] lg:leading-[56px] text-[26px] md:text-[36px] lg:text-[46px] font-semibold font-firaSans-condensed text-darkgray mb-[23px] md:mb-[36px]">
            Terms & Conditions
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
                    <span className="block">OVERVIEW</span>
                    This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Guidelines for Intermediaries and Digital Media Ethics Code) Rules, 2021 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of [website domain / URL name] and other websites and digital platforms of UNITED FOOD BRANDS LIMITED (“Company”).<br />
                    This website is operated by UNITED FOOD BRANDS LIMITED having its registered office at 601, 602, Saket Callipolis, Sarjapur Road, Doddakannelli, Bengaluru – 560035. Throughout the site, the terms “we”, “us” and “our” refer to UNITED FOOD BRANDS LIMITED and its other brand websites and digital platforms for its brands “Barbeque Nation”, “UBQ”, “Fiesta”, “Bricks”, “Dumsafar”, “Toscano” “SALT”, “Omm Nom Nomm”.<br />
                    We offers this website and all its digital Platforms, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
                  </p>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    By visiting our sites and digital platforms and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.<br />
                    Please read these Terms of Service carefully before accessing or using our websites /digital platformss (“Platforms”). By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.<br />
                    Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any such amendment or changes in the Terms will constitutes acceptance to such amendment/changed Terms and you also agree to be bound by such changed/amended Terms.<br />
                    <span className="block">Translation of the Terms</span>
                    You understand that these Terms are written in English only and in the event of you viewing these Terms in any translated language, the English version shall govern the terms of your relationship with the Company. Furthermore, if there are any inconsistencies between the English version of the Terms and its translated version, the English version of the Terms shall prevail over others.
                  </p>
                </div>
              )}
              {section === "Section 1" && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 1 – Online Store Terms
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    By agreeing to these Terms of Service, you hereby represent and warrant that you are at least the age of majority in your state of residence and are fully able and competent to understand and agree to the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms of Use. You agree to use the Platforms only in compliance with these Terms of Use and applicable law, and in a manner that does not violate our legal rights or those of any third party(ies), or that you are the age of majority in your state of residence and you have given us your consent to allow any of your minor dependents to use this site.<br />
                    Minor: You represent and warrant that in the event you are below the age of 18, your use of Platforms is supervised at all times by your legal guardian and/or parents. You agree that you being a Minor and the legal guardian and/or your parents shall be responsible to comply with the terms of these Terms of Use. You and your legal guardian and/or your parents hereby agree to hold harmless and indemnify us or any other user of the Platforms for any loss caused due to unauthorized or unlawful use of the Platforms, with or without an account. All information, content and material contained on the Website/ Digital Platforms are and continue to be the Company’s intellectual property. Further, all trademarks, services marks, trade names and trade secrets in relation to the Platforms whether or not displayed on the Platforms are proprietary to the Company, except any third-party logos which may also be displayed on the Platforms with their consent. No information, content or material from the Platforms may be copied, reproduced, republished, uploaded, posted, transmitted or distributed in any way without our express written permission. Any unauthorized use terminates the permissions granted by us in these Terms of Use. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws). You must not transmit any worms or viruses or any code of a destructive nature a breach or violation of any of the Terms will result in an immediate termination of your Services.
                  </p>
                </div>
              )}
              {section === "Section 2" && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 2 – General Conditions
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    We reserve the right to refuse service to anyone for any reason at any time.<br />
                    You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.<br />
                    You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.<br />
                    The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.
                  </p>
                </div>
              )}
              {section === "Section 3" && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 3 – Accuracy, Completeness and Timeliness of Information
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    It is certified that these contents on the website of the company are correct subject to Section 11 of these Terms of Service. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.
                  </p>
                </div>
              )}
              {section === "Section 4" && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 4 – Modifications to the Service and Prices
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    Prices for our products are subject to change without notice.<br />
                    We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.<br />
                    We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
                  </p>
                </div>
              )}
              {section === "Section 5" && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 5 – Products or Services
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy. We have made every effort to display as accurately as possible the colors and images of our products that appear at the outlet. We cannot guarantee that your computer monitor’s display of any color will be accurate. We reserve the right, but are not obligated, to limit the sales of our products or services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.<br />
                    We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.
                  </p>
                </div>
              )}

              {section === 'Section 6' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 6 – Accuracy of Billing and Account Information
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.<br />
                    Account Information: You acknowledge that you are solely responsible for maintaining the confidentiality of the Account Information and for restricting access to your computer or mobile or other similar device to prevent unauthorized access to your account. We request you safeguard your password and your account and make sure that others do not have access to it. It is your responsibility to keep your Account Information current and accurate. You agree to immediately notify the Company of any unauthorized use of your account or any other security breach. The Company will not be liable for any loss or direct or indirect damage arising from your failure to comply with these conditions. You may be held liable for any losses incurred to the Company or any other user due to unauthorized use of your account, resulting from your failure to keep your Account Information secure and confidential.
                  </p>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.<br />
                    You understand that once you have registered onto the Platforms, you may receive notifications from the Company in the form of SMS messages on your registered mobile number or e-mails. These notifications could relate to your registration, transactions that you carry out through the Platforms and/or promotions. Further, the Company may also send notifications and reminders to you with respect to your activity on the Platforms, in relation to the Services. Please note that while the Company endeavors to provide these notifications and reminders to you promptly, the Company does not provide any guarantee and shall not be held liable or responsible for any failure to send such notifications or reminders to you. You can unsubscribe / opt-out from receiving communications, newsletters and other notifications from the Company at any time by following the procedure set forth on the Platforms.<br />
                    We will try to make access to and use of the Platforms error-free. However, your access to the Platforms may be occasionally suspended or restricted to allow for repairs, maintenance, or for introduction of new facilities or services. Please note that we do not take responsibility for any access or use problems that arise from internet related issues at your end. Notwithstanding the foregoing, we reserve at all times, the right, at our sole discretion, to refuse access to the Platforms, terminate accounts, remove or edit content at our discretion, with or without notice to you.<br />
                    You may be required to install certain upgrades or updates to the Platforms in order to continue to access or use the Services, or portions thereof (including upgrades or updates designed to correct issues with the Services). Any updates or upgrades provided to you by us under these Terms of Use shall be considered part of the Services.
                  </p>
                </div>
              )}
              {section === 'Section 7' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 7 – Optional Tools
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.<br />
                    You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.<br />
                    Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).<br />
                    We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.
                  </p>
                </div>
              )}
              {section === 'Section 8' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 8 – Third-Party Links
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    Certain content, products and services available via our website may include materials from third-parties websites and digital platforms.<br /><br />
                    Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials, application or websites, , or for any other materials, products, or services of third-parties.<br />
                    The inclusion of a link does not imply any endorsement by the Company of the third-party website and/or application, the website’s and/or application’s provider, or the information on the third-party website and/or application; and if you submit personal information to any of those websites and/or applications, such information is governed by the terms of use and privacy policies of such third-party websites and/or applications and the Company disclaims all responsibility or liability with respect to these terms of use, policies or the websites and/or applications. We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. You are encouraged to carefully read the terms of use and privacy policy of any third-party website and/or application that they visit ,make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.<br />
                    The Company reserves the right to disable third-party links from the Platform, although the Company is under no obligation to do so.
                  </p>
                </div>
              )}
              {section === 'Section 9' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 9 – User Comments, Feedback and Other Submissions
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, ‘Submissions’), to avoid potential misunderstandings or disputes when Company’s products or marketing strategies might seem similar to ideas submitted to Company,<br />
                    You agree that: (1) your Submissions and their Contents will automatically become the property of Company, without any compensation to you (2) You agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. You hereby grant to the Company a royalty-free, perpetual, irrevocable, non-exclusive right and license to adopt, publish, reproduce, disseminate, transmit, distribute, copy, use, create derivative works from, display worldwide, without additional approval or consideration in any form, media, or technology now known or later developed, for the full term of any rights that may exist in such content, and you waive any claim to the contrary over all feedback, comments, ideas or suggestions or any other content provided by you to the Company through the Platform. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; (3) to respond to any comments (4) to keep any Submissions confidential.<br />
                    We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service. You agree that your Submissions will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.
                  </p>
                </div>
              )}
              {section === 'Section 10' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 10 – Payment Options
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    The total price for food ordered, including the packaging charges and delivery charges and other charges, will be displayed on the Platforms when the customer places their order, which may be rounded up to the nearest amount. The customers shall make full payment towards such food products ordered through the Platforms. The customer will have to make the requisite payment for the Services availed by you on the Platforms, which shall be added to the final invoice against the food order made to the restaurant through the Platforms.<br />
                    The Company may from time to time offer to the customers credits, promo codes, vouchers or any other form of cashback as may be decided by the Company at its sole description. The Company reserves the right to modify, convert, cancel and/or discontinue such credits, promo codes or vouchers, as it may deem fit.<br />
                    We employ third-party payment gateways and/or electronic wallets to receive payments from you. If you are directed to a third-party payment processor, you may be subject to terms and conditions governing use of that third-party payment processor’s service and that third-party payment processor’s personal information collection practices. In connection with such payments, you will be asked to provide customary billing information such as, but not limited to, name, billing address and card information, either to us or our third-party payment processor. Please note that we cannot control any amount that may be charged to you by your bank or other payment facilitator in relation to collection of the total amount, and we disclaim all liability in this regard.<br />
                    The online payment for ordering food on the Platforms can be made by using either your credit card, debit card, net banking, digital wallets or other payment options as made available by the third-party payment processor from time to time.<br />
                    The Company is not responsible for delays or erroneous transaction execution or cancellation due to payment issues. We take utmost care to enable smooth functioning of third-party gateways and/or electronic wallets to process payments, but do not control their systems, processes, technology and work flows and hence cannot be held responsible for any fault at their end.<br />
                    You agree and acknowledge that the transactions may call for and require additional verification or information from you, which may also fall within the ambit of SPI (Sensitive and Personal information) and you undertake to provide complete, correct and proper information. You shall be solely responsible for maintaining the confidentiality of the SPI, digital certificate, passwords and pass phrases assigned to you. You must immediately notify the Company and third-party gateways of any unauthorized use of your SPI, digital certificate, and passwords or pass phrases. You shall be responsible for any unauthorized activities, charges and/or liabilities made on or through your SPI, digital certificate, passwords or pass phrase. In no event shall the Company be liable to you for any unauthorized use or misuse of your SPI, digital certificate, passwords or pass phrase or security authentication option.
                  </p>
                </div>
              )}
              {section === 'Section 11' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 11 – Personal Information
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    In general, you can visit this Web site without telling us who you are or revealing any information about yourself. Our web servers collect the domain names, not the e-mail addresses, of visitors.<br />
                    We will collect personal information from you, which includes your first and last name, address, telephone and mobile number(s), email address, credit card details or any other information, when you knowingly provide us with this information. This will generally occur when you either:<br />
                    a) Visit Online ordering site to place order.<br />
                    b) Enter into a competition or promotion.<br />
                    c) Participate in a survey.<br />
                    d) Subscribe to our mailing list.<br />
                    e) Register as a Loyalty member.<br />
                    f) Apply for a job.<br />
                    g) Request information regarding our Franchise system.<br />
                    h) Submit website feedback or raise a query.<br />
                    i) Contact our customer care.<br />
                    Where ever we collects personal information about you from someone else, We will take reasonable steps to advise you.<br />
                    We shall be using the above said details for promotions purposes of The Company only. In case you don’t want to receive any communication from us, you could opt-out by sending an email to feedback@barbeque-nation.com with your mobile number.
                  </p>
                </div>
              )}
              {section === 'Section 12' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 12 – Errors, Inaccuracies and Omissions
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).<br />
                    We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.
                  </p>
                </div>
              )}
              {section === 'Section 13' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 13 – Prohibited Uses
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.
                  </p>
                </div>
              )}
              {section === 'Section 14' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 14 – Disclaimer of Warranties; Limitation of Liability
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free, that the defects will be rectified, or that the Platforms that make such content, information and materials available are free of viruses or other harmful components; Any material downloaded or otherwise obtained through the Platforms is accessed at your own risk, and you will be solely responsible for any damage or loss of data that results from such download to your computer system and/or electronic device.<br />
                    We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.<br />
                    You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.<br />
                    We does not guarantee that the Platforms will be compatible with your device, operating system, browser, or third-party applications. Any technical issues arising from such incompatibility shall be solely at your risk.<br />
                    You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided ‘as is’ and ‘as available’ for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.<br />
                    In no case shall our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.<br />
                    The Company has no obligation to actively monitor user activity or content on the Platforms. However, we reserve the right to review, restrict, or remove any content or suspend access where it suspects a violation of law, these Terms, or any applicable policy.<br />
                    You further acknowledge that any delays in customer service response times shall not constitute a breach of the Company’s obligations.<br />
                    We cannot and will not assure you that other users of the Platforms are or will be complying with the foregoing rules or any other provisions of these Terms of Service and usage of Platforms. As between you and the Company, you hereby assume all risk of harm or injury resulting from any such lack of compliance.<br />
                    You are solely responsible for maintaining the confidentiality and security of your account credentials.<br />
                    Any activity conducted under your account will be presumed to be authorized by you, and the Company shall not be liable for any resulting loss or misuse.
                  </p>
                </div>
              )}
              {section === 'Section 15' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 15 – Indemnification
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    You agree to indemnify, defend and hold harmless The Company and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party arising from your access to or use of the Platforms or the Services, violation of these Terms of Use, or infringement of any intellectual property or other rights of the Company or any third-party. We will notify you promptly of any such claim, loss, liability, or demand, and in addition to the foregoing, you agree to provide us with reasonable assistance, at your expense, in defending any such claim, loss, liability, damage, or cost. Your indemnification obligations hereunder will survive the expiry or termination of these Terms of Use and/or your use of the Service.
                  </p>
                </div>
              )}
              {section === 'Section 16' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 16 – Severability
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.
                  </p>
                </div>
              )}
              {section === 'Section 17' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 17 – Termination and Force Majeure
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.<br />
                    If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).<br />
                    We will not be responsible for any delay or failure to comply with our obligations under these Terms of Use, if the delay or failure arises due to any event or circumstance beyond our reasonable control.
                  </p>
                </div>
              )}
              {section === 'Section 18' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 18 – Access Outside The Republic Of India
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    The Company makes no representation that the content on the Platforms is appropriate to be used or accessed outside the Republic of India. Any users who use or access the Platforms from outside the Republic of India, do so at their own risk and are responsible for compliance with the laws of such jurisdiction. These Terms of Use do not constitute, nor may these Terms of Use be used for or in connection with any promotional activities or solicitation by anyone in any jurisdiction in which such promotional activities or solicitation are not authorized or to any person to whom it is unlawful to promote or solicit.
                  </p>
                </div>
              )}
              {section === 'Section 19' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 19 – Entire Agreement
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.<br />
                    These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).<br />
                    Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.
                  </p>
                </div>
              )}
              {section === 'Section 20' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 20 – Governing Law Jurisdiction and Waiver
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India and jurisdiction of Bangalore, Karnataka.
                  </p>
                </div>
              )}
              {section === 'Section 21' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 21 – Changes to Terms of Service
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    You can review the most current version of the Terms of Service at any time at this page.<br />
                    We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
                  </p>
                </div>
              )}
              {section === 'Section 22' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 22 – Contact Information
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    Questions about the Terms of Service should be sent to us at [email id].
                  </p>
                </div>
              )}
              {section === 'Section 23' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 23 – Privacy
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    All your interactions with us on this site is governed by the Privacy Policy.
                  </p>
                </div>
              )}
              {section === 'Section 24' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 24 – Vouchers / Coupons &amp; Gift Card Policy
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    a) Valid as per the mentioned date in the communication received, if not available then please consider 1 month from date of issue<br />
                    b) Prior Table reservation advised<br />
                    c) Please present the original Gift Coupons before placing orders<br />
                    d) This Gift Coupon cannot be clubbed with any other existing offer or discount<br />
                    e) Taxes as applicable<br />
                    f) No cash payment will be made by the company either in part or in full nor exchanged<br />
                    g) Management reserves the right to identify the authenticity of the Coupon in case of any dispute, if any.<br />
                    h) Min pax (only for coupons) to be considered as per the communication received, if not available then please consider min of 4 pax required to redeem a coupon code in an invoice<br />
                    i) Management can change the company policy without any prior intimation<br />
                    j) Voucher/Coupon to be settled in full amount. No refund of balance<br />
                    k) Management does not accept any responsibility, if the customer loses the voucher<br />
                    l) Valid as per the mentioned outlet in the communication received, if not available then please consider validity across all Barbeque Nation outlets, except Kolhapur, UAE &amp; Malaysia
                  </p>
                </div>
              )}
              {section === 'Section 25' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 25 – Cancellation and Refund Policy
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    This policy governs the cancellation and refund policy for Delivery and Take-away Orders placed on the [brand website domain names] and Platforms.<br />
                    All refunds and Cancellations are subject to the circumstances detailed out below:<br />
                    1) FOOD ORDER ERRORS:<br />
                    As a customer centric hospitality organisation, we make every effort to prepare and pack the order as per the specifications of the customer and arrange for the delivery of same. However, in rare &amp; unfortunate instances, if a different item is received against what was ordered, Customer shall be entitled for a refund as detailed out in the refund policy below.<br />
                    2) INCOMPLETE FOOD ORDER (Receiving incomplete/ partial order):<br />
                    If at times due to certain technical limitations, an incomplete order is received or any of the items are missing from the delivered order, in such instances, we will deduct the missed item value from the invoice and the value of the said missing item shall be refunded to customer’s source account. or at the option of the Customer, add smiley points in the customer accounts, if applicable, in proportion to the missing order value which can be used for future orders.<br />
                    3) FOOD DISSATISFACTION:<br />
                    As a standard, we always prepare the food in the best possible hygienic conditions using fresh and finest ingredients. However, in rarest of the rare occasions, if the food is spoiled or if any foreign object is found in the food, Customer shall be entitled for a refund as detailed out in the refund policy below.<br />
                    We will need the food returned in its original container, for us to investigate and look into the complaint. Please note that we do not provide refunds for complaints/issues relating to a preferred taste, spice level or simply because customer did not like the food or similar complaints.<br />
                    4) CANCELLATION OF THE ORDER:<br />
                    a. Cancellation by the Delivery Partner: We have partnered with independent third party delivery partners who provide their services to us on principal to principal basis and undertake to deliver the order to our customers. In certain instances, if there is cancellation of the order attributable to the delivery partner, Customer shall be entitled for a refund as detailed out in the refund policy below.<br />
                    Please note that in the instance, if the Customer has provided wrong location at the time of placing of the order or didn’t receive the delivery partners call at the time of delivery due to which delivery partner is not able to locate the address, in such cases, no refund shall be given.<br />
                    Cancellation by The Company: If at times there is cancellation on the part of The Company due to system errors/limitations or due to non-availability of the item, Customer shall be entitled for a refund as detailed out in the refund policy below.<br />
                    Cancellation by Customer: We cannot provide any refund if Customer cancel the order once placed. We begin the preparation of the order immediately after customer’s order is confirmed therefore, we cannot provide any refund.<br />
                    REFUND POLICY<br />
                    In the event Customer is eligible for a refund, Customer shall have the option to choose one of the below remedies:<br />
                    a) A full refund of the order amount to the source account, or<br />
                    b) Refund with smiley points in Customer account, if applicable, in the brand in proportion to the order value which can be used for future orders, or<br />
                    c) Replacement of the order by new order or correct order.<br />
                    All refund amounts, if any, shall be provided to Customer as per the payment mechanism of Customer’s choice. In the event of refund to the source account, estimated timelines for the same shall be 7 working days from the date of confirmation of refund. Kindly note that if the customer chooses to get refund through smiles, if applicable, the same shall be done and the customer shall use the same within 180 days, post which the validity of the smiles shall stand expired.
                  </p>
                </div>
              )}
              {section === 'Section 26' && (
                <div>
                  <h4 className="leading-[17px] md:leading-[30px] text-[14px] md:text-[24px] font-normal md:font-medium font-firaSans-condensed text-black/60">
                    Section 26 – Electronic Record
                  </h4>
                  <p className="leading-[17px] text-[14px] md:leading-[27px] md:text-[18px] font-normal font-firaSans text-black/60 mb-5 md:mb-10">
                    This document is an electronic record in terms of the Information Technology Act, 2000 (“IT Act”) and rules made thereunder as may be applicable, and the amended provisions pertaining to electronic records in various statutes as amended by the IT Act. This electronic record is generated by a computer system and does not require any physical or digital signatures. This document is published in accordance with the provisions of the IT Act and the rules made thereunder that require publishing the rules and regulations, privacy policy and terms of use of the Platforms.<br />
                    DISCLAIMER<br />
                    Please note all the remedies enumerated in the different instances captured above, shall be assessed on case to case basis by taking into consideration the information/evidence shared by the customer along with the inputs from our outlet and the delivery partner. The decision of the Company shall be final and binding.<br />
                    Please note that we do not provide a refund on any complimentary food.<br />
                    CONTACT US TO ASK YOUR QUERIES!<br />
                    If you feel the need to know more about our refund and return policy, feel free to give us a call us [Contact No.] or write us at [E-mail]. Our dedicated customer service team is always there to answer all your questions and help you out with the ordering.
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