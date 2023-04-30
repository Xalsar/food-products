import ProductData from "../types/ProductData";

import { useState } from "react";

import { toast } from "react-toastify";

import isNumeric from "../utils/isNumeric";

const useCreateProduct = (
  addProductToList: (productData: ProductData) => void
) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("greens");
  const [price, setPrice] = useState("");

  const [hasSubmittedForm, setHasSubmittedForm] = useState(false);

  // GET DATA
  const handleTypeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    setName(value);
  };

  const handleSelectCategory = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    setCategory(value);
  };

  const handleTypePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setPrice(value);
  };

  // NAME VALIDATION
  const isNameValid = name.length > 0;
  const nameErrorMessage = "Name is required";

  const irPriceSpecified = !!price;
  const isPriceANumber = isNumeric(price);

  // PRICE VALIDATION
  const isPriceValid = irPriceSpecified && isPriceANumber;

  let priceErrorMessage = "";

  if (!irPriceSpecified) {
    priceErrorMessage = "Price is required";
  } else if (!isPriceANumber) {
    priceErrorMessage = "Price must be a positive number (ex: 1, 35, 45.5...)";
  }

  //  FORM VALIDATION
  const isFormValid = isNameValid && isPriceValid;

  const handleSubmitForm = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();

    setHasSubmittedForm(true);

    if (isFormValid) {
      setName("");
      setCategory("");
      setPrice("");
      setHasSubmittedForm(false);

      addProductToList({ name, category, price: Number(price) });

      toast.success(
        "The product has been created. Go to products list to see it.",
        {
          position: "bottom-left",
        }
      );
    }
  };

  return {
    // VALUES
    name,
    handleTypeName,
    category,
    handleSelectCategory,
    price,
    handleTypePrice,
    // SUBMIT
    hasSubmittedForm,
    handleSubmitForm,
    isNameValid,
    isPriceValid,
    nameErrorMessage,
    priceErrorMessage,
    isFormValid,
  };
};

export default useCreateProduct;
