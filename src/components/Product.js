import React from "react";

const Product = ({ product, compare }) => {
  return (
    <div className={`product product-${product.id}`}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button className="primary-btn" onClick={() => compare(product)}>
        Compare
      </button>
    </div>
  );
};

export default Product;
