import React, { useEffect, useRef, useState } from 'react'
import products from '../src/products.json'
import photo1 from '../src/assets/downextra1.jpg'
import photo2 from '../src/assets/downextra2.jpg'

const FeaturedProducts = ({ cartOpen, addToCart, openCart }) => {
  const [showCartIcon, setShowCartIcon] = useState(false)
  const productsRef = useRef(null)

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", cartOpen)
    return () => document.body.classList.remove("overflow-hidden")
  }, [cartOpen])

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
    <div className='relative'>
      <div id='products' className='bg-gray-600 rounded-2xl w-screen mx-auto mt-25 overflow-x-hidden'>
        <div className='space-y-5 mt-12'>
          <h1 className='text-gray-200 text-center text-3xl md:text-4xl font-semibold'>Featured Products</h1>

          <div ref={productsRef} className="flex flex-wrap mx-auto text-gray-400 justify-center items-center gap-3 mt-8 mb-15">
            {products.featured.map((product) => (
              <div key={product.id} className='px-2 py-4 rounded-md flex flex-col items-center tracking-tight justify-center space-y-2 w-[150px] md:w-[250px] transition duration-200 hover:border'>
                <div className='flex justify-center'>
                  <img src={product.image} alt={product.name} className='w-[70%] object-contain'/>
                </div>
                <p className='text-sm md:text-md text-center'>{product.name}</p>
                <div className='flex items-center flex-col gap-3'>
                  <div className='flex gap-2'>
                    <p className='text-green-400'>₦{product.price.toLocaleString("en-NG")}</p>
                    <p className='line-through text-red-400'>{product.initialPrice}</p>
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

      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-around lg:-space-x-50 items-center mt-15 md:mt-13">
        <div className='relative h-[50vh] w-[85vw] md:h-[42vh] md:w-[47vw] lg:h-[70vh] lg:w-[40vw]'>
          <img src={photo1} alt="" className='rounded-md w-full h-full object-cover'/>
          <div className='absolute inset-0 flex justify-end mb-6 md:mb-10 mr-3 md:mr-5 items-end tracking-tight'>
            <button className='bg-gray-300 border px-2 md:px-4 md:py-1 rounded-md cursor-pointer'><a href="#products">SHOP NOW</a></button>
          </div>
        </div>
        <div className='relative h-[50vh] w-[85vw] md:h-[42vh] md:w-[47vw] lg:h-[70vh] lg:w-[40vw]'>
          <img src={photo2} alt="" className='rounded-md w-full h-full object-cover'/>
          <div className='absolute inset-0 flex justify-end mb-6 md:mb-10 mr-3 md:mr-5 items-end tracking-tight'>
            <button className='bg-gray-300 border px-2 md:px-4 md:py-1 rounded-md cursor-pointer'><a href="#products">SHOP NOW</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
