import Product from "../../../types/Product";

import { useState } from "react";

import isNumeric from "../../../utils/isNumeric";

const useProductsList = (productsList: Product[]) => {
  const [activePage, setActivePage] = useState(0);
  const [category, setCategory] = useState("");

  const [minimum, setMinimum] = useState("");
  const [maximum, setMaximum] = useState("");

  const [clickedProductId, setClickedProductId] = useState("");

  // MINIMUM MAXIMUM VALIDATION
  const isMinimumDefined = !!minimum;
  const isMaximumDefined = !!maximum;

  const isMinimumANumber = isNumeric(minimum);
  const isMaximumANumber = isNumeric(maximum);

  const isMinMoreThanMax =
    isMinimumDefined && isMaximumDefined && Number(minimum) > Number(maximum);

  const isMinimumValid = isMinimumANumber && !isMinMoreThanMax;
  const isMaximumValid = isMaximumANumber && !isMinMoreThanMax;

  // FILTERING
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
  const totalPagesNumber = Math.ceil(filteredProducts.length / 24);
  const lastPage = totalPagesNumber - 1;

  const itemsToShow = filteredProducts.slice(
    activePage * 24,
    activePage * 24 + 24
  );

  const checkIfPageIsActive = (targetPage: number) => targetPage === activePage;

  const pagesList = Array.from(Array(totalPagesNumber).keys());

  let pagesToShowInPagination: number[] = [];

  if (activePage < 3 || totalPagesNumber < 3) {
    pagesToShowInPagination = pagesList.slice(0, 5);
  } else if (activePage > totalPagesNumber - 5) {
    pagesToShowInPagination = pagesList.slice(
      totalPagesNumber - 5,
      totalPagesNumber + 1
    );
  } else {
    pagesToShowInPagination = pagesList.slice(activePage - 2, activePage + 3);
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

  const handleClickLastPage = () => setActivePage(lastPage);

  // CATEGORY
  const handleSelectCategory = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    setCategory(value);
    setActivePage(0);
  };

  // MINIMUM - MAXIMUM
  const handleTypeMinimum = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    setActivePage(0);
    setMinimum(value);
  };

  const handleTypeMaximum = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    setActivePage(0);
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
