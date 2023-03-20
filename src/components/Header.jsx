import { useContext, useState, useRef, useEffect } from "react";
import Logo from "../images/logo.svg";
import CartIcon from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import MenuIcon from "../images/icon-menu.svg";
import CloseIcon from "../images/icon-close.svg";
import list from "../lib/menu";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";
const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const handleMenu = () => {
    setIsMenu(true);
    console.log(isMenu);
  };
  const closeMenu = () => {
    setIsMenu(false);
  };
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="">
      {showCart ? <Cart /> : ""}
      <div className="flex p-6 md:px-10 items-center">
        <div className="left flex flex-1 items-center md:gap-12 gap-4 ">
          <div className="hamburger md:hidden" onClick={handleMenu}>
            <img src={MenuIcon} alt="hamburger menu" />
          </div>
          <div className="logo cursor-pointer">
            <img src={Logo} alt="logo" />
          </div>
          <div className="navs">
            <ul className="hidden absolute top-[35px]  md:flex gap-8">
              {list.map((item, index) => (
                <li
                  key={index}
                  className="hover:border-b-4 pb-6 border-[#ff7d1a] "
                >
                  <a className="" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className={isMenu ? "block" : "hidden"}>
              <div className="overlay fixed right-0 top-0 w-full z-30 h-full bg-[#00000091]"></div>
              <div className="bg-white fixed left-0 top-0 p-6 z-30 w-[70%] h-full">
                <div className="" onClick={closeMenu}>
                  <img src={CloseIcon} alt="close-icon" />
                </div>
                <ul className="font-bold mt-10 flex flex-col gap-4  text-md">
                  <li>Collections</li>
                  <li>Men</li>
                  <li>Women</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex items-center md:justify-center justify-end gap-6">
          <div
            className="cart-icon cursor-pointer relative"
            onClick={toggleCart}
          >
            <img src={CartIcon} alt="cart-icon" />
            <span className="inline-flex text-white text-[9px] rounded-full h-2 items-center justify-center w-3 bg-[#ff7d1a] absolute top-0 right-0">
              {productsCount}
            </span>
          </div>
          <div className="avatar cursor-pointer w-1/4">
            <img src={Avatar} alt="avatar" />
          </div>
        </div>
      </div>
      <hr className="hidden md:flex m-auto" />
    </div>
  );
};

export default Header;
