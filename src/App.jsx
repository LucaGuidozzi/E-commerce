import React from "react";
import Header from "./Header";
import Products from "./Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartInfo from "./Cart/CartInfo";
import { ShopContextProvider } from "./ShopContext";
import { useState } from "react";
import { PRODOTTI } from "./prodotti";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProdotti, setFilteredProdotti] = useState(PRODOTTI);
  const handleProdottiFiltered = (term) => {
    setSearchTerm(term);
    const filtered = PRODOTTI.filter((prodotto) =>
      prodotto.productName.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProdotti(filtered);
  };

  return (
    <>
      <ShopContextProvider>
        {" "}
        <BrowserRouter>
          <div>
            <Header onProdottiFiltered={handleProdottiFiltered} />

            <main>
              <Routes>
                <Route
                  path="/Products"
                  element={<Products filteredProdotti={filteredProdotti} />}
                />
                <Route path="/CartInfo" element={<CartInfo />} />
              </Routes>
            </main>
            <footer>&copy; Luca's Shop</footer>
          </div>
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
}

export default App;
