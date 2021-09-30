import React, {useEffect, useState} from 'react';
import {getProducts, Product} from "../api/products";
import {Paper, Table, TableBody, TableContainer} from "@mui/material";
import {ProductListTableHead} from "./ProductListTableHead";
import {ProductListRow} from "./ProductListRow";


export const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(()=>{
        getProducts().then(setProducts)
    }, [setProducts])

    return (<TableContainer component={Paper}>
        <Table>
            <ProductListTableHead/>
            <TableBody>
                {products.map((product)=> (
                    <ProductListRow key={product.id} product={product}/>)
                )
                }
            </TableBody>
        </Table>
    </TableContainer>)
}