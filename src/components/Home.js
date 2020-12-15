import React from "react";
import Product from "./Product";
import HomeImage from "../assets/the-wilds.jpg";
import EchoDot from "./../assets/echo-dot.jpg";
import WeightedBlanketImage from "./../assets/weighted-blanket.jpg";
import CarharttBeanie from "./../assets/carhartt-beanie.jpg";
import ZZZQuil from "./../assets/zzz.jpg";
import EloquentJavaScript from "./../assets/eloquent-javascript.jpg";
import "./../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={HomeImage} alt="background-img" />

        <div className="home__row">
          <Product
            id="1"
            title="Sunbeam Extra Warm Weighted Blanket | 15 Pounds, Reversible Plush Velvet/Microfiber with Arm Slits and Neck Cutout, 54” x 73”, Mushroom"
            price={82.44}
            rating={4.5}
            image={WeightedBlanketImage}
          />
          <Product
            id="1"
            title="All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal"
            price={29.99}
            rating={4}
            image={EchoDot}
          />
        </div>

        <div className="home__row">
          <Product
            id="1"
            title="ZzzQuil Pure Zzzs Melatonin Sleep Aid Gummies, 72 ct, with Chamomile, Lavender and Valerian Root, Natural Flavor"
            price={16.32}
            rating={5}
            image={ZZZQuil}
          />
          <Product
            id="1"
            title="Carhartt Men's Knit Cuffed Beanie"
            price={29.99}
            rating={5}
            image={CarharttBeanie}
          />
         <Product
            id="1"
            title="Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming"
            price={22.99}
            rating={5}
            image={EloquentJavaScript}
          />
        </div>
        <div className="home__row">
          
        </div>
      </div>
    </div>
  );
}

export default Home;
