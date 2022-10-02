// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../store/actions/index";

// const useCustom = () => {
//     const productData = useSelector((state) => state.productReducer.products);
//     console.log("productData", productData);
//     const dispatch = useDispatch(); 

//     useEffect(() => {
//         dispatch(fetchProducts);
//     }, [ dispatch]);
//     return [productData];
// };

// export default useCustom;