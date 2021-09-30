import React, {useEffect, useState} from 'react';
import {getProducts, Product} from "../api/products";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


export const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(()=>{
        getProducts().then(setProducts)
    }, [setProducts])

    return (<TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>In stock</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {products.map((product)=> (<TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.quantity > 0 ? 'yes' : 'no'}</TableCell>
                </TableRow>))}
            </TableBody>
        </Table>
    </TableContainer>)
}