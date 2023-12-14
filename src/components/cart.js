import React, {useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navigation from "./nav";
import Footer from "./footer";
import closeBtn from '../assets/img/closeBtn.svg';
import productOneImage from '../assets/img/productSecOneImgOne.svg';  // Import the image
import productTwoImage from '../assets/img/productSecOneImgTwo.svg';  // Import the image
import { Link, } from "react-router-dom";


const Cart = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Smart Hanger', color: 'Black', size: '4 Feet', price: 10, quantity: 1, image: productOneImage, subtotal: 10 },
        { id: 2, name: 'Smart Hanger', color: 'Brown', size: '5 Feet', price: 20, quantity: 3, image: productTwoImage, subtotal: 60 },
    ]);
    const [totalItems, setTotalItems] = useState(4);
    const [subtotal, setSubtotal] = useState(70);
    const [deliveryCharges] = useState(10);
    const [discount] = useState(10);
    const [total, setTotal] = useState(70);

    useEffect(() => {
        updateTotals(products);
    }, [products]);

    const updateTotals = (updatedProducts) => {
        if (updatedProducts.length === 0) {
            setTotalItems(0);
            setSubtotal(0);
            setTotal(0);
            return;
        }

        const totalItems = updatedProducts.reduce((total, product) => total + product.quantity, 0);
        const subtotal = updatedProducts.reduce((total, product) => total + product.subtotal, 0);
        const total = subtotal + deliveryCharges - discount;

        setTotalItems(totalItems);
        setSubtotal(subtotal);
        setTotal(total);
    };

    const handleQuantityChange = (productId, newQuantity) => {
        const updatedProducts = products.map((product) =>
            product.id === productId
                ? { ...product, quantity: newQuantity, subtotal: product.price * newQuantity }
                : product
        );

        setProducts(updatedProducts);
    };

    const handleRemoveProduct = (productId) => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
    };

    const isCartEmpty = products.length === 0;
    return (
        <>
            {/* navbar-start */}
            <Navigation totalItems={totalItems} />
            {/* navbar-end */}
            {/* cartsection one - start */}
            <div className="container-fluid bgColor-5D7D86 cartSecOne d-flex justify-content-center align-items-center">
                <h1 className="titleOne fw-700 white text-uppercase">Cart</h1>
            </div>
            {/* cartsection one - end */}
            {/* cartsection two - start */}
            <div className="container-fluid py-50 cartSecTwo">
                <div className="container">
                    <div className="row row-gap">
                        <div className="col-lg-8 col-md-10 m-auto">
                            <div className="shopping-table">
                                {products.length > 0 && (
                                    <table className="text-center">
                                        <thead>
                                            <tr>
                                                <th className="descriptionThree fw-600 black">Image</th>
                                                <th className="descriptionThree fw-600 black">Name</th>
                                                <th className="descriptionThree fw-600 black">Price</th>
                                                <th className="descriptionThree fw-600 black">Quantity</th>
                                                <th className="descriptionThree fw-600 black">Subtotal</th>
                                                <th className="descriptionThree fw-600 black"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map((product) => (
                                                <tr key={product.id}>
                                                    <td>
                                                        <img src={product.image} alt={product.name} style={{ width: '50px' }} />
                                                    </td>
                                                    <td>
                                                        <p className="descriptionThree fw-600 black-232323 mb-0">{product.name}</p>
                                                        <p className="descriptionThree fw-400 black mb-0"><span className="color-828282">Color : </span>{product.color}</p>
                                                        <p className="descriptionThree fw-400 black mb-0"><span className="color-828282">Size : </span>{product.size}</p>
                                                    </td>
                                                    <td className="descriptionThree fw-500 black-232323">₹{product.price !== undefined ? product.price.toFixed(2) : 'N/A'}</td>
                                                    <td>
                                                        <div className="quantityControl bgColor-F2F2F2 m-auto">
                                                            <button className="b-none bgColor-F2F2F2" onClick={() => handleQuantityChange(product.id, Math.max(1, product.quantity - 1))}>-</button>
                                                            <span className="bgColor-F2F2F2 mb-0 descriptionThree fw-500 black">{product.quantity}</span>
                                                            <button className="b-none bgColor-F2F2F2" onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
                                                        </div>
                                                    </td>
                                                    <td className="descriptionThree fw-500 black-232323">₹{product.subtotal !== undefined ? product.subtotal.toFixed(2) : 'N/A'}</td>
                                                    <td>
                                                        <img className="closeBtn" onClick={() => this.handleRemoveProduct(product.id)} src={closeBtn} alt='closeBtn' />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                                <Link to="/ourproducts"><button className="text-uppercase btn mt-25 primaryColor fw-500 br-4 description">{isCartEmpty ? "Shop Now" : "Shop More"}</button></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-10 m-auto">
                            <div className="card p-15 br-4">
                                <h1 className="titleThree text-uppercase fw-500">Total Items<span className="primaryColor float-right">{totalItems}</span></h1>
                                <div className="py-2">
                                    <p className="fw-400 descriptionThree mb-8">Subtotal: <span className="float-right fw-600">₹{subtotal}</span></p>
                                    <p className="fw-400 descriptionThree mb-8">Delivery Charges: <span className="float-right fw-600">₹{deliveryCharges}</span></p>
                                    <p className="fw-400 descriptionThree mb-8">Discount: <span className="float-right fw-600 color-DA2E1F">₹{discount}</span></p>
                                </div>
                                <h2 className="titleFour fw-600 text-uppercase mb-20">Total<span className="float-right">₹{total}</span></h2>
                                <Link to={{
                                    pathname: '/checkout',
                                    state: {
                                        totalItems: totalItems,
                                        deliveryCharges: deliveryCharges,
                                        subtotal: subtotal,
                                        discount: discount,
                                        total: total,
                                    }
                                }}><input type='button' style={{ width: '100%' }} className="btn bgPrimaryColor white" value="Check Out" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* cartsection two - end */}
            {/* footer - start */}
            <Footer />
            {/* footer - end */}
        </>
    );
}
export default Cart;