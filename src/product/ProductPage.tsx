import React from "react";
import { Page } from "../layout/Page";
import { useProduct } from "./useProduct";
import { ProductInfo } from "./ProductInfo";
import { Grid } from "@mui/material";
import { CommentsPanel } from "./CommentsPanel";

export default function ProductPage() {
  const { productData, invalid } = useProduct();

  return (
    <Page>
      {invalid || productData === null ? (
        `no product find`
      ) : (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <ProductInfo product={productData} />
            </Grid>
            <Grid item xs={12} md={6}>
              <CommentsPanel productId={productData.id} />
            </Grid>
          </Grid>
        </>
      )}
    </Page>
  );
}
