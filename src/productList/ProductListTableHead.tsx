import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import * as React from "react";

export function ProductListTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell align="right">Price</TableCell>
        <TableCell align="right">In stock</TableCell>
      </TableRow>
    </TableHead>
  );
}
