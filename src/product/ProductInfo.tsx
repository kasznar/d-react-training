import React, {FC} from 'react';
import {Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import {Product} from "../api/products";
import tractor  from './tractor.jpeg'

export const ProductInfo: FC<{product: Product}> = ({product}) => {
    const subheader = (<>
        {product.price}HUF qt:{product.quantity}
    </>)


    return(<Card>
        <CardHeader title={product.name} subheader={subheader}/>
        <CardMedia component="img" image={tractor} alt="Product image" />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {product.description}
            </Typography>
        </CardContent>
    </Card>)
}