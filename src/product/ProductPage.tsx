import React from 'react';
import {Page} from "../layout/Page";
import {useParams} from "react-router-dom";
import {CommentsPanel} from "./CommentsPanel";

export const ProductPage = () => {
    const { productId } = useParams<{productId: string}>();

    return (<Page>
        <CommentsPanel productId={productId}/>
    </Page>)


}