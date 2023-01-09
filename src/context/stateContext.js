import { createContext, useContext, useState } from "react";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item.id === product.id);
  };
  setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
  setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

  if (checkProductInCart) {
    const updatedCartItems = cartItems.map((cartProduct) => {
      if (cartProduct.id === product.id)
        return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity,
        };
    });
    setCartItems(updatedCartItems);
  } else {
    product.quantity = quantity;

    setCartItems([...cartItems, { ...product }]);
  }
  console.log(`${qty} ${product.name} added to the cart`);
};
