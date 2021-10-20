import {UserActionTypes} from "./actionTypes";

export interface CloseDialogAction {
    type: UserActionTypes.CLOSE_DIALOG;
}

export const closeLoginDialog = (): CloseDialogAction => ({
    type: UserActionTypes.CLOSE_DIALOG
})