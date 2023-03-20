import React, { useEffect, useState } from "react";
import { products } from "../lib/product";
import Plus from "../images/icon-plus.svg";
import Minus from "../images/icon-minus.svg";
import Next from "../images/icon-next.svg";
import Previous from "../images/icon-previous.svg";

import CartIcon from "../images/icon-cart.svg";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { toast } from "react-hot-toast";

function ProductCard(props) {
  const { product } = props;

  const [index, setIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  const handleOpenLightBox = () => {
    setLightBoxOpen(true);
  };

  const handleCloseLightBox = () => {
    setLightBoxOpen(false);
  };

  const boxImages = products.map((item) => item.images).flat();
  const handleNext = () => {
    setLightboxIndex(
      lightboxIndex === boxImages.length - 1 ? 0 : lightboxIndex + 1
    );
  };

  const handlePrev = () => {
    setLightboxIndex(
      lightboxIndex === 0 ? boxImages.length - 1 : lightboxIndex - 1
    );
  };
  return (
    <div className="md:mt-12">
      <div className="">
        <div className="">
          <div className="main md:flex  justify-evenly  ">
            {products.map((item) => (
              <div
                className="hidden md:flex md:flex-col md:w-1/3 gap-4"
                key={item.id}
              >
                <img
                  className=" md:rounded-xl cursor-pointer "
                  loading="lazy"
                  src={item.images && item.images[index]}
                  alt={product.name}
                  onClick={handleOpenLightBox}
                />
                <div className="small hidden md:grid grid-cols-4 gap-10  ">
                  {item.images?.map((item, i) => (
                    <img
                      key={i}
                      src={item}
                      alt={i}
                      className={`${
                        i === index
                          ? "border-2  border-[#ff7d1a] opacity-30"
                          : ""
                      }  rounded-lg    `}
                      onMouseEnter={() => setIndex(i)}
                    />
                  ))}
                </div>
              </div>
            ))}
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
                {products.map((item) => (
                  <SplideTrack key={item.id}>
                    {item.images.map((item) => {
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
                ))}
              </Splide>
            </div>

            <div className="texts grid md:w-2/5 p-4">
              <p className="title leading-8 md:leading-10 text-sm font-bold uppercase text-[#ff7d1a] ">
                {product.title}
              </p>
              <p className="name font-bold capitalize text-3xl md:text-4xl  leading-8">
                {product.name}
              </p>
              <p className="about mt-4 text-sm leading-8 text-[#68707d]">
                {product.about}
              </p>
              <div className="prices flex items-center mt-6 p-2 md:p-0">
                <div className="first flex items-center flex-1 gap-4  ">
                  <span className="price font-bold text-[#1d2025] text-3xl">
                    ${product.price}
                  </span>
                  <span className="discount text-sm rounded-md   px-2 py-1 text-[#ff7d1a] bg-[#ffede0]">
                    {(product.price / product.initialPrice) * 100}%
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
              <div className="buttons md:mt-4 flex mt-4 items-center md:px-0 flex-col md:flex-row gap-4   ">
                <div className="flex justify-between items-center w-1/2 p-3  rounded-lg bg-[#f7f8fd]">
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      cart.removeOneFromCart(product.id);
                    }}
                  >
                    <img src={Minus} alt="minus" />
                  </span>
                  <p className="font-bold">{productQuantity}</p>
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      cart.addOneToCart(product.id);
                    }}
                  >
                    <img src={Plus} alt="plus" />
                  </span>
                </div>

                <button
                  className="flex w-full items-center gap-4 justify-center  p-3 rounded-lg  bg-[#ff7d1a]  text-white font-bold
                    hover:shadow-2xl hover:opacity-80
                    "
                  type="button"
                  onClick={() => cart.addOneToCart(product.id)}
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
        </div>
      </div>
      {lightBoxOpen && (
        <div className="fixed inset-0 z-40 overflow-auto bg-gray-900 bg-opacity-80">
          {products.map((item, i) => (
            <div
              className="hidden md:flex flex-col justify-center items-center   min-h-screen m-auto md:w-1/3 gap-4 relative"
              key={item.id}
            >
              <button
                onClick={handleCloseLightBox}
                className="absolute right-0 top-10 hover:str"
              >
                <svg
                  width="14"
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white stroke-white hover:stroke-[#ff7d1a] hover:fill-[#ff7d1a]"
                >
                  <path
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              <div className="">
                <img
                  className=" relative md:rounded-xl "
                  loading="lazy"
                  src={item.images && item.images[lightboxIndex]}
                  alt={product.name}
                />
                <div className="buttons b ">
                  <button
                    className="prev bg-white w-10 h-10  hover:stroke-[#ff7d1a] rounded-full flex items-center justify-center absolute top-60 -left-4"
                    onClick={handlePrev}
                  >
                    <svg
                      width="12"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-black m-auto hover:stroke-[#ff7d1a] "
                    >
                      <path
                        d="M11 1 3 9l8 8"
                        strokeWidth="3"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    className="next bg-white w-10 h-10  rounded-full   absolute top-60 -right-4"
                    onClick={handleNext}
                  >
                    <svg
                      width="13"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-black m-auto hover:stroke-[#ff7d1a]"
                    >
                      <path
                        d="m2 1 8 8-8 8"
                        strokeWidth="3"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* lightbox desing */}
              <div className="small  hidden md:grid grid-cols-4 gap-10  ">
                {item.images?.map((item, i) => (
                  <img
                    key={i}
                    src={item}
                    alt={i}
                    className={`${
                      i === lightboxIndex
                        ? " border-2  border-[#ff7d1a] opacity-30"
                        : ""
                    }  rounded-lg  cursor-pointer  `}
                    // onMouseEnter={() => setLightboxIndex(i)}
                    // onClick={handleOpenLightBox}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductCard;
