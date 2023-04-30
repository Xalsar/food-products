import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppNavBar from "../AppNavBar/AppNavBar";
import ProductsList from "../ProductsList/ProductsList";
import CreateProduct from "../CreateProduct/CreateProduct";

import useAppPage from "./hooks/use-appPage";
import useProductsList from "../../hooks/use-productsList";
import useCreateProduct from "../../hooks/use-createProduct";

function AppPage() {
  const { productsList, addProductToList } = useAppPage();

  const productsListhook = useProductsList(productsList);
  const createProductHook = useCreateProduct(addProductToList);

  return (
    <>
      <AppNavBar />
      <Routes>
        <Route
          path="/"
          element={(() => (
            <ProductsList
              // PAGINATION
              {...productsListhook}
            />
          ))()}
        />
        <Route
          path="/create-product"
          element={(() => (
            <CreateProduct {...createProductHook} />
          ))()}
        />
      </Routes>
      <ToastContainer />{" "}
    </>
  );
}

export default AppPage;
