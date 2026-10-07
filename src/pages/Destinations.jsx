import { useState } from "react";
import DestinationCard from "../components/DestinationCard";

function Destinations() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const destinations = [
    {
      id: 1,
      name: "Paris",
      country: "France",
      category: "City",
      rating: "4.8",
      budget: "₹80,000",
      description:
        "Discover iconic landmarks, elegant streets, world-class museums and authentic French cuisine.",
      image: "/images/paris.jpg",
    },
    {
      id: 2,
      name: "Bali",
      country: "Indonesia",
      category: "Beach",
      rating: "4.7",
      budget: "₹55,000",
      description:
        "Experience tropical beaches, peaceful temples, scenic rice terraces and island culture.",
      image: "/images/Bali.jpg",
    },
    {
      id: 3,
      name: "Swiss Alps",
      country: "Switzerland",
      category: "Mountain",
      rating: "4.9",
      budget: "₹1,20,000",
      description:
        "Explore spectacular mountain scenery, alpine villages and unforgettable European landscapes.",
      image: "/images/SwissAlps.jpg",
    },
    {
      id: 4,
      name: "Dubai",
      country: "UAE",
      category: "City",
      rating: "4.6",
      budget: "₹70,000",
      description:
        "Experience modern architecture, luxury shopping, desert adventures and world-famous attractions.",
      image: "/images/Dubai.jpg",
    },
    {
      id: 5,
      name: "Maldives",
      country: "Maldives",
      category: "Beach",
      rating: "4.9",
      budget: "₹90,000",
      description:
        "Relax beside crystal-clear waters, white beaches and beautiful tropical island resorts.",
      image: "/images/maldives.jpg",
    },
    {
      id: 6,
      name: "Manali",
      country: "India",
      category: "Mountain",
      rating: "4.7",
      budget: "₹25,000",
      description:
        "Enjoy mountain landscapes, peaceful valleys, adventure activities and refreshing nature.",
      image: "/images/manali.jpg",
    },
  ];

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch = destination.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      destination.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="destinations-page">
      <section className="destinations-header">
        <span className="section-label">
          EXPLORE DESTINATIONS
        </span>

        <h1>Find your next adventure</h1>

        <p>
          Discover inspiring places and plan your next unforgettable journey
          with TravelMate.
        </p>
      </section>

      <section className="destination-filters">
        <div className="search-box">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search destinations"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All destinations</option>
          <option value="City">City</option>
          <option value="Beach">Beach</option>
          <option value="Mountain">Mountain</option>
        </select>
      </section>

      <section className="destination-grid">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))
        ) : (
          <div className="no-results">
            <h2>No destinations found</h2>

            <p>
              Try changing your search or category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Destinations;