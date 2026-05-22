// Import the express library we installed
const express = require('express');

// Create an instance of an express app
const app = express();

// Define the port the server will listen on
// process.env.PORT lets Azure/Docker inject the port — fallback to 3000 locally
const PORT = process.env.PORT || 3000;

// Define a route: when someone visits "/", send back this response
app.get('/', (req, res) => {
  res.send('Hello from Sandbox Pipeline App! 🚀');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
