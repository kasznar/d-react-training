import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

export const ProductListTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell align="right">Price</TableCell>
      <TableCell align="right">In stock</TableCell>
    </TableRow>
  </TableHead>
);
