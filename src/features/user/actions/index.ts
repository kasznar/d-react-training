import {LoginAction} from "./login";
import {LogoutAction} from "./logout";
import {CloseLoginDialogAction} from "./closeLoginDialog";
import {OpenLoginDialogAction} from "./openLoginDialog";

type UserActions = LoginAction | LogoutAction | CloseLoginDialogAction | OpenLoginDialogAction;

export default UserActions;