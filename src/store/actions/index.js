import { GET_PRODUCTS, MENU_LIST, SPECIAL_PRODUCT, SINGLE_PRODUCT} from "../../store/actions/Types.js";
import ServicesApi from "../../services/ServicesApi.js";



/// menu items
export function fetchUserRequestGet(category) {
    return {
        type: MENU_LIST,
        payload: category
    };
}

export function fetchCategory() {
    return (dispatch) => {
        ServicesApi.getMenuCategories()
            .then(res => {
                dispatch(fetchUserRequestGet(res.data));

            })
            .catch(error => {
                console.log(error);
            });

    };
}

/// Product details
export function fetchProductsGet(product) {
    return {
        type: GET_PRODUCTS,
        payload: product
    };
}

export function fetchProducts() {
    return (dispatch) => {
        ServicesApi.getProducts()
            .then(res => {
                dispatch(fetchProductsGet(res.data));

            })
            .catch(error => {
                console.log(error);
            });

    };
}
//  special products

export const categoryType = (categorie) => {
    return {
        type: SPECIAL_PRODUCT,
        payload: categorie
    };
};

export function fetchCategoryList(cat) {
    return (dispatch) => {
        ServicesApi.getSpecProducts(cat)
            .then(response => {
                dispatch(categoryType(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    };
}

//// single product /////

export const singleProductType = (onecategory) => {
    return {
        type: SINGLE_PRODUCT,
        payload: onecategory
    };
};

export function fetchSingleProductCategory(id) {

    return (dispatch) => {
        ServicesApi.getSingleProduct(id)

            .then(response => {

                dispatch(singleProductType(response.data));
            })
            .catch(error => {
                console.log(error);
            });

    };
}


/// add item from cart/////
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    };
};


// For Delete Item From Cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    };
};





