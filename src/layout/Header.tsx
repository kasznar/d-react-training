import React, { FC } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { Home } from "@mui/icons-material";
import {useHistory} from "react-router-dom";

export const Header: FC = () => {
  const history = useHistory();

  function handleClick() {
    history.push('/');
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
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
