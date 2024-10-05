// app/search-results/page.tsx
'use client'

import React from 'react';
import { useSearchParams } from 'next/navigation';
import flightConnections from '@/data/flightConnections.json';

const SearchResults = () => {
  const searchParams = useSearchParams();
  const from = searchParams.get('from');
  const to = searchParams.get('to');

  const availableFlights = flightConnections.connections.filter(
    (flight) => flight.from === from && flight.to === to
  );

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>
      {availableFlights.length > 0 ? (
        availableFlights.map((flight, index) => (
          <div key={index} className="flight-item bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-xl font-semibold">{flight.airline} - {flight.flightNumber}</h3>
            <p>Departure: {flight.departureTime}</p>
            <p>Arrival: {flight.arrivalTime}</p>
            <p>Duration: {flight.duration}</p>
            <p className="font-bold">Price: ${flight.price}</p>
          </div>
        ))
      ) : (
        <p>No direct flights found for this route.</p>
      )}
    </div>
  );
};

export default SearchResults;