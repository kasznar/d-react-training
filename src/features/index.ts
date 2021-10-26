import {combineReducers} from "redux";
import {productListSlice} from "./productList/productListSlice";
import productSlice from "./product/productSlice";

export const rootReducer = combineReducers({
        productList: productListSlice,
        product: productSlice
})