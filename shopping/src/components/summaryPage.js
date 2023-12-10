import React from "react";
import { Typography, Button, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";
// import { useEffect } from "react";
// import { fetchAddress } from "../thunks/addressThunks";

function SummaryPage() {
  // const dispatch = useDispatch();
  const addressData= useSelector((state) => state.address.address);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  // useEffect(() => {
  //   dispatch(fetchAddress());
  // }, [dispatch]);

  return (
    <Card sx={{ maxWidth: "500px", margin: "auto", padding: "10px" }}>
      <Typography variant="h5">Order Summary</Typography>
      <Typography sx={{ fontWeight: "bold", marginTop: "10px" }}>
        Delivery Address:
      </Typography>
      <Typography component="div">Name: {addressData.name}</Typography>
      <Typography>Street: {addressData.street}</Typography>
      <Typography>State: {addressData.state}</Typography>
      <Typography>Pin Code: {addressData.pinCode}</Typography>
      <Typography>Phone Number: {addressData.phoneNumber}</Typography>

      <Typography sx={{ fontWeight: "bold", marginTop: "10px" }}>
        Cart Item quantity details:
      </Typography>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            {item.productType}: {item.quantity}
          </div>
        ))}
        <Typography sx={{ fontWeight: "bold", marginTop: "10px" }}>
          Total amount:&#8377;{totalAmount.toFixed(2)}
        </Typography>
      </div>
      <Button
        sx={{ float: "right" }}
        component={Link}
        to="/paymentOption"
        variant="contained"
        color="primary"
      >
        Process to buy
      </Button>
    </Card>
  );
}

export default SummaryPage;
