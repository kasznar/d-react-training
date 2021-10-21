import {combineReducers} from "redux";
import {productListSlice} from "./productList/productListSlice";

export const rootReducer = combineReducers({
        productList: productListSlice
})