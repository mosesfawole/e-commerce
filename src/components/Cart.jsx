import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
    const cart = useSelector((state)=> state.cart)
  return (
    <div className="cart fixed bg-white right-10 top-20 w-1/5  shadow-2xl rounded-md ">
      <h1 className="font-bold px-4 py-2">Cart</h1>
      <hr />
      <div className="cartItems flex justify-center items-center  p-14">
        
              {cart?.map((item) => (
                  <CartItem
                  key={item.id}
                  />
              ))}
              <p>Your cart is empty.</p>
      </div>
    </div>
  );
};

export default Cart;
