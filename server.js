const express = require('express');
const cors = require('cors');
const app = express();
const port = 6000;

// Dummy location data (simulate movement)
const vehicleRoute = [
  { latitude: 17.385044, longitude: 78.486671, timestamp: "2024-07-20T10:00:00Z" },
  { latitude: 17.385045, longitude: 78.486672, timestamp: "2024-07-20T10:00:05Z" },
  { latitude: 17.385046, longitude: 78.486673, timestamp: "2024-07-20T10:00:10Z" },
];

let index = 0;

// Middleware
app.use(cors());
app.use(express.json());

// API to get the current vehicle location
app.get('/api/location', (req, res) => {
  const location = vehicleRoute[index];
  res.json(location);

  // Update the index to simulate movement
  index = (index + 1) % vehicleRoute.length;
});

// Route for root path ('/')
app.get('/', (req, res) => {
  res.send("Welcome to the Vehicle Tracking API. Use /api/location to get the vehicle location.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
