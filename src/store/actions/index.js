import { USER_ADDED, GET_PRODUCTS, MENU_LIST, SINGLE_PRODUCT } from "../../store/actions/Types.js";
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





export const userAdded = (user) => {
    return {
        type: USER_ADDED,
        payload: user
    };
};

//  specific products

export const categoryType = (categorie) => {
    return {
        type: SINGLE_PRODUCT,
        payload: categorie
    };
};

export function fetchCategoryList(cat) {

    return (dispatch) => {
        ServicesApi.getSpecProducts(cat)

            .then(response => {

                dispatch(categoryType(response.data));
                console.log("cat", response);
            })
            .catch(error => {
                console.log(error);
            });

    };
}
