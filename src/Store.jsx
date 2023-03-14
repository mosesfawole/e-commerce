import React from "react";
import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";
import { products } from "./lib/product";
const Store = () => {
  return (
    <div>
      {products.map((product, index) => (
        <div className="" key={index}>
          <ProductCard product={product} />
          {/* <Cart product={product} /> */}
        </div>
      ))}
    </div>
  );
};

export default Store;
