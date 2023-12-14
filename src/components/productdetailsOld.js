import React from "react";
import Footer from "./footer";
import Navigation from "./nav";
import productSecOneImgOne from '../assets/img/productSecOneImgOne.svg';
import productSecOneImgTwo from '../assets/img/productSecOneImgTwo.svg';
import productSecOneImgThree from '../assets/img/productSecOneImgThree.svg';
import productSecOneImgFour from '../assets/img/productSecOneImgFour.svg';

class productDetails extends React.Component {    
    componentDidMount() {        
        window.scrollTo(0, 0);
    }
    state = {
        selectedOption: '4 Feet', // select size state
        selectedColor: 'Black', // select color state
        quantity: 1, // Add quantity state
        selectedImage: productSecOneImgOne, // seleted product iamge
    };
    handleSelect = (e, type) => {
        if (type === 'size') {
            this.setState({ selectedOption: e.target.value });
        } else if (type === 'color') {
            const selectedColor = e.target.value;
            this.setState({ selectedColor }, () => {
                // Check if the selected color is brown
                if (selectedColor === 'brown') {
                    // Update images for brown color
                    this.setState({
                        selectedImage: productSecOneImgOne, // Update this with the appropriate brown image
                    });
                } else {
                    // For other colors, update images accordingly
                    // You can add similar logic for other colors as needed
                    // For now, let's assume other colors use the default images
                    this.setState({
                        selectedImage: productSecOneImgOne, // Update this with the appropriate default image
                    });
                }
            });
        }
    };
    handleIncrement = () => {
        this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
    };
    handleDecrement = () => {
        if (this.state.quantity > 1) {
            this.setState((prevState) => ({ quantity: prevState.quantity - 1 }));
        }
    };
    handleSelectingImage = (image) => {
        this.setState({ selectedImage: image });
    };
    render() {
        const dropdownOptions = [
            { value: '4Feet', label: '4 Feet' },
            { value: '5Feet', label: '5 Feet' },
            { value: '6Feet', label: '6 Feet' },
        ];
        const dropdownColors = [
            { value: 'black', label: 'Black', color: '#000000' },
            { value: 'brown', label: 'Brown', color: '#8B4513' },
            { value: 'gray', label: 'Gray', color: '#808080' },
            { value: 'silver', label: 'Silver', color: '#C0C0C0' },
        ];
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
                                            <div className="img-list" onClick={() => this.handleSelectingImage(productSecOneImgOne)}>
                                                <img src={productSecOneImgOne} alt='corechip' />
                                            </div>
                                            <div className="img-list" onClick={() => this.handleSelectingImage(productSecOneImgTwo)}>
                                                <img src={productSecOneImgTwo} alt='corechip' />
                                            </div>
                                            <div className="img-list" onClick={() => this.handleSelectingImage(productSecOneImgThree)}>
                                                <img src={productSecOneImgThree} alt='corechip' />
                                            </div>
                                            <div className="img-list" onClick={() => this.handleSelectingImage(productSecOneImgFour)}>
                                                <img src={productSecOneImgFour} alt='corechip' />
                                            </div>
                                        </div>
                                        <div style={{ width: '80%' }}>
                                            <img className="productImg" src={this.state.selectedImage} alt='corechip' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="inner">
                                    <h1 className="titleThree fw-600 black-232323">hello</h1>                                    
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
                                                <select onChange={(e) => this.handleSelect(e, 'size')} value={this.state.selectedOption}>
                                                    {dropdownOptions.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column control ml-10">
                                            <h1 className="fw-400 descriptionThree color-7F7878">Color</h1>
                                            <div className="color-dropdown">
                                                <select onChange={(e) => this.handleSelect(e, 'color')} value={this.state.selectedColor}>
                                                    {dropdownColors.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                            <span
                                                                className="color-indicator"
                                                                style={{
                                                                    backgroundColor: option.color,
                                                                    display: 'inline-block',
                                                                    width: '16px', // Adjust the size as needed
                                                                    height: '16px',
                                                                    borderRadius: '50%',
                                                                    marginLeft: '8px', // Adjust the spacing as needed
                                                                }}
                                                            ></span>
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-30 quantity">
                                        <div className="quantity-controls br-6">
                                           
                                        </div>
                                        <div className="add-cart mt-auto mb-auto">
                                            <button className="br-4 fw-500 descriptionOne text-uppercase primaryColor">Add to Cart</button>
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
                {/* product details section two - end */}
                {/* footer - start */}
                <Footer />
                {/* footer - end */}
            </>
        )
    }
}
export default productDetails;