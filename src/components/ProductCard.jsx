import React, { useState } from "react";
import { products, images } from "../lib/product";
import Plus from "../images/icon-plus.svg";
import Minus from "../images/icon-minus.svg";
import CartIcon from "../images/icon-cart.svg";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function ProductCard(props) {
  const product = props.product;

  const [index, setIndex] = useState(0);
  const cart = useContext(CartContext);
  // const productQuantity = cart.getProductQuantity(product.id);
  return (
    <div className="mt-12">
      <div className="">
        <div className="">
          <div className="main md:flex justify-evenly items-center">
            <div className="hidden md:flex md:basis-2/6">
              <img
                className=" md:rounded-xl w-full md:h-1/2"
                loading="lazy"
                src={images && images[index]}
                alt={product.name}
              />
            </div>
            <div className="md:hidden">
              <Splide
                hasTrack={false}
                aria-label="..."
                options={{
                  perPage: 1,
                  pagination: false,
                  drag: "free",
                  type: "loop",
                  breakpoints: {
                    768: {
                      perPage: 1,
                    },
                  },
                }}
              >
                <SplideTrack>
                  {images.map((item) => {
                    return (
                      <SplideSlide key={item}>
                        <div className="">
                          <img
                            // key={index}
                            src={item}
                            alt={index}
                            className="md:w-1/4 w-full"
                          />
                        </div>
                      </SplideSlide>
                    );
                  })}
                  {/* </div> */}
                </SplideTrack>
              </Splide>
            </div>

            <div className="texts flex flex-col md:basis-2/6 p-4">
              <p className="title leading-8 md:leading-10 text-sm font-bold uppercase text-[#ff7d1a] ">
                {product.title}
              </p>
              <p className="name font-bold capitalize text-3xl md:text-4xl  leading-8">
                {product.name}
              </p>
              <p className="about mt-4 text-md leading-8 text-[#68707d]">
                {product.about}
              </p>
              <div className="prices flex items-center mt-6 p-2 md:p-0">
                <div className="first flex items-center flex-1 gap-4  ">
                  <span className="price font-bold text-[#1d2025] text-3xl">
                    ${product.price}
                  </span>
                  <span className="discount text-sm rounded-md   px-2 py-1 text-[#ff7d1a] bg-[#ffede0]">
                    {product.discount}%
                  </span>
                </div>
                <div className="second md:hidden">
                  <span className="initialPrice font-bold line-through text-[#b6bcc8]">
                    ${product.initialPrice}
                  </span>
                </div>
              </div>
              <div className="second hidden md:flex mt-2">
                <span className="initialPrice font-bold line-through text-[#b6bcc8]">
                  ${product.initialPrice}
                </span>
              </div>
              <div className="buttons md:mt-4 flex mt-4 md:px-0 flex-col md:flex-row gap-4   ">
                <button className="flex justify-between items-center w-full p-3  rounded-lg bg-[#f7f8fd]">
                  {/* <span onClick={decQuantity}>
                      <img src={Minus} alt="minus" />
                    </span> */}
                  <p className="font-bold"></p>
                  {/* <span onClick={incQuantity}>
                      <img src={Plus} alt="plus" />
                    </span> */}
                </button>
                <button
                  className="flex w-full items-center gap-4 justify-center  p-3 rounded-lg  bg-[#ff7d1a]  text-white font-bold
                    hover:shadow-2xl hover:opacity-80
                    "
                  type="button"
                >
                  {/* <CartIcon /> */}
                  <img
                    className="fill-current to-white text-white"
                    src={CartIcon}
                    alt="cart-icon"
                  />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="small hidden md:flex ml-36 mt-10 md:w-[25%] gap-10  ">
            {images?.map((item, i) => (
              <img
                key={i}
                src={item}
                alt={i}
                className="rounded-lg hover:opacity-50 cursor-pointer w-1/4"
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
