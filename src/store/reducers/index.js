import * as actionTypes from "../actions/Types.js";

const initialMenuItemState = {
    menus: [],
    menu: {}
};

const menuReducer = (state = initialMenuItemState, action) => {
    switch (action.type) {
    case actionTypes.MENU_LIST:
        return {
            ...state,
            menus: action.payload,
        };
    default:
        return state;
    }
};
const initialProductState = {
    products: [],
    product: {},
    menuateorie: [],
    search: [],
    searchText: "",
};
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
    case actionTypes.GET_PRODUCTS:
        return {
            ...state,
            products: action.payload,
        };
    case actionTypes.SPECIAL_PRODUCT:
        return {
            ...state,
            menuateorie: action.payload,
        };
    default:
        return state;
    }
};


const initialSingleProductCategoryState = {
    singlecategories: [],
    singlecategorie: {}
};

const singleProductCategorieReducer = (state = initialSingleProductCategoryState, action) => {
    switch (action.type) {
    case actionTypes.SINGLE_PRODUCT:
        return {
            ...state,
            singlecategories: action.payload,
        };
    default:
        return state;
    }
};

const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
    case "ADDITEM": {
        // Check if Product is Already Exist
        const exist = state.find((x) => x.id === product.id);
        if (exist) {
            // Increase the Quantity
            return state.map((x) =>
                x.id === product.id ? { ...x, qty: x.qty + 1 } : x,
            );
        } else {
            const product = action.payload;
            return [
                ...state,
                {
                    ...product,
                    qty: 1,
                }
            ];
        }
    }
    case "DELITEM":
    {
        const exist1 = state.find((x) => x.id === product.id);
        if (exist1.qty === 1) {
            return state.filter((x) => x.id !== exist1.id);
        } else {
            return state.map((x) =>
                x.id === product.id ? { ...x, qty: x.qty - 1 } : x
            );
        }
    }
    default:
        return state;
    }

};
export { productReducer, menuReducer, singleProductCategorieReducer, handleCart };







