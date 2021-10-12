import React, { useContext, useEffect, useState } from "react";
import { Page } from "../layout/Page";
import { useParams } from "react-router-dom";
import { CommentsPanel } from "./CommentsPanel";
import { ProductInfo } from "./ProductInfo";
import { getProductById, Product } from "../api/products";
import { Grid } from "@mui/material";
import { PageTitleContext } from "../context/PageTitle";

export const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { setTitle } = useContext(PageTitleContext);

  useEffect(() => {
    getProductById(productId).then(setProduct);
  }, []);

  useEffect(() => {
    if (product) {
      setTitle(product.name);
    }
  }, [product, setTitle]);

  return (
    <Page>
      {product ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ProductInfo product={product} />
          </Grid>
          <Grid item xs={12} md={6}>
            <CommentsPanel productId={"" + product.id} />
          </Grid>
        </Grid>
      ) : (
        "no such product"
      )}
    </Page>
  );
};
