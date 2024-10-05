"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import flightConnections from "@/data/flightConnections.json";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SearchResults: React.FC = () => {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date") || "Jun 25 - Jul 2";

  // You might want to create a mapping of airport codes to full names
  const airportNames = {
    CDG: "Paris Charles De Gau...",
    DXB: "Dubai International...",
    // Add more as needed
  };

  const availableFlights = flightConnections.connections.filter(
    (flight) => flight.from === from && flight.to === to
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center pb-6 pt-6 border-b-[1px] border-gray-200">
        <div className="flex items-center w-[662px] h-[50px] bg-white rounded-full border border-[#E6E8EB] px-6 py-3 mb-4">
          <div className="flex-1 flex items-center gap-4">
            <div className="flex items-center w-[200px] h-4 max-w-[200px]">
              <span className="font-['Neue_Montreal'] text-base font-medium leading-4 tracking-[0.05em]">
                {from}
              </span>
              <span className="font-['Neue_Montreal'] text-base font-normal leading-4 tracking-[0.05em] text-gray-400 ml-1 truncate">
                {(from && airportNames[from as keyof typeof airportNames]) ||
                  ""}
              </span>
            </div>
            <div className="w-px h-6 bg-[#E6E8EB]" />
            <div className="flex items-center">
              <span className="font-['Neue_Montreal'] text-base font-medium leading-4 tracking-[0.05em]">
                {to}
              </span>
              <span className="font-['Neue_Montreal'] text-base font-normal leading-4 tracking-[0.05em] text-gray-400 ml-1 truncate">
                {airportNames[to] || ""}
              </span>
            </div>
            <div className="w-px h-6 bg-[#E6E8EB]" />
            <Input
              className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto font-['Neue_Montreal'] text-base font-normal leading-4 tracking-[0.05em]"
              placeholder="Select dates"
              defaultValue={date}
            />
          </div>
          <div className="ml-4 bg-gray-100 rounded-full p-2">
            <Button size="icon" variant="ghost" className="p-0 h-auto w-auto">
              <Search className="h-5 w-5 text-gray-500" />
              <span className="sr-only">Search flights</span>
            </Button>
          </div>
        </div>
        <Button
          title="Close"
          onClick={() => {
            /* Handle close action */
          }}
          className="p-2 rounded-full bg-white border-2 border-gray-300 hover:bg-gray-100 transition-colors mr-10"
        >
          <X size={24} className="text-gray-500" />
        </Button>
      </div>

      {availableFlights.length > 0 ? (
        <>
          <div className="text-sm text-gray-600 mb-4 pt-4">
            Showing {availableFlights.length} results (hardcoded some data as no
            live data)
          </div>

          {availableFlights.map((flight, index) => (
            <div key={index} className="bg-white rounded-lg shadow mb-4 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src={`/${flight.airline
                      .toLowerCase()
                      .replace(/\s+/g, "-")}-logo.png`}
                    alt={flight.airline}
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <div>
                    <div>
                      {flight.airline} • {flight.flightNumber}
                    </div>
                    <div className="text-sm">
                      {flight.departureTime} - {flight.arrivalTime}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div>
                    {flight.from} - {flight.to}
                  </div>
                  <div className="text-sm">{flight.duration}</div>
                </div>
                <div className="text-right">
                  <div>Non stop</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">from</div>
                  <div className="font-semibold">
                    AED {parseFloat(flight.price).toFixed(2)}
                  </div>
                  <Sheet>
                    <SheetTrigger>
                      <button className="bg-[#003E39] text-white px-8 py-2 rounded mt-1 text-sm">
                        Select
                      </button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Flight Details(hardcoded)</SheetTitle>
                        <SheetDescription>
                          <div className="mt-6 border-t-[2px] border-gray-200 pt-6">
                            <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
                              <h2 className="text-2xl font-bold mb-6">
                                Flight details
                              </h2>
                              <div className="space-y-6">
                                {/* First Flight */}
                                <div className="flex items-start">
                                  <div className="flex-shrink-0 mr-4">
                                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                                  </div>
                                  <div className="flex-grow">
                                    <p className="text-sm text-gray-600">
                                      Sat 28 Sept • 2:15
                                    </p>
                                    <p className="font-semibold">
                                      DXB • Dubai International Airport
                                    </p>
                                  </div>
                                  <div className="flex items-start ml-4">
                                    <Image
                                      src="/saudi-arabian-airlines-logo.png"
                                      alt="Saudi Arabian Airlines"
                                      width={24}
                                      height={24}
                                      className="mr-2"
                                    />
                                    <div>
                                      <p className="text-sm">
                                        Saudi Arabian Airlines • SV553
                                      </p>
                                      <p className="text-sm text-gray-600">
                                        Economy • A330
                                      </p>
                                      <p className="text-sm text-gray-600">
                                        Flight time 3h 45m
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                {/* Arrival at RUH */}
                                <div className="flex items-start">
                                  <div className="flex-shrink-0 mr-4">
                                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                                  </div>
                                  <div className="flex-grow">
                                    <p className="text-sm text-gray-600">
                                      Sat 28 Sept • 2:15
                                    </p>
                                    <p className="font-semibold">
                                      RUH • King Khalid International Airport
                                    </p>
                                  </div>
                                </div>

                                {/* Layover */}
                                <div className="ml-10 flex items-center text-gray-600">
                                  <svg
                                    className="w-4 h-4 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  <span className="text-sm">
                                    Layover 2h 25m
                                  </span>
                                </div>

                                {/* Second Flight */}
                                <div className="flex items-start">
                                  <div className="flex-shrink-0 mr-4">
                                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                                  </div>
                                  <div className="flex-grow">
                                    <p className="text-sm text-gray-600">
                                      Sat 28 Sept • 2:15
                                    </p>
                                    <p className="font-semibold">
                                      RUH • King Khalid International Airport
                                    </p>
                                  </div>
                                  <div className="flex items-start ml-4">
                                    <Image
                                      src="/saudi-arabian-airlines-logo.png"
                                      alt="Saudi Arabian Airlines"
                                      width={24}
                                      height={24}
                                      className="mr-2"
                                    />
                                    <div>
                                      <p className="text-sm">
                                        Saudi Arabian Airlines • SV553
                                      </p>
                                      <p className="text-sm text-gray-600">
                                        Economy • A330
                                      </p>
                                      <p className="text-sm text-gray-600">
                                        Flight time 3h 45m
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                {/* Final Destination */}
                                <div className="flex items-start">
                                  <div className="flex-shrink-0 mr-4">
                                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                                  </div>
                                  <div className="flex-grow">
                                    <p className="text-sm text-gray-600">
                                      Sat 28 Sept • 2:15
                                    </p>
                                    <p className="font-semibold">
                                      CDG • Paris - Charles de Gualle Airport
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="text-center py-8">
          <p className="text-xl font-semibold">
            No direct flights found for this route.
          </p>
          <p className="text-gray-600 mt-2">
            Please try different dates or locations.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
