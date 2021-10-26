import {AppThunk} from "../../../../store";
import {Comment, postComments} from "../../../../api/comments";
import {fetchCommentsThunk} from "./fetchCommentsThunk";


export const fetchAddCommentThunk = (newComment: Comment): AppThunk => async (dispatch) => {
    await postComments(newComment);
    dispatch(fetchCommentsThunk(newComment.productId))
}