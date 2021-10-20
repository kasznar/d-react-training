import { ProductListActionTypes } from "./actionTypes";
import { Product } from "../../../api/products";

export interface FetchProductListSuccessAction {
  type: ProductListActionTypes.FETCH_SUCCESS;
  payload: Product[];
}

export const fetchProductListSuccess = (list: Product[]) => ({
  type: ProductListActionTypes.FETCH_SUCCESS,
  payload: list,
});
