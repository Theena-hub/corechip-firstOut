import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo2 from '../assets/img/logo2.svg';
import locationIcon from '../assets/img/locationIconGreen.svg';
import phoneIcon from '../assets/img/phoneIconGreen.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleCallClick = () => {
        window.location.href = `tel: +917867988679`;
    }
    return (
        <>
            {/* Footer Section - Start */}
            <div className='container-fluid footer bgColor-225563 pt-70 pb-40'>
                {/* <img className='footerWave' src={footerWave} alt='corintech' /> */}
                <div className='container footerFloating'>
                    <div className='card bgPrimaryColor b-none'>
                        <div className='row row-gap'>
                            <div className='col-lg-9 m-auto'>
                                <p className='titleThree white mb-0'>Looking for Quality Electronic Components ?</p>
                            </div>
                            <div className='col-lg-3 text-center m-auto'>
                                <input onClick={handleCallClick} type="button" value="Contact Us" className="btn bgPrimaryColor text-uppercase br-2 white fw-600" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container first'>
                    <div className='row row-gap'>
                        <div className='column left'>
                            <div className=''>
                                <h1 className='titleFour fw-600 primaryColor mb-20'>Explore Our company</h1>
                                <div className='inner'>
                                    <Link to="/"><p className="descriptionThree white fw-400">Home</p></Link>
                                    <Link to="/aboutus" ><p className="descriptionThree white fw-400">About us</p></Link>
                                    <Link to="/design"><p className="descriptionThree white fw-400">Design</p></Link>
                                    <Link to="/manufacture"><p className="descriptionThree white fw-400">Manufacture</p></Link>
                                    <Link to="/ourproducts"><p className="descriptionThree white fw-400">Our Product</p></Link>
                                    <Link to="/contactus"><p className="descriptionThree white fw-400">Contact us</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className='column center'>
                            <h1 className='titleFour fw-600 primaryColor mb-20'>Design Service</h1>
                            <div className='inner d-flex justify-content-between'>
                                <div>
                                    <p className="descriptionThree white fw-400">Design Process</p>
                                    <p className="descriptionThree white fw-400">Electronic Design</p>
                                    <p className="descriptionThree white fw-400">PCB Layout</p>
                                    <p className="descriptionThree white fw-400">Firmware Development</p>
                                    <p className="descriptionThree white fw-400">Software Development</p>
                                    <p className="descriptionThree white fw-400">Product Design</p>
                                </div>
                                <div>
                                    <p className="descriptionThree white fw-400">3D CAD</p>
                                    <p className="descriptionThree white fw-400">Prototyping</p>
                                    <p className="descriptionThree white fw-400">Design for Manufacture</p>
                                    <p className="descriptionThree white fw-400">Product Compliance</p>
                                    <p className="descriptionThree white fw-400">Wireless & IOT</p>
                                    <p className="descriptionThree white fw-400">Display Technology</p>
                                </div>
                            </div>
                        </div>
                        <div className='column right'>
                            <h1 className='titleFour fw-600 primaryColor mb-20'>Manufacture Service</h1>
                            <div className='inner d-flex justify-content-between'>
                                <div>
                                    <p className='descriptionThree white fw-400'>Component Sourcing</p>
                                    <p className='descriptionThree white fw-400'>PCB Assembly</p>
                                    <p className='descriptionThree white fw-400'>Box Build</p>
                                    <p className='descriptionThree white fw-400'>Flexible Supply</p>
                                    <p className='descriptionThree white fw-400'>Wire Bonding</p>
                                    <p className='descriptionThree white fw-400'>Think Film Hybrinds</p>
                                </div>
                                <div>
                                    <p className='descriptionThree white fw-400'>Laser Trimming</p>
                                    <p className='descriptionThree white fw-400'>Costing And Encapsulation</p>
                                    <p className='descriptionThree white fw-400'>Production Engineering</p>
                                    <p className='descriptionThree white fw-400'>Quality Accreditations</p>
                                    <p className='descriptionThree white fw-400'>Hong Kong Electronic Assembly</p>
                                    <p className='descriptionThree white fw-400'>Far East Manufacturing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container second'>
                    <div className='row row-gap'>
                        <div className='col-lg-4 col-md-8 m-auto text-center'>
                            <div className='inner left'>
                                <img className='logo2' src={logo2} alt='corintech' />
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 m-auto'>
                            <div className='inner center'>
                                <div className='d-flex align-items-center'>
                                    <div className='iconBox bgColor-5D7D86'>
                                        <img className='footerIcon' src={locationIcon} alt='corintech' />
                                    </div>
                                    <div className='contentBox'>
                                        <p className="descriptionThree white fw-400 mb-0">No. 309, E8 Block, PSG-STEP CoE,
                                            PSG I TECH Campus, Avinashi Road, Neelambur, Coimbatore - 641 062, Tamil Nadu, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 m-auto'>
                            <div className='inner right'>
                                <div className='d-flex align-items-center'>
                                    <div className='iconBox bgColor-5D7D86'>
                                        <img className='footerIcon' src={phoneIcon} alt='corintech' />
                                    </div>
                                    <div className='contentBox'>
                                        <a href='tel:7867988679'><p className="descriptionThree white fw-400 mb-0">+91 78679 88679</p></a>
                                        <a href="mailto:jusdry@jusdry.com"><p className="descriptionThree white fw-400 mb-0">jusdry@jusdry.com</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid bgColor-225563 footerBottom pb-20'>
                <p className='descriptionThree fw-400  text-center d-flex justify-content-center mb-0'><Link className='white' to="/refundandcancellation"><span className='line ml-0'>Refund & Cancellation Policy</span></Link><Link className='white' to="/termsandconditions"><span className='line'>Terms & Conditions</span></Link><Link className='white' to="/privacypolicy"><span>Privacy Policy</span></Link></p>
            </div>
            {/* Footer Section - End */}
        </>
    )
}
export default Footer