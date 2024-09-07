import { useContext } from "react";
import React from "react";
import { ShopContext } from "../ShopContext";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div>
      <img className="immagini-carrello" src={productImage} />
      <div className="carrello-descrizione">
        <p>{productName}</p>
        <p>{price} € </p>
        <div className="counter-container">
          <button
            className="pulsante-counter"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            className="input-counter"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="pulsante-counter" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
