export const LOAD_PAYMENTS = "LOAD_PAYMENTS";
export const LOAD_PAYMENTS_SUCCESS = "LOAD_PAYMENTS_SUCCESS";
export const LOAD_PAYMENTS_ERROR = "LOAD_PAYMENTS_ERROR";

export const loadPayments = () => ({
  type: LOAD_PAYMENTS,
});

export const loadPaymentsSuccess = (payments) => ({
  type: LOAD_PAYMENTS_SUCCESS,
  payload: payments,
});

export const loadPaymentsError = (error) => ({
  type: LOAD_PAYMENTS_ERROR,
  payload: error,
});
