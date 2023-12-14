import React,{useEffect} from "react";
import Footer from "./footer";
import Navigation from "./nav";
import { Link } from "react-router-dom";
const TermsAndConditions = () => {
    useEffect(() => {
        // when this page is called from another page, scroll to the top
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
                        <h1 className="text-center fw-600 titleTwo white text-uppercase">Terms and Conditions</h1>
                    </div>
                </div>
                {/* hero section - end */}
                {/* terms and conditions section two - start */}
                <div className="container-fluid tcSecTwo py-50">
                    <div className="container">
                        <p className="description black fw-500">Welcome to Corechip Tech, the website owned and operated by [Corechip Tech]. By accessing and using our website, you agree to comply with the following Terms & Conditions. Please read them carefully before using our website.</p>
                        <ol>
                            <li className="descriptionThree black-232323 fw-400">Acceptance of Terms By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree to these terms, please refrain from using our website.</li>
                            <li className="descriptionThree black-232323 fw-400">Intellectual Property All content on the Corechip Tech website, including but not limited to text, graphics, logos, images, videos, and software, is the property of [Corechip Tech] and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or use any of our website's content without obtaining prior written permission from us.</li>
                            <li className="descriptionThree black-232323 fw-400">Product Information The information provided on our website regarding our electric cloth dryers, including product descriptions, specifications, and pricing, is subject to change without notice. We make every effort to ensure accuracy; however, we do not guarantee the completeness, accuracy, or reliability of the information provided.</li>
                            <li className="descriptionThree black-232323 fw-400">Product Availability We strive to maintain stock availability for our products but cannot guarantee the availability of specific models or variations at all times. We reserve the right to discontinue or modify any product without prior notice.</li>
                            <li className="descriptionThree black-232323 fw-400">Pricing and Payment All prices displayed on our website are in the currency specified and exclude applicable taxes and shipping charges, unless otherwise stated. We reserve the right to change prices without prior notice. Payment for orders must be made through the available payment methods on our website.</li>
                            <li className="descriptionThree black-232323 fw-400">Shipping and Delivery Shipping and delivery of our products will be in accordance with our specified policies, which may vary depending on your location. We strive to provide accurate estimated delivery times but cannot be held responsible for any delays caused by external factors beyond our control.</li>
                            <li className="descriptionThree black-232323 fw-400">Returns and Refunds Our returns and refunds policy outlines the guidelines for returning a product and requesting a refund. Please refer to the policy on our website for detailed information.</li>
                            <li className="descriptionThree black-232323 fw-400">Limitation of Liability Corechip Tech and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use our website or any products purchased from us. This limitation of liability applies to the fullest extent permitted by law.</li>
                            <li className="descriptionThree black-232323 fw-400">Indemnification By using our website, you agree to indemnify and hold harmless Corechip Tech and its affiliates from any claims, damages, liabilities, costs, or expenses arising out of your use of the website or violation of these Terms & Conditions.</li>
                            <li className="descriptionThree black-232323 fw-400">Governing Law and Jurisdiction These Terms & Conditions are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts located in [Your Jurisdiction].</li>
                            <li className="descriptionThree black-232323 fw-400">Modifications to Terms & Conditions We reserve the right to modify or update these Terms & Conditions at any time without prior notice. The updated terms will be effective upon posting on our website. It is your responsibility to review these terms periodically for any changes.</li>
                            <li className="descriptionThree black-232323 fw-400">If you have any questions or concerns regarding these Terms & Conditions, please contact us at <Link className="primaryColor" to='/contactus'>[Contact Us]</Link>.</li>
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
export default TermsAndConditions;