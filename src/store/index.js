import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { handleCart, menuReducer, productReducer, singleProductCategorieReducer } from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const rootMultiReducers = combineReducers({

    productReducer: productReducer,
    menuReducer: menuReducer,
    singleProductCategorieReducer: singleProductCategorieReducer,
    handleCart: handleCart,

});
const store = createStore(rootMultiReducers, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
