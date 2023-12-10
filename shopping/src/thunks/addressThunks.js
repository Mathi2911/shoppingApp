import { setAddress } from "../action/addressAction";

export const saveAddress = (addressData) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8080/saveAddress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addressData),
    });

    if (response.ok) {
      dispatch(setAddress(addressData));
    } else {
      console.error('Failed to save address');
    }
  } catch (error) {
    console.error('Error saving address', error);
  }
};

// export const fetchAddress = () => async (dispatch) => {
//   try {
//     const response = await fetch('http://localhost:8080/getAddress');
//     const addressData = await response.json();
//     dispatch(setAddress(addressData));
//   } catch (error) {
//     console.error('Error fetching address', error);
//   }
// };


