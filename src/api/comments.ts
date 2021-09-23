import axios from 'axios';

export interface Comment {
    productId: number;
    text: string;
    id: number;
}

export const getComments = async () => {
     const res = await axios.get<Comment[]>('/comments');
     return res.data;
}