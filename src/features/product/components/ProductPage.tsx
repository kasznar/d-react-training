import React, {useEffect} from "react";
import {Page} from "../../../ui-kit/layout/Page";
import {CommentsPanel} from "./CommentsPanel";
import {ProductInfo} from "./ProductInfo";
import {Grid} from "@mui/material";
import {useAppDispatch} from "../../../store/hooks";
import {clearProduct} from "../actions/clearProduct";

export const ProductPage = () => {
  const dispatch = useAppDispatch();

  useEffect(()=>{
    return () => {
      dispatch(clearProduct())
    }
  },[dispatch])

  return (
    <Page>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ProductInfo />
        </Grid>
        <Grid item xs={12} md={6}>
          <CommentsPanel />
        </Grid>
      </Grid>
    </Page>
  );
};
