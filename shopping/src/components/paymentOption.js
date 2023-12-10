import { Typography, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import image from "./Images/images.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPaymentDetails } from "../thunks/paymentThunks";
import { sendOrderRequest } from "../thunks/postThunks";
function PaymentOption() {
  const dispatch = useDispatch();
  const payments = useSelector((state) => state.payments.payments);
  const loading = useSelector((state) => state.payments.loading);
  const error = useSelector((state) => state.payments.error);

  useEffect(() => {
    dispatch(fetchPaymentDetails());
  }, [dispatch]);

  if (loading) {
    return <div>Loading payment data...</div>;
  }

  if (error) {
    return <div>Error loading payment data: {error}</div>;
  }

  // const refreshPage = () => {
  //   window.parent.location = window.parent.location.href = "/";
  // };

  const handlePlaceOrder = () => {
    dispatch(sendOrderRequest());
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5">Payment Methods</Typography>
      <Grid container spacing={2}>
        {payments
          .filter((pay) => pay.type === "UPI")
          .map((pay) => (
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent sx={{ display: "flex" }}>
                  <img src={image} width={50} alt="Product_Image" />
                  <Link
                    style={{ textDecoration: "none", paddingLeft: "15px" }}
                    onClick={() => handlePlaceOrder()}
                  >
                    <Typography variant="h6">{pay.name}</Typography>
                    <Typography color="textSecondary">
                      Type: {pay.type}
                    </Typography>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        {payments
          .filter((pay) => pay.type === "card")
          .map((pay) => (
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent sx={{ display: "flex" }}>
                  <img src={image} width={50} alt="Product_Image" />
                  <Link
                    style={{ textDecoration: "none", paddingLeft: "15px" }}
                    onClick={() => handlePlaceOrder()}
                  >
                    <Typography variant="h6">{pay.name}</Typography>
                    <Typography color="textSecondary">
                      Type: {pay.type}
                    </Typography>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      {/* <Button
        sx={{ float: "right", marginTop: "10px" }}
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        onClick={handlePlaceOrder}
      >
        place order
      </Button> */}
    </div>
  );
}

export default PaymentOption;
