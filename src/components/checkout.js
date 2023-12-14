import React from "react";
import Footer from "./footer";
import Navigation from "./nav";
const CheckOut = () => {
    const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
        "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
        "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangan", "Tripur",
        "Uttar Prades", "Uttarakhan", "West Bengal", "Others"];

    return (

        <>
            {/* navbar - start */}
            < Navigation />
            {/* navbar - end */}
            {/* cartsection one - start */}
            <div className="container-fluid bgColor-5D7D86 checkoutSecOne d-flex justify-content-center align-items-center">
                <h1 className="titleOne fw-700 white text-uppercase">CheckOut</h1>
            </div>
            {/* cartsection one - end */}
            {/* cartsection two - start */}
            <div className="container-fluid py-50 cartSecTwo">
                <div className="container">
                    <form className="form-group">
                        <div className="row row-gap">
                            <div className="col-lg-8 col-md-10 m-auto">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="py-2">
                                            <label for=''>Name<span className="required-marker">*</span></label>
                                            <input type="text" className="form-control" placeholder="Enter the Full Name" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="py-2">
                                            <label for=''>Contact<span className="required-marker">*</span></label>
                                            <input type="text" className="form-control" placeholder="Enter the 10 Digit Number" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="py-2">
                                            <label for=''>Email ID<span className="required-marker">*</span></label>
                                            <input type="text" className="form-control" placeholder="Enter the Email Id" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="py-2">
                                            <label for=''>Pin Code<span className="required-marker">*</span></label>
                                            <input type="text" className="form-control" placeholder="Enter the Pin Code" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="py-2">
                                            <label for=''>Address<span className="required-marker">*</span></label>
                                            <textarea className="form-control" rows={3} required></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="py-2">
                                            <label htmlFor="state">State<span className="required-marker">*</span></label>
                                            <select id="state" className="form-control" required>
                                                <option value="" disabled selected>Select State</option>
                                                {states.map((state, index) => (
                                                    <option key={index} value={state}>{state}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="py-2">
                                            <label htmlFor="district">District<span className="required-marker">*</span></label>
                                            <input type="text" className="form-control" placeholder='Enter the District' required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="py-2">
                                            <label htmlFor="city">City<span className="required-marker">*</span></label>
                                            <input type="text" className="form-control" placeholder='Enter the City' required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="py-2">
                                            <label for=''>Landmark<span className="required-marker">*</span></label>
                                            <input type='text' className='form-control' placeholder='Enter Landmark' required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-10 m-auto">
                                <div className="card p-15 br-4">
                                    <h1 className="titleThree text-uppercase fw-500">
                                        Total Items<span className="primaryColor float-right">3</span>
                                    </h1>
                                    <div className="py-2">
                                        <p className="fw-400 descriptionThree mb-8">Subtotal: <span className="float-right fw-600">₹ 100</span></p>
                                        <p className="fw-400 descriptionThree mb-8">Delivery Charges: <span className="float-right fw-600">₹ 20</span></p>
                                        <p className="fw-400 descriptionThree mb-8">Discount: <span className="float-right fw-600 color-DA2E1F">₹ 20</span></p>
                                    </div>
                                    <h2 className="titleFour fw-600 text-uppercase mb-20">Total<span className="float-right">₹ 80</span></h2>
                                    <input type='button' className="btn bgPrimaryColor white" value="Place Order" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* cartsection two - end */}
            {/* footer - start */}
            <Footer />
            {/* footer - end */}
        </>
    )
}
export default CheckOut;