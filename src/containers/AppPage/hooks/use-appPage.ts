import dbProductsList from "../../../database/db.json";

import ProductData from "../../../types/ProductData";

import Product from "../../../types/Product";

import { useState } from "react";

import uid from "../../../utils/uid";

const useAppPage = () => {
  const [productsList, setProductsList] = useState<Product[]>(dbProductsList);

  const addProductToList = (productToAddData: ProductData) => {
    const createdProductId = uid();

    setProductsList((prev) => [
      { id: createdProductId, ...productToAddData },
      ...prev,
    ]);
  };

  return { productsList, addProductToList };
};

export default useAppPage;
