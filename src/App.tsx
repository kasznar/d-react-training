import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ProductListPage } from "./features/productList/components/ProductListPage";
import { ProductPage } from "./features/product/components/ProductPage";
import { PageTitleProvider } from "./context/PageTitle";
import { UserProvider } from "./features/user/User";
import { Header } from "./components/layout/Header";

const AppProviders: FC = ({ children }) => (
  <PageTitleProvider>
    <UserProvider>{children}</UserProvider>
  </PageTitleProvider>
);

function App() {
  return (
    <AppProviders>
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
    </AppProviders>
  );
}

export default App;
