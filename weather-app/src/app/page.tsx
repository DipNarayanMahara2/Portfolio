import Image from "next/image";
import WeatherDisplay from "./components/weatherDisplay";


export default function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-100">
      {/* Background Image */}
      <Image
        src="/bg-image.jpg"
        alt="Weather Background"
        fill
        className="object-cover opacity-50"
      />

      {/* Weather Display Component */}
      <div className="absolute top-20 w-full flex justify-center">
        <WeatherDisplay />
      </div>
    </div>
  );
}
