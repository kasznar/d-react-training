import React, { FC, useEffect, useState } from "react";
import { Comment, getComments } from "../api/comments";
import { Page } from "../layout/Page";

export const CommentsPanel: FC<{ productId: string }> = ({ productId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getComments(productId).then((data) => {
      setComments(data);
    });
  }, [productId, setComments]);

  return (
    <Page>
      <pre>{JSON.stringify(comments, null, 4)}</pre>
    </Page>
  );
};
