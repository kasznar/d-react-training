import { FC } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import React from "react";
import { useHistory } from "react-router-dom";

export const ProductListTableRow: FC<{ row: any }> = ({ row }) => {
  const history = useHistory();
  const url = `/product/${row.id}`;

  function handleClick() {
    history.push(url);
  }

  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="right">{row.price}</TableCell>
      <TableCell align="right">{row.quantity > 0 ? "yes" : "no"}</TableCell>
    </TableRow>
  );
};
