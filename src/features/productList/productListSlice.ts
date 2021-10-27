import { getProducts, Product } from "../../api/products";
import { RootState } from "../../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ProductListState {
  items: Product[];
}

const initialState: ProductListState = {
  items: [],
};

export const fetchProductListThunk = createAsyncThunk(
  "productList/fetchProducts",
  async () => {
    return await getProducts();
  }
);

const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProductListThunk.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default productListSlice.reducer;

export const selectProductList = (state: RootState) => state.productList.items;
