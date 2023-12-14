import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "./nav";
import Footer from "./footer";
const SignUp = () => {
    const history = useNavigate();
    useEffect(() => {
        // when this page is called from another page, scroll to the top
        window.scrollTo(0, 0);
    }, []);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        mobileNo: "",
    });
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:1234/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setSubmissionStatus("success");
                setTimeout(() => {
                    history('/signin')
                }, 2000);

            } else {
                setSubmissionStatus("failed");
            }
        }
        catch (error) {
            setSubmissionStatus("failed")
        }
    }
    return (
        <>
            {/* navbar - start */}
            <Navigation />
            {/* navbar - end */}
            {/* sign section - start */}
            <div className="container-fluid signIn bgPrimaryColor d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="card py-30 px-40 br-15 m-auto b-none">
                        <h1 className="titleFour text-uppercase white text-center fw-600">Signup</h1>
                        <form className="form-group" onSubmit={handleFormSubmit}>
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-lg-6">
                                    <div className="d-flex flex-column my-4">
                                        <label className="descripionOne fw-500 white text-uppercase">Username</label>
                                        <input className="form-control fw-600 text-uppercase mr-2" name="name" type="text" placeholder="enter username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex flex-column my-4">
                                        <label className="descripionOne fw-500 white text-uppercase">Email</label>
                                        <input className="form-control fw-600 text-uppercase mr-2" name="email" type="text" placeholder="enter email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex flex-column my-4">
                                        <label className="descripionOne fw-500 white text-uppercase">mobile number</label>
                                        <input className="form-control fw-600 text-uppercase mr-2" name="mobile" type="text" placeholder="enter mobile number" value={formData.mobileNo} onChange={(e) => setFormData({ ...formData, mobileNo: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex flex-column my-4">
                                        <label className="descripionOne fw-500 white text-uppercase">Password</label>
                                        <input className="form-control text-uppercase fw-600 mr-2" name="password" type="password" placeholder="enter password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
                                    </div>
                                </div>
                                <button className="width-fit-content btn d-flex fw-600 text-uppercase mt-20 bgPrimaryColor m-auto">SignUp</button>
                            </div>
                        </form>
                        {submissionStatus === "success" && (
                            <p className="titleFour fw-600 primaryColor text-center">Successfully Registered!</p>
                        )}
                        {submissionStatus === "failed" && (
                            <p className="titleFour fw-600 color-DA2E1F text-center">Registered Failed</p>
                        )}

                        <Link to="/signin"><p className="mb-0 text-uppercase descriptionThree fw-500 text-center white mt-10">Click here to SignIn</p></Link>
                    </div>
                </div>
            </div>
            {/* sign section - end */}
            {/* footer - start */}
            <Footer />
            {/* footer - end */}
        </>
    )
}
export default SignUp;