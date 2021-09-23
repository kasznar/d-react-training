import React from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { Header } from "./layout/Header";
import { ProductListPage } from "./productList/ProductListPage";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import ProductPage from "./product/ProductPage";
import { PageTitleProvider } from "./context/PageTitle";
import { UserProvider } from "./context/User";

function App() {
  return (
    <>
      <CssBaseline />
      <PageTitleProvider>
        <UserProvider>
          <Router>
            <Header />
            <Switch>
              <Route path="/product-list">
                <ProductListPage />
              </Route>
              <Route path="/product/:productId">
                <ProductPage />
              </Route>
              <Redirect to="/product-list" />
            </Switch>
          </Router>
        </UserProvider>
      </PageTitleProvider>
    </>
  );
}

export default App;
