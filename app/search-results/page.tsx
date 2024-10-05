
import React from 'react';
import flightConnections from '@/data/flightConnections.json';

const SearchResults = ({ from, to }) => {
  const availableFlights = flightConnections.connections.filter(
    (flight) => flight.from === from && flight.to === to
  );

  return (
    <div>
      <h2>Search Results</h2>
      {availableFlights.length > 0 ? (
        availableFlights.map((flight, index) => (
          <div key={index} className="flight-item">
            <h3>{flight.airline} - {flight.flightNumber}</h3>
            <p>Departure: {flight.departureTime}</p>
            <p>Arrival: {flight.arrivalTime}</p>
            <p>Duration: {flight.duration}</p>
            <p>Price: ${flight.price}</p>
          </div>
        ))
      ) : (
        <p>No direct flights found for this route.</p>
      )}
    </div>
  );
};

export default SearchResults;