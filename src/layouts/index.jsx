import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import "../assests/styles/footerStyle.scss";
import "../assests/styles/headerStyle.scss";
import "../assests/styles/productDeteil.scss";
import "../assests/styles/categoryPage.scss";
import PropTypes from "prop-types";


const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </div>
    );
};
Layout.propTypes = {
    children: PropTypes.any
};

export default Layout;
