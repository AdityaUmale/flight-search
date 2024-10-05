// components/AirportDropdown.js
import React from 'react';

const AirportDropdown = ({ airports, onSelect }) => {
  return (
    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
      {airports.map((airport) => (
        <div
          key={airport.code}
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => onSelect(airport)}
        >
          <div className="font-semibold">{airport.name}</div>
          <div className="text-sm text-gray-600">
            {airport.city}, {airport.country} ({airport.code})
          </div>
        </div>
      ))}
    </div>
  );
};

export default AirportDropdown;