import productsList from "../../../database/db.json";

import { useState } from "react";

const useProductsList = () => {
  const [activePage, setActivePage] = useState(0);
  const [category, setCategory] = useState("");

  // PAGINATION
  let filteredProducts = productsList;

  if (!!category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

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
  };
};

export default useProductsList;
