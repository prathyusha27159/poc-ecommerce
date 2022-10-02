
import React, { useEffect } from "react";
// import { useDispatch, useSelector} from "react-redux";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
// import useCustom from "../../custom-hooks/Custom.jsx";
import { fetchProducts, fetchCategoryList } from "../../store/actions/index.js";
import BannerSection from "../BannerSection.jsx";
import MenuItems from "../MenuItems.jsx";

const ProductDetails = () => {
    const productData = useSelector((state) => state.productReducer.products);
    // const [catgory, setCatgory] = useState("All");
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(fetchProducts());
    }, [ dispatch]);

    const onAllCategory =  (cat) => {
        cat === "All" ? dispatch(fetchProducts()) : dispatch(fetchCategoryList(cat));
    };

    return (
        <>
            <MenuItems onAllCategory={onAllCategory}/>
            <BannerSection/>
            <div className="products">
                <div className="container">
                    <div className="row">
                        {productData.map((item) => {
                            return (
                                <div className="col-md-3" key={item.id}>
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
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
