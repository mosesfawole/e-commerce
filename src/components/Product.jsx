import React, { useEffect, useState } from "react";
import { products, images } from "../lib/product";
import Plus from "../images/icon-plus.svg";
import Minus from "../images/icon-minus.svg";
import CartIcon from "../images/icon-cart.svg";
const Product = () => {
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const incQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const Popup = () => {
    alert("item added to cart");
  };
  return (
    <div>
      {products.map((product) => (
        <div className="" key={product.name}>
          <div className="image">
            <div className="main">
              <img
                className="w-full"
                loading="lazy"
                src={images && images[index]}
                alt={product.name}
              />
            </div>
            <div className="small">
              {images?.map((item, i) => (
                <img key={i} src={item} alt={i} />
              ))}
            </div>
          </div>
          <div className="texts p-4">
            <p className="title leading-8 text-sm font-bold uppercase text-[#ff7d1a] ">
              {product.title}
            </p>
            <p className="name font-bold capitalize text-3xl leading-8">
              {product.name}
            </p>
            <p className="about mt-4 text-md leading-8 text-[#68707d]">
              {product.about}
            </p>
            <div className="prices flex items-center mt-6 p-2">
              <div className="first flex items-center flex-1 gap-4  ">
                <span className="price font-bold text-[#1d2025] text-3xl">
                  ${product.price}
                </span>
                <span className="discount text-sm rounded-md   px-2 py-1 text-[#ff7d1a] bg-[#ffede0]">
                  {product.discount}%
                </span>
              </div>
              <div className="second">
                <span className="initialPrice font-bold line-through text-[#b6bcc8]">
                  ${product.initialPrice}
                </span>
              </div>
            </div>
          </div>
          <div className="buttons flex px-6 flex-col justify-center">
            <div className="flex justify-between p-3 rounded-lg bg-[#f7f8fd]">
              <button type="button" onClick={decQuantity}>
                <img src={Minus} alt="minus" />
              </button>
              <p className="font-bold">{quantity}</p>
              <button type="button" onClick={incQuantity}>
                <img src={Plus} alt="plus" />
              </button>
            </div>
            <button
              onClick={Popup}
              className="flex items-center gap-4 justify-center mt-4 p-3 rounded-lg  bg-[#ff7d1a] text-white font-bold"
              type="button"
            >
              {/* <CartIcon /> */}
              <img
                className="fill-current text-white"
                src={CartIcon}
                alt="cart-icon"
              />
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
