import React ,{ useState } from 'react'
import useFetch from './useFetch'
import getWeatherIcon from './getWeatherIcon';
import Search from './components/Search';
function App() {
  const [cityName, setCityName] = useState('');
  const {data} = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=33c9a218beb583c558f007253f51b449`);
  
  const handleOnSearchChange = (searchData) => {
    let newCity = searchData.label.split(',');
    setCityName(newCity[0]);
    useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=33c9a218beb583c558f007253f51b449`);
  }

  const onClickingEnter = (enteredValue) => {
    return setCityName(enteredValue)
  } 

  return (
    <div className='flex justify-center items-center h-screen text-gray-100'>
      <div className="w-1/3 max-md:w-1/2 max-sm:first-letter:w-full bg-cyan-600 px-10 py-8 rounded-xl">
        <div className="flex flex-col">

          <Search 
          onSearchChange={handleOnSearchChange}
          onClickingEnter={onClickingEnter}
          />

        </div>
        <div className="flex items-center flex-col my-10">
          <h1 id="city" className="text-3xl font-bold">
            {data?.name} - {data?.sys.country}
          </h1>
          <h1 className='font-light mb-1'> {data?.weather[0].description} </h1>
          <h1 className='text-7xl font-bold'> {data && kelvinToCelsius(data?.main.temp) +"°C"} </h1>
          <img src="" alt="" />
        </div>
        <div className="flex justify-between text-center">
          <div id="FeelsLike" className="flex flex-col items-center">
            <img
            src={data? getWeatherIcon(data?.weather[0].description, data?.main.temp) : '../imgs/icons8-weather-48.png'} 
            alt="Weather"
            className='w-9' />
            <h1 className=" text-sm">Feels Like</h1>
            <p className="font-semibold">{data && kelvinToCelsius(data?.main['feels_like'])+'°C'}</p>
          </div>
          <div id="Humidity" className="flex flex-col items-center">
            <img src="../imgs/icons8-humidity-48.png" className='w-9' alt="Humidity" />
            <h1 className=" text-sm">Humidity</h1>
            <p className="font-semibold">{data && data?.main.humidity +'%'}</p>
          </div>
          <div id="wind-speed" className="flex flex-col items-center">
            <img src="../imgs/icons8-windsock-48.png" className='w-9' alt="Wind" />
            <h1 className=" text-sm">Wind Speed</h1>
            <p className="font-semibold">{data && data?.wind.speed +'km/h'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function kelvinToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  return Math.round(celsius);
}


export default App
