import React, {useEffect} from "react";
import {CommentsPanel} from "./CommentsPanel";
import {ProductInfo} from "./ProductInfo";
import {Grid} from "@mui/material";
import {Page} from "../../../layout/Page";
import {useDispatch} from "react-redux";
import {clearProduct} from "../actions/clearProduct";


export const ProductPage = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    return ()=>{
      dispatch(clearProduct())
    }
  },[])

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
