import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps, { removeFromCart })(Cart);