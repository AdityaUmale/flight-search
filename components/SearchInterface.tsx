import { Check, Loader, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SearchInterface = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="flex items-center w-[662px] h-[50px] bg-white rounded-full border border-[#E6E8EB] px-6 py-3 mb-4">
        <div className="flex-1 flex items-center gap-4">
          <div className="flex items-center w-[200px] h-4 max-w-[200px]">
            <span className="font-['Neue_Montreal'] text-base font-medium leading-4 tracking-[0.05em]">
              CDG
            </span>
            <span className="font-['Neue_Montreal'] text-base font-normal leading-4 tracking-[0.05em] text-gray-400 ml-1 truncate">
              Paris Charles De Gau...
            </span>
          </div>
          <div className="w-px h-6 bg-[#E6E8EB]" />
          <div className="flex items-center">
            <span className="font-['Neue_Montreal'] text-base font-medium leading-4 tracking-[0.05em]">
              DXB
            </span>
            <span className="font-['Neue_Montreal'] text-base font-normal leading-4 tracking-[0.05em] text-gray-400 ml-1 truncate">
              Dubai International...
            </span>
          </div>
          <div className="w-px h-6 bg-[#E6E8EB]" />
          <Input
            className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto font-['Neue_Montreal'] text-base font-normal leading-4 tracking-[0.05em]"
            placeholder="Select dates"
            defaultValue="Jun 25 - Jul 2"
          />
        </div>
        <div className="ml-4 bg-gray-100 rounded-full p-2">
          <Button size="icon" variant="ghost" className="p-0 h-auto w-auto">
            <Search className="h-5 w-5 text-gray-500" />
            <span className="sr-only">Search flights</span>
          </Button>
        </div>
      </div>

      {/* Loading line */}
      <div className="h-1 bg-blue-200 relative overflow-hidden">
        <div className="h-full bg-blue-500 absolute left-0 top-0 w-1/3 animate-[loading_1.5s_ease-in-out_infinite]"></div>
      </div>

      {/* Loading content */}
      <div className="container mx-auto p-8 flex justify-center items-center flex-grow">
        <div className="bg-white rounded-lg shadow p-6 w-[400px]">
          <div className="flex flex-col items-center">
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
    </div>
  );
};

export default SearchInterface;
