import WeatherApp from "../components/wheather"



function Forcast(){
  

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="px-4 py-3 ">
        <h1 className="text-gray-800 font-bold text-4xl uppercase text-center">
          Weather Forcast
        </h1>
        <WeatherApp />
      </div>
    </div>
  );
}


export default Forcast