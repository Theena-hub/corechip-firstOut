import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "./nav";
import Footer from "./footer";

function SignIn() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const history = useNavigate();
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:1234/user_login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({ username: userName, password }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Failed to log in');
                return;
            }
            const tokenData = await response.json();
            if (tokenData.status === 'success') {
                history('/ourproducts');
            } else {
                setErrorMessage(tokenData.message || 'Failed to log in');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <>
            {/* navbar - start */}
            <Navigation />
            {/* navbar - end */}
            {/* sign section start */}
            <div className="container-fluid signIn bgPrimaryColor d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="card py-30 px-40 br-15 m-auto b-none">
                        <h1 className="titleFour text-uppercase white text-center fw-600">SignIn</h1>
                        {errorMessage && <div className="white text-center bg-danger">
                            {errorMessage}
                        </div>}
                        <form className="form-group" >
                            <div className="d-flex flex-column my-4">
                                <label className="descripionOne fw-500 white text-uppercase">Username</label>
                                <input className="form-control fw-600 text-uppercase mr-2" name="name" type="text" placeholder="enter username" required onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="d-flex flex-column my-4">
                                <label className="descripionOne fw-500 white text-uppercase">Password</label>
                                <input className="form-control text-uppercase fw-600 mr-2" name="password" type="password" placeholder="enter password" required onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button className="btn d-flex fw-600 text-uppercase mt-20 bgPrimaryColor m-auto" onClick={handleLogin}>SignIn</button>
                        </form>
                        <Link to="/signup"><p className="mb-0 text-uppercase descriptionThree fw-500 text-center white mt-10">Click here to Register</p></Link>
                    </div>
                </div>
            </div>
            {/* sign section end */}
            {/* footer - start */}
            <Footer />
            {/* footer - end */}
        </>
    );
}
export default SignIn;