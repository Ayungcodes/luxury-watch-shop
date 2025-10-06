import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Textimonials from '../components/Textimonials'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'
import OnSale from '../components/OnSale'
import Cart from '../components/Cart'
import LastSec from '../components/LastSec'

const App = () => {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id)
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  const openCart = () => {
    setLoading(true) // show roller
    setTimeout(() => {
      setLoading(false) 
      setCartOpen(true) 
    }, 1000) // 1 second delay
  }

  return (
    <div>
      <Navbar 
        openCart={openCart}
        cart={cart} 
        cartOpen={cartOpen} 
        setCartOpen={setCartOpen} 
        addToCart={addToCart} 
      />

      <Hero />

      <Textimonials />

      <FeaturedProducts
        openCart={openCart} 
        cart={cart} 
        cartOpen={cartOpen} 
        setCartOpen={setCartOpen} 
        addToCart={addToCart} 
      />

      <OnSale 
        openCart={openCart}
        cart={cart} 
        cartOpen={cartOpen} 
        setCartOpen={setCartOpen} 
        addToCart={addToCart} 
      />

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500/40 backdrop-blur-sm z-50">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      )}

      { cartOpen && <Cart cart={cart} setCart={setCart} setCartOpen={setCartOpen} /> }

      <LastSec />

      <Footer />
    </div>
  )
}

export default App
