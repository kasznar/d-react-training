import {ProductListActonTypes} from "./actonTypes";
import {Product} from "../../../api/products";

export interface FetchProductListSuccessAction {
    type: ProductListActonTypes.FETCH_SUCCESS;
    payload: Product[];
}

export const fetchProductListSuccess = (payload: Product[]) => ({
    type: ProductListActonTypes.FETCH_SUCCESS,
    payload
});