import {AppThunk} from "../../../../store";
import {getProductById} from "../../../../api/products";
import {fetchProductSuccess} from "../fetchProductSuccess";

export const fetchProductThunk = (id: string): AppThunk => async (dispatch) => {
    const product = await getProductById(id);
    dispatch(fetchProductSuccess(product));
}