import React, {ChangeEvent, FC, useContext, useEffect, useState} from "react";
import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import {useAppSelector} from "../../../store/hooks";
import {useDispatch} from "react-redux";
import {fetchCommentsThunk} from "../actions/thunks/fetchCommentsThunk";
import {useParams} from "react-router-dom";
import {UserContext} from "../../user/User";
import {fetchAddCommentThunk} from "../actions/thunks/fetchAddCommentThunk";

export const CommentsPanel: FC = () => {
    const [newComment, setNewComment] = useState("");
    const comments = useAppSelector(state => state.product.comments)
    const dispatch = useDispatch();
    const { productId } = useParams<{ productId: string }>();
    const {isLoggedIn, login} = useContext(UserContext);

    useEffect(()=>{
        dispatch(fetchCommentsThunk(productId))
    }, [])

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setNewComment(event.target.value);
    }

    async function handleClick() {
        if (!isLoggedIn) {
            login();
            return
        }

        if (newComment.trim()) {
            dispatch(fetchAddCommentThunk({ productId, text: newComment }))
            setNewComment("");
        }
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
