import { Link } from "react-router-dom";

function DestinationCard({ destination }) {
  const savedFavorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  const isFavorite = savedFavorites.some(
    (item) => item.id === destination.id
  );

  const handleFavorite = () => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const alreadyFavorite = favorites.some(
      (item) => item.id === destination.id
    );

    let updatedFavorites;

    if (alreadyFavorite) {
      updatedFavorites = favorites.filter(
        (item) => item.id !== destination.id
      );
    } else {
      updatedFavorites = [...favorites, destination];
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );

    window.location.reload();
  };

  return (
    <article className="destination-card">

      <div className="destination-image-container">
        <img
          src={destination.image}
          alt={destination.name}
          className="destination-image"
        />

        <span className="destination-category">
          {destination.category}
        </span>
      </div>

      <div className="destination-card-content">

        <div className="destination-heading">

          <div>
            <h2>{destination.name}</h2>

            <p className="destination-country">
              {destination.country}
            </p>
          </div>

          <span className="destination-rating">
            ★ {destination.rating}
          </span>

        </div>

        <p className="destination-description">
          {destination.description}
        </p>

        <div className="destination-meta">

          <div>
            <span>Starting from</span>
            <strong>{destination.budget}</strong>
          </div>

          <div>
            <span>Travel type</span>
            <strong>{destination.category}</strong>
          </div>

        </div>

        <div className="destination-actions">

          <Link
            to={`/destination/${destination.id}`}
            className="details-button"
          >
            View details
          </Link>

          <button
            className={`favorite-button ${
              isFavorite ? "saved" : ""
            }`}
            onClick={handleFavorite}
          >
            {isFavorite ? "♥ Saved" : "♡ Save"}
          </button>

        </div>

      </div>

    </article>
  );
}

export default DestinationCard;