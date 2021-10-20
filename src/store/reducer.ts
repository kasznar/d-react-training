import { combineReducers } from 'redux'
import productSlice from "../features/product/productSlice";

const rootReducer = combineReducers({
    product: productSlice,
})

export default rootReducer
