import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";


function Product({id,title,price,image,rating}) {
  // const {state,dispatch} = useStateValue();  
  // const addToBasket=()=>{
  //   dispatch({
  //     type: 'ADD_TO_BASKET',
  //     item:{
  //       id:id,
  //       title:title,
  //       image:image,
  //       price:price,
  //       rating:rating,
  //     },
  //   });
  // };

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
      {/* <button onClick={addToBasket}>Add to basket</button> */}
    </div>
  );
}

export default Product;
