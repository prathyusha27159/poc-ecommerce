import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategory, fetchCategoryList, fetchProducts } from "../store/actions/index";

const useMenu = () => {
    const { cat } = useParams();
    const dispatch = useDispatch();

    const menuList = useSelector((state) => state.menuReducer.menus);

    useEffect(() => {
        dispatch(fetchCategory(cat));
    }, [dispatch, cat]);

    const onAllCategory = (cat) => {
        cat === "All" ? dispatch(fetchProducts()) : dispatch(fetchCategoryList(cat));
    };
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);


    const productData = useSelector((state) => state.productReducer.products);
    return [ onAllCategory, menuList, productData];

};

export default useMenu;