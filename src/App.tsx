import { Route, Routes } from "react-router";

import { Home } from "./pages/home";
import { ProductDetails } from "./pages/productDetails";
import { NotFound } from "./pages/notFoud";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/product/:slug" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
