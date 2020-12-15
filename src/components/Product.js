import React from "react";
import "./../styles/Product.css";
import Rating from '@material-ui/lab/Rating';

const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
        <Rating name="read-only" value={rating} readOnly />
        </div>
      </div>
      

      <img src={image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
