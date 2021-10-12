import React, { FC, useContext } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { Home } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { PageTitleContext } from "../context/PageTitle";

export const Header: FC = () => {
  const history = useHistory();
  const { title } = useContext(PageTitleContext);

  function handleClick() {
    history.push("/");
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
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
