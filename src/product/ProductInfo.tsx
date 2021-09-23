import * as React from "react";
import { FC } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import tractor from "./tractor.jpeg";
import { Product } from "../api/product";

export const ProductInfo: FC<{ product: Product }> = ({ product }) => {
  const subheader = (
    <>
      {product.price}HUF qt:{product.quantity}
    </>
  );

  return (
    <Card>
      <CardHeader title={product.name} subheader={subheader} />
      <CardMedia component="img" image={tractor} alt="Product image" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
