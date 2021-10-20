import React, {FC} from "react";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {Home} from "@mui/icons-material";
import {useHistory} from "react-router-dom";
import {selectProductName} from "../../features/product/productSlice";
import {useAppSelector} from "../../store";
import {useDispatch} from "react-redux";
import {logout, openLoginDialog} from "../../features/user/actions";

export const Header: FC = () => {
  const history = useHistory();
  const title = useAppSelector(selectProductName);
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);
  const dispatch = useDispatch();

  function handleClick() {
    history.push("/");
  }

  let loginButton = (
    <Button color="inherit" onClick={()=> dispatch(openLoginDialog())}>
      Login
    </Button>
  );
  if (isLoggedIn) {
    loginButton = (
      <Button color="inherit" onClick={()=> dispatch(logout())}>
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
