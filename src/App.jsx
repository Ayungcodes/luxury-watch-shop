import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CheckoutPage from "./pages/CheckoutPage";

const App = () => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const incrementQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0) // auto remove if 0
    );
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shippingPerItem = 50;
  const shipping = cart.reduce(
    (total, item) => total + shippingPerItem * item.quantity,
    0
  );

  const total = subtotal + shipping;

  const openCart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCartOpen(true);
    }, 1000);
  };

  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setCartOpen={setCartOpen}
              cartOpen={cartOpen}
              cart={cart}
              setCart={setCart}
              addToCart={addToCart}
              loading={loading}
              openCart={openCart}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              shipping={shipping}
              total={total}
              subtotal={subtotal}
              pageLoading={pageLoading}
              incrementQuantity={incrementQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage
              setCartOpen={setCartOpen}
              cartOpen={cartOpen}
              cart={cart}
              setCart={setCart}
              loading={loading}
              openCart={openCart}
              pageLoading={pageLoading}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              shipping={shipping}
              total={total}
              subtotal={subtotal}
              incrementQuantity={incrementQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              shipping={shipping}
              total={total}
              subtotal={subtotal}
              cart={cart}
              incrementQuantity={incrementQuantity}
              removeFromCart={removeFromCart}
              pageLoading={pageLoading}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
