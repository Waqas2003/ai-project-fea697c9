export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: 'REMOVE_FROM_CART',
    id,
  };
};

export const checkout = (cart) => {
  return {
    type: 'CHECKOUT',
    cart,
  };
};