import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Home from "./screens/Home";
import Products from "./screens/Products";
import Contacts from "./screens/Contacts";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route parth="/" element={<Home />} />
          <Route parth="/products" element={<Products />} />
          <Route parth="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
