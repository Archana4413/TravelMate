import { Component } from "react";

class WelcomeMessage extends Component {
  render() {
    return (
      <div className="welcome-content">
        <div className="welcome-number">
          01
        </div>

        <div>
          <span className="section-label">
            WELCOME TO TRAVELMATE
          </span>

          <h2>
            Your journey starts with a better plan.
          </h2>

          <p>
            TravelMate brings destination discovery,
            trip planning and saved favorites together
            in one simple travel experience.
          </p>
        </div>
      </div>
    );
  }
}

export default WelcomeMessage;