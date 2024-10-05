'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, ChevronDown, Search, Loader } from "lucide-react"
import { LocateFixed } from "lucide-react"
import { ArrowLeftRight } from "lucide-react"
import SearchInterface from "@/components/SearchInterface"

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSearch = () => {
    setIsLoading(true)
    // Simulate API call or data processing
    setTimeout(() => {
      router.push('/search-results')
    }, 3000) // Redirect after 3 seconds
  }

  return (
    <div className="container mx-auto p-8 w-12000px h-900px ml-120px">
      {isLoading === false ? (
        <>
          <div className="w-auto h-[43px] mt-[106px] ml-[431px]">
            <h1 className="text-[36px] font-normal leading-[43.2px] font-neue-montreal whitespace-nowrap">Good afternoon, Brian</h1>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 w-[1057px] h-[252px] flex flex-col ml-[72px]">
            <div className="w-[127px] h-[36px] rounded-tl-[6px] flex items-center justify-center bg-[#F5F7FA]">
              <h2>
                <span className="inline-block font-neue-montreal text-base font-medium leading-4 tracking-[0.05em] text-center">Flights</span>
              </h2>
            </div>
            
            <div className="flex gap-4 mt-4">
              <div className="w-[267.5px] h-[60px] rounded-[12px] border border-[#E6E8EB] flex items-center relative">
                <LocateFixed className="absolute left-3 text-gray-400" size={20} />
                <Input 
                  placeholder="Where from?" 
                  className="h-full border-none focus:ring-0 rounded-[12px] bg-transparent pl-10 pr-8"
                />
                <ChevronDown className="absolute right-3 text-gray-400" size={20} />
              </div>
              <div className="w-[52px] h-[52px] bg-[#F5F7FA] rounded-full flex items-center justify-center">
                <ArrowLeftRight size={20} className="text-gray-600" />
              </div>
              <div className="w-[267.5px] h-[60px] rounded-[12px] border border-[#E6E8EB] flex items-center relative">
                <LocateFixed className="absolute left-3 text-gray-400" size={20} />
                <Input 
                  placeholder="Where to?" 
                  className="h-full border-none focus:ring-0 rounded-[12px] bg-transparent pl-10 pr-8"
                />
                <ChevronDown className="absolute right-3 text-gray-400" size={20} />
              </div>
              <div className="w-[177px] h-[60px] rounded-[12px] border border-[#E6E8EB] flex items-center relative">
                <Calendar className="absolute left-3 text-gray-400" size={20} />
                <Input 
                  placeholder="Depart" 
                  className="h-full border-none focus:ring-0 rounded-[12px] bg-transparent pl-10 pr-8"
                />
              </div>
              <div className="w-[177px] h-[60px] rounded-[12px] border border-[#E6E8EB] flex items-center relative">
                <Calendar className="absolute left-3 text-gray-400" size={20} />
                <Input 
                  placeholder="Return" 
                  className="h-full border-none focus:ring-0 rounded-[12px] bg-transparent pl-10 pr-8"
                />
              </div>
            </div>

            <div className="flex justify-end mt-auto">
              <Button 
                className="w-[249px] h-[48px] rounded-tl-[7px] bg-[#003E39] flex items-center justify-center"
                onClick={handleSearch}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader className="animate-spin mr-2" size={16} />
                ) : (
                  <Search size={16} className="mr-2" />
                )}
                <span className="font-neue-montreal text-base font-medium leading-4 tracking-[0.05em] text-left">
                  {isLoading ? 'Searching...' : 'Search flights'}
                </span>
              </Button>
            </div>
          </div>
        </>
      ) : (
        <SearchInterface />
      )}
    </div>
  )
}