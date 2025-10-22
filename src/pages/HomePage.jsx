import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
// import products from "../products.json";
import bg3 from "../assets/paul-cuoco-CO2vOhPqlrM-unsplash.jpg";
import rolex from "../assets/Rolex.jpg";
import cartier from "../assets/Cartier.jpg";
import photo1 from "../assets/downextra1.jpg";
import photo2 from "../assets/downextra2.jpg";
import img1 from "../assets/IMGS/shahrukh-rehman-05IxAEjVNl0-unsplash.jpg";
import img2 from "../assets/IMGS/jonas-b-AVSxYIcBxoM-unsplash.jpg";

const HomePage = ({
  cart,
  cartOpen,
  setCart,
  setCartOpen,
  addToCart,
  loading,
  openCart,
  isOpen,
  setIsOpen,
  shipping,
  total,
  subtotal,
  pageLoading,
  removeFromCart,
  incrementQuantity,
}) => {
  const [showCartIcon, setShowCartIcon] = useState(false);
  const [products, setProducts] = useState([]);
  //   const [onsaleProducts, setOnsaleProducts] = useState([]);
  const productsRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/mens-watches")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products/category/jewelery")
  //     .then((response) => {
  //       const normalized = response.data.map((p) => ({
  //         ...p,
  //         images: [p.image],
  //       }));
  //       setOnsaleProducts(normalized);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //     });
  // }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", cartOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [cartOpen]);

  useEffect(() => {
    const target = productsRef.current;
    if (!target) return;

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          setShowCartIcon(entries[0].isIntersecting);
        },
        { threshold: 0.1 }
      );
      observer.observe(target);
      return () => observer.disconnect();
    }
  }, []);

  if (pageLoading) {
    return <Loader />;
  }

  return (
    <>
      {pageLoading && <Loader />}
      {/* nav area */}
      <div
        className={`${
          pageLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-700`}
      >
        <Navbar
          setCartOpen={setCartOpen}
          cartOpen={cartOpen}
          cart={cart}
          setCart={setCart}
          addToCart={addToCart}
          openCart={openCart}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          shipping={shipping}
          total={total}
          subtotal={subtotal}
          removeFromCart={removeFromCart}
        />

        {/* hero section */}
        <div className="relative w-screen h-full flex justify-between">
          <div>
            <img src={bg3} alt="" className="backdrop-blur-2xl" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-[#4e342e]/80 via-[#6d4c41]/60 to-transparent"></div>

          <div className="absolute inset-0 flex justify-between items-start mt-2 md:-mt-4 lg:mt-8 tracking-tight mx-3 md:mx-10">
            <div className="space-y-1 md:space-y-4 flex flex-col md:tracking-tight mt-3 md:mt-15">
              <h1 className="text-3xl md:text-5xl w-[90vw] md:w-[55vw] font-bold text-gray-300">
                Elegant Time for Elegant People
              </h1>
              <p className="text-gray-400 text-sm md:text-xl">
                Discover A World Full Of Elegant Watches
              </p>
              <a
                href="#products"
                className="bg-yellow-500 py-1 w-20 mt-5 md:mt-1 md:w-27 text-[12px] text-center md:text-[16px] rounded-md hover:bg-yellow-600"
              >
                SHOP NOW
              </a>

              <p className="leading-[0.3] hidden md:flex flex-col mt-3 md:text-lg w-68 tracking-tighter text-gray-300">
                <span className="text-4xl font-serif">"</span>
                <span className="text-lg md:text-xl">
                  A wristwatch isn’t just about telling time — it’s about
                  telling the world you value it.
                </span>
                <span className="text-4xl font-serif">"</span>{" "}
                <span className="text-[16px] block opacity-80">
                  — Timeless Wisdom
                </span>
              </p>
            </div>

            {/* <p className='md:hidden mt-10 text-sm w-[40vw] tracking-tighter text-gray-300'><span className='text-xl font-serif'>"</span>A wristwatch isn’t just about telling time — it’s about telling the world you value it.<span className='text-xl font-serif'>"</span> <span className="text-sm block opacity-80">— Timeless Wisdom</span></p> */}

            <p className="hidden tracking-wide md:flex flex-col text-xl w-70 text-gray-300 mt-40">
              <span className="text-3xl font-serif">"</span>
              <i>
                A gentleman's choice of timepiece says as much about him as does
                his tailor.
              </i>
              <span className="text-3xl font-serif">"</span>{" "}
              <span className="text-[16px] block opacity-80">
                — Unknown Watchmaker's Proverb
              </span>
            </p>
          </div>

          <div className="absolute inset-0 flex flex-col items-end justify-center mt-17 tracking-tight mx-11 space-y-6 w-[45vw]">
            <h1 className="text-gray-300"></h1>
          </div>
        </div>

        {/* shop by brands */}
        <div id="wrapper" className="mt-10">
          <h1 className="mx-11 text-gray-200 text-2xl font-semibold text-center mb-6">
            Shop By Brands
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mx-1 md:mx-5 lg:mx-20 md:-space-y-2">
            <button className="bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200">
              Richard Mille
            </button>
            <button className="bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200">
              Rolex
            </button>
            <button className="bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200">
              OMEGA
            </button>
            <button className="bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200">
              Franck Muller
            </button>
            <button className="bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200">
              BAUME & MERCIER
            </button>
            <button className="bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200">
              Jaeger-LeCoultre
            </button>
            <button className="bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200">
              Cartier
            </button>
            <button className="bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200">
              Vacheron Constantin
            </button>
            <button className="bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200">
              Panerai
            </button>
            <button className="bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200">
              Audemars Piguet
            </button>
          </div>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-around lg:-space-x-50 items-center mt-15 md:mt-13">
            <div className="relative h-[50vh] w-[85vw] md:h-[40vh] md:w-[47vw] lg:h-[70vh] lg:w-[40vw]">
              <img
                src={rolex}
                alt=""
                className="rounded-md w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex justify-end mb-6 md:mb-10 mr-3 md:mr-5 items-end tracking-tight">
                <button className="bg-gray-300 border px-2 md:px-4 md:py-1 rounded-md cursor-pointer">
                  <a href="#products">SHOP NOW</a>
                </button>
              </div>
            </div>
            <div className="relative h-[50vh] w-[85vw] md:h-[40vh] md:w-[47vw] lg:h-[70vh] lg:w-[40vw]">
              <img
                src={cartier}
                alt=""
                className="rounded-md w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex justify-end mb-6 md:mb-10 mr-3 md:mr-5 items-end tracking-tight">
                <button className="bg-gray-300 border px-2 md:px-4 md:py-1 rounded-md cursor-pointer">
                  <a href="#products">SHOP NOW</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* featured product */}
        <div className="relative">
          <div
            id="products"
            ref={productsRef}
            className="bg-gray-100 rounded-2xl w-screen mt-25 overflow-x-hidden"
          >
            <div className="space-y-8 md:space-y-12 mt-16">
              <h1 className="text-gray-950 text-center text-3xl md:text-4xl font-semibold">
                Featured Products
              </h1>

              <div className="flex flex-wrap text-gray-950 justify-center items-center space-y-3 md:-space-y-10 lg:space-y-0 gap-0.5 mt-5 mb-15">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-md flex flex-col items-center tracking-tight justify-center space-y-2 w-[170px] h-[300px] md:w-[250px] md:h-[385px] transition duration-200"
                  >
                    <div className="flex justify-center">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-[80%] object-cover"
                      />
                    </div>
                    <p className="text-sm md:text-md text-center mx-4">
                      {product.title}
                    </p>
                    <div>({product.rating} verified ratings)</div>
                    <div className="flex items-center flex-col gap-2">
                      <div className="flex">
                        <p>${product.price.toLocaleString("en-US")}</p>
                        {/* <p className="line-through text-red-400">
                          {product.initialPrice}
                        </p> */}
                      </div>
                      <button
                        className="bg-transparent duration-300 text-[14px] hover:bg-gray-950 hover:text-white text-gray-950  px-3 py-0.5 rounded-sm transition-all border-[1px] border-gray-700"
                        onClick={() => {
                          addToCart(product);
                          openCart();
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-around lg:-space-x-50 items-center mt-15 md:mt-13">
            <div className="relative h-[50vh] w-[85vw] md:h-[42vh] md:w-[47vw] lg:h-[70vh] lg:w-[40vw]">
              <img
                src={photo1}
                alt=""
                className="rounded-md w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex justify-end mb-6 md:mb-10 mr-3 md:mr-5 items-end tracking-tight">
                <button className="bg-gray-300 border px-2 md:px-4 md:py-1 rounded-md cursor-pointer">
                  <a href="#products">SHOP NOW</a>
                </button>
              </div>
            </div>
            <div className="relative h-[50vh] w-[85vw] md:h-[42vh] md:w-[47vw] lg:h-[70vh] lg:w-[40vw]">
              <img
                src={photo2}
                alt=""
                className="rounded-md w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex justify-end mb-6 md:mb-10 mr-3 md:mr-5 items-end tracking-tight">
                <button className="bg-gray-300 border px-2 md:px-4 md:py-1 rounded-md cursor-pointer">
                  <a href="#products">SHOP NOW</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* onsale */}
        {/* <div
          id="onsale-products"
          ref={productsRef}
          className="bg-gray-500 rounded-2xl w-screen mx-auto gap-3 mt-14 overflow-x-hidden"
        >
          <div className="space-y-5 mt-12">
            <h1 className="mt-15 text-gray-200 text-center text-3xl md:text-4xl font-semibold">
              On-Sale
            </h1>

            <div className="flex flex-wrap mx-0.5 text-gray-100 justify-center items-center gap-3 mt-8 mb-15">
              {onsaleProducts.map((product) => (
                <div
                  key={product.id}
                  className="px-2 py-4 rounded-md flex flex-col items-center tracking-tight justify-center space-y-2 w-[170px] h-[280px] md:w-[270px] md:h-[385px] transition duration-200 border hover:border-green-400 md:text-md"
                >
                  <div className="flex justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-[60%] object-cover"
                    />
                  </div>
                  <p className="text-sm md:text-md text-center">
                    {product.title}
                  </p>
                  <div className="flex items-center flex-col gap-3">
                    <div className="flex gap-2">
                      <p className="text-green-400">
                        ${product.price.toLocaleString("en-US")}
                      </p>
                    </div>
                    <button
                      className="bg-gray-300 text-[14px] hover:bg-gray-400 text-gray-900 px-3 py-0.5 rounded-sm transition-all duration-150"
                      onClick={() => {
                        addToCart(product);
                        openCart();
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500/40 backdrop-blur-sm z-50">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
          </div>
        )}

        {showCartIcon && (
          <button
            onClick={openCart}
            aria-label="Open Cart"
            className="flex justify-center items-center fixed bottom-4 right-4 md:bottom-10 md:right-10 bg-gray-900 p-3 md:p-4 lg:p-3 rounded-full shadow-lg z-50 h-16 w-16 md:w-20 md:h-20 lg:h-28 lg:w-28"
          >
            <i className="fa-solid fa-basket-shopping text-2xl md:text-4xl lg:text-5xl text-gray-400 transition-all duration-400 hover:text-gray-200 hover:scale-110">
              <span className="text-sm lg:text-lg">
                {cart.length > 0 ? cart.length : null}
              </span>
            </i>
          </button>
        )}

        {cartOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300"
            onClick={() => setCartOpen(!cartOpen)}
          ></div>
        )}

        {cartOpen && (
          <Cart
            cart={cart}
            setCart={setCart}
            setCartOpen={setCartOpen}
            shipping={shipping}
            total={total}
            subtotal={subtotal}
            incrementQuantity={incrementQuantity}
            removeFromCart={removeFromCart}
          />
        )}

        {/* last section */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-around lg:-space-x-50 items-center mt-15 md:mt-13">
          <div className="relative h-[50vh] w-[85vw] md:h-[40vh] md:w-[47vw] lg:h-[70vh] lg:w-[40vw]">
            <img
              src={img1}
              alt=""
              className="rounded-md w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-end mb-6 md:mb-10 mr-3 md:mr-5 items-end tracking-tight">
              <button className="bg-gray-300 border px-2 md:px-4 md:py-1 rounded-md cursor-pointer">
                <a href="#products">SHOP NOW</a>
              </button>
            </div>
          </div>
          <div className="relative h-[50vh] w-[85vw] md:h-[40vh] md:w-[47vw] lg:h-[70vh] lg:w-[40vw]">
            <img
              src={img2}
              alt=""
              className="rounded-md w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-end mb-6 md:mb-10 mr-3 md:mr-5 items-end tracking-tight">
              <button className="bg-gray-300 border px-2 md:px-4 md:py-1 rounded-md cursor-pointer">
                <a href="#products">SHOP NOW</a>
              </button>
            </div>
          </div>
        </div>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
