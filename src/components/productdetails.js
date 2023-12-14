import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import Navigation from "./nav";
import productSecOneImgOne from '../assets/img/productSecOneImgOne.svg';
import productSecOneImgTwo from '../assets/img/productSecOneImgTwo.svg';
import productSecOneImgThree from '../assets/img/productSecOneImgThree.svg';
import productSecOneImgFour from '../assets/img/productSecOneImgFour.svg';

const ProductDetails = () => {
    // const history = useHistory(); // Get the history object for navigation
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(productSecOneImgOne);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]); // State to manage the cart
    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        const item = {
            name: "Product Name",
            price: 19000,
            size: selectedSize,
            color: selectedColor,
            quantity: quantity,
        };

        setCart([...cart, item]);

        // Pass item data as route parameters to the Cart page
        navigate(`/cart?productId=${encodeURIComponent(item.name)}&price=${item.price}&size=${encodeURIComponent(item.size)}&color=${encodeURIComponent(item.color)}&quantity=${item.quantity}`);
    };
    return (
        <>
            {/* navbar - start */}
            <Navigation />
            {/* navbar - end */}
            {/* product details section one - start */}
            <div className="container-fluid prodDetSecOne bgPrimaryColor d-flex justify-content-center align-items-center">
                <div className="container">
                    <h1 className="text-uppercase fw-600 titleTwo text-center white">Product Details</h1>
                </div>
            </div>
            {/* product details section one - end */}
            {/* product details section two - start */}
            <div className="container-fluid prodDetSecTwo py-50">
                <div className="container">
                    <div className="row row-gap">
                        <div className="col-lg-6 col-md-6">
                            <div className="card">
                                <p className="sale text-uppercase headerText fw-500 white bgColor-DA2E1F br-4">sale</p>
                                <div className="d-flex align-items-center" style={{ height: '100%' }} >
                                    <div style={{ width: '20%' }}>
                                        <div className="img-list" onClick={() => handleThumbnailClick(productSecOneImgOne)}>
                                            <img src={productSecOneImgOne} alt='corechip' />
                                        </div>
                                        <div className="img-list" onClick={() => handleThumbnailClick(productSecOneImgTwo)}>
                                            <img src={productSecOneImgTwo} alt='corechip' />
                                        </div>
                                        <div className="img-list" onClick={() => handleThumbnailClick(productSecOneImgThree)}>
                                            <img src={productSecOneImgThree} alt='corechip' />
                                        </div>
                                        <div className="img-list" onClick={() => handleThumbnailClick(productSecOneImgFour)}>
                                            <img src={productSecOneImgFour} alt='corechip' />
                                        </div>
                                    </div>
                                    <div style={{ width: '80%' }}>
                                        <img className="productImg" src={selectedImage} alt='corechip' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="inner">
                                <h1 className="titleThree fw-600 black-232323">Product Name</h1>
                                <p className="titleThree fw-500 color-DA2E1F"><span>&#8377;</span>19,000</p>
                                <ul>
                                    <li className="fw-400 descriptionTwo color-454444">User Friendly</li>
                                    <li className="fw-400 descriptionTwo color-454444">35 Kgs Capacity</li>
                                    <li className="fw-400 descriptionTwo color-454444">Different Lengths</li>
                                    <li className="fw-400 descriptionTwo color-454444">Power Consumption In Negligible</li>
                                    <li className="fw-400 descriptionTwo color-454444">Zero Maintenance</li>
                                    <li className="fw-400 descriptionTwo color-454444">1 Year Warranty</li>
                                </ul>
                                <div className="d-flex justify-content-between size">
                                    <div className="d-flex flex-column control mr-10">
                                        <h1 className="fw-400 descriptionThree color-7F7878">Size</h1>
                                        <div className="size-dropdown">
                                            <select value={selectedSize} onChange={handleSizeChange}>
                                                <option value="">Select Size</option>
                                                <option value="4feet">4 Feet</option>
                                                <option value="5feet">5 Feet</option>
                                                <option value="6feet">6 Feet</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column control ml-10">
                                        <h1 className="fw-400 descriptionThree color-7F7878">Color</h1>
                                        <div className="color-dropdown">
                                            <select value={selectedColor} onChange={handleColorChange}>
                                                <option value="">Select Color</option>
                                                <option value="red">Red</option>
                                                <option value="blue">Blue</option>
                                                <option value="green">Green</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Other content */}
                                <div className="d-flex justify-content-between mt-30 quantity">
                                    <div className="quantity-controls br-6">
                                        <button className="control-btn" onClick={handleDecrement}>-</button>
                                        <span className="quantity-value">{quantity}</span>
                                        <button className="control-btn" onClick={handleIncrement}>+</button>
                                    </div>
                                    <div className="add-cart mt-auto mb-auto">
                                        <button className="br-4 fw-500 descriptionOne text-uppercase primaryColor" onClick={handleAddToCart}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between mt-30 buynow-control">
                                    <button className="text-uppercase bgPrimaryColor white b-none br-4 description fw-500">buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* product details section two - start */}
            {/* footer - start */}
            <Footer />
            {/* footer - end */}
        </>
    )
}
export default ProductDetails;