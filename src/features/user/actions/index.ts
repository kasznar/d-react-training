import {LoginAction, login} from "./login";
import {LogoutAction, logout} from "./logout";
import {OpenDialogAction, openLoginDialog} from "./openLoginDialog";
import {CloseDialogAction, closeLoginDialog} from "./closeLoginDialog";
import {UserActionTypes} from "./actionTypes";

export {UserActionTypes, logout, login, openLoginDialog, closeLoginDialog}


type UserActions = LoginAction | LogoutAction | OpenDialogAction | CloseDialogAction;

export default UserActions;