import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../store/actions/index";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const MenuItems = ({onAllCategory}) => {
    const menuList = useSelector((state) => state.menuReducer.menus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch]);



    return (
        <div className="category_list">
            <nav>
                <ul>
                    {menuList && menuList.map((item, index) => {
                        return (
                            <li  key={index}>
                                <Link  onClick={onAllCategory}>
                                    {item}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                {/* <select onChange={(e) =>onAllCategory(e.target.value)}>
                    <option>All</option>
                    
                    {menuList.map((item, index) => {
                        return (
                            <option key={index}>
                                {item}
                            </option>
                        );
                    })}
                    
                </select> */}
            </nav>
        </div>
    );
};

MenuItems.propTypes = {
    onAllCategory:PropTypes.func
};


export default MenuItems;