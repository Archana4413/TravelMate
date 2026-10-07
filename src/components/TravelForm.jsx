import { useState } from "react";

function TravelForm() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [travelType, setTravelType] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(
      `Your ${days}-day ${travelType} trip to ${destination} with a budget of ₹${budget} is planned!`
    );
  };

  return (
    <div>
      <h2>Plan Your Trip</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Number of days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          required
        />

        <select
          value={travelType}
          onChange={(e) => setTravelType(e.target.value)}
          required
        >
          <option value="">Select Travel Type</option>
          <option value="Solo">Solo</option>
          <option value="Family">Family</option>
          <option value="Friends">Friends</option>
        </select>

        <input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
        />

        <button type="submit">Plan Trip</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default TravelForm;