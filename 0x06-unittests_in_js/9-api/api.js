// 9-api/api.js
const express = require('express');
const app = express();

const PORT = 7865;

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Existing endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint for /cart/:id
app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

module.exports = app;
