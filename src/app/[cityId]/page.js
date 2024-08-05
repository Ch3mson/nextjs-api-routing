"use client"

import { useEffect, useState } from "react";


export function parseCurrentWeather(data) {
    return data.list[0].main // returns object with temp, feels_like...
}

export default function CityDetails({ params }) {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(`http://localhost:3000/api/${params.cityId}`);
            const { data } = await res.json();
            console.log(data)
            setWeatherData(data);
          } catch (error) {
            console.error("Failed to fetch data:", error);
          }
        };
    
        fetchData();
      }, [params.cityId]);
    
    return (
        <div>
            city: {params.cityId}
            {
                weatherData && 
                <div>
                Temp: {parseCurrentWeather(weatherData).temp}
                Feels like: {parseCurrentWeather(weatherData).feels_like}
                temp_min: {parseCurrentWeather(weatherData).temp_min}
                temp_max: {parseCurrentWeather(weatherData).temp_max}
                </div>
            }
            
        </div>
    )
}