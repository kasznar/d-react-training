import {Product} from "../../api/products";
import ProductListActions from "./actions";
import {ProductListActonTypes} from "./actions/actonTypes";
import {RootState} from "../../store";


interface ProductListState {
    items: Product[];
}

const initialState: ProductListState = {
    items: []
}

export const productListSlice = (state = initialState, action: ProductListActions): ProductListState => {
    if (action.type === ProductListActonTypes.FETCH_SUCCESS) {
        return {
            ...state,
            items: action.payload
        }
    }

    return state;
}

export const selectProductList = (state: RootState) => state.productList.items;