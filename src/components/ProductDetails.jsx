
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BannerSection from "./BannerSection.jsx";
import MenuItems from "./MenuItems.jsx";

const ProductDetails = () => {

    const productData = useSelector((state) => state.productReducer.products);

    return (
        <>
            <MenuItems />
            <BannerSection />
            <h2 className="text-center">products </h2>
            <div className="products">
                <div className="container">
                    <div className="row mt-4">
                        {productData && productData.map((item) => {
                            return (
                                <>
                                    <div className="col-md-3 mt-4" key={item.id}>
                                        <div className="product_text">
                                            <Link to={`/single/${item.id}`} className="product_link">
                                                <h2 className="product_title">{item.title}</h2>
                                                {/* <p>{item.description}</p>  */}
                                                <p>{item.category}</p>
                                                <div className="product_img">
                                                    <img className="product_imgtag" src={item.image} alt="" />
                                                </div>
                                                <h4>{item.price}</h4>
                                                <p>
                                                    {" "}
                                                    <AiOutlineStar />
                                                    {item.rating.rate}
                                                </p>
                                                Count: <span>{item.rating.count}</span>
                                            </Link>
                                        </div>
                                    </div>

                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
