import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import image from "./Images/images.png";
import React, { useEffect } from "react";
import { fetchProducts } from "../thunks/productThunks";
import { addToCart } from "../action/cartAction";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Card
            sx={{
              display: "flex",
              margin: "auto",
              backgroundColor: "#e1e1e1",
            }}
          >
            <CardMedia sx={{ width: 200 }}>
              <img src={image} width={200} alt="Product_Image" />
            </CardMedia>
            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <CardContent>
                <Typography fontSize={14}>
                  <strong>ID:</strong> {product.id}
                </Typography>
                <Typography fontSize={14}>
                  <strong>Product Name:</strong> {product.productType}
                </Typography>
                <Typography fontSize={14}>
                  <strong>Model:</strong> {product.Model}
                </Typography>
                <Typography fontSize={14}>
                  <strong>Orginal Price:</strong> &#8377;{product.price}
                </Typography>
                <Typography fontSize={14}>
                  <strong>Discount Price:</strong> &#8377;
                  {product.discountedPrice}
                </Typography>
                <Typography fontSize={14}>
                  <strong>Discount:</strong> {product.discount}%
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Box>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
