import React, { useEffect, useState } from "react";
import products, { images } from "../lib/product";
const Product = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    console.log(images);
  });
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
          <div className="texts p-6">
            <p className="title leading-8 text-sm font-bold uppercase text-[#ff7d1a] ">
              {product.title}
            </p>
            <p className="name font-bold capitalize text-3xl leading-8">
              {product.name}
            </p>
            <p className="about mt-4  text-[#68707d]">{product.about}</p>
            <div className="prices flex items-center mt-6">
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
        </div>
      ))}
    </div>
  );
};

export default Product;
