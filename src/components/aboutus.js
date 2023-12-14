import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navigation from "./nav";
import Footer from "./footer";
import logo from "../assets/img/logo.svg";
import logoEmb from "../assets/img/logoEmb.svg";
import verticalLine from '../assets/img/verticalLine.svg';
const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);  // when page this page is call from another page its working
    }, []);
    return (
        <>
            {/* navbar - start */}
            <Navigation />
            {/* navbar - end */}
            {/* hero section - start */}
            <div className="container-fluid hero d-flex justify-content-center align-items-center aboutSecOne">
                <div className="leftSideBg"></div>
                <div className="rightSideBg"></div>
                <div className="container">
                    <div className="row row-gap">
                        <div className="col-lg-6 col-md-6 m-auto">
                            <div className="left">
                                <h1 className="titleOne fw-600 black-232323">About <span className="primaryColor">Corechiptech</span></h1>
                                <p className='description fw-400 black-272727 mb-25'>Electrosystech is a dynamic and innovative product design and realization company specialized in research and development for electronic products.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 m-auto">
                            <div className="right text-center">
                                <img className="aboutUsImg" src={logoEmb} alt='corechip' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* hero section - end */}
            {/* aboutsection five - start */}
            <div className="container-fluid aboutSecFive py-50 bgColor-DFDFDF">
                <div className="container">
                    <div className="row row-gap">
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="card py-50">
                                <h1 className="titleFour fw-600 text-center">Team</h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="card py-50">
                                <h1 className="titleFour fw-600 text-center">Quality</h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="card py-50">
                                <h1 className="titleFour fw-600 text-center">Innovative</h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="card py-50">
                                <h1 className="titleFour fw-600 text-center">Knowledge</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* aboutsection five - end */}
            {/* aboutsection two - start */}
            <div className="container-fluid aboutSecTwo py-50 ">
                <img className="logo" src={logo} alt='corechip' />
                <div className="container">
                    <div className="d-flex align-items-center mb-10">
                        <h1 className="primaryColor fw-600 titleThree mb-0">01</h1>
                        <p className="titleFour fw-400 black mb-0">You will be working with a professional team of knowledgeable developers.</p>
                    </div>
                    <div className="d-flex align-items-center mb-10">
                        <h1 className="primaryColor fw-600 titleThree mb-0">02</h1>
                        <p className="titleFour fw-400 black mb-0">Well-functioning and transparent internal business processes.</p>
                    </div>
                    <div className="d-flex align-items-center mb-10">
                        <h1 className="primaryColor fw-600 titleThree mb-0">03</h1>
                        <p className="titleFour fw-400 black mb-0">Guaranteed information and know-how protection</p>
                    </div>
                    <div className="d-flex align-items-center mb-10">
                        <h1 className="primaryColor fw-600 titleThree mb-0">04</h1>
                        <p className="titleFour fw-400 black mb-0">Reliable partners and suppliers (distributors and contract manufacturers)</p>
                    </div>
                    <div className="d-flex align-items-center mb-10">
                        <h1 className="primaryColor fw-600 titleThree mb-0">05</h1>
                        <p className="titleFour fw-400 black mb-0">Flexible cooperation patterns</p>
                    </div>
                    <div className="d-flex align-items-center mb-10">
                        <h1 className="primaryColor fw-600 titleThree mb-0">06</h1>
                        <p className="titleFour fw-400 black mb-0">Guaranteed efficient use of your time and financial resources</p>
                    </div>
                </div>
            </div>
            {/* aboutsection two - end */}
            {/* aboutSection Four - start */}
            <div className="container-fluid aboutSecFour py-50 bgColor-225563">
                <div className="container">
                    <div className="row row-gap">
                        <div className="col-lg-6">
                            <div className="card br-20 p-15 bgColor-DFDFDF">
                                <h1 className="text-uppercase fw-500 titleThree text-center primaryColor">Digital</h1>
                                <p className="text-center fw-400 descriptionTwo">Processor Chip Sets (Intel and AMD)</p>
                                <p className="text-center fw-400 descriptionTwo">Memory (DDR2, DDR3 and DDR4)</p>
                                <p className="text-center fw-400 descriptionTwo">Interfaces (Gig Ethernet/PHY’s, PCIe, SFP/SFP+, SATA etc)</p>
                                <p className="text-center fw-400 descriptionTwo">FPGA</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card br-20 p-15 bgColor-DFDFDF">
                                <h1 className="text-uppercase fw-500 titleThree text-center primaryColor">Manufacturing</h1>
                                <p className="text-center fw-400 descriptionTwo">HDI (Micro, Blind and Buried Vias)</p>
                                <p className="text-center fw-400 descriptionTwo">ICT/ Flying Probe</p>
                                <p className="text-center fw-400 descriptionTwo">Chip On Board (COB)</p>
                                <p className="text-center fw-400 descriptionTwo">Rigid-Flex</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card br-20 p-15 bgColor-DFDFDF">
                                <h1 className="text-uppercase fw-500 titleThree text-center primaryColor">Analog</h1>
                                <p className="text-center fw-400 descriptionTwo">Low Level High Sensitivity Circuits</p>
                                <p className="text-center fw-400 descriptionTwo">High Power</p>
                                <p className="text-center fw-400 descriptionTwo">Data Aquisition</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card br-20 p-15 bgColor-DFDFDF">
                                <h1 className="text-uppercase fw-500 titleThree text-center primaryColor">Power</h1>
                                <p className="text-center fw-400 descriptionTwo">High Voltage</p>
                                <p className="text-center fw-400 descriptionTwo">High Current</p>
                                <p className="text-center fw-400 descriptionTwo">Switchers</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card br-20 p-15 bgColor-DFDFDF">
                                <h1 className="text-uppercase fw-500 titleThree text-center primaryColor">RF</h1>
                                <p className="text-center fw-400 descriptionTwo">Modems</p>
                                <p className="text-center fw-400 descriptionTwo">Satellite Communications</p>
                                <p className="text-center fw-400 descriptionTwo">Radar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* aboutSection Four - end */}
            {/* aboutSection three - start */}
            <div className="container-fluid aboutSecThree py-50">
                <div className="container">
                    <div className="row row-gap" >
                        <img className="verticalLine" src={verticalLine} alt='esteem' />
                        <div className='col-lg-6 col-md-6 m-auto'>
                            <div className="leftCont">
                                <h1 className="titleThree fw-700 primaryColor">Trusted Source for Quality Electronic Components</h1>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className="d-flex">
                                <div className="innerRight">
                                    <div>
                                        <h1 className="titleFour fw-600 primaryColor text-uppercase">Companies with own product line</h1>
                                        <p className="descriptionTwo fw-400 black">We are ready to support you at any project stage. We can develop and support in manufacturing of electronics. Our models of cooperation allow selecting more convenient way.</p>
                                    </div>
                                    <div>
                                        <h1 className="titleFour fw-600 primaryColor text-uppercase">companies with idea of new product or service</h1>
                                        <p className="descriptionTwo fw-400 black">We can deliver turn-key solutions from specification to final product.</p>
                                    </div>
                                    <div>
                                        <h1 className="titleFour fw-600 primaryColor text-uppercase">chip vendors</h1>
                                        <p className="descriptionTwo fw-400 black">We can support chip vendors with board support packages (BSP) and evaluation hardware for their new devices.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className="d-flex">
                                <div className="innerLeft">
                                    <div>
                                        <h1 className="titleFour arwRot fw-600 primaryColor text-uppercase">system integrators</h1>
                                        <p className="descriptionTwo fw-400 black">We help in software (drivers, middleware) and hardware adaptation (converters, customized mother boards).</p>
                                    </div>
                                    <div>
                                        <h1 className="titleFour arwRot fw-600 primaryColor text-uppercase">software companies</h1>
                                        <p className="descriptionTwo fw-400 black">We can support software companies to adopt their software product on customized hardware.</p>
                                    </div>
                                    <div>
                                        <h1 className="titleFour arwRot fw-600 primaryColor text-uppercase">companies in non-electronic markets</h1>
                                        <p className="descriptionTwo fw-400 black">We can deliver new opportunities with innovative embedded solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 m-auto'>
                            <div className="rightCont">
                                <h1 className="titleThree fw-700 primaryColor" >We do not make deals,</h1>
                                <h1 className="titleThree fw-700 primaryColor" >We build relationships</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* aboutSection three - end */}
            {/* footer - start */}
            <Footer />
            {/* footer - end */}
        </>
    )
}
export default AboutUs;