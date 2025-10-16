import logo from "../assets/logo.PNG";
import { useState } from "react";
import Cart from "./Cart";
import { NavLink } from 'react-router'

const Navbar = ({ openCart, setCartOpen, cart, setCart, cartOpen }) => {
  const [isOpen, setIsOpen] = useState(false);  

  return (
    <>
      <nav className="border-b border-stone-600 text-gray-300 z-10">
        <div>
          <h1 className="text-center text-[10px] md:text-[15px] bg-yellow-900 py-1 border-b border-gray-700">
            GET YOUR LUXURY WATCH TODAY STARTING FROM AS LOW AS ₦199,999
          </h1>
        </div>

        <div className="flex justify-between items-center px-2 md:px-4 py-1">
          <div className="flex gap-2">
            <button
              className="md:hidden text-gray-300 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
            <a href="#">
              <img src={logo} alt="" className="h-10 md:h-12" />
            </a>
          </div>

          {/* desktop nav */}
          <div className="hidden md:flex space-x-9 lg:space-x-15 font-semibold text-[14px]">
            <a href="#">
              <div className="relative group inline-block">
                <span className="">HOME</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
              </div>
            </a>
            <a href="#">
              <div className="relative group inline-block">
                <span className="">PRODUCTS</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
              </div>
            </a>
            <a href="#">
              <div className="relative group inline-block">
                <span className="">ABOUT</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
              </div>
            </a>
            <a href="#">
              <div className="relative group inline-block">
                <span className="">CONTACT US</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
              </div>
            </a>
          </div>

          <div class="flex space-x-2">
            <NavLink to="login">
              <i className="fa-regular fa-user text-xl md:text-2xl transition-all duration-200 hover:text-gray-500"></i>
            </NavLink>

            <button onClick={openCart}>
              <i className="fa-solid fa-basket-shopping text-xl md:text-2xl transition-all duration-200 hover:text-gray-500"></i>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed left-0 w-full h-screen bg-[#1e1e1e] text-gray-300 text-center space-y-5 border-t border-gray-600 px-6 py-8 z-40">
          <div className="w-[85vw] h-10 bg-gray-400 text-[#3f301d] rounded-xl flex justify-center items-center">
            <i className="fa-solid fa-magnifying-glass ml-2.5"></i>
            <input
              type="text"
              placeholder="What are you looking for?"
              name=""
              id=""
              className="bg-gray-400 placeholder-[#3f301d] rounded-xl flex-1 pl-2 focus:outline-0"
            />
          </div>

          <div className="flex justify-between mx-6 my-10 text-[15px]">
            <div className="flex flex-col space-y-7">
              <a href="">
                <div className="relative group inline-block">
                  <span className="">HOME</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a href="">
                <div className="relative group inline-block">
                  <span className="">PRODUCTS</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a href="">
                <div className="relative group inline-block">
                  <span className="">ABOUT</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a href="">
                <div className="relative group inline-block">
                  <span className="">CONTACT US</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
            </div>

            <div className="flex flex-col space-y-7">
              <a href="">
                <div className="relative group inline-block">
                  <span className="">MEN</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a href="">
                <div className="relative group inline-block">
                  <span className="">WOMEN</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a href="">
                <div className="relative group inline-block">
                  <span className="">BRANDS</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a href="">
                <div className="relative group inline-block">
                  <span className="">ACCESSORIES</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
      { cartOpen && <Cart cart={cart} setCart={setCart} setCartOpen={setCartOpen} /> }
    </>
  );
};

export default Navbar;
