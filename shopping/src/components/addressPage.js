import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { saveAddress } from "../thunks/addressThunks";
function AddressPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSave = () => {
    const addressData = {
      name,
      street,
      state,
      pinCode,
      phoneNumber,
    };
    dispatch(saveAddress(addressData));
  };

  return (
    <Typography component="div" sx={{ maxWidth: "500px", margin: "15px" }}>
      <Typography variant="h6">Enter the address details</Typography>
      <Typography
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          sx={{ marginTop: "10px" }}
          label="Street"
          variant="outlined"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <TextField
          sx={{ marginTop: "10px" }}
          label="State"
          variant="outlined"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <TextField
          sx={{ marginTop: "10px" }}
          label="Pin-code"
          variant="outlined"
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
        />
        <TextField
          sx={{ marginTop: "10px" }}
          label="Phone Number"
          variant="outlined"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Typography>
      <Button
        sx={{ float: "right", marginTop: "10px" }}
        component={Link}
        to="/summary"
        variant="contained"
        color="primary"
        onClick={handleSave}
      >
        Continue to Summary
      </Button>
    </Typography>
  );
}

export default AddressPage;
