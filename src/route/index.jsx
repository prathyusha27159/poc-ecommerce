import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/index.jsx";
import Error404 from "../pages/404/index.jsx";
import SingleProductPage from "../pages/singleCategory/index.jsx";
import CartPage from "../pages/cart/index.jsx";
import LoginModule from "../components/LoginModule.jsx";
import FilterIndex from "../pages/filterData/index.js";
import CheckoutPage from "../pages/checkout/index.jsx";
import Categoryindex from "../pages/category/index.jsx";

const RouterIndex = () => {
    return (
        <div className="RouterIndex">
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="*" element={<Error404 />} />
                <Route path="/single/:id" element={<SingleProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<LoginModule />} />
                <Route path="/checkout" element={<CheckoutPage/>} />
                <Route path="/category/:cat" element={<Categoryindex/>}/>
                <Route path="/search/:search" element={<FilterIndex/>}/>

            </Routes>
        </div>
    );
};
export default RouterIndex;
