import {ProductActionTypes} from "./actionTypes";
import {Product} from "../../../api/products";

export interface FetchProductSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCT_SUCCESS;
    payload: Product;
}

export const fetchProductSuccess = (payload: Product) => {
    return {
        type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
        payload
    }
}