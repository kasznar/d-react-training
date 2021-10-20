import { Dispatch } from "redux";
import { fetchProductSuccess } from "../fetchProductSuccess";
import { AppThunk } from "../../../../store";
import { getProductById } from "../../../../api/products";

export const fetchProductThunk =
  (id: string): AppThunk =>
  async (dispatch: Dispatch) => {
    const product = await getProductById(id);
    dispatch(fetchProductSuccess(product));
  };
