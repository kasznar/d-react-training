import axios from "axios";

export interface Comment {
  productId: string;
  text: string;
  id?: string;
}

export const getComments = async (productId: string) => {
  const res = await axios.get<Comment[]>("/api/comments", {
    params: { productId, _sort: "id", _order: "desc" },
  });
  return res.data;
};

export async function postComments(newComment: Comment) {
  const res = await axios.post("/api/comments", newComment);
  return res.data;
}
