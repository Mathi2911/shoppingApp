import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
  CALCULATE_DISCOUNT,
} from "../action/productAction";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const applyDiscount = (price, discount) => {
  return price - (price * discount) / 100;
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state, loading: true, error: null };
    case LOAD_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case LOAD_PRODUCTS_ERROR:
      return { ...state, loading: false, error: action.payload };

    case CALCULATE_DISCOUNT:
      const updatedProducts = state.products.map((product) => ({
        ...product,
        discountedPrice: applyDiscount(product.price, product.discount),
      }));
      return { ...state, products: updatedProducts };

    default:
      return state;
  }
};

export default productReducer;
