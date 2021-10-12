import React from "react";
import { Paper, Table, TableBody, TableContainer } from "@mui/material";
import { ProductListTableHead } from "./ProductListTableHead";
import { ProductListRow } from "./ProductListRow";
import { useProductList } from "./useProductList";

export const ProductList = () => {
  const [products] = useProductList();

  return (
    <TableContainer component={Paper}>
      <Table>
        <ProductListTableHead />
        <TableBody>
          {products.map((product) => (
            <ProductListRow key={product.id} product={product} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
