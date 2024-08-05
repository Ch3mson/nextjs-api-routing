"use client"

import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'


export default function Home() { 

  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = async (e) => {
    if (e.key === 'Enter') {
      router.push(`/${input}`)
    }
  }

  return (
    
    <div className="flex flex-col p-8 gap-3 items-center">
      <h1 className="text-blue-500">
        Welcome to Jamauls Weather App! Search for a city for details:
      </h1>
      <TextField 
        id="outlined-basic" 
        label="Search" 
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleSearch}
      />
      <p>
        gives WeatherData
      </p>

    </div>
  );
}