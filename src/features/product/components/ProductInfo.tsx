import React, {FC, useEffect} from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import tractor from "../tractor.jpeg";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchProductThunk} from "../actions/thunks/fetchProductThunk";
import {useAppSelector} from "../../../store/hooks";
import {Product} from "../../../api/products";

export const ProductInfo: FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const dispatch = useDispatch();
    const product = useAppSelector(state => state.product.info);

    useEffect(()=>{
        dispatch(fetchProductThunk(productId))
    },[dispatch, productId])

  const subheader= (product: Product) => (
    <>
      {product.price}HUF qt:{product.quantity}
    </>
  );

  return (
      <>
          {product && <Card>
              <CardHeader title={product.name} subheader={subheader(product)} />
              <CardMedia component="img" image={tractor} alt="Product image" />
              <CardContent>
                  <Typography variant="body2" color="text.secondary">
                      {product.description}
                  </Typography>
              </CardContent>
          </Card>}
      </>

  );
};
