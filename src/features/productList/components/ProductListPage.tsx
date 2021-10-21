import React, { useContext, useEffect } from "react";
import { Page } from "../../../layout/Page";
import { ProductList } from "./ProductList";
import { PageTitleContext } from "../../../context/PageTitle";
import {useDispatch} from "react-redux";
import {fetchProductListThunk} from "../actions/thunks/fetchProductListThunk";

export const ProductListPage = () => {
  const { setTitle } = useContext(PageTitleContext);
  const dispatch = useDispatch();


  useEffect(() => {
    setTitle("");
  }, [setTitle]);

  useEffect(()=>{
    dispatch(fetchProductListThunk());
  },[dispatch])

  return (
    <Page>
      <ProductList />
    </Page>
  );
};
