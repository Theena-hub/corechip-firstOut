import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navigation from "./nav";
import Footer from "./footer";
import locationTwo from "../assets/img/locationIconBlack.svg";
import emailIcon from "../assets/img/emailIconBlack.svg";
import mobileIcon from "../assets/img/mobileIconBlack.svg";
const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);  // when page this page is call from another page its working
    }, []);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        mobileNo: "",
        message: "",
    });
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {            
            const response = await fetch("http://localhost:1234/contactUs", {
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(formData),
            });
            if (response.ok) {setSubmissionStatus("success");
            console.log("Form submitted successfully");
            setTimeout(() => {
                window.location.reload();
            }, 2000);
            } else {
                setSubmissionStatus("failed");
                console.error("Form submission failed");
            }
        } catch (error) {
            setSubmissionStatus("failed");
            console.error("Error submitting form:", error);
        }
    };
    return (
        <>
            {/* navbar - start */}
            <Navigation />
            {/* navbar - end */}
            {/* hero section - start */}
            <div className="container-fluid d-flex justify-content-center align-items-center contactSecOne">
                <div className="leftSideBg"></div>
                <div className="container">
                    <div className="row row-gap">
                        <div className="col-lg-6 col-md-6 m-auto">
                            <div>
                                <h1 className="titleOne fw-600 black-232323 text-uppercase primaryColor">Let's</h1>
                                <h1 className="titleOne fw-600 black-232323 text-uppercase">Connect</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 m-auto">
                            <div>
                                <p className="titleFour black-232323 fw-600">Please do not hesitate to contact us, kindly leave a message and we will get back to you shortly.</p>
                                <form className="form-group" onSubmit={handleFormSubmit}>
                                    <div className="d-flex" style={{ padding: '8px 0' }}>
                                        <input className="placeHold form-control fw-600 description mr-2" name="name" type="text" placeholder="NAME" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                                        <input className="placeHold form-control fw-600 description ml-2" name="company" type="text" placeholder="COMPANY" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} required />
                                    </div>
                                    <div className="d-flex" style={{ padding: '8px 0' }}>
                                        <input className="placeHold form-control fw-600 description mr-2" name="phone" type="number" placeholder="PHONE" value={formData.mobileNo} onChange={(e) => setFormData({ ...formData, mobileNo: e.target.value })} required />
                                        <input className="placeHold form-control fw-600 description ml-2" name="email" type="email" placeholder="EMAIL" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                                    </div>
                                    <div style={{ padding: '8px 0' }}>
                                        <textarea className="placeHold form-control fw-600 description" name="message" rows="4" cols="50" placeholder="Message Here..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required ></textarea>
                                    </div>
                                    <button className="btn d-flex fw-600 text-uppercase mt-20 bgPrimaryColor">Send</button>
                                </form>
                                {submissionStatus === "success" && (
                                    <p className="titleFour fw-600 primaryColor">Your message was sent successfully!</p>
                                )}
                                {submissionStatus === "failed" && (
                                    <p className="titleFour fw-600 color-DA2E1F">Failed to send message. Please try again.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* hero section - end */}
            {/* contact section - start */}
            <div className="container-fluid contactSecTwo bgPrimaryColor px-0 py-40">
                <div className="container">
                    <div className="row row-gap">
                        <div className="col-lg-4 col-md-4">
                            <h4 className="titleFour text-uppercase black fw-600">Registered Office</h4>
                            <div className="d-flex align-items-start mt-2">
                                <img src={locationTwo} alt='esteem' />
                                <p className="descriptionOne white fw-400">Esteem Microelectronics Pte. Ltd.,<br />51 Goldhill Plaza, #07 – 10/11,<br />Singapore 308900.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <h4 className="titleFour text-uppercase black fw-600">Logistics & Distribution Centre</h4>
                            <div className="d-flex align-items-start mt-2">
                                <img src={locationTwo} alt='esteem' />
                                <p className="descriptionOne white fw-400">Esteem Microelectronics Pte. Ltd.,<br />C/O DNKH Logistics Pte. Ltd.,<br />27 Penjuru Lane, Phase 2,<br />#02-02,Singapore 609195.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <h4 className="titleFour text-uppercase black fw-600">Contact Us</h4>
                            <div className="d-flex align-items-start mb-2">
                                <img src={mobileIcon} alt='esteem' />
                                <p className="descriptionOne white fw-400 mb-0">+65 84050093</p>
                            </div>
                            <div className="d-flex align-items-start mb-2">
                                <img src={mobileIcon} alt='esteem' />
                                <p className="descriptionOne white fw-400 mb-0">+91 9845679678</p>
                            </div>
                            <div className="d-flex align-items-start mb-2">
                                <img src={emailIcon} alt='esteem' />
                                <p className="descriptionOne white fw-400 mb-0">info@esteemelectronics.com</p>
                            </div>
                            <div className="d-flex align-items-start mb-2">
                                <img src={emailIcon} alt='esteem' />
                                <p className="descriptionOne white fw-400 mb-0">durai@esteemelectronics.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid contactSecThree py-30">
                <div className="container">
                    <div className="" style={{ height: '300px' }}>
                        <iframe title="location" width="100%" height="100%" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.2976581891195!2d103.84270916710462!3d1.3181331406671843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19e7b8f29f9b%3A0x8bc57d7ad5eeeecb!2sEsteem%20Microelectronics%20Pte.%20Ltd!5e0!3m2!1sen!2sus!4v1693375163941!5m2!1sen!2sus" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>
            </div>
            {/* contact section - end */}
            {/* footer - start */}
            <Footer />
            {/* footer - end */}
        </>
    )
}
export default ContactUs;