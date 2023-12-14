import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from '../assets/img/logo.svg';

const Navigation = ({ totalItems }) => {
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);

    const handleServicesDropdown = () => {
        setShowServicesDropdown(!showServicesDropdown);
    };

    return (
        <>
            {/* navbar - start */}
            <div className="container-fluid" style={{ boxShadow: '0 4px 2px -2px rgba(0,0,0,.2)' }}>
                <Navbar className="container" expand="lg">
                    <Navbar.Brand href="/">
                        <img src={logo} alt="corintech" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <NavLink exact className="nav-link black-1B1919 fw-600 text-capitalize" to="/" activeClassName="active">
                                Home
                            </NavLink>
                            <NavLink className="nav-link black-1B1919 text-capitalize" to="/aboutus" activeClassName="active">
                                About Us
                            </NavLink>
                            <NavDropdown className="text-capitalize" title="Services" id="basic-nav-dropdown"
                                show={showServicesDropdown}
                                onMouseEnter={() => setShowServicesDropdown(true)}
                                onMouseLeave={() => setShowServicesDropdown(false)}
                                onClick={handleServicesDropdown}
                            >
                                <NavDropdown.Item>
                                    <NavLink className="nav-link black-1B1919 text-capitalize" to="/design" activeClassName="active">
                                        Design
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink className="nav-link black-1B1919 text-capitalize" to="/manufacture" activeClassName="active">
                                        Manufacture
                                    </NavLink>
                                </NavDropdown.Item>
                                {/* Add more NavDropdown.Items for other services */}
                            </NavDropdown>
                            <NavLink className="nav-link black-1B1919 text-capitalize" to="/ourproducts" activeClassName="active">
                                Our Products
                            </NavLink>
                            <NavLink className="nav-link black-1B1919 text-capitalize" to="/contactus" activeClassName="active">
                                Contact Us
                            </NavLink>
                        </Nav>
                        <Form inline>
                            <NavLink className="btn fw-500 text-capitalize br-6 white bgPrimaryColor" to="/signin">Sign In</NavLink>
                            <NavLink className="btn fw-500 text-capitalize br-6 primaryColor bgWhite" to="/signup">Sign Up</NavLink>
                            {/* <NavLink className="cart btn fw-500 text-capitalize br-6 primaryColor bgWhite" to="/cart">Cart</NavLink> */}
                            <NavLink className="btn cartBtn primaryColor br-20" to="/cart">
                                Cart
                                <span className="cart-icon">&#128722;</span>
                                <div className="d-flex justify-content-center align-items-center cart-badge bgColor-DA2E1F white fw-600 mb-0">{totalItems}</div>
                            </NavLink>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            {/* navbar - end */}
        </>
    );
};
export default Navigation;