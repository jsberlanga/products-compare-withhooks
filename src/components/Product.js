import React from "react";
import CompareProduct from "./CompareProduct";

const Product = ({ product }) => {
  return (
    <div className={`product product-${product.id}`}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <CompareProduct />
    </div>
  );
};

export default Product;
