import React, { useEffect } from "react";
import { ProductList } from "./ProductList";
import { Page } from "../../../components/layout/Page";
import { useDispatch } from "react-redux";
import { fetchProductListThunk } from "../actions/thunks/fetchProductListThunk";

export const ProductListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductListThunk());
  }, [dispatch]);

  return (
    <Page>
      <ProductList />
    </Page>
  );
};
