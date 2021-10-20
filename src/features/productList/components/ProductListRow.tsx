import React, { FC } from "react";
import { TableCell, TableRow } from "@mui/material";
import { Product } from "../../../api/products";
import { useHistory } from "react-router-dom";

export const ProductListRow: FC<{ product: Product }> = ({ product }) => {
  const history = useHistory();
  const url = `/product/${product.id}`;

  function handleClick() {
    history.push(url);
  }

  return (
    <TableRow onClick={handleClick} sx={{ cursor: "pointer" }}>
      <TableCell>{product.name}</TableCell>
      <TableCell align="right">{product.price}</TableCell>
      <TableCell align="right">{product.quantity > 0 ? "yes" : "no"}</TableCell>
    </TableRow>
  );
};
