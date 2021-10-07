import React, {FC, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";

interface State {
    email: string,
    password: string,
}

type InputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;


export const LoginDialog: FC<{open: boolean, onClose: ()=>void}> = ({open, onClose}) => {
    const [values, setValues] = useState<State>({
        email: '',
        password: '',
    })

    const handleChange = (key: keyof State) => (event: InputEvent) => {
        setValues({...values, [key]: event.target.value})
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                {values.email} - {values.password}
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
                <Button>Login</Button>
            </DialogActions>
        </Dialog>
    )
}