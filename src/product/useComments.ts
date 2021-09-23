import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Comment, getComments, postComment } from "../api/comments";
import { UserContext } from "../context/User";

export const useComments = (productId: number) => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const { isLoggedIn, login } = useContext(UserContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = async () => {
    if (!isLoggedIn) {
      login();
      return;
    }

    if (newComment.trim()) {
      await postComment({ productId, text: newComment });
      setNewComment("");
      await fetchComments();
    }
  };

  const fetchComments = useCallback(async () => {
    const res = await getComments(productId);
    setComments(res);
  }, [productId, setComments]);

  useEffect(() => {
    fetchComments();
  }, [productId, fetchComments]);

  return { comments, newComment, handleChange, handleSubmit };
};
