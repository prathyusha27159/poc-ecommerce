import  {combineReducers, createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {  menuReducer, productReducer, rootReducer } from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

// import {rootReducer, productReducer, menuReducer} from "../store/reducers/index.js";

const rootMultiReducers = combineReducers({
    rootReducer: rootReducer,
    productReducer: productReducer,
    menuReducer: menuReducer,
    
});
// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
// const store = createStore(rootMultiReducers, composeEnhancers(applyMiddleware(logger, thunk)));
const store = createStore (rootMultiReducers, composeWithDevTools(applyMiddleware(logger, thunk)) );

export default store;
