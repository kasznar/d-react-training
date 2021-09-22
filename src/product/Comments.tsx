import React, { FC, useState } from "react";
import { TextField, Typography } from "@mui/material";

export const Comments: FC<{ productId: number }> = ({ productId }) => {
  const [newComment, setNewComment] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom component="h2">
        Comments
      </Typography>
      <TextField
        sx={{ width: 100 }}
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        rows={2}
        value={newComment}
        onChange={handleChange}
      />
    </>
  );
};
