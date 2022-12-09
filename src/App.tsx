import { Route, Routes } from "react-router";

import { Home } from "./pages/home";
import { ProductDetails } from "./pages/productDetails";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/product/:slug" element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
