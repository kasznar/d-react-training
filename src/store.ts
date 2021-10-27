import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/product/productSlice";
import productListSlice from "./features/productList/productListSlice";
import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    productList: productListSlice,
    user: userSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
