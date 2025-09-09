import { Link } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  const removeItem = (id) => {
    setCart(cart.filter((item, index) => index !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <div className="cart">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-info">
                <h2>{item.name}</h2>
                <p>Rs {item.price}</p>
              </div>
              <button className="btn delete-btn" onClick={() => removeItem(index)}>
                🗑️ Remove
              </button>
            </div>
          ))}

          {/* ✅ Cart Summary Box */}
          <div className="cart-summary">
            <h3>Total: Rs {total}</h3>
            <Link to="/checkout" className="btn checkout-btn">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
