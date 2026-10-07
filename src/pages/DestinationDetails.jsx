import { useParams, Link } from "react-router-dom";

function DestinationDetails() {
  const { id } = useParams();

  const destinations = [
    {
      id: 1,
      name: "Paris",
      country: "France",
      category: "City",
      description:
        "Explore the Eiffel Tower, museums, cafes and beautiful streets of Paris.",
    },
    {
      id: 2,
      name: "Bali",
      country: "Indonesia",
      category: "Beach",
      description:
        "Enjoy beautiful beaches, temples and peaceful tropical landscapes.",
    },
    {
      id: 3,
      name: "Swiss Alps",
      country: "Switzerland",
      category: "Mountain",
      description:
        "Experience stunning mountains, snow and beautiful alpine villages.",
    },
    {
      id: 4,
      name: "Dubai",
      country: "UAE",
      category: "City",
      description:
        "Explore modern architecture, shopping malls and exciting attractions.",
    },
    {
      id: 5,
      name: "Maldives",
      country: "Maldives",
      category: "Beach",
      description:
        "Relax on beautiful beaches and enjoy crystal-clear tropical waters.",
    },
    {
      id: 6,
      name: "Manali",
      country: "India",
      category: "Mountain",
      description:
        "Enjoy mountains, valleys, adventure activities and beautiful scenery.",
    },
  ];

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    return <h1>Destination Not Found</h1>;
  }

  return (
    <main className="details-page">
      <h1>{destination.name}</h1>

      <h3>{destination.country}</h3>

      <p>Category: {destination.category}</p>

      <p>{destination.description}</p>

      <Link to="/destinations">
        <button>Back to Destinations</button>
      </Link>
    </main>
  );
}

export default DestinationDetails;