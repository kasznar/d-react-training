import React, { useContext } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { PageTitleContext } from "../context/PageTitle";
import { UserContext } from "../context/User";

export function Header() {
  const history = useHistory();
  const { title } = useContext(PageTitleContext);
  const { isLoggedIn, login, logout } = useContext(UserContext);

  function handleClick() {
    history.push("/");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <Home />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {isLoggedIn ? (
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={login}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
