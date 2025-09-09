import React, { useState } from "react";
import "./Checkout.css";

export default function Checkout({ cart, setCart }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postal: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false); // new state

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!/^\d{5}$/.test(form.postal)) newErrors.postal = "Postal code must be 5 digits";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Save order locally
      localStorage.setItem("lastOrder", JSON.stringify({ form, cart }));
      setCart([]); // clear cart
      setSuccess(true); // show confirmation message
      setShowDiscount(true); // show discount popup

      // Hide popup after 5 seconds
      setTimeout(() => setShowDiscount(false), 5000);
    }
  };

  return (
    <div className="checkout-container">
      <h1>Thank You</h1>

      {success && !showDiscount && (
        <div className="confirmation">
          <h2>✅ Your order has been placed!</h2>
          <p>Check your email for confirmation</p>
        </div>
      )}

      {!success && (
        <form className="checkout-card" onSubmit={handleSubmit} autoComplete="off">
          <h2>Billing Details</h2>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            autoComplete="off"
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address (e.g. example@mail.com)"
            autoComplete="off"
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="House Address (Street, Apartment No.)"
            autoComplete="off"
          />
          {errors.address && <span className="error">{errors.address}</span>}

          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            autoComplete="off"
          />
          {errors.city && <span className="error">{errors.city}</span>}

          <input
            type="text"
            name="postal"
            value={form.postal}
            onChange={handleChange}
            placeholder="Postal Code (5 digits)"
            autoComplete="off"
          />
          {errors.postal && <span className="error">{errors.postal}</span>}

          <button type="submit">Complete Purchase</button>
        </form>
      )}

      {/* Discount Popup */}
      {showDiscount && (
        <div className="discount-popup">
          <div className="popup-content">
            <h2>🎉 Surprise Discount!</h2>
            <p>Thank you for your first order! Use code <b>SURPRISE10</b> for 10% off on your next purchase.</p>
          </div>
        </div>
      )}
    </div>
  );
}
