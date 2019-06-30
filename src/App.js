import React, { useState } from "react";
import Compare from "./components/Compare";
import ProductList from "./components/ProductList";

import { products } from "./products.json";

function App() {
  const [compareProduct, setCompareProduct] = useState([]);

  const compare = cp => {
    if (compareProduct.indexOf(cp) === -1) {
      setCompareProduct([...compareProduct, cp]);
    }
  };

  return (
    <div className="App">
      <ProductList products={products} compare={compare} />
      <Compare compareProduct={compareProduct} />
    </div>
  );
}

export default App;
