import {AppThunk} from "../../../../store/store";
import {Comment, postComments} from "../../../../api/comments";
import {fetchCommentsThunk} from "./fetchCommentsThunk";


export const fetchAddCommentThunk = (newComment: Comment): AppThunk => async (dispatch, getState) => {
    const state = getState();
    await postComments(newComment)
    if (state.product.info?.id) {
        dispatch(fetchCommentsThunk(state.product.info.id));
    }
}
