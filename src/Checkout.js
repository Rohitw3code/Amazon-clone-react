import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ads"
          alt=""
          src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/MayART_BankStripe_PC.jpg"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>

      <div className="chcekout__right">
        <div className="checkout__card">
          <p>Subtotal(2) items $250</p>
          <div className="checkout__gift">
            <input type="checkbox" />
            The order contain a gift
          </div>
          <button className="checkout__btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
