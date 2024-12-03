import React, { useContext, useState } from 'react';
import { ThemeContext } from "./ThemeProvider";
import { observer } from 'mobx-react';
import { UserContext } from './UserContext'; 
import { cartStore } from './CartStore';  
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = observer(() => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext); 
  const [showPaymentForm, setShowPaymentForm] = useState(false); 
  
  const getTotalPrice = () => {
    return cartStore.items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  
  const handlePaymentClick = () => {
    setShowPaymentForm(true);
  };

  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Payment submitted!');
    cartStore.resetCart();
  };

  const navigate = useNavigate();  

  return (
    <div className={"cart-container"}>
    
      <h6>Hi, {user ? `${user.firstName} ${user.lastName}` : 'Guest'}!</h6> 
      <h2>Your Shopping Cart</h2>

      
      {cartStore.items.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cartStore.items.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
              <span className="quantity-badge">{item.quantity}</span>
              <span>{item.price} ₪ each</span>

             
              <div className="buttons">
                <button onClick={() => cartStore.addItem(item)}>+</button>
                <button onClick={() => cartStore.decreaseQuantity(item.name)}>−</button>
                <button onClick={() => cartStore.removeItem(item.name)}>X</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      
      <h3>Total: {getTotalPrice()} ₪</h3>

      
      <div className="actions">
        <button onClick={() => cartStore.resetCart()}>Reset Cart</button>
        <button onClick={() => navigate('/Store')}>Back to Store</button>
      </div>

      
      <button className="payment-button" onClick={handlePaymentClick}>Proceed to Payment</button>

      
      {showPaymentForm && (
        <form className="payment-form" onSubmit={handleFormSubmit}>
          <h4>Payment Information</h4>
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Expiration Date</label>
            <input type="text" placeholder="MM/YY" required />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Name on Card</label>
            <input type="text" required />
          </div>
          <button type="submit" className="submit-payment-button">Submit Payment</button>
        </form>
      )}
    </div>
  );
});

export default Cart;
