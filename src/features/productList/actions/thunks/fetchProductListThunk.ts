import { AppThunk } from "../../../../store";
import { getProducts } from "../../../../api/products";
import { fetchProductListSuccess } from "../fetchProductListSuccess";

export const fetchProductListThunk = (): AppThunk => async (dispatch) => {
  const productList = await getProducts();
  dispatch(fetchProductListSuccess(productList));
};
