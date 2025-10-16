const Cart = ({ cart, setCartOpen }) => {
    const subtotal = cart.reduce(
  (total, item) => total + item.price * item.quantity, 0
);

const shippingPerItem = 2500;
const shipping = cart.reduce(
  (total, item) => total + shippingPerItem * item.quantity, 0
);

const total = subtotal + shipping;

  return (
    <>
        <div className="fixed inset-0 z-60 rounded-3xl mx-auto my-auto h-[72vh] md:h-[78vh] w-[87vw] md:w-[60vw] lg:h-[77vh] lg:w-[45vw] bg-gray-300 transition-transform ease-linear duration-300">
          
          <div className='flex justify-between mx-3 my-2'>
            <h1 className='text-2xl md:text-3xl font-semibold text-gray-700 ml-3 md:ml-5 mt-2'>Shopping Cart</h1>
            <button 
            className=''
            onClick={() => setCartOpen(false)}
            ><i className="fa-solid fa-circle-xmark text-[30px] text-gray-600 hover:text-gray-800 transition-all duration-300"></i></button>
          </div>
          <div className='h-[33vh] overflow-y-auto'>
          {cart.length === 0 ? (
            <p className='text-center pt-13 text-lg md:text-2xl'>Your cart is empty</p> 
            ) : (
            <ul>
                {cart.map((item, index) => (
                    <li key={index}
                    className='flex text-sm md:text-md lg:text-lg flex-col justify-center items-center mt-7 space-y-1'
                    >
                        <img src={item.image} alt={item.id} className='h-[12vh] lg:h-[15vh]' />
                        <span className=''>{item.name}</span>
                        <span>₦{item.price.toLocaleString("en-NG")}</span>
                        <span>Quantity: {item.quantity}</span>
                    </li>
                ))}
            </ul>
          )}
          </div>

          <div className='flex flex-col p-3 space-y-6 md:space-y-9 lg:space-y-8 mt-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]'>
            <div className='flex justify-between items-end mx-7 md:mx-20 lg:mx-27 mt-2 md:mt-5 md:text-xl'>
            <div className='space-y-7 lg:space-y-5'>
                <h1>Subtotal:</h1>
                <h1>Shipping:</h1>
                <h1>Total:</h1>
            </div>
            <div className='space-y-7 lg:space-y-5'>
                <h1>₦{subtotal.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
                <h1>₦{shipping.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
                <h1>₦{total.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
            </div>
          </div>
          <a href="#" className="text-center bg-gray-800 text-gray-200 text-[15px] md:text-lg rounded-md w-1/3 mx-auto py-0.5 hover:bg-gray-700 transition-all duration-200">CHECKOUT</a>
          </div>
        </div>
    </>
  )
}

export default Cart
