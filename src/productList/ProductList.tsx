import * as React from "react";
import { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { getProducts, Product } from "../api/product";
import { ProductListTableRow } from "./ProductListRow";
import { ProductListTableHead } from "./ProductListTableHead";
import { PageTitleContext } from "../context/PageTitle";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const { setTitle } = useContext(PageTitleContext);

  useEffect(() => {
    setTitle("Products");
    getProducts().then(setProducts);
  }, [setTitle, setProducts]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <ProductListTableHead />
        <TableBody>
          {products.map((row) => (
            <ProductListTableRow row={row} key={row.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
