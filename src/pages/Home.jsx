import WelcomeMessage from "../components/WelcomeMessage";
import TravelForm from "../components/TravelForm";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-tag">
            SMART TRAVEL PLANNER
          </span>

          <h1>
            Plan your next journey
            <br />
            with confidence.
          </h1>

          <p className="hero-description">
            Discover inspiring destinations, organize your trip,
            and save the places you want to visit — all in one place.
          </p>

          <div className="hero-actions">
            <Link to="/destinations" className="explore-button">
              Explore Destinations
            </Link>

            <Link to="/favorites" className="secondary-button">
              View Favorites
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <span>YOUR NEXT ADVENTURE</span>
            <strong>Explore the world.</strong>
            <p>
              Find places that match your travel style.
            </p>
          </div>
        </div>
      </section>


      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-inner">
          <WelcomeMessage />
        </div>
      </section>


      {/* Features */}
      <section className="features-section">
        <div className="section-heading">
          <span className="section-label">
            TRAVEL MADE SIMPLE
          </span>

          <h2>
            Everything you need to plan better
          </h2>

          <p>
            TravelMate helps you discover destinations,
            organize your plans and keep your favorite places together.
          </p>
        </div>

        <div className="feature-container">

          <div className="feature-card">
            <div className="feature-icon">
              🔎
            </div>

            <h3>Discover</h3>

            <p>
              Explore beautiful destinations and find
              places that match your travel interests.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">
              🗺️
            </div>

            <h3>Plan</h3>

            <p>
              Choose your destination, travel duration,
              travel type and budget.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">
              ♥
            </div>

            <h3>Save Favorites</h3>

            <p>
              Keep your favorite destinations saved so
              you can easily find them later.
            </p>
          </div>

        </div>
      </section>


      {/* Trip Planner */}
      <section className="travel-form-section">
        <div className="travel-form-wrapper">

          <div className="form-intro">
            <span className="section-label">
              PLAN YOUR TRIP
            </span>

            <h2>
              Start planning your next adventure
            </h2>

            <p>
              Enter a few details and create a simple
              travel plan based on your preferences.
            </p>
          </div>

          <div className="travel-form-card">
            <TravelForm />
          </div>

        </div>
      </section>

    </main>
  );
}

export default Home;