import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById, Product } from "../api/product";

export const useProduct = () => {
  let { productId } = useParams<{ productId: string }>();
  const [invalid, setInvalid] = useState(false);
  const [productData, setProductData] = useState<Product | null>(null);

  function isNormalInteger(str: string) {
    return /^\+?(0|[1-9]\d*)$/.test(str);
  }

  useEffect(() => {
    let id = null;
    if (isNormalInteger(productId)) {
      id = parseInt(productId);
    } else {
      setInvalid(true);
      return;
    }
    getProductById(id)
      .then((data) => {
        setInvalid(false);
        setProductData(data);
      })
      .catch(() => {
        setInvalid(true);
      });
  }, [setInvalid, productId]);

  return { productData, invalid };
};
