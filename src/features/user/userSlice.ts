import { createSlice } from "@reduxjs/toolkit";

export interface UserSliceState {
  isLoginDialogOpen: boolean;
  isLoggedIn: boolean;
}

const initialState: UserSliceState = {
  isLoggedIn: false,
  isLoginDialogOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    openLoginDialog(state) {
      state.isLoginDialogOpen = true;
    },
    closeLoginDialog(state) {
      state.isLoginDialogOpen = false;
    },
  },
});

export const { logout, login, openLoginDialog, closeLoginDialog } =
  userSlice.actions;

export default userSlice.reducer;
