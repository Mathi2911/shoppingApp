import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_TOTAL_AMOUNT,
} from "../action/cartAction";
const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingCartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingCartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === action.payload.id && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case SET_TOTAL_AMOUNT:
      return {
        ...state,
        totalAmount: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
