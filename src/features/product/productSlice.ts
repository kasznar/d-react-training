import { Comment, getComments, postComments } from "../../api/comments";
import { getProductById, Product } from "../../api/products";
import { RootState } from "../../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ProductState {
  comments: Comment[];
  info: Product | null;
}

const initialState: ProductState = {
  comments: [],
  info: null,
};

export const fetchProductThunk = createAsyncThunk(
  "product/fetchProduct",
  async (id: string) => {
    return await getProductById(id);
  }
);
export const fetchCommentsThunk = createAsyncThunk(
  "product/fetchComments",
  async (id: string) => {
    return await getComments(id);
  }
);
export const fetchAddCommentThunk = createAsyncThunk(
  "product/fetchAddComment",
  async (newComment: Comment, thunkAPI) => {
    await postComments(newComment);
    thunkAPI.dispatch(fetchCommentsThunk(newComment.productId));
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearProduct(state) {
      state = initialState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductThunk.fulfilled, (state, action) => {
        state.info = action.payload;
      })
      .addCase(fetchCommentsThunk.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  },
});

export const { clearProduct } = productSlice.actions;
export default productSlice.reducer;

export const selectProductName = (state: RootState) =>
  state.product.info?.name ?? null;
