import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productReducer";
import cartReducer from "./reducer/cartReducer";
import addressReducer from "./reducer/addressReducer";
import paymentReducer from "./reducer/paymentReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    address: addressReducer,
    payments: paymentReducer,
  },
});

export default store;
