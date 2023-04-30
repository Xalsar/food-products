import productsList from "../../../database/db.json";

import { useState } from "react";

import isNumeric from "../../../utils/isNumeric";

const useProductsList = () => {
  const [activePage, setActivePage] = useState(0);
  const [category, setCategory] = useState("");

  const [minimum, setMinimum] = useState("");
  const [maximum, setMaximum] = useState("");

  const [clickedProductId, setClickedProductId] = useState("");

  const isMinimumDefined = !!minimum;
  const isMaximumDefined = !!maximum;

  const isMinimumANumber = isNumeric(minimum);
  const isMaximumANumber = isNumeric(maximum);

  const isMinMoreThanMax =
    isMinimumDefined && isMaximumDefined && Number(minimum) > Number(maximum);

  const isMinimumValid = isMinimumANumber && !isMinMoreThanMax;
  const isMaximumValid = isMaximumANumber && !isMinMoreThanMax;

  let filteredProducts = productsList.filter((product) => {
    if (!!category) {
      if (product.category !== category) {
        return false;
      }
    }

    if (isMinimumDefined && isMinimumValid) {
      if (Number(product.price) < Number(minimum)) {
        return false;
      }
    }

    if (isMaximumDefined && isMaximumValid) {
      if (Number(product.price) > Number(maximum)) {
        return false;
      }
    }

    return true;
  });

  // PAGINATION
  const totalPagesNumber = Math.round(filteredProducts.length / 24);
  const lastPage = totalPagesNumber;

  const itemsToShow = filteredProducts.slice(
    activePage * 24,
    activePage * 24 + 24
  );

  const checkIfPageIsActive = (targetPage: number) => targetPage === activePage;
  let pagesToShowInPagination = [0, 1, 2, 3, 4];

  if (activePage > totalPagesNumber - 5) {
    pagesToShowInPagination = [
      totalPagesNumber - 4,
      totalPagesNumber - 3,
      totalPagesNumber - 2,
      totalPagesNumber - 1,
      totalPagesNumber,
    ];
  } else if (activePage > 3) {
    pagesToShowInPagination = [
      activePage - 2,
      activePage - 1,
      activePage,
      activePage + 1,
      activePage + 2,
    ];
  }

  const handleClickChangePage = (clickedPage: number) =>
    setActivePage(clickedPage);

  const handleClickPrevPage = () => {
    if (activePage === 0) return;

    setActivePage((prev) => prev - 1);
  };

  const handleClickNextPage = () => {
    if (activePage === totalPagesNumber) return;

    setActivePage((prev) => prev + 1);
  };

  const handleClickFirstPage = () => setActivePage(0);

  const handleClickLastPage = () => setActivePage(totalPagesNumber);

  // CATEGORY
  const handleSelectCategory = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    setCategory(value);
    setActivePage(0);
  };

  // MINIMUM - MAXIMUM
  const handleTypeMinimum = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    setMinimum(value);
  };

  const handleTypeMaximum = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    setMaximum(value);
  };

  // CLICK PRODUCT
  const handleClickProduct = (productId: string) => {
    setClickedProductId(productId);
  };

  let productsInRange: any = [];

  if (clickedProductId) {
    const clickedProduct = productsList.find(
      (product) => product.id === clickedProductId
    );
    const filteredProducts = productsList.filter(
      (product) =>
        product.category === clickedProduct?.category &&
        product.id !== clickedProductId
    );
    const sortedProducts = filteredProducts.sort((p1, p2) => {
      const difference1 = Math.abs(
        Number(p1.price) - Number(clickedProduct?.price)
      );

      const difference2 = Math.abs(
        Number(p2.price) - Number(clickedProduct?.price)
      );

      if (difference1 > difference2) {
        return 1;
      } else if (difference1 < difference2) {
        return -1;
      } else {
        return 0;
      }
    });

    productsInRange = sortedProducts.splice(0, 6);
  }

  const showSimilarProductsModal = !!clickedProductId;

  const handleClickCloseSimilarProductsModal = () => {
    setClickedProductId("");
  };

  return {
    // PAGINATION
    activePage,
    itemsToShow,
    checkIfPageIsActive,
    pagesToShowInPagination,
    handleClickChangePage,
    handleClickPrevPage,
    handleClickNextPage,
    handleClickFirstPage,
    handleClickLastPage,
    lastPage,
    // CATEGORY
    category,
    handleSelectCategory,
    // MIN - MAX
    minimum,
    handleTypeMinimum,
    maximum,
    handleTypeMaximum,
    isMinimumDefined,
    isMaximumDefined,
    isMinimumValid,
    isMaximumValid,
    isMinimumANumber,
    isMaximumANumber,
    isMinMoreThanMax,
    // CLICK PRODUCT
    handleClickProduct,
    showSimilarProductsModal,
    productsInRange,
    handleClickCloseSimilarProductsModal,
  };
};

export default useProductsList;
