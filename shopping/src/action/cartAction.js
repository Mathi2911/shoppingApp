export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CALCULATE_TOTAL = "CALCULATE_TOTAL";
export const SET_TOTAL_AMOUNT = "SET_TOTAL_AMOUNT";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product,
});

export const total = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.quantity * item.discountedPrice,
    0
  );
};

export const calculateTotal = () => ({
  type: CALCULATE_TOTAL,
});

export const calculateAndSetTotal = () => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cartItems;
    const totalAmount = cartItems.reduce(
      (total, item) => total + item.quantity * item.discountedPrice,
      0
    );

    dispatch(setTotalAmount(totalAmount));
  };
};

// Action to set the calculated total amount
export const setTotalAmount = (amount) => ({
  type: SET_TOTAL_AMOUNT,
  payload: amount,
});
