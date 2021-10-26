import {UserActionTypes} from "./actionTypes";

export interface CloseLoginDialogAction {
    type: UserActionTypes.CLOSE_DIALOG
}

export const closeLoginDialog = () => ({
    type: UserActionTypes.CLOSE_DIALOG
})