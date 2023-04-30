import Product from "../../../types/Product";

import { useState, useEffect } from "react";

const useSimilarProductModal = (productsListToLoad: Product[]) => {
  const [productsClosePriceList, setProductsClosePriceList] = useState<
    Product[]
  >([]);

  useEffect(() => {
    if (productsListToLoad.length > 0) {
      setProductsClosePriceList(productsListToLoad);
    }

    setProductsClosePriceList(productsListToLoad);
  }, [productsListToLoad]);

  return productsClosePriceList;
};

export default useSimilarProductModal;
