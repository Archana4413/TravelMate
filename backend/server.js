const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const destinations = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    category: "City",
    rating: 4.8,
    budget: 80000,
    image: "/images/paris.jpg",
  },
  {
    id: 2,
    name: "Bali",
    country: "Indonesia",
    category: "Beach",
    rating: 4.7,
    budget: 55000,
    image: "/images/Bali.jpg",
  },
  {
    id: 3,
    name: "Swiss Alps",
    country: "Switzerland",
    category: "Mountain",
    rating: 4.9,
    budget: 120000,
    image: "/images/swiss-alps.jpg",
  },
  {
    id: 4,
    name: "Dubai",
    country: "UAE",
    category: "City",
    rating: 4.6,
    budget: 70000,
    image: "/images/Dubai.jpg",
  },
  {
    id: 5,
    name: "Maldives",
    country: "Maldives",
    category: "Beach",
    rating: 4.9,
    budget: 90000,
    image: "/images/maldives.jpg",
  },
  {
    id: 6,
    name: "Manali",
    country: "India",
    category: "Mountain",
    rating: 4.7,
    budget: 25000,
    image: "/images/manali.jpg",
  },
];

app.get("/", (req, res) => {
  res.send("TravelMate Backend is running successfully!");
});

app.get("/api/destinations", (req, res) => {
  res.json(destinations);
});

app.listen(PORT, () => {
  console.log(`TravelMate Backend running on http://localhost:${PORT}`);
});