import React, { FC, useContext } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { Home } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { PageTitleContext } from "../../context/PageTitle";
import { UserContext } from "../../features/user/User";
import {useAppSelector} from "../../store/hooks";
import {selectProductName} from "../../features/product/productSlice";

export const Header: FC = () => {
  const history = useHistory();
  const title = useAppSelector(selectProductName)
  const { isLoggedIn, login, logout } = useContext(UserContext);

  function handleClick() {
    history.push("/");
  }

  let loginButton = (
    <Button color="inherit" onClick={login}>
      Login
    </Button>
  );
  if (isLoggedIn) {
    loginButton = (
      <Button color="inherit" onClick={logout}>
        Logout
      </Button>
    );
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="home"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <Home />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {loginButton}
      </Toolbar>
    </AppBar>
  );
};
