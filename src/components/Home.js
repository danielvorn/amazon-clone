import React from "react";
import Product from "./Product";
import HomeImage from "../assets/the-wilds.jpg";
import ZeroToOneCover from "./../assets/zero-to-one.jpg";
import "./../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={HomeImage} alt="background-img" />

        <div className="home__row">
          <Product 
          id="1"
          title="Zero to One"
          price={7.99}
          rating={4}
          image={ZeroToOneCover}/>
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
