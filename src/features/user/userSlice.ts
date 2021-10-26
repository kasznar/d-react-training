import UserActions from "./actions";
import {UserActionTypes} from "./actions/actionTypes";


export interface UserState {
    isLoggedIn: boolean;
    isLoginDialogOpen: boolean;
}

const initialState: UserState = {
    isLoggedIn: false,
    isLoginDialogOpen: false,
}


export const userSlice = (state = initialState, action: UserActions): UserState => {
    switch (action.type) {
        case UserActionTypes.LOGIN: {
            return {
                ...state,
                isLoggedIn: true
            }
        }
        case UserActionTypes.LOGOUT: {
            return {
                ...state,
                isLoggedIn: false
            }
        }
        case UserActionTypes.OPEN_DIALOG: {
            return {
                ...state,
                isLoginDialogOpen: true
            }

        }
        case UserActionTypes.CLOSE_DIALOG: {
            return {
                ...state,
                isLoginDialogOpen: false
            }

        }
        default:
            return state;
    }
}