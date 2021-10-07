import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch,} from "react-router-dom";
import {Header} from "./layout/Header";
import {ProductListPage} from "./productList/ProductListPage";
import {ProductPage} from "./product/ProductPage";
import {PageTitleProvider} from "./context/PageTitle";

function App() {
  return (
    <div>
      <PageTitleProvider>
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
      </PageTitleProvider>
    </div>
  );
}

export default App;
