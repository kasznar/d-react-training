import { combineReducers } from "redux";
import productSlice from "./product/productSlice";
import { productListSlice } from "./productList/productListSlice";

export const rootReducer = combineReducers({
  product: productSlice,
  productList: productListSlice,
});
