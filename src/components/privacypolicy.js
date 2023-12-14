import React, { useEffect } from "react";
import Footer from "./footer";
import Navigation from "./nav";
const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            {/* navbar- start */}
            <Navigation />
            {/* navbar - end */}
            {/* hero section - start */}
            <div className="container-fluid d-flex justify-content-center align-items-center tcSecOne bgColor-5D7D86">
                <div className="container">
                    <h1 className="text-center fw-600 titleTwo white text-uppercase">Privacy Policy</h1>
                </div>
            </div>
            {/* hero section - end */}
            {/* terms and conditions section two - start */}
            <div className="container-fluid tcSecTwo py-50">
                <div className="container">
                    <p className="description black fw-500">At Corechip Tech, the website owned and operated by [Corechip Tech], we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website and interact with our services. By using our website, you consent to the practices described in this Privacy Policy.</p>
                    <ol>
                        <li className="descriptionThree black-232323 fw-400">Information We Collect</li>
                        <p className="descriptionThree black-232323 fw-400">1.1 Personal Information: We may collect personal information such as your name, email address, phone number, shipping address, and payment details when you place an order or interact with our website.</p>
                        <p className="descriptionThree black-232323 fw-400">1.2 Non-Personal Information: We may collect non-personal information, such as your IP address, browser type, device information, and website usage data. This information is collected through cookies, log files, and similar technologies.</p>
                        <li className="descriptionThree black-232323 fw-400">Use of Information</li>
                        <p>2.1 Personal Information: We may use your personal information to process your orders, provide customer support, communicate with you about your purchases, and deliver relevant information about our products and services.</p>
                        <p>2.2 Non-Personal Information: We may use non-personal information to analyze trends, administer our website, track user movements, and gather demographic information for aggregate use.</p>
                        <li className="descriptionThree black-232323 fw-400">Information Sharing</li>
                        <p>3.1 Service Providers: We may share your personal information with third-party service providers who assist us in operating our website, conducting our business, or servicing your requests.</p>
                        <p>3.2 Legal Requirements: We may disclose your information if required by law or in response to valid legal requests, such as court orders or government regulations.</p>
                        <p>3.3 Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction.</p>
                        <li className="descriptionThree black-232323 fw-400">Data Security We take appropriate measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use secure socket layer (SSL) encryption technology to safeguard sensitive information during transmission.</li>
                        <li className="descriptionThree black-232323 fw-400">Third-Party Links Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of those websites before providing any personal information.</li>
                        <li className="descriptionThree black-232323 fw-400">Cookies We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can manage cookies through your browser settings. However, disabling cookies may limit certain features of our website.</li>
                        <li className="descriptionThree black-232323 fw-400">Children’s Privacy Our website is not intended for children under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.</li>
                        <li className="descriptionThree black-232323 fw-400">Changes to the Privacy Policy We reserve the right to modify this Privacy Policy at any time. Any changes will be effective upon posting on our website. It is your responsibility to review this Privacy Policy periodically for any updates.</li>
                        <li className="descriptionThree black-232323 fw-400">Contact Us If you have any questions or concerns regarding our Privacy Policy, please contact us at [Your Contact Information].</li>
                    </ol>
                </div>
            </div>
            {/* terms and conditions section two - end */}
            {/* footer - start */}
            <Footer />
            {/* footer - end */}
        </>
    )
}
export default PrivacyPolicy;