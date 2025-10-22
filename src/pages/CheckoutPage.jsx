import logo from "../assets/logo.PNG";
import { NavLink } from "react-router";
import Loader from "../components/Loader";
import Review from "../components/Review";

const CheckoutPage = ({
  cart,
  isOpen,
  setIsOpen,
  shipping,
  total,
  subtotal,
  removeFromCart,
  pageLoading,
  incrementQuantity,
}) => {
  if (pageLoading) {
    return <Loader />;
  }

  return (
    <>
      {pageLoading && <Loader />}
      <div className="bg-gray-50 h-[100vh] w-[full]">
        <nav className="bg-gray-900 border-b border-stone-600 text-gray-300 z-10">
          <div>
            <h1 className="text-center text-[10px] md:text-[15px] bg-yellow-900 py-1 border-b border-gray-700">
              GET YOUR LUXURY WATCH TODAY STARTING FROM AS LOW AS $80
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
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
              <NavLink to="/">
                <img src={logo} alt="" className="h-10 md:h-12" />
              </NavLink>
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
              <NavLink to="/login">
                <i className="fa-regular fa-user text-xl md:text-2xl transition-all duration-200 hover:text-gray-500"></i>
              </NavLink>
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
                <NavLink to="/">
                  <div className="relative group inline-block">
                    <span className="">HOME</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
                  </div>
                </NavLink>
                <NavLink to="/">
                  <div className="relative group inline-block">
                    <span className="">PRODUCTS</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
                  </div>
                </NavLink>
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

        <div className="bg-gray-300 h-[20vh] py-7 w-screen mx-auto flex flex-col items-center justify-center space-y-2 md:space-y-6">
          <h1 className="text-[25px] md:text-4xl font-semibold">Checkout</h1>
          <div className="flex w-[50vw] justify-between md:justify-evenly md:-space-x-3 md:text-xl">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Shop</NavLink>
            <button className="text-gray-600">Checkout</button>
          </div>
        </div>

        <Review
          shipping={shipping}
          total={total}
          subtotal={subtotal}
          cart={cart}
          incrementQuantity={incrementQuantity}
          removeFromCart={removeFromCart}
        />
      </div>
    </>
  );
};

export default CheckoutPage;
