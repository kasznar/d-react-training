import axios from "axios";

export interface Product {
  id?: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
}

export async function getProducts() {
  const res = await axios.get<Product[]>("/api/products");
  return res.data;
}

export async function getProductById(id: string) {
  const res = await axios.get<Product>(`/api/products/${id}`);
  return res.data;
}

export async function postProduct(newProduct: Product) {
  const res = await axios.post("/api/products", newProduct);
  return res.data;
}
