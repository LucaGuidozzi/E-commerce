import React from "react";

import Product from "./Product";

function Products({ filteredProdotti }) {
  return (
    <>
      <div className="main-container">
        {" "}
        <div className="titoli-container">
          <h1>Mercatino dell'usato</h1>
          <h3>Svendita prodotti di seconda mano</h3>
        </div>
        <div className="card-container">
          {filteredProdotti.length === 0 ? (
            <p className="nessun-prodotto">Nessun prodotto trovato!</p>
          ) : (
            filteredProdotti.map((prodotto) => (
              <Product key={prodotto.id} data={prodotto} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
