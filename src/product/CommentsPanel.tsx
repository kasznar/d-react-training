import React, { FC } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useComments } from "./useComments";

export const CommentsPanel: FC<{ productId: string }> = ({ productId }) => {
  const { handleClick, comments, handleChange, newComment } =
    useComments(productId);

  return (
    <React.Fragment>
      <Typography variant="h4">Comments</Typography>

      <TextField
        fullWidth
        multiline
        rows={2}
        value={newComment}
        onChange={handleChange}
      />
      <Box sx={{ py: 1, display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={handleClick}>Comment</Button>
      </Box>

      {comments.map((comment) => (
        <Paper sx={{ mb: 1, p: 1, whiteSpace: "pre-wrap" }}>
          {comment.text}
        </Paper>
      ))}
    </React.Fragment>
  );
};
