import React, { FC, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../store";
import { closeLoginDialog, login } from "../userSlice";

interface State {
  email: string;
  password: string;
}

type InputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export const LoginDialog: FC = () => {
  const dispatch = useDispatch();
  const open = useAppSelector((state) => state.user.isLoginDialogOpen);
  const [values, setValues] = useState<State>({
    email: "",
    password: "",
  });

  const handleChange = (key: keyof State) => (event: InputEvent) => {
    setValues({ ...values, [key]: event.target.value });
  };

  const handleSubmit = () => {
    if (values.email.trim() && values.password.trim()) {
      if (values.password === "admin") {
        dispatch(login());
        dispatch(closeLoginDialog());
      }
    }
  };

  const onClose = () => {
    dispatch(closeLoginDialog());
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter your email and password</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          required
          value={values.email}
          onChange={handleChange("email")}
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          required
          value={values.password}
          onChange={handleChange("password")}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Login</Button>
      </DialogActions>
    </Dialog>
  );
};
