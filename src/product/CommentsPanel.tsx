import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {Comment, getComments, postComments} from "../api/comments";
import {Button, Paper, TextField, Typography} from "@mui/material";

export const CommentsPanel: FC<{ productId: string }> = ({ productId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    getComments(productId).then((data) => {
      setComments(data);
    });
  }, [productId, setComments]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setNewComment(event.target.value);
  }

  async function handleClick() {
        await postComments({productId, text: newComment});
      setNewComment('');
  }

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
