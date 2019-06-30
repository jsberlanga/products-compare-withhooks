import React from "react";
import Product from "./Product";

const ProductList = ({ products, compare }) => {
  return (
    <div>
      <h1>Products List</h1>
      <div className="products">
        {products.map(product => (
          <Product product={product} key={product.id} compare={compare} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
