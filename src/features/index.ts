import { combineReducers } from "redux";
import productSlice from "./product/productSlice";
import { productListSlice } from "./productList/productListSlice";
import {userSlice} from "./user/userSlice";

export const rootReducer = combineReducers({
  product: productSlice,
  productList: productListSlice,
  user: userSlice,
});
