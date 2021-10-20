import { ProductActionTypes } from "./actionTypes";
import { FetchProductSuccessAction } from "./fetchProductSuccess";
import { FetchCommentsSuccessAction } from "./fetchCommentsSuccess";
import { ClearProductAction } from "./clearProduct";

export { ProductActionTypes };

type ProductAction =
  | FetchProductSuccessAction
  | FetchCommentsSuccessAction
  | ClearProductAction;

export default ProductAction;
