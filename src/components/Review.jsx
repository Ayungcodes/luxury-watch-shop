import { Link } from "react-router";

const Review = ({
  cart,
  shipping,
  total,
  subtotal,
  incrementQuantity,
  removeFromCart,
}) => {
  const today = new Date();

  const futureDate = new Date();
  futureDate.setDate(today.getDate() + 8);

  const formattedDate = futureDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="mt-16 overflow-y-auto overflow-x-hidden bg-gray-50">
      <div className="flex flex-col items-center justify-center h-full w-[80vw] lg:w-[70vw] space-y-9 mx-auto">
        <div className="flex flex-col justify-center w-full overflow-y-auto space-y-6 border-[1px] border-gray-400 p-4 py-5">
          {cart.length === 0 ? (
            <div className="mx-auto text-center space-y-4">
              <p className="text-lg md:text-2xl">Your cart is empty</p>
              <Link
                to="/"
                className="border-[1px] py-1 px-4 text-sm rounded-md duration-300 hover:text-white hover:bg-gray-950"
              >
                View products
              </Link>
            </div>
          ) : (
            <>
              <h1 className="text-lg md:text-2xl font-bold ml-7">
                Delivery date: {formattedDate}
              </h1>
              <ul className="flex flex-col mx-2 lg:flex-row lg:justify-between lg:flex-wrap">
                {cart.map((item, id) => (
                  <li
                    key={id}
                    className="flex space-x-1 md:space-x-10 text-[13px] md:text-md md:text-[18px] items-center mt-7 space-y-1"
                  >
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="h-[15vh] md:h-[18vh] lg:h-[16vh]"
                    />
                    <div className="flex flex-col space-y-1 font-semibold">
                      <span className="">{item.title}</span>
                      <span>Quantity: {item.quantity}</span>
                      <span>${item.price.toLocaleString("en-US")}</span>
                      <div className="text-xl border border-gray-500 rounded-lg bg-gray-200 w-16 h-8 font-bold flex items-center justify-between px-2">
                        <button
                          className="cursor-pointer text-red-700"
                          onClick={() => removeFromCart(item.id)}
                        >
                          –
                        </button>

                        <div className="h-6 w-[1px] bg-gray-800"></div>

                        <button
                          className="cursor-pointer text-green-600"
                          onClick={() => incrementQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="mb-10 flex flex-col h-full w-full lg:w-[50vw] space-y-6 md:text-[18px]">
          <h1 className="font-bold text-lg md:text-2xl ">Review your order</h1>
          <div className="flex flex-col w-full border-[1px] border-gray-400 p-5 space-y-4">
            <h1 className="font-semibold text-lg">Payment Summary</h1>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="space-y-1">
                  <p>Items ({cart.length}):</p>
                  <p>Shipping & handling:</p>
                  <div className="mx-auto h-[1px] w-full bg-gray-400 my-3"></div>
                  <p className="font-semibold">Order total:</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="space-y-1">
                  <p>
                    $
                    {subtotal.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <p>
                    $
                    {shipping.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <div className="mx-auto h-[1px] w-full bg-gray-400 my-3"></div>
                  <p className="font-semibold">
                    $
                    {total.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>
            </div>
            <Link
              to=""
              className="bg-yellow-600 py-2 rounded-md text-center text-white w-full mx-auto duration-150 hover:bg-yellow-500"
            >
              Place your order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
