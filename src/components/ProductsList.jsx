import React from "react";
import Product from "./Product";

export default function ProductsList({ products, addProductToCart }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {products.map((product) => (
        <Product
          key={product.id}
          {...product}
          addProductToCart={addProductToCart}
        />
      ))}
    </div>
  );
}
