import React, { useContext, useRef } from "react";
import { useEffect } from "react";
import { CartContext } from "../context/CartContext";
import Delete from "../images/icon-delete.svg";
import { toast } from "react-hot-toast";
const Cart = () => {
  const cart = useContext(CartContext);
  const cartItems = cart.items;

  const productsCount = cartItems.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const lo = cartItems.map((item) => item.id);
  const handleCheckout = () => {
    toast.success(`${productsCount} items successfuly purchased`);
    cart.deleteFromCart(lo);
  };
  return (
    <div className="cart fixed bg-white left-2 right-2 top-36 h-2/5 md:h-auto md:left-auto md:right-10 md:top-20 md:w-1/4 z-10  shadow-2xl rounded-md ">
      <h1 className="font-bold px-4 py-2">Cart</h1>
      <hr />
      <div className="cartItems flex flex-col justify-center items-center gap-4 p-4">
        {productsCount > 0 ? (
          <>
            {cartItems.map((item) => (
              <div className="flex flex-col gap-4 " key={item.id}>
                <div className="flex items-center gap-2">
                  <div className="w-1/5">
                    {/* image */}
                    <img
                      src={item.image}
                      className="rounded-[4px]"
                      alt="image"
                    />
                  </div>
                  <div className="flex flex-col w-full text-[#68707d] md:text-xs">
                    <p className="capitalize ">{item.name}</p>
                    <p>
                      ${item.price} x {item.quantity}{" "}
                      <span className="text-black font-bold">
                        ${cart.getTotalCost().toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <div
                    className="del cursor-pointer"
                    onClick={() => cart.deleteFromCart(item.id)}
                  >
                    <img src={Delete} alt="delete" />
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="rounded-lg w-full p-3 md:p-2 bg-[#ff7d1a] text-white md:text-xs  "
                >
                  Checkout
                </button>
              </div>
            ))}
          </>
        ) : (
          <div className="">
            <p>Your cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
