'use client'
import React from 'react';
import { useSearchParams } from 'next/navigation';
import flightConnections from '@/data/flightConnections.json';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const SearchResults: React.FC = () => {
  const searchParams = useSearchParams();
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const date = searchParams.get('date') || 'Jun 25 - Jul 2';

  // Filter flights based on 'from' and 'to' params
  const availableFlights = flightConnections.connections.filter(
    (flight) => flight.from === from && flight.to === to
  );

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex justify-between items-center">
          <div>
            <span className="font-semibold">{from}</span> - <span className="font-semibold">{to}</span>
          </div>
          <div>{date}</div>
          <div>
            <Button className="text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {availableFlights.length > 0 ? (
        <>
          <div className="text-sm text-gray-600 mb-4">
            Showing {availableFlights.length} results
          </div>

          {availableFlights.map((flight, index) => (
            <div key={index} className="bg-white rounded-lg shadow mb-4 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image src={`/${flight.airline.toLowerCase().replace(/\s+/g, '-')}-logo.png`} alt={flight.airline} width={24} height={24} className="mr-2" />
                  <div>
                    <div>{flight.airline} • {flight.flightNumber}</div>
                    <div className="text-sm">
                      {flight.departureTime} - {flight.arrivalTime}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div>{flight.from} - {flight.to}</div>
                  <div className="text-sm">{flight.duration}</div>
                </div>
                <div className="text-right">
                  <div>Non stop</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">from</div>
                  <div className="font-semibold">AED {parseFloat(flight.price).toFixed(2)}</div>
                  <button className="bg-green-700 text-white px-4 py-1 rounded mt-1 text-sm">Select</button>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="text-center py-8">
          <p className="text-xl font-semibold">No direct flights found for this route.</p>
          <p className="text-gray-600 mt-2">Please try different dates or locations.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;