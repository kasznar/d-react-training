import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {Comment, getComments, postComments} from "../api/comments";

export const useComments = (productId: string) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState('');

    const fetchComments = useCallback(async ()=>{
        const res = await getComments(productId);
        setComments(res);
    }, [productId, setComments])

    useEffect(() => {
        fetchComments()
    }, [fetchComments]);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setNewComment(event.target.value);
    }

    async function handleClick() {
        if (newComment.trim()) {
            await postComments({productId, text: newComment});
            setNewComment('');
            await fetchComments();
        }
    }

    return {comments, handleChange, handleClick, newComment}
}