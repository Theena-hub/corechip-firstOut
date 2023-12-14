import React, { useEffect } from "react";
import Footer from "./footer";
import Navigation from "./nav";
const RefundAndCancellation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return (
        <>
            {/* navbar- start */}
            <Navigation />
            {/* navbar - end */}
            {/* hero section - start */}
            <div className="container-fluid d-flex justify-content-center align-items-center tcSecOne bgColor-5D7D86">
                <div className="container">
                    <h1 className="text-center fw-600 titleTwo white text-uppercase">Refund and Cancellation</h1>
                </div>
            </div>
            {/* hero section - end */}
            {/* terms and conditions section two - start */}
            <div className="container-fluid tcSecTwo py-50">
                <div className="container">
                    <p className="description black fw-500">Thank you for choosing Corechip Tech, the website owned and operated by [Corechip Tech]. We strive to ensure customer satisfaction with our Ceiling cloth hanger. Please read our Refund & Cancellation Policy carefully before making a purchase.</p>
                    <ol>
                        <li className="descriptionThree black-232323 fw-400">Refunds</li>
                        <p className="descriptionThree black-232323 fw-400">1.1 Damaged or Defective Products: In the event that you receive a damaged or defective Ceiling cloth hanger, please contact our customer support team within [3 days] days of receiving the product. We will assess the issue and, if eligible, arrange for a refund or replacement.</p>
                        <p className="descriptionThree black-232323 fw-400">1.2 Return Eligibility: To be eligible for a refund, the product must be unused, in its original condition, and returned in its original packaging. Proof of purchase is required.</p>
                        <p className="descriptionThree black-232323 fw-400">1.3 Refund Process: Once we receive and inspect the returned product, we will notify you of the status of your refund. If approved, the refund will be processed within [number of days] days. The refund will be issued using the original payment method.</p>
                        <li className="descriptionThree black-232323 fw-400">Cancellations</li>
                        <p className="descriptionThree black-232323 fw-400">2.1 Order Cancellation: If you wish to cancel your order, please contact our customer support team as soon as possible. We will make every effort to accommodate your request if the order has not been shipped.</p>
                        <p className="descriptionThree black-232323 fw-400">2.2 Refund for Canceled Orders: If your order is canceled before shipment, a full refund will be issued using the original payment method within [number of days] days.</p>
                        <li className="descriptionThree black-232323 fw-400">Non-Refundable Items and Exceptions</li>
                        <p className="descriptionThree black-232323 fw-400">3.1 Customized Products: Any Ceiling cloth hanger that have been customized or modified according to your specifications are non-refundable unless they are damaged or defective upon receipt.</p>
                        <p className="descriptionThree black-232323 fw-400">3.2 Shipping and Handling Charges: Shipping and handling charges are non-refundable, except in cases where the product is damaged or defective.</p>
                        <p className="descriptionThree black-232323 fw-400">3.3 Return Shipping Costs: You are responsible for covering the return shipping costs, unless the product is being returned due to damage or defects.</p>
                        <li className="descriptionThree black-232323 fw-400">Return Process</li>
                        <p className="descriptionThree black-232323 fw-400">4.1 Contact Customer Support: To initiate a return or refund request, please contact our customer support team. Provide your order details, reason for return, and any supporting information.</p>
                        <p className="descriptionThree black-232323 fw-400">4.2 Return Authorization: If your return is approved, you will be provided with a return authorization number and instructions on how to proceed with the return.</p>
                        <p className="descriptionThree black-232323 fw-400">4.3 Packaging and Shipping: Please ensure that the product is securely packaged for return shipment. We recommend using a shipping method with tracking and insurance to ensure the safe return of the product.</p>
                        <p className="descriptionThree black-232323 fw-400">4.4 Return Inspection: Once we receive the returned product, we will inspect it to ensure it meets the eligibility criteria mentioned in section 1.2.</p>
                        <p className="descriptionThree black-232323 fw-400">4.5 Status Notification: We will notify you of the status of your return and refund request after the product has been inspected.</p>
                        <li className="descriptionThree black-232323 fw-400">Contact Information If you have any questions or need further assistance regarding our Refund & Cancellation Policy, please contact our customer support team at [Your Contact Information].</li>
                    </ol>
                    <p className="description fw-500">Please note that by making a purchase on our website, you agree to comply with the terms and conditions outlined in this Refund & Cancellation Policy.</p>
                </div>
            </div>
            {/* terms and conditions section two - end */}
            {/* footer - start */}
            <Footer />
            {/* footer - end */}
        </>
    )
}
export default RefundAndCancellation;