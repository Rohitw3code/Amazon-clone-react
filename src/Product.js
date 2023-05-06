import React from "react";
import "./Product.css";
import { Button } from "@mui/material";

function Product({title,price,image,rating}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          $<strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating).fill().map((_,i) => (<p>⭐</p>))}
        </div>
      </div>
      <img
        alt=""
        src={image}
      />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
