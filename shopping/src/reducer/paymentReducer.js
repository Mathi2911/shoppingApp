import {
  LOAD_PAYMENTS,
  LOAD_PAYMENTS_SUCCESS,
  LOAD_PAYMENTS_ERROR,
} from "../action/paymentAction";

const initialState = {
  payments: [],
  loading: false,
  error: null,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PAYMENTS:
      return { ...state, loading: true, error: null };
    case LOAD_PAYMENTS_SUCCESS:
      return { ...state, loading: false, payments: action.payload };
    case LOAD_PAYMENTS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default paymentReducer;
