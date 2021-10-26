import {combineReducers} from "redux";
import {productListSlice} from "./productList/productListSlice";
import productSlice from "./product/productSlice";
import {userSlice} from "./user/userSlice";

export const rootReducer = combineReducers({
        productList: productListSlice,
        product: productSlice,
        user: userSlice
})