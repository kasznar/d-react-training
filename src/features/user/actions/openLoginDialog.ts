import {UserActionTypes} from "./actionTypes";

export interface OpenLoginDialogAction {
    type: UserActionTypes.OPEN_DIALOG
}

export const openLoginDialog = () => ({
    type: UserActionTypes.OPEN_DIALOG
})