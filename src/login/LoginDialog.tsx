import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FC, useState } from "react";

interface State {
  email: string;
  password: string;
}

export const LoginDialog: FC<{
  open: boolean;
  onClose: () => void;
  onSubmit: (email: string, password: string) => void;
}> = ({ open, onClose, onSubmit }) => {
  const [values, setValues] = useState<State>({
    email: "",
    password: "",
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = () => {
    if (values.email.trim() && values.password.trim()) {
      onSubmit(values.email, values.password);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
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
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
