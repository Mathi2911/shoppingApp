import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Card,
  Typography,
} from "@mui/material";
import image from "./Images/images.png";
import React from "react";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart, total } from "../action/cartAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateAndSetTotal } from "../action/cartAction";

function CartList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const calculatedTotal = total(cartItems);

  useEffect(() => {
    dispatch(calculateAndSetTotal());
  }, [dispatch, cartItems]);

  return (
    <Typography component="div" sx={{ maxWidth: "500px", margin: "15px" }}>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <div>
          <Typography variant="h6">Cart Item List</Typography>
          {cartItems.map((item) => (
            <div key={item.id}>
              <Card sx={{ margin: "10px", width: "500px", display: "flex" }}>
                <CardMedia sx={{ width: 100 }}>
                  <img src={image} width={100} alt="Product_image" />
                </CardMedia>
                <Box>
                  <CardContent>
                    <Typography fontSize={14}>
                      <strong>Product Name:</strong> {item.productType}
                    </Typography>
                    <Typography fontSize={14}>
                      <strong>Model:</strong> {item.Model}
                    </Typography>
                    <Typography>
                      <strong>Price:</strong> &#8377;
                      {item.discountedPrice}
                    </Typography>
                    <Typography>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => dispatch(removeFromCart(item))}
                      >
                        -
                      </Button>
                      <Typography component="span" sx={{ margin: "0 8px" }}>
                        {item.quantity}
                      </Typography>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => dispatch(addToCart(item))}
                      >
                        +
                      </Button>
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </div>
          ))}
          <Typography
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              float: "right",
              margin: "10px",
            }}
          >
            <Typography variant="h7">
              Subtotal: &#8377;
              {typeof calculatedTotal === "number"
                ? calculatedTotal.toFixed(2)
                : "N/A"}
            </Typography>
            <Button
              component={Link}
              to="/address"
              variant="contained"
              color="primary"
            >
              Add your address
            </Button>
          </Typography>
        </div>
      )}
    </Typography>
  );
}

export default CartList;
