import React from "react";
import ProductCard from "./components/ProductCard";
import { products } from "./lib/product";
const Store = () => {
  return (
    <div>
      {products.map((product, index) => (
        <div className="" key={index}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default Store;
