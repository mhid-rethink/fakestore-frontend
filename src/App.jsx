import "./App.css";

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./screens/Home/Home";
import Products from "./screens/Products/Products";
import Contacts from "./screens/Contacts/Contacts";
import ProductDetails from "./screens/ProductDetails/ProductDetails";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/category/:categoryParam"
            element={<Products />}
          />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
