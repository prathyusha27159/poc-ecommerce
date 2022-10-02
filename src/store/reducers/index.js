// import { GET_PRODUCTS, USER_ADDED, MENU_LIST } from "../../store/actions/Types.js";
import * as actionTypes from "../actions/Types.js";

const initialState = {
    addUser: [
        { username: "Bob", email: "admin@gmail.com", password: "admin" },
        { username: "Bob1", email: "admin1@gmail.com", password: "admin1" },
    ],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.USER_ADDED:
        console.log(state);
        return {
            addUser: action.payload,
        };
    default:
        return state;
    }
};

const initialMenuItemState = {
    menus: [],
    menu:{}
};

const menuReducer = (state = initialMenuItemState, action) => {
    switch (action.type) {
    case actionTypes.MENU_LIST:
        return{
            ...state,
            menus: action.payload,
        };
    default:
        return state;
    }
};

// const initialCategoryState = {
//     categories: [],
//     categorie:{}
// };

// const categorieReducer = (state = initialCategoryState, action) => {
//     switch (action.type) {       
//     case actionTypes.SINGLE_PRODUCT:
//         return{
//             ...state,
//             categories: action.payload,
//         };
//     default:
//         return state;
//     }
// };

const initialProductState = {
    products: [],
    product: {},
};

const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
    case actionTypes.GET_PRODUCTS:
        return {
            ...state,
            products: action.payload,
        };
    case actionTypes.SINGLE_PRODUCT:
        return {
            ...state,
            products: action.payload,
        };


    default:
        return state;
    }
};

export { rootReducer, productReducer, menuReducer };







