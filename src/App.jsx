import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutUs from "/src/components/AboutUs.jsx";
import Shop from "/src/components/Shop.jsx";
import Home from "/src/components/Home.jsx";
import Navbar from "/src/components/Navbar.jsx";
import { useState } from "react";
import { AllData } from "/src/components/allData.js";
import Cart from "/src/components/AddToCart/Cart.jsx";
import { CartProvider } from "/src/components/AddToCart/CartContext.jsx";
import { Error } from "/src/components/Error.jsx";
import Footer from "/src/components/Footer/Footer.jsx";
import Contact from "./components/Contact/Contact";

function App() {
  // search
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const results = AllData.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          (item.description &&
            item.description.toLowerCase().includes(query.toLowerCase()))
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };
  //  end search
  return (
    <CartProvider>
      <>
        <div className="components">
          <Navbar onSearch={handleSearch} searchQuery={searchQuery} />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Home searchResults={searchResults} searchQuery={searchQuery} />
            }
          />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route
            path="/Shop"
            element={
              <Shop searchResults={searchResults} searchQuery={searchQuery} />
            }
          />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </>
    </CartProvider>
  );
}

export default App;
