// server.js
const express = require("express");
const cors = require("cors");

// Initialize express app
const app = express();

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Another sample route for testing POST request
app.post("/data", (req, res) => {
  console.log("Received data:", req.body);
  res.json({ message: "Data received successfully" });
});

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
