import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter(
      (destination) => destination.id !== id
    );

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  return (
    <main className="favorites-page">

      {/* Header */}
      <section className="favorites-header">
        <span className="section-label">
          YOUR TRAVEL COLLECTION
        </span>

        <h1>Saved Destinations</h1>

        <p>
          Keep the places you love in one place and
          revisit them whenever you are ready to travel.
        </p>

        <div className="favorites-count">
          <strong>{favorites.length}</strong>

          <span>
            {favorites.length === 1
              ? "destination saved"
              : "destinations saved"}
          </span>
        </div>
      </section>


      {/* Empty State */}
      {favorites.length === 0 ? (
        <section className="favorites-empty">

          <div className="empty-icon">
            ♡
          </div>

          <h2>Nothing saved yet</h2>

          <p>
            Start exploring destinations and save
            the places you would like to visit.
          </p>

          <Link
            to="/destinations"
            className="explore-favorites-button"
          >
            Explore Destinations
          </Link>

        </section>
      ) : (

        /* Favorites Grid */
        <section className="favorites-grid">

          {favorites.map((destination) => (

            <article
              className="favorite-card"
              key={destination.id}
            >

              {/* Image */}
              <div className="favorite-image-container">

                <img
                  src={destination.image}
                  alt={destination.name}
                  className="favorite-image"
                />

                <span className="favorite-category">
                  {destination.category}
                </span>

                <button
                  className="favorite-heart"
                  onClick={() =>
                    removeFavorite(destination.id)
                  }
                  title="Remove from favorites"
                >
                  ♥
                </button>

              </div>


              {/* Content */}
              <div className="favorite-card-content">

                {/* Title + Rating */}
                <div className="favorite-title-row">

                  <div>
                    <h2>{destination.name}</h2>

                    <p className="favorite-country">
                      {destination.country}
                    </p>
                  </div>

                  <span className="favorite-rating">
                    ★ {destination.rating}
                  </span>

                </div>


                {/* Description */}
                <p className="favorite-description">
                  {destination.description}
                </p>


                {/* Information */}
                <div className="favorite-info">

                  <div>
                    <span>Starting from</span>

                    <strong>
                      {destination.budget}
                    </strong>
                  </div>

                  <div>
                    <span>Travel type</span>

                    <strong>
                      {destination.category}
                    </strong>
                  </div>

                </div>


                {/* Buttons */}
                <div className="favorite-actions">

                  <Link
                    to={`/destination/${destination.id}`}
                    className="favorite-details-button"
                  >
                    View Details
                  </Link>

                  <button
                    className="favorite-remove-button"
                    onClick={() =>
                      removeFavorite(destination.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            </article>

          ))}

        </section>

      )}

    </main>
  );
}

export default Favorites;