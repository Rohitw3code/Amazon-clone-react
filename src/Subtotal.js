import React from "react";

function Subtotal() {
  return (
    <div className="subtotal">
      <p>
        Subtotal (0 items): <strong>0</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbtn" />
        This order contains a gift
      </small>
    </div>
  );
}

export default Subtotal;

{
  /* <div className="subtotal">
<CurrencyFormat
  renderFormat={(value) => (
    <>
      <p>
        Subtotal (0 items): <strong>0</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbtn" />
        This order contains a gift
      </small>
    </>
  )}
  decimalScale={2}
  value={getBasketTotal(basket)}
  displayType={"text"}
  thousandSeparator={true}
  prefix={"$"}
/>
</div> */
}
