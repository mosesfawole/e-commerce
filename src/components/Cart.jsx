import React from "react";

const Cart = () => {
  return (
    <div className="cart fixed bg-white right-10 top-20 w-1/5  shadow-2xl rounded-md ">
      <h1 className="font-bold px-4 py-2">Cart</h1>
      <hr />
      <div className="cartItems flex justify-center items-center  p-14">
        <p>Your cart is empty.</p>
      </div>
    </div>
  );
};

export default Cart;
