import { ProductActionTypes } from "./actionTypes";
import { Comment } from "../../../api/comments";

export interface FetchCommentsSuccessAction {
  type: ProductActionTypes.FETCH_COMMENTS_SUCCESS;
  payload: Comment[];
}

export const fetchCommentsSuccess = (
  result: Comment[]
): FetchCommentsSuccessAction => {
  return {
    type: ProductActionTypes.FETCH_COMMENTS_SUCCESS,
    payload: result,
  };
};
