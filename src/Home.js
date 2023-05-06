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
            title="Fire-Boltt Ninja Call Pro Plus 1.83  Smart Watch with Bluetooth"
            id="1"
            price={29}
            rating={2}
            image="https://m.media-amazon.com/images/I/61S9aVnRZDL._SL1500_.jpg"
          />

          <Product
            title="Never Settle"
            id="2"
            price={29}
            rating={2}
            image="https://m.media-amazon.com/images/I/61LB+d0vheL._SL1500_.jpg"
          />
          <Product
            title="Washing Machine"
            id="3"
            price={29}
            rating={2}
            image="https://m.media-amazon.com/images/I/71voU7KCA3L._SL1500_.jpg"
          />
          <Product
            title="HP 15s, Intel Core i3-1115G4, 15.6 inch(39.6cm) FHD Anti-Glare Laptop"
            id="4"
            price={29}
            rating={2}
            image="https://m.media-amazon.com/images/I/81W7QY3IWtL._SX679_.jpg"
          />
        </div>

        <div className="home__row">
        <Product
            title="
            Fire TV Stick 4K with all-new Alexa Voice Remote (includes TV and app controls), Dolby Vision"
            id="5"
            price={37}
            rating={3}
            image="https://m.media-amazon.com/images/I/41OWnJPd45L._SL1000_.jpg"
          />
          <Product
            title="Never Settle"
            id="123456"
            price={29}
            rating={2}
            image="https://m.media-amazon.com/images/I/61LB+d0vheL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
        <Product
            title="Never Settle"
            id="123456"
            price={29}
            rating={2}
            image="https://m.media-amazon.com/images/I/61LB+d0vheL._SL1500_.jpg"
          />
          <Product
            title="Never Settle"
            id="123456"
            price={29}
            rating={2}
            image="https://m.media-amazon.com/images/I/61LB+d0vheL._SL1500_.jpg"
          />
          <Product
            title="Never Settle"
            id="123456"
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
