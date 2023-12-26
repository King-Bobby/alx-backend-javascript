const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root endpoint '/'
app.get('/', (req, res) => {
  // Respond with the message
  res.send('Hello Holberton School!\n');
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Export the app variable
module.exports = app;
