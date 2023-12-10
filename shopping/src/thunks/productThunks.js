import {
  loadProducts,
  loadProductsSuccess,
  loadProductsError,
  calculateDiscount,
} from "../action/productAction";

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(loadProducts());
    try {
      const response = await fetch('http://localhost:8080/products');
      const products = await response.json();
      dispatch(loadProductsSuccess(products));
      dispatch(calculateDiscount());
    } catch (error) {
      dispatch(loadProductsError(error));
    }
  };
};

