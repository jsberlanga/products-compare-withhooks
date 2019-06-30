import React, { useEffect } from "react";

const Compare = ({ compareProduct }) => {
  console.log(compareProduct);

  useEffect(() => {});

  return (
    <>
      <h1>Compare Products</h1>
      <div className="products__compare">
        {compareProduct.map(cp => (
          <ul key={cp.id}>
            <h1>{cp.name}</h1>
            <p>{cp.description}</p>
            <p>{cp.price}</p>
            <p className={`condition condition__${cp.condition.toLowerCase()}`}>
              {cp.condition}
            </p>
            <p>
              Colors:{" "}
              {cp.colors.map(color => (
                <span className={`color color__${color}`} />
              ))}
            </p>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Compare;
