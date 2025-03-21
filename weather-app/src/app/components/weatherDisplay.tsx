"use client";
import axios from "axios";
import { useState } from "react";
import SearchBox from "./searchBox";

interface IWeatherData {
  name: string;
  main: { temp: number; humidity: number; feels_like: number };
  weather: { description: string }[];
  wind: { speed: number };
}

function WeatherDisplay() {
  const [weather, setWeather] = useState<IWeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (city: string) => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const api = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
      );
      console.log("API Response Data:", response.data); // ✅ Logs only the data
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBox onSearch={fetchData} />

      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {weather && (
        <div className="my-10">
          <h2 className="text-2xl text-center font-semibold">{weather.name}</h2>
          <div className="text-center my-5">
            <p className="text-5xl font-bold">{weather.main.temp}°C</p>
            <p className="text-3xl text-gray-700">
              {weather.weather[0].description}
            </p>
          </div>
          <div className="flex justify-center items-center gap-8 ">
            <div>
              <p>Fells Like</p>
              <p>{weather.main.feels_like}°C</p>
            </div>
            <div>
              <p>Humidity</p>
              <p>{weather.main.humidity} %</p>
            </div>
            <div>
              <p>Wind</p>
              <p>{weather.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherDisplay;
