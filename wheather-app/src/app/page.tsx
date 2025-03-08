"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const [search, setSearch] = useState("")
  const route = useRouter()

  const handleSearch = ()=>{
    if(!search.trim()) return;
    route.push(`/weather?city=&{encodedURIComponent(search)}`)
  }


  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="px-4 py-2 border-b-2 border-teal-500">
        <h1 className="text-gray-800 font-bold text-4xl uppercase text-center">
          Weather Forcast
        </h1>
      </div>
      <form className="w-full max-w-sm mx-auto px-4 py-2">
        <div className="flex items-center  py-2">
          <input
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
            className="appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter your City"
          />
            <button
            onClick={handleSearch}
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Search
            </button>
        </div>
      </form>
    </div>
  );
}
