import React, { FC } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useComments } from "./useComments";

export const CommentsPanel: FC<{ productId: number }> = ({ productId }) => {
  const { comments, newComment, handleChange, handleSubmit } =
    useComments(productId);

  return (
    <>
      <Typography variant="h4" gutterBottom component="h2">
        Comments
      </Typography>
      <TextField
        fullWidth
        id="outlined-multiline-flexible"
        label="Write a comment"
        multiline
        rows={2}
        value={newComment}
        onChange={handleChange}
      />
      <Box sx={{ py: 1, display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" onClick={handleSubmit}>
          Comment
        </Button>
      </Box>

      {comments.map((comment) => (
        <Paper sx={{ mb: 1, p: 1, whiteSpace: "pre-wrap" }} key={comment.id}>
          {comment.text}
        </Paper>
      ))}
    </>
  );
};
