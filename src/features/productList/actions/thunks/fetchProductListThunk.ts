import {AppThunk} from "../../../../store";
import {getProducts} from "../../../../api/products";
import {fetchProductListSuccess} from "../fetchProductListSuccess";

export const fetchProductListThunk = ():AppThunk => async (dispatch)=>{
    const list = await getProducts();
    dispatch(fetchProductListSuccess(list))
}