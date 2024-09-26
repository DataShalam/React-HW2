import React from "react";
import "./Product.css";

export default function Product({ imgSrc, productName, productDesc }) {
  return (
    <>
      <div className="product-card">
        <img className="product-image" src={imgSrc} alt={productName} />
        <h2 className="product-name">{productName}</h2>
        <p className="product-description">{productDesc}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </>
  );
}
