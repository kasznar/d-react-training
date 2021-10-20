import React, { useContext, useEffect } from "react";
import { Page } from "../../ui-kit/layout/Page";
import { ProductList } from "./ProductList";
import { PageTitleContext } from "../../context/PageTitle";

export const ProductListPage = () => {
  const { setTitle } = useContext(PageTitleContext);
  useEffect(() => {
    setTitle("");
  }, [setTitle]);

  return (
    <Page>
      <ProductList />
    </Page>
  );
};
