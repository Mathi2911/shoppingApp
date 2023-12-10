import {
  loadPayments,
  loadPaymentsSuccess,
  loadPaymentsError,
} from "../action/paymentAction";

export const fetchPaymentDetails = () => {
  return async (dispatch) => {
    dispatch(loadPayments());
    try {
      const response = await fetch("http://localhost:8080/payments");
      const payments = await response.json();
      dispatch(loadPaymentsSuccess(payments));
    } catch (error) {
      dispatch(loadPaymentsError(error));
    }
  };
};
