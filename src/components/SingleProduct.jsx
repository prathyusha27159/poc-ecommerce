import React, { useEffect} from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart, fetchSingleProductCategory } from "../store/actions/index";
// import PropTypes from "prop-types";


const SingleProduct = () => {
    const { id } = useParams();

    const singleProductData = useSelector((state) => state.singleProductCategorieReducer.singlecategories);
    const dispatch = useDispatch();
    const { image, title, price, description, category } = singleProductData;


    useEffect(() => {
        dispatch(fetchSingleProductCategory(id));
    }, [dispatch, id]);


    const addProduct = useCallback((singleProductData) => {
        dispatch(addCart(singleProductData));
    },[dispatch]);

    return (

        <div className="single_product">
            <div className="container">
                <div className="row">
                    <div className="col-md-5" >
                        <img src={image} alt="" className="sp_img" />
                    </div>
                    <div className="col-md-7">
                        <div className="sp_content">
                            <h2>{title}</h2>
                            <h5>{category}</h5>
                            <h4>Price: {price}</h4>
                            <p>{description}</p>

                        </div>
                        <div className="sp_btn">
                            <button type="button" className="sp_add" onClick={()=>addProduct(singleProductData)} >Add to Cart</button>
                           
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

// SingleProduct.propTypes = {
//     key: PropTypes.any,
// };
export default SingleProduct;
