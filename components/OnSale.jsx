import React, { useEffect, useRef, useState } from 'react'
import products from '../src/products.json'

const OnSale = ({ addToCart, openCart }) => {
  const [showCartIcon, setShowCartIcon] = useState(false)
  const productsRef = useRef(null)

  useEffect(() => {
    const target = productsRef.current
    if (!target) return

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          setShowCartIcon(entries[0].isIntersecting)
        },
        { threshold: 0.1 }
      )
      observer.observe(target)
      return () => observer.disconnect()
    }
  }, [])

  return (
    <>
      <div id='products' ref={productsRef} className='bg-gray-600 rounded-2xl w-screen mx-auto gap-3 mt-14 overflow-x-hidden'>
        <div className='space-y-5 mt-12'>
          <h1 className='mt-15 text-gray-200 text-center text-3xl md:text-4xl font-semibold'>On-Sale</h1>

          <div className="flex flex-wrap mx-0.5 text-gray-400 justify-center items-center gap-3 mt-8 mb-15">
            {products.onsale.map((product) => (
              <div key={product.id} className='px-2 py-4 rounded-md flex flex-col items-center tracking-tight justify-center space-y-2 w-[150px] md:w-[250px] md:text-md'>
                <div className='flex justify-center'>
                  <img src={product.image} alt={product.name} className='w-[70%] object-contain'/>
                </div>
                <p className='text-sm md:text-md text-center'>{product.name}</p>
                <div className='flex items-center flex-col gap-3'>
                  <div className='flex gap-2'>
                    <p className='text-green-400'>₦{product.price.toLocaleString("en-NG")}</p>
                    <p className='line-through text-red-400'>₦{product.initialPrice}</p>
                  </div>
                  <button
                    className='bg-gray-300 text-[14px] hover:bg-gray-400 text-gray-900 px-3 py-0.5 rounded-sm transition-all duration-150'
                    onClick={() => {
                      addToCart(product)
                      openCart()
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

      {showCartIcon && (
        <button
          onClick={openCart}
          aria-label='Open Cart'
          className='fixed bottom-6 right-6 bg-gray-300 text-gray-300 p-3 md:p-4 lg:p-3 rounded-full shadow-lg z-50'
        >
          <i className="fa-solid fa-basket-shopping text-2xl md:text-5xl lg:text-6xl text-gray-700 transition-all duration-200 hover:text-gray-800"></i>
        </button>
      )}
    </>
  )
}

export default OnSale
