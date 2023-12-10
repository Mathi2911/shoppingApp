import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Typography,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#131921", position: "sticky" }}>
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ color: "white", flexGrow: 1 }}>
              Mobile E-shope
            </Typography>
            <Link
              style={{
                color: "White",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              to="/"
            >
              Home
            </Link>
            <Link style={{ color: "White", textDecoration: "none" }} to="/cart">
              <div>
                <IconButton color="inherit">
                  <Badge badgeContent={totalCartQuantity} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </div>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
