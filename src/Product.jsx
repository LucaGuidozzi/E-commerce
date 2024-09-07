import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="card">
      <img className="immagini" src={productImage} />
      <div className="info-container">
        <p>{productName}</p>
        <p>{price} €</p>
        <button className="addToCartButton" onClick={() => addToCart(id)}>
          Aggiungi{cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
}

export default Product;
