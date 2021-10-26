import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch,} from "react-router-dom";
import {ProductListPage} from "./features/productList/components/ProductListPage";
import {ProductPage} from "./features/product/components/ProductPage";
import {LoginDialog} from "./features/user/components/LoginDialog";
import {Header} from "./components/layout/Header";

function App() {
  return (
      <Router>
        <LoginDialog/>
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
  );
}

export default App;
