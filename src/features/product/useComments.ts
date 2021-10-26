export const useComments = (productId: string) => {
  /*
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const {isLoggedIn, login} = useContext(UserContext);

  const fetchComments = useCallback(async () => {
    const res = await getComments(productId);
    setComments(res);
  }, [productId, setComments]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setNewComment(event.target.value);
  }

  async function handleClick() {
    if (!isLoggedIn) {
      login();
      return
    }

    if (newComment.trim()) {
      await postComments({ productId, text: newComment });
      setNewComment("");
      await fetchComments();
    }
  }

  return { comments, handleChange, handleClick, newComment };
   */
};
