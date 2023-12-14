import React, { useState, useEffect } from 'react';
import Navigation from "./nav";
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import productSecOneImgOne from '../assets/img/productSecOneImgOne.svg';
import productSecOneImgTwo from '../assets/img/productSecOneImgTwo.svg';
import productSecOneImgThree from '../assets/img/productSecOneImgThree.svg';
import productSecOneImgFour from '../assets/img/productSecOneImgFour.svg';
import productSecFourImg from '../assets/img/productSecFourImg.svg';
import productSecFourBg from '../assets/img/productSecFourBg.svg';
import featureOne from '../assets/img/featureOne.svg';
import featureTwo from '../assets/img/featureTwo.svg';
import featureThree from '../assets/img/featureThree.svg';
import featureFour from '../assets/img/featureFour.svg';
import featureFive from '../assets/img/featureFive.svg';
import featureSix from '../assets/img/featureSix.svg';
import featureSeven from '../assets/img/featureSeven.svg';
import featureEight from '../assets/img/featureEight.svg';
import featureNine from '../assets/img/featureNine.svg';
import productSecFiveImg from '../assets/img/productSecFiveImg.svg';
import { Link } from 'react-router-dom';

const OurProducts = () => {
    const [selectedImage, setSelectedImage] = useState(productSecOneImgOne);
    useEffect(() => {
        window.scrollTo(0, 0);  // when page this page is call from another page its working        
    }, []);
    const handleImageClick = (event) => {
        const selectedImageId = event.target.getAttribute("data-image-id");
        switch (selectedImageId) {
            case "image1":
                setSelectedImage(productSecOneImgOne);
                break;
            case "image2":
                setSelectedImage(productSecOneImgTwo);
                break;
            case "image3":
                setSelectedImage(productSecOneImgThree);
                break;
            case "image4":
                setSelectedImage(productSecOneImgFour);
                break;
            default:
            // Handle the default case if needed
        }
    };   

    const productDescription = {
        [productSecOneImgOne]: {
            link: "/productdetails",
        },
        [productSecOneImgTwo]: {
            link: "/productdetails",
        },
        [productSecOneImgThree]: {
            link: "/productdetails",
        },
        [productSecOneImgFour]: {
            link: "/productdetails",
        },
    };
    const selectedContentObj = productDescription[selectedImage];
    const selectedLink = selectedContentObj.link;
    return (
        <>
            {/* navbar - start */}
            <Navigation />
            {/* navbar - end */}
            {/* hero section - start */}
            <div className='container-fluid d-flex justify-content-center align-items-center productSecOne px-0'>
                <div className="leftSideBg"></div>
                <div className="rightSideBg"></div>
                <div className="container">
                    <div className="row row-gap">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 m-auto">
                            <div>
                                <h1 className="titleOne fw-600 black-232323 mb-20">Your Trusted Partner in Ceiling cloth hanger</h1>
                                <button type="button" className="btn bgPrimaryColor text-uppercase br-2 white fw-600">contact us</button>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-4 col-3">
                            <div className="img-list">                                                    
                                <img src={productSecOneImgOne} alt="corechip" data-image-id="image1" onClick={handleImageClick} />
                                <img src={productSecOneImgTwo} alt="corechip" data-image-id="image2" onClick={handleImageClick} />
                                <img src={productSecOneImgThree} alt="corechip" data-image-id="image3" onClick={handleImageClick} />
                                <img src={productSecOneImgFour} alt="corechip" data-image-id="image4" onClick={handleImageClick} />                            
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-8 col-9 m-auto">
                            <div className="inner">
                                <div>
                                    <img src={selectedImage} className="productSecOneImg" alt="Corechip" />                                    
                                </div>
                            </div>
                        </div>
                        <Link to={selectedLink}><h1 className='prodDesc descriptionTwo primaryColor fw-500'>View Description</h1></Link>                        
                    </div>                    
                </div>
            </div>
            {/* hero section - end */}
            {/* start */}
            <div className="container-fluid  productSecTwo py-50">
                <div className="container">
                    <h1 className="titleFive fw-400 black text-uppercase">Features</h1>
                    <div className="row row-gap">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-6 m-auto">
                            <div className="inner left">
                                <div className="overlay bgPrimaryColor"></div>
                                <div className="imgBox bgWhite">
                                    <img className="feature" src={featureOne} alt='corechip' />
                                </div>
                            </div>
                            <h1 className="black fw-500 headerText">Remote Operated</h1>
                            <p className="black fw-400 descriptionThree text-center">Functions on tap of buttons</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="inner left">
                                <div className="overlay bgPrimaryColor"></div>
                                <div className="imgBox bgWhite">
                                    <img className="feature" src={featureTwo} alt='corechip' />
                                </div>
                            </div>
                            <h1 className="black fw-500 headerText">Branded LED Light</h1>
                            <p className="black fw-400 descriptionThree text-center">Mfr: Panasonic</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="inner left">
                                <div className="overlay bgPrimaryColor"></div>
                                <div className="imgBox bgWhite">
                                    <img className="feature" src={featureThree} alt='corechip' />
                                </div>
                            </div>
                            <h1 className="black fw-500 headerText">Components</h1>
                            <p className="black fw-400 descriptionThree text-center">Light weight, Industrial grade</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="inner center">
                                <div className="overlay bgPrimaryColor"></div>
                                <div className="imgBox bgWhite">
                                    <img className="feature" src={featureFour} alt='corechip' />
                                </div>
                            </div>
                            <h1 className="black fw-500 headerText">Hasle Free</h1>
                            <p className="black fw-400 descriptionThree text-center">No pulling- No typing</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="inner center">
                                <div className="overlay bgPrimaryColor"></div>
                                <div className="imgBox bgWhite">
                                    <img className="feature" src={featureFive} alt='corechip' />
                                </div>
                            </div>
                            <h1 className="black fw-500 headerText">Dropping Distance</h1>
                            <p className="black fw-400 descriptionThree text-center">Mfr: Panasonic</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="inner center">
                                <div className="overlay bgPrimaryColor"></div>
                                <div className="imgBox bgWhite">
                                    <img className="feature" src={featureSix} alt='corechip' />
                                </div>
                            </div>
                            <h1 className="black fw-500 headerText">Finish</h1>
                            <p className="black fw-400 descriptionThree text-center">High quality powder coated finish</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="inner right">
                                <div className="overlay bgPrimaryColor"></div>
                                <div className="imgBox bgWhite">
                                    <img className="feature" src={featureSeven} alt='corechip' />
                                </div>
                            </div>
                            <h1 className="black fw-500 headerText">Installation</h1>
                            <p className="black fw-400 descriptionThree text-center">Easy, Simple & Do-it yourself</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="inner right">
                                <div className="overlay bgPrimaryColor"></div>
                                <div className="imgBox bgWhite">
                                    <img className="feature" src={featureEight} alt='corechip' />
                                </div>
                            </div>
                            <h1 className="black fw-500 headerText">Safe</h1>
                            <p className="black fw-400 descriptionThree text-center">Stops automatically on hitting obstacles</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="inner right">
                                <div className="overlay bgPrimaryColor"></div>
                                <div className="imgBox bgWhite">
                                    <img className="feature" src={featureNine} alt='corechip' />
                                </div>
                            </div>
                            <h1 className="black fw-500 headerText">Seamless control</h1>
                            <p className="black fw-400 descriptionThree text-center">Stop & dry at any night</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end */}
            {/* Design Section - Start */}
            <div className="container-fluid productsSecThree pos-relative py-50">
                <div className="triangle"></div>
                <img className="dotBg pos-absolute" src={productSecFourBg} alt='corechip' />
                <div className="container">
                    <div className="row row-gap">
                        <div className="col-lg-6 col-md-5 m-auto">
                            <div className='bgPrimaryColor layout'></div>
                            <div className='imgBox bgWhite dropShadow d-flex m-auto p-15'>
                                <img className="img-fluid" src={productSecFourImg} alt='corechip' />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7 m-auto">
                            <div>
                                <h1 className="titleFive fw-500 primaryColor">DESIGN</h1>
                                <p className="titleFour fw-500 black">Smart Hangers for Modern Living</p>
                                <p className="descriptionTwo fw-400 black">we understand the importance of convenience and efficiency in your daily routine. That’s why we proudly present our cutting-edge Ceiling cloth hanger, designed to revolutionize the way you dry your clothes. Say goodbye to the hassle of traditional drying methods and embrace the future of laundry with our state-of-the-art appliance.</p>
                                <button type="button" className="btn bgPrimaryColor text-uppercase br-2 white fw-600">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Design Section - End */}
            {/* Echo Friendly - Start */}
            <div className="container-fluid productsSecFour pos-relative bgWhite-F0F6F5 py-50">
                <img className="dotBg pos-absolute" src={productSecFourBg} alt='corechip' />
                <div className="container">
                    <div className="row row-gap">
                        <div className="col-lg-6 col-md-7 m-auto">
                            <div>
                                <h1 className="titleFive fw-500 primaryColor">ECO-FRIENDLY</h1>
                                <p className="titleFour fw-500 black">Energy-Efficient and Eco-Friendly</p>
                                <p className="descriptionTwo fw-400 black">We understand the importance of energy efficiency and sustainability. Our Ceiling cloth hanger is designed with energy-saving features that help reduce power consumption without compromising drying performance. By using our dryer, you not only save time but also contribute to a greener environment.</p>
                                <button type="button" className="btn bgPrimaryColor text-uppercase br-2 white fw-600">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 m-auto">
                            <div className='bgPrimaryColor layout ml-auto'></div>
                            <div className='imgBox bgWhite dropShadow d-flex m-auto p-15'>
                                <img className="img-fluid" src={productSecFourImg} alt='corechip' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Echo Friendly - End */}
            <div className="container-fluid productsSecFive py-50 pos-relative">
                <img className="dotBg pos-absolute" src={productSecFourBg} alt='corechip' />
                <div className="container">
                    <div className="row row-gap">
                        <div className="col-lg-6 col-md-5 m-auto">
                            <div className='bgPrimaryColor layout'></div>
                            <div className='imgBox bgWhite dropShadow d-flex m-auto p-15'>
                                <img className="img-fluid" src={productSecFiveImg} alt='corechip' />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7 m-auto">
                            <div>
                                <h1 className="titleFive fw-500 primaryColor">DRYER</h1>
                                <p className="titleFour fw-500 black">Customization Options</p>
                                <p className="descriptionTwo fw-400 black">Choose From Our Wide Range Of Options To Find The Perfect Ceiling Cloth Hanger For Your Needs. We Offer Four Elegant Colors – Black, Brown, Silver, And Grey – Allowing You To Select A Dryer That Matches Your Home Decor.</p>
                                <p className="descriptionTwo fw-500 black">Additionally, Our Dryers Are Available In Four Different Sizes</p>
                                <h1 style={{ width: 'fit-content' }} className="descriptionThree fw-500 black"><span className="line">4 Feet</span><span className="line">5 Feet</span><span className="line">6 Feet</span><span>7 Feet</span></h1>
                                <p className="descriptionThree fw-400 black">Ensuring That You Find The Ideal Fit For Your Laundry Space</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer - Start */}
            <Footer />
            {/* Footer - End */}
        </>
    )
}
export default OurProducts;