import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Shop from "./pages/shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";


export default function App() {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
    setNotification("✅ Item added! Visit your cart.");
    setTimeout(() => setNotification(""), 5000); // hide after 5s
  };

  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-maroon text-white p-4 flex gap-10">
        <Link to="/" className="hover:text-gray-200">Shop</Link>
        <Link to="/cart" className="hover:text-gray-200">Cart ({cart.length})</Link>
        <Link to="/checkout" className="hover:text-gray-200">Checkout</Link>
      </nav>

      {/* Popup Notification */}
      {notification && (
        <div className="popup">
          {notification} 👉 <Link to="/cart">Go to Cart</Link>
        </div>
      )}

      {/* Routes */}
      


      <Routes>
        <Route path="/" element={<Shop addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}