import React from "react";
import { useCart } from "./CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } =
    useCart();

  return (
    <div className="cart-dropdown">
      <h3>Your Cart ({cartCount} items)</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} width="100" />
              <div className="item-details">
                <span>{item.name}</span>
                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <span>{item.color}</span>
                <span>
                  <del>Rs. {item.oldPrice * item.quantity}</del>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp; Rs.
                  {item.newPrice * item.quantity}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <span>Total: Rs. {cartTotal.toFixed(2)}</span>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
