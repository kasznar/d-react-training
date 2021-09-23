import axios from "axios";

export interface Comment {
  id?: number;
  text: string;
  productId: number;
}

export async function getComments(productId: number) {
  const res = await axios.get<Comment[]>("/comments", {
    params: { productId, _sort: "id", _order: "desc" },
  });
  return res.data;
}

export async function postComment(newComment: Comment) {
  const res = await axios.post("/comments", newComment);
  return res.data;
}
