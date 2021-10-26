import React, {ChangeEvent, FC, useEffect, useState} from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchCommentsThunk} from "../actions/thunks/fetchCommentsThunk";
import {fetchAddCommentThunk} from "../actions/thunks/fetchAddCommentThunk";
import {useAppSelector} from "../../../store";

export const CommentsPanel: FC = () => {
    const [newComment, setNewComment] = useState('');
    const {productId} = useParams<{productId: string}>();
    const dispatch = useDispatch();
    const comments = useAppSelector(state => state.product.comments);

    useEffect(()=>{
        dispatch(fetchCommentsThunk(productId));
    }, [dispatch, productId])

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setNewComment(event.target.value)
    }

    function handleClick() {
        dispatch(fetchAddCommentThunk({productId, text: newComment}));
        setNewComment("");
    }

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
