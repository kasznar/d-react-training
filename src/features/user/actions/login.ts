import {UserActionTypes} from "./actionTypes";

export interface LoginAction {
    type: UserActionTypes.LOGIN
}

export const login = () => ({
    type: UserActionTypes.LOGIN
})