import React, { useState } from 'react';

import axios from "axios";
import Forecast from './Forecast';


export default function CurrentWeather() {
   let [city, setCity] = useState('');
   let [weather,setWeather] = useState({});
   let [isLoaded, setIsLoaded] = useState(false);
   let today = Date.now();
    function showWeather(response) {
      setIsLoaded(true);
       setWeather(
         {city: response.data.name,
          date: new Date(today + (response.data.timezone * 1000)).toUTCString().slice(0,16),
           temperature : response.data.main.temp,
          wind: response.data.wind.speed,
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description,
          icon: `http://openweathermap.org/img/wn/${
            response.data.weather[0].icon
          }@2x.png`,
        }
       );
   }
function handleSubmit(event) {
event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ffa66c6f94c53b49251ff2fd2a6dec80`;
  
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
   setCity(event.target.value);
  }

  let form = (<form className="Search d-flex m-5" onSubmit={handleSubmit}>
  <input type="search" className="form-control mx-2" onChange={updateCity} />
  <input
    type="submit"
    value="Search"
    className="mx-2 btn btn-outline-primary"
  />
  <button className="btn btn-primary">Map Location</button>
</form> );

  if (isLoaded) {
    return (
      <div className="container">
       {form}
      <div className="CurrentWeather row mb-5">
          <div className="col-6">
            <h2>{weather.city}</h2>
            <h4>{weather.date}</h4>
            <p>{weather.description}</p>
            <img src={weather.icon} alt={weather.description} />
          </div>
          <div className="col-6 m-auto">
            <ul className="list-unstyled">
            
            <li>Temperature: {weather.temperature} C</li>
            <li>Wind: {weather.wind} km/h</li>
            <li>Humidity {weather.humidity}%</li>
          
            </ul>
          </div>
          <Forecast />
        </div>
        </div>
    
      ); } else return (
        <div className="container">
        {form}
        <h2 className="m-5">Please search for a city to display the weather forecast</h2></div>
      )
}
