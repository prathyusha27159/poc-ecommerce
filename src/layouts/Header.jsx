import React, { useState } from "react";
import amazonlogo from "../assests/images/amazon-logo-transparent.png";
import { Link } from "react-router-dom";
import { BiMap } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import LoginModule from "../components/LoginModule.jsx";

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    return (
        <>
            <div className="logo_maincontainer">
                <div className="flex-container">
                    <div className="flex-item-left">
                        <div className="logo">
                            <Link to="/">
                                {" "}
                                <img src={amazonlogo} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex-item-right">
                        <div className="flex-container">
                            <div>
                                <BiMap className="map_logo" />
                            </div>
                            <div>
                                <p>Deliver to</p>
                                <p>india</p>
                            </div>
                        </div>
                    </div>
                    <div className="search">
                        <form>
                            <div className="flex-container">
                                <div>
                                    <select className="select_box">
                                        <option>All</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="text" className="input" />
                                </div>
                                <div>
                                    <button type="button" className="search_btn">
                                        <BsSearch />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="sign_btn">
                        <button type="button" onClick={handleShow}>
                            <span>Sign in </span>
                            <AiFillCaretDown />
                        </button>
                    </div>
                    <div className="cart_btn">
                        <button type="button">
                            <BsCart className="cart_logo" />
                            <span>Cart</span>
                        </button>
                    </div>
                </div>
            </div>
            <LoginModule show={show} handleClose={handleClose} />
        </>
    );
};

export default Header;
