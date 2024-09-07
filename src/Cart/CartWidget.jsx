import React from "react";
import cartIcon from "../assets/cart.svg";

function CartWidget() {
  return (
    <div>
      <img src={cartIcon} width={50} height={50} className="cart" />
    </div>
  );
}

export default CartWidget;
