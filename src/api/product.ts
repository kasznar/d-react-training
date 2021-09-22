import axios from "axios";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
}

export async function getProducts() {
  const res = await axios.get<Product[]>("/products");
  return res.data;
}

export async function getProductById(id: number) {
  const res = await axios.get<Product>(`/products/${id}`);
  return res.data;
}
