import { Outlet, Route, Routes } from "react-router";
import { useGlobalContext } from "./provider/globalContext";

import { Home } from "./pages/home";
import { ProductDetails } from "./pages/productDetails";
import c from "classnames";

import "./App.css";

function App() {
  const AppClass = c("App", {
    // "visible-product-detail": isModalOpened,
  });

  return (
    <div className={AppClass}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/product/:slug" element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
