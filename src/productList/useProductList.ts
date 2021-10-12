import { useEffect, useState } from "react";
import { getProducts, Product } from "../api/products";

export const useProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, [setProducts]);

  return [products];
};
