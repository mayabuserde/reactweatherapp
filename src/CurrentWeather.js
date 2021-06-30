import React, {useState} from 'react';
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";


export default function CurrentWeather() {
   let [city, setCity] = useState('');
    function showWeather(response) {
       alert(response.data.name)
   }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=$Atlanta&units=metric&appid=ffa66c6f94c53b49251ff2fd2a6dec80`;
  
    axios.get(url).then(showWeather);
  
    return (
        <div className="CurrentWeather row mb-5">
          <div className="col-8">
            <h2>{city}</h2>
            <h4>Sunday, June 13 2021</h4>
            <p>Partly Cloudy</p>
            <FontAwesomeIcon icon={faCloudSun} />
          </div>
          <div className="col-4 m-auto">
            <ul className="list-unstyled text-left">
            
            <li>Temperature: 19 C</li>
            <li>Wind: 15 km/h</li>
            <li>Humidity 90%</li>
          
            </ul>
          </div>
        </div>
      ); 
}
