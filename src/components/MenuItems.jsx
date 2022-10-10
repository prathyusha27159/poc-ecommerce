import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCategory } from "../store/actions/index";
import PropTypes from "prop-types";
import {  Link } from "react-router-dom";
import useMenu from "../custom-hooks/useMenu.jsx";


const MenuItems = () => {
    
    const [onAllCategory, menuList] = useMenu();
    
    return (
        <div className="category_list">
            <nav>
                <ul>
                    <li><Link to="/">All</Link></li>
                    {menuList && menuList.map((item, index) => {
                        console.log("item", item);
                        return (
                            <li key={index}>
                                <Link to={`/category/${item}`} onClick={(e) => onAllCategory(e.target.innerText)}>
                                    {item}
                                </Link>
                            </li>


                        );
                    })}
                </ul>
            </nav>
        </div >
    );
};

MenuItems.propTypes = {
    onAllCategory: PropTypes.func
};


export default MenuItems;