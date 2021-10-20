import UserActions, {UserActionTypes} from "./actions";

export interface UserSliceState {
    isLoginDialogOpen: boolean;
    isLoggedIn: boolean;
}

const initialState: UserSliceState = {
    isLoggedIn: false,
    isLoginDialogOpen: false,
}

export const userSlice = (state = initialState, action: UserActions): UserSliceState => {
    switch (action.type) {
        case UserActionTypes.OPEN_DIALOG: {
            return {
                ...state,
                isLoginDialogOpen: true,
            }
        }
        case UserActionTypes.CLOSE_DIALOG: {
            return {
                ...state,
                isLoginDialogOpen: false,
            }
        }
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
        default:
            return state;
    }
}