const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
let saveAddress = null;

const products = require('./products.json');
const payments = require('./payments.json');

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/payments', (req, res) => {
  res.json(payments);
});

// app.get('/getAddress', (req, res) => {
//   res.json(saveAddress);
// });

app.post('/saveAddress', (req, res) => {
  saveAddress = req.body;
  res.json({ message: 'Address saved successfully' });
});

app.post('/placeOrder', (req, res) => {
  res.status(200).send('Payment successful');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});