import { Link } from "react-router";

const Cart = ({
  cart,
  setCartOpen,
  shipping,
  total,
  subtotal,
  incrementQuantity,
  removeFromCart,
}) => {
  return (
    <>
      <div
        className={`fixed inset-0 mx-auto my-auto z-60 rounded-3xl h-[74vh] md:h-[70vh] w-[87vw] md:w-[70vw] lg:h-[77vh] lg:w-[45vw] bg-gray-100 transition-transform ease-in-out duration-800 shadow-3xl`}
      >
        <div className="w-full h-full flex flex-col items-stretch justify-between">
          <div className="flex justify-between mx-3 my-2">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 ml-3 md:ml-5 mt-2">
              Shopping Cart
            </h1>
            <button className="" onClick={() => setCartOpen(false)}>
              <i className="fa-solid fa-circle-xmark text-[30px] text-gray-600 hover:text-gray-800 transition-all duration-300"></i>
            </button>
          </div>
          <div className="h-[35vh] overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-center pt-13 text-lg md:text-2xl">
                Your cart is empty
              </p>
            ) : (
              <ul>
                {cart.map((item, id) => (
                  <li
                    key={id}
                    className="flex text-sm md:text-md lg:text-lg flex-col justify-center items-center mt-7 space-y-1"
                  >
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="h-[12vh] lg:h-[15vh]"
                    />
                    <span className="">{item.title}</span>
                    <span>${item.price.toLocaleString("en-US")}</span>
                    <span>Quantity: {item.quantity}</span>
                    <div className="text-xl border border-gray-500 rounded-lg bg-gray-200 w-16 h-8 font-bold flex items-center justify-between px-2">
                      <button
                        className="cursor-pointer text-gray-700"
                        onClick={() => removeFromCart(item.id)}
                      >
                        –
                      </button>

                      <div className="h-6 w-[1px] bg-gray-800"></div>

                      <button
                        className="cursor-pointer text-gray-600"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col justify-center h-[30vh] md:h-[28vh] lg:h-[30vh] p-5 space-y-6 md:space-y-14 lg:space-y-6 mt-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="flex justify-between items-end mx-6 md:mx-20 lg:mx-27 mt-2 md:mt-5 md:text-xl">
              <div className="space-y-4 md:space-y-8 lg:space-y-4">
                <h1>Subtotal:</h1>
                <h1>Shipping:</h1>
                <h1>Total:</h1>
              </div>
              <div className="space-y-4 md:space-y-8 lg:space-y-4">
                <h1>
                  $
                  {subtotal.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </h1>
                <h1>
                  $
                  {shipping.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </h1>
                <h1>
                  $
                  {total.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </h1>
              </div>
            </div>
            <Link
              to="/checkout"
              className="text-center bg-gray-800 text-gray-200 text-[15px] md:text-lg rounded-md w-1/3 mx-auto py-0.5 hover:bg-gray-700 transition-all duration-200"
            >
              CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
