import React from "react";
import { products } from "../products.json";
import Product from "./Product";

const ProductList = () => {
  return (
    <div>
      <h1>Products List</h1>
      <div className="products">
        {products.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
