import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CategoryPage = () => {
    const productData = useSelector((state) => state.productReducer.menuateorie);

    return (
        <div className="products">
            <div className="container">
                <div className="row">
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
    );
};

export default CategoryPage;