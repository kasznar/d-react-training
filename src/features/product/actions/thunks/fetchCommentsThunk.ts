import { Dispatch } from "redux";
import { AppThunk } from "../../../../store";
import { getComments } from "../../../../api/comments";
import { fetchCommentsSuccess } from "../fetchCommentsSuccess";

export const fetchCommentsThunk =
  (id: string): AppThunk =>
  async (dispatch: Dispatch) => {
    const comments = await getComments(id);
    dispatch(fetchCommentsSuccess(comments));
  };
