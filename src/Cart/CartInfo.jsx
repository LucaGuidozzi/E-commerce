import React, { useContext } from "react";
import { PRODOTTI } from "../prodotti";
import { ShopContext } from "../ShopContext";
import { CartItem } from "./cartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="carrello-container">
      <div>
        <h1 className="titolo-carrello">Il tuo carrello acquisti</h1>
      </div>
      <div className="acquisti-container">
        {PRODOTTI.map((prodotto) => {
          if (cartItems[prodotto.id] !== 0) {
            return <CartItem key={prodotto.id} data={prodotto} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="acquisti-container">
          <p className="totale-acquisti">Totale: €{totalAmount} </p>
          <button className="button-shop" onClick={() => navigate("/Products")}>
            Continua lo shopping
          </button>
          <button className="button-shop2">Vai al pagamento</button>
        </div>
      ) : (
        <h1 className="titolo-carrellovuoto">Il tuo carrello è vuoto!</h1>
      )}
    </div>
  );
};

export default Cart;
