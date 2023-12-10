import axios from 'axios';
export const sendOrderRequest = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:8080/placeOrder');
      if (response.status === 200) {
        console.log('Payment successful');
      }
    } catch (error) {
      console.error('Payment error:', error);
    }
  };
};
