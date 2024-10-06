
"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Check, Loader, Search, X } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

interface SearchInterfaceProps {
  onClose: () => void;
}

export default function SearchInterface({ onClose }: SearchInterfaceProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InnerSearchInterface onClose={onClose} />
    </Suspense>
  );
}

function InnerSearchInterface({ onClose }: SearchInterfaceProps) {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date") || "Jun 25 - Jul 2";

  // Airport names mapping
  const airportNames: { [key: string]: string } = {
    CDG: "Paris Charles De Gau...",
    DXB: "Dubai International...",
    // Add more as needed
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Dynamic Navbar */}
      <div className="flex justify-between items-center pb-6 pt-6 border-b-[1px] border-gray-200">
        <div className="flex items-center w-[662px] h-[50px] bg-white rounded-full border border-[#E6E8EB] px-6 py-3 mb-4">
          <div className="flex-1 flex items-center gap-4">
            <div className="flex items-center w-[200px] h-4 max-w-[200px]">
              <span className="font-['Neue_Montreal'] text-base font-medium leading-4 tracking-[0.05em]">
                {from}
              </span>
              <span className="font-['Neue_Montreal'] text-base font-normal leading-4 tracking-[0.05em] text-gray-400 ml-1 truncate">
                {from && airportNames[from] ? airportNames[from] : ""}
              </span>
            </div>
            <div className="w-px h-6 bg-[#E6E8EB]" />
            <div className="flex items-center">
              <span className="font-['Neue_Montreal'] text-base font-medium leading-4 tracking-[0.05em]">
                {to}
              </span>
              <span className="font-['Neue_Montreal'] text-base font-normal leading-4 tracking-[0.05em] text-gray-400 ml-1 truncate">
                {to && airportNames[to] ? airportNames[to] : ""}
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
          onClick={onClose}
          className="p-2 rounded-full bg-white border-2 border-gray-300 hover:bg-gray-100 transition-colors mr-10"
        >
          <X size={24} className="text-gray-500" />
        </Button>
      </div>

      {/* Loading line */}
      <div className="h-1 relative overflow-hidden">
        <div className="h-full absolute bg-gradient-loading left-0 top-0 w-1/3 animate-loading"></div>
      </div>

      {/* Loading content with skeleton background */}
      <div className="container mx-auto p-8 flex justify-center items-center flex-grow relative">
        {/* Skeleton background */}
        <div className="absolute inset-0 flex flex-col space-y-6 p-8">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex space-x-4">
              <Skeleton className="h-24 w-24 rounded" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>

        {/* Main loading card */}
        <div className="absolute w-[323px] h-[300px] top-[100px] left-[438px] bg-white rounded-tl-[16px] shadow-lg p-6 z-10 border-t border-l">
          <div className="flex flex-col items-center h-full justify-center">
            <div className="w-16 h-16 mb-4">
              {/* Paper plane SVG */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 9L22.5 3L17 21L12 13.5L1.5 9Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13.5L17 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Check className="text-green-500 mr-2" size={16} />
                <span>Searching 400+ flights</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-2" size={16} />
                <span>Attaching company rules</span>
              </div>
              <div className="flex items-center">
                <Loader className="text-gray-400 mr-2 animate-spin" size={16} />
                <span>Serving best results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
