import { Product } from "../../api/products";
import ProductListActions, { ProductListActionTypes } from "./actions";
import { RootState } from "../../store";

interface ProductListState {
  items: Product[];
}

const initialState: ProductListState = {
  items: [],
};

export const productListSlice = (
  state = initialState,
  action: ProductListActions
): ProductListState => {
  if (action.type === ProductListActionTypes.FETCH_SUCCESS) {
    return {
      items: action.payload,
    };
  }

  return state;
};

export const selectProductList = (state: RootState) => state.productList.items;
