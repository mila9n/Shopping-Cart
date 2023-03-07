import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./components/style/globalstyle";
import Shop from "./components/pages/shop/Shop";
import Cart from "./components/pages/cart/Cart";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
