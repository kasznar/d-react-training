import {FetchProductSuccessAction} from "./fetchProductSuccess";
import {FetchCommentsSuccessAction} from "./fetchCommentsSuccess";
import {ClearProductAction} from "./clearProduct";


type ProductAction = FetchProductSuccessAction | FetchCommentsSuccessAction | ClearProductAction;

export default ProductAction;