import React from 'react';
import { connect } from 'react-redux';
import { checkout } from '../actions/cartActions';

const Checkout = ({ cart, checkout }) => {
  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label>Name:</label>
        <input type="text" />
        <br />
        <label>Email:</label>
        <input type="email" />
        <br />
        <label>Address:</label>
        <input type="text" />
        <br />
        <button onClick={() => checkout(cart)}>Place Order</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps, { checkout })(Checkout);