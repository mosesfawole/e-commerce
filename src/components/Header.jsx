import React from "react";
import Logo from "../images/logo.svg";
import CartIcon from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import MenuIcon from "../images/icon-menu.svg";
import CloseIcon from "../images/icon-close.svg";
const Header = () => {
  return (
    <div className="">
      <div className="flex p-6 md:px-10 items-center">
        <div className="left flex flex-1 items-center md:gap-12 gap-4 ">
          <div className="hamburger md:hidden">
            <img src={MenuIcon} alt="hamburger menu" />
          </div>
          <div className="logo ">
            <img src={Logo} alt="logo" />
          </div>
          <div className="navs">
            <ul className="hidden md:flex gap-8">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <div className="md:hiddden bg-white fixed left-0 top-0 p-6 w-[70%] h-full ">
              <div className="">
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
        <div className="right flex items-center md:justify-center justify-end gap-6">
          <div className="cart-icon">
            <img src={CartIcon} alt="cart-icon" />
          </div>
          <div className="avatar w-1/4">
            <img src={Avatar} alt="avatar" />
          </div>
        </div>
      </div>
      <hr className="hidden md:flex m-auto" />
    </div>
  );
};

export default Header;
