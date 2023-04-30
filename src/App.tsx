import { Routes, Route } from "react-router-dom";

import AppNavBar from "./containers/AppNavBar/AppNavBar";
import ProductsList from "./containers/ProductsList/ProductsList";
import CreateProduct from "./containers/CreateProduct/CreateProduct";

function App() {
  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </>
  );
}

export default App;
