import {Comment} from "../../api/comments";
import {Product} from "../../api/products";
import ProductAction from "./actions";
import {ProductActionTypes} from "./actions/actionTypes";

interface ProductState {
    comments: Comment[];
    info: Product | null;
}

const initialState: ProductState = {
    comments: [],
    info: null,
}

export default function productSlice(state = initialState, action: ProductAction): ProductState {
    switch (action.type) {
        case ProductActionTypes.FETCH_COMMENTS_SUCCESS: {
            return {
                ...state,
                comments: action.payload
            }
        }
        case ProductActionTypes.FETCH_PRODUCT_SUCCESS: {
            return {
                ...state,
                info: action.payload
            }
        }
        case ProductActionTypes.CLEAR: {
            return initialState;
        }
        default:
            return state;
    }

}