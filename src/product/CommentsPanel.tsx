import React, {FC} from "react";
import {Button, Paper, TextField, Typography} from "@mui/material";
import {useComments} from "./useComments";

export const CommentsPanel: FC<{ productId: string }> = ({ productId }) => {
  const {handleClick, comments, handleChange, newComment} = useComments(productId)

  return (
    <React.Fragment>
      <Typography variant="h4">
        Comments
      </Typography>

      <TextField value={newComment} onChange={handleChange}/>
      <Button onClick={handleClick}>Comment</Button>

      {comments.map((comment)=>(
          <Paper sx={{mb: 1, p: 1, whiteSpace: "pre-wrap"}}>
          {comment.text}
        </Paper>
          ))}
    </React.Fragment>
  );
};
