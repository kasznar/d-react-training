import {UserActionTypes} from "./actionTypes";

export interface OpenDialogAction {
    type: UserActionTypes.OPEN_DIALOG;
}

export const openLoginDialog = (): OpenDialogAction => ({
    type: UserActionTypes.OPEN_DIALOG
})