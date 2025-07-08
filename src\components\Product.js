import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const Product = ({ product, addToCart }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { product: state.product };
};

export default connect(mapStateToProps, { addToCart })(Product);