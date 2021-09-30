import axios from 'axios';

export interface Comment {
    productId: number;
    text: string;
    id: number;
}

export const getComments = async (productId: string) => {
     const res = await axios.get<Comment[]>('/comments', {
         params: {productId, _sort: 'id', _order: 'desc'}
     });
     return res.data;
}