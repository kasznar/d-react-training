import {ProductActionTypes} from "./actionTypes";

export interface ClearProductAction {
    type: ProductActionTypes.CLEAR
}

export const clearProduct = (): ClearProductAction => ({
    type: ProductActionTypes.CLEAR
})