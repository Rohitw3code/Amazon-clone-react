import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt=""
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/MayArt23/bengali/GW_D23_Hero_PC_SN_2x_EN._CB589422541_.jpg"
        />

        <div className="home__row">
          <Product
            title="Never Settle"
            price={29}
            rating={2}
            image="https://m.media-amazon.com/images/I/61LB+d0vheL._SL1500_.jpg"
          />

          <Product
            title="Never Settle"
            price={29}
            rating={2}
            image="https://m.media-amazon.com/images/I/61LB+d0vheL._SL1500_.jpg"
          />
          <Product
            title="Never Settle"
            price={29}
            rating={2}
            image="https://m.media-amazon.com/images/I/61LB+d0vheL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            title="Never Settle"
            price={29}
            rating={1}
            image="https://m.media-amazon.com/images/I/61LB+d0vheL._SL1500_.jpg"
          />
          <Product
            title="Never Settle"
            price={29}
            rating={5}
            image="https://m.media-amazon.com/images/I/61LB+d0vheL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            title="Never Settle"
            price={29}
            rating={3}
            image="https://m.media-amazon.com/images/I/61LB+d0vheL._SL1500_.jpg"
          />
          <Product
            title="Never Settle"
            price={29}
            rating={2}
            image="https://m.media-amazon.com/images/I/61LB+d0vheL._SL1500_.jpg"
          />
          <Product
            title="Never Settle"
            price={29}
            rating={2}
            image="https://m.media-amazon.com/images/I/61LB+d0vheL._SL1500_.jpg"
          />
          <Product
            title="Never Settle"
            price={29}
            rating={2}
            image="https://m.media-amazon.com/images/I/61LB+d0vheL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
