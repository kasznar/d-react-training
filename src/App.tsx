import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Header } from "./layout/Header";
import { ProductListPage } from "./features/productList/components/ProductListPage";
import { PageTitleProvider } from "./context/PageTitle";
import { UserProvider } from "./context/User";
import {ProductPage} from "./features/product/components/ProductPage";

const Provider: FC = ({ children }) => (
  <PageTitleProvider>
    <UserProvider>{children}</UserProvider>
  </PageTitleProvider>
);

function App() {
  return (
    <Provider>
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
    </Provider>
  );
}

export default App;
