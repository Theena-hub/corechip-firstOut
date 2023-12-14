import React, { Component, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, NavLink } from 'bootstrap';
import Navigation from './nav';
import client_one from '../assets/img/client_one.svg';
import client_two from '../assets/img/client_two.svg';
import client_three from '../assets/img/client_three.svg';
import client_four from '../assets/img/client_four.svg';
import client_five from '../assets/img/client_five.svg';
import client_six from '../assets/img/client_six.svg';
import client_seven from '../assets/img/client_seven.svg';
import waveOne from '../assets/img/waveOne.svg';
import embraceImgOne from '../assets/img/embraceImgOne.svg';
import embraceImgTwo from '../assets/img/embraceImgTwo.svg';
import dots from '../assets/img/dots.svg';
import leftSideDots from '../assets/img/leftSideDots.svg';
import rightSideDots from '../assets/img/rightSideDots.svg';
import ce_tech_iconOne from '../assets/img/ce_tech_iconOne.svg';
import ce_tech_iconTwo from '../assets/img/ce_tech_iconTwo.svg';
import ce_tech_iconThree from '../assets/img/ce_tech_iconThree.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import techOne from '../assets/img/techOne.svg';
import techTwo from '../assets/img/techTwo.svg';
import techThree from '../assets/img/techThree.svg';
import techFour from '../assets/img/techFour.svg';
import techFive from '../assets/img/techFive.svg';
import techSix from '../assets/img/techSix.svg';
import techSeven from '../assets/img/techSeven.svg';
import techEight from '../assets/img/techEight.svg';
import techNine from '../assets/img/techNine.svg';
import Footer from './footer';
import { Link } from 'react-router-dom';
import serveOne from '../assets/img/serveOne.svg';
import serveTwo from '../assets/img/serveTwo.svg';
import serveThree from '../assets/img/serveThree.svg';
import serveFour from '../assets/img/serveFour.svg';
import serveFive from '../assets/img/serveFive.svg';
import serveSix from '../assets/img/serveSix.svg';
import serveSeven from '../assets/img/serveSeven.svg';
import serveEight from '../assets/img/serveEight.svg';



