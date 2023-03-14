import React, { useContext, useRef } from "react";
import { useEffect } from "react";
import { CartContext } from "../context/CartContext";
import Delete from "../images/icon-delete.svg";
const Cart = () => {
  const cart = useContext(CartContext);
  const cartItems = cart.items;

  const productsCount = cartItems.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  console.log(cart.items);
  return (
    <div className="cart fixed bg-white right-10 top-20 w-1/4  shadow-2xl rounded-md ">
      <h1 className="font-bold px-4 py-2">Cart</h1>
      <hr />
      <div className="cartItems flex flex-col justify-center items-center gap-4  p-4">
        {productsCount > 0 ? (
          <>
            {cartItems.map((item) => (
              <div key={item.id}>
                <div className="flex gap-2">
                  <div className="w-1/5">
                    {/* image */}
                    <img src="" className="w-1/5" alt="image" />
                  </div>
                  <div className="text-[#68707d] text-[12px]">
                    <p className="capitalize ">{item.name}</p>
                    <p>
                      {item.price}* {item.quantity}{" "}
                      <span className="text-black font-bold">
                        {cart.getTotalCost().toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <div
                    className="del cursor-pointer"
                    onClick={() => cart.deleteFromCart(product.id)}
                  >
                    <img src={Delete} alt="delete" />
                  </div>
                </div>

                <button className="rounded-lg w-full p-2 bg-[#ff7d1a] text-white text-xs  ">
                  Checkout
                </button>
              </div>
            ))}
          </>
        ) : (
          <>Your cart is empty</>
        )}
      </div>
    </div>
  );
};

export default Cart;
