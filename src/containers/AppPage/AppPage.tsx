import { Routes, Route } from "react-router-dom";

import AppNavBar from "../AppNavBar/AppNavBar";
import ProductsList from "../ProductsList/ProductsList";
import CreateProduct from "../CreateProduct/CreateProduct";

import useAppPage from "./hooks/use-appPage";

function AppPage() {
  const { productsList } = useAppPage();

  return (
    <>
      <AppNavBar />
      <Routes>
        <Route
          path="/"
          element={(() => (
            <ProductsList productsList={productsList} />
          ))()}
        />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </>
  );
}

export default AppPage;