class Index extends React.Component {
    componentDidMount() {
        // when page this page is call from another page its working
        window.scrollTo(0, 0);
    }
    render() {
        const clients = {
            dots: false,
            infinite: true,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            cssEase: "linear",
            arrows: false,
            responsive: [
                {
                    breakpoint: 2000,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        };
        const fromTop = {
            dots: false,
            arrows: false,
            infinite: true,
            slidesToScroll: 1,
            vertical: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 1000,
            cssEase: "linear",
            verticalSwiping: true,
            lazyLoad: true,
            responsive: [
                {
                    breakpoint: 2000,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };
        const fromBottom = {
            dots: false,
            arrows: false,
            infinite: true,
            slidesToScroll: 1,
            vertical: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 1000,
            cssEase: "linear",
            verticalSwiping: true,
            lazyLoad: true,
            responsive: [
                {
                    breakpoint: 2000,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };
        return (
            <>
                {/* navigation start */}
                <Navigation />
                {/* navigation end */}
                {/* hero Section - start */}
                <div className='container-fluid d-flex justify-content-center align-items-center homeSecOne hero'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <div>
                                    <div className='mb-20'>
                                        <h1 className='titleOne fw-600 black-232323'>Experts Innovative in</h1>
                                        <h1 className='titleOne fw-600 black-232323'>Electronic Design &</h1>
                                        <h1 className='titleOne fw-600 black-232323'>Manufacturing</h1>
                                    </div>
                                    <p className='description fw-400 black-272727 mb-25'>High quality, low cost electronic product Design and manufacturer for your most valuable Assets.</p>
                                    <a href=""><input type="button" value="Let's Talk" className="btn bgPrimaryColor text-uppercase br-2 white fw-600" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* hero Section - end */}
                {/* our clients section - start */}
                <div className='container-fluid py-40 px-0 homeSecTwo'>
                    <h1 className='titleFour fw-600 black-000000 text-uppercase text-center'>Our clients</h1>
                    <div className='container mt-30'>
                        <div className='card'>
                            <Slider {...clients}>
                                <div>
                                    <img src={client_one} alt='image' />
                                </div>
                                <div>
                                    <img src={client_two} alt='image' />
                                </div>
                                <div>
                                    <img src={client_three} alt='image' />
                                </div>
                                <div>
                                    <img src={client_four} alt='image' />
                                </div>
                                <div>
                                    <img src={client_five} alt='image' />
                                </div>
                                <div>
                                    <img src={client_six} alt='image' />
                                </div>
                                <div>
                                    <img src={client_seven} alt='image' />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                {/* our clients section - end */}
                {/* cuting edge tech - start */}
                <div className='container-fluid py-40 px-0 homeSecThree'>
                    <img className='waveOne' src={waveOne} alt='corintech' />
                    <img className='dots' src={dots} alt='corintech' />
                    <div className='container'>
                        <h1 className='titleTwo fw-400 black'>Unlock</h1>
                        <h1 className='titleTwo fw-600 black'>Cutting Edge Technologies</h1>
                        <div className='row mt-50 row-gap'>
                            <div className='col-lg-4 col-md-4 left'>
                                <div className='card br-10'>
                                    <div className='d-flex align-items-center'>
                                        <img className='ce_tech iconOne' src={ce_tech_iconOne} alt='image' />
                                        <h1 className='titleFour fw-600 primaryColor mb-0'>Our Elite Design Experience</h1>
                                    </div>
                                    <p className='descriptionTwo fw-400 black-444444 mt-15'>corechip tech has the ability to design custom hardware solutions for its customers.</p>
                                    <Link to="/design"><p className='learnMore descriptionTwo fw-500 d-flex justify-content-end mb-0 primaryColor'>Learn more</p></Link>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 center'>
                                <div className='card br-10'>
                                    <div className='d-flex align-items-center'>
                                        <img className='ce_tech iconTwo' src={ce_tech_iconTwo} alt='image' />
                                        <h1 className='titleFour fw-600 primaryColor mb-0'>Our Elite Manufacturing Experience</h1>
                                    </div>
                                    <p className='descriptionTwo fw-400 black-444444 mt-15'>Over 21 years' experience designing and manufacturing industry-leading electronics for a range of sectors.</p>
                                    <Link to="/manufacture"><p className='learnMore descriptionTwo fw-500 d-flex justify-content-end mb-0 primaryColor'>Learn more</p></Link>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 right'>
                                <div className='card br-10'>
                                    <div className='d-flex align-items-center'>
                                        <img className='ce_tech iconThree' src={ce_tech_iconThree} alt='image' />
                                        <h1 className='titleFour fw-600 primaryColor mb-0'>ECO-FRIENDLY Product for your Life style</h1>
                                    </div>
                                    <p className='descriptionTwo fw-400 black-444444 mt-15'>Smart Hangers for Modern Living & Engergy -Efficient and Eco- Friendly Our Product</p>
                                    <Link to="/ourproducts"><p className='learnMore descriptionTwo fw-500 d-flex justify-content-end mb-0 primaryColor'>Learn more</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* cuting edge tech - end */}
                {/* industry we serve section - start */}
                <div className='container-fluid py-50 homeSecFour bgWhite-F0F6F5'>
                    <img className='leftSideDots' src={leftSideDots} alt='corintech' />
                    <img className='rightSideDots' src={rightSideDots} alt='corintech' />
                    <div className='container'>
                        <div className='row row-gap'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='inner'>
                                    <h1 className='titleThree fw-600 primaryColor'>Industries We</h1>
                                    <h1 className='titleThree fw-600 primaryColor'>Serve</h1>
                                    <p className='description fw-400 black-272727'>Business isn’t one size fits all. Every industry requires a custom solution.</p>
                                    <a><input type="button" value="Contact Us" className="btn bgPrimaryColor text-uppercase br-2 white fw-600" /></a>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6'>
                                <div className='right'>
                                    <Slider {...fromTop}>                                        
                                        <div className='card p-20 text-center'>
                                            <img src={serveOne} alt='image' />
                                            <h1 className='titleFour mt-15 fw-500 black text-center'>Semi</h1>
                                        </div>
                                        <div className='card p-20 text-center'>
                                            <img src={serveTwo} alt='image' />
                                            <h1 className='titleFour mt-15 fw-500 black text-center'>Satcom</h1>
                                        </div>
                                        <div className='card p-20 text-center'>
                                            <img src={serveThree} alt='image' />
                                            <h1 className='titleFour mt-15 fw-500 black text-center'>Auto</h1>
                                        </div>
                                        <div className='card p-20 text-center'>
                                            <img src={serveFour} alt='image' />
                                            <h1 className='titleFour mt-15 fw-500 black text-center'>Test/Measure</h1>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6'>
                                <div className='right'>
                                    <Slider {...fromBottom}>
                                        <div className='card p-20 text-center'>
                                            <img src={serveFive} alt='image' />
                                            <h1 className='titleFour mt-15 fw-500 black text-center'>Medical</h1>
                                        </div>
                                        <div className='card p-20 text-center'>
                                            <img src={serveSix} alt='image' />
                                            <h1 className='titleFour mt-15 fw-500 black text-center'>MIL/Aero</h1>
                                        </div>
                                        <div className='card p-20 text-center'>
                                            <img src={serveSeven} alt='image' />
                                            <h1 className='titleFour mt-15 fw-500 black text-center'>Industrial</h1>
                                        </div>
                                        <div className='card p-20 text-center'>
                                            <img src={serveEight} alt='image' />
                                            <h1 className='titleFour mt-15 fw-500 black text-center'>Audio/Visual</h1>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* industry we serve section - end */}
                {/* Embrace our - Elite Experience - start */}
                <div className='container-fluid homeSecFive my-40'>
                    <img className='dots' src={dots} alt='corintech' />
                    <div className='container py-30'>
                        <div className='row row-gap'>
                            <div className='col-lg-5 col-md-4 m-auto'>
                                <img src={embraceImgOne} className='embraceImg one' alt="corintech" />
                            </div>
                            <div className='col-lg-7 col-md-8'>
                                <div>
                                    <h1 className='headerText white bgPrimaryColor fw-500 br-46 px-25 py-12'>Embrace Our</h1>
                                    <h1 className='titleThree fw-600 black-232323'>Elite Experience</h1>
                                    <p className='descriptionTwo fw-400 black-4E4C4C'>Electronic design demands a high level of expertise and requires an experienced electronics design company to facilitate the development process. corechiptech have the engineering skills to bring quality products to market and accomplish this by using a platform that best suits your requirements based on use, conditions, and price</p>
                                    <div className='points'>
                                        <p className='descriptionTwo fw-400 black-4E4C4C'>At the heart of every electronic product are the electronic design and the firmware that runs it</p>
                                        <p className='descriptionTwo fw-400 black-4E4C4C'>We take pride in our interactive, client-centered approach that involves you in all phases of a project</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Embrace our - Elite Experience - end */}
                {/* Embrace our - Visionary & Commited - start */}
                <div className='container-fluid py-30 bgWhite-F0F6F5'></div>
                <div className='container-fluid homeSecSix d-flex justify-content-center align-items-center py-40'>
                    <div className='container'>
                        <div className='row row-gap'>
                            <div className='col-lg-7 col-md-8'>
                                <div>
                                    <h1 className='headerText white bgPrimaryColor fw-500 br-46 px-25 py-12'>Embrace Our</h1>
                                    <h1 className='titleThree fw-600 black-232323'>Visionary & Commited</h1>
                                    <p className='descriptionTwo fw-400 black-4E4C4C'>At Corechiptech, we employ a design methodology that takes into account the agile and often iterative nature of electronic product development while working closely with you throughout the process. corechiptech being a full service engineering support company, have expertise that encompasses the total product development process</p>
                                    <div className='points'>
                                        <p className='descriptionTwo fw-400 black-4E4C4C'>All designs can be developed in-line with your planned sales volumes.</p>
                                        <p className='descriptionTwo fw-400 black-4E4C4C'>We work closely with you to find the most suitable solution.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-4 m-auto'>
                                <img src={embraceImgTwo} className='embraceImg Two' alt="corintech" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid py-40 bgWhite-F0F6F5'></div>
                {/* Embrace our - Visionary & Commited - end */}
                {/* Tech We Use - Start */}
                <div className='container-fluid homeSecSeven'>
                    <h1 className='headerText fw-600 white bgPrimaryColor text-center mx-auto text-uppercase'>Technologies We Use</h1>
                    <h1 className='titleThree fw-600 black-232323 text-center'>Technologies We Use</h1>
                    <p className='descriptionTwo fw-400 black-4E4C4C text-center mx-auto'>" As a research driven technology  Company, Corechip technology expertise encompasses a wide range of languages, platforms, tools and business solutions including HyperLynx, Altium, Keysight, Ansys, Solidworks, Valor, ptccreo, Xpedition, Microsoft AZURE, Native & Hybrid App Development and Selenium."</p>
                    <div className='techBox one bgWhite'>
                        <img className='tech one' src={techOne} alt='corintech' />
                    </div>
                    <div className='techBox two bgWhite'>
                        <img className='tech two' src={techTwo} alt='corintech' />
                    </div>
                    <div className='techBox three bgWhite'>
                        <img className='tech three' src={techThree} alt='corintech' />
                    </div>
                    <div className='techBox four bgWhite'>
                        <img className='tech four' src={techFour} alt='corintech' />
                    </div>
                    <div className='techBox five bgWhite'>
                        <img className='tech five' src={techFive} alt='corintech' />
                    </div><div className='techBox six bgWhite'>
                        <img className='tech six' src={techSix} alt='corintech' />
                    </div><div className='techBox seven bgWhite'>
                        <img className='tech seven' src={techSeven} alt='corintech' />
                    </div><div className='techBox eight bgWhite'>
                        <img className='tech eight' src={techEight} alt='corintech' />
                    </div><div className='techBox nine bgWhite'>
                        <img className='tech nine' src={techNine} alt='corintech' />
                    </div>
                </div>
                {/* Tech We Use - End */}
                {/* Our Effective Process - Start */}
                <div className='container-fluid homeSecEight py-40 px-0'>
                    <div className='rectBox bgPrimaryColor'>
                        <h1 className='text-uppercase fw-500 white titleTwo text-center mb-0'>OUR PROCESS</h1>
                    </div>
                    <div className='container'>
                        <div className='row row-gap'>
                            <div className='col-lg-6 col-md-5'>
                                <div className='left mt-40'>
                                    <h1 className='titleThree fw-600 primaryColor'>Our Effective</h1>
                                    <h1 className='titleThree fw-600 primaryColor'>Process</h1>
                                    <p className='description fw-400 black-272727'>Business isn’t one size fits all. Every industry requires a custom solution.</p>
                                    <a><input type="button" value="Contact Us" className="btn bgPrimaryColor text-uppercase br-2 white fw-600" /></a>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-7'>
                                <div className='right'>
                                    <div className='mb-30 d-flex align-items-start'>
                                        <div className='circle dottedLine bgPrimaryColor color-F4FCFA fw-500 titleFour' style={{ letterSpacing: '3px' }}>01</div>
                                        <div className='card bgColor-F2F2F2 b-none'>
                                            <h1 className='titleFour fw-500 black'>Discover</h1>
                                            <p className='descriptionTwo fw-400 black mb-0'>Learning, Exploring, Analyzing</p>
                                        </div>
                                    </div>
                                    <div className='mb-30 d-flex align-items-start'>
                                        <div className='circle dottedLine bgPrimaryColor color-F4FCFA fw-500 titleFour'>02</div>
                                        <div className='card bgColor-F2F2F2 b-none'>
                                            <h1 className='titleFour fw-500 black'>Design</h1>
                                            <p className='descriptionTwo fw-400 black mb-0'>Learning, Exploring, Analyzing</p>
                                        </div>
                                    </div>
                                    <div className='mb-30 d-flex align-items-start'>
                                        <div className='circle dottedLine bgPrimaryColor color-F4FCFA fw-500 titleFour'>03</div>
                                        <div className='card bgColor-F2F2F2 b-none'>
                                            <h1 className='titleFour fw-500 black'>Develop</h1>
                                            <p className='descriptionTwo fw-400 black mb-0'>Learning, Exploring, Analyzing</p>
                                        </div>
                                    </div>
                                    <div className='mb-30 d-flex align-items-start'>
                                        <div className='circle bgPrimaryColor color-F4FCFA fw-500 titleFour'>04</div>
                                        <div className='card bgColor-F2F2F2 b-none'>
                                            <h1 className='titleFour fw-500 black'>Deliver</h1>
                                            <p className='descriptionTwo fw-400 black mb-0'>Learning, Exploring, Analyzing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Our Effective Process - End */}
                {/* Footer Section - Start */}
                <Footer />
                {/* Footer Section - End */}
            </>
        )
    }
}
export default Index