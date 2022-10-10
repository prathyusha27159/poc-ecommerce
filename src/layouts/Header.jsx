import React, { useState } from "react";
import amazonlogo from "../assests/images/amazon-logo-transparent.png";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AiFillCaretDown } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginModule from "../components/LoginModule.jsx";
import { useSelector } from "react-redux";
import Seach from "../components/Seach.jsx";

const Header = () => {

    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);


    const state = useSelector((state) => state.handleCart);

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="logo_maincontainer">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <div >
                            <div className="flex-container">
                                <div className="flex-item-left">
                                    <div className="logo">
                                        <Link to="/">
                                            {" "}
                                            <img src={amazonlogo} alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="search">
                                    <form>
                                        <div className="flex-container">
                                            <div>
                                                {/* <select onChange={(e) => onAllCategory(e.target.value)} className="select_box">
                                        <option>All</option>

                                        {menuList.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {item}
                                                </option>
                                            );
                                        })}

                                    </select> */}

                                            </div>
                                            <Seach />
                                        </div>
                                    </form>
                                </div>
                                <div className="sign_btn">
                                    {
                                        user ? (
                                            <>
                                                <button type="button" onClick={handleShow}>
                                                    <p>Hello , {user} </p>
                                                </button>
                                            </>
                                        ) :
                                            <>
                                                <button type="button" onClick={handleShow}>
                                                    <p>Hello , sign in <AiFillCaretDown /></p>
                                                </button>
                                            </>
                                    }
                                </div>
                                <div className="cart_btn">
                                    <button type="button" onClick={() => navigate("/cart")}>
                                        <BsCart className="cart_logo" />
                                        <span>Cart</span>({state.length})
                                    </button>
                                </div>
                            </div>
                        </div >
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <LoginModule show={show} handleClose={handleClose} setShow={setShow} />
        </>
    );
};
Header.propTypes = {
    onAllCategory: PropTypes.func
};
export default Header;
