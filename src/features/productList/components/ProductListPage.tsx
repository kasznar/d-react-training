import React, {useEffect} from "react";
import {ProductList} from "./ProductList";
import {useDispatch} from "react-redux";
import {fetchProductListThunk} from "../actions/thunks/fetchProductListThunk";
import {Page} from "../../../components/layout/Page";

export const ProductListPage = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProductListThunk());
  },[dispatch])

  return (
    <Page>
      <ProductList />
    </Page>
  );
};
