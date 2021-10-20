import {UserActionTypes} from "./actionTypes";

export interface LogoutAction {
    type: UserActionTypes.LOGOUT;
}

export const logout = (): LogoutAction => ({
    type: UserActionTypes.LOGOUT
})