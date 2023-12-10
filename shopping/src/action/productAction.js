export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const LOAD_PRODUCTS_SUCCESS = "LOAD_PRODUCTS_SUCCESS";
export const LOAD_PRODUCTS_ERROR = "LOAD_PRODUCTS_ERROR";
export const CALCULATE_DISCOUNT = "CALCULATE_DISCOUNT";

export const loadProducts = () => ({
  type: LOAD_PRODUCTS,
});

export const loadProductsSuccess = (products) => ({
  type: LOAD_PRODUCTS_SUCCESS,
  payload: products,
});

export const loadProductsError = (error) => ({
  type: LOAD_PRODUCTS_ERROR,
  payload: error,
});

export const calculateDiscount = () => ({
  type: CALCULATE_DISCOUNT,
});
