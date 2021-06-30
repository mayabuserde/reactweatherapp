
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'

export default function DailyWeather(props) {
  return (
    <div className="DailyWeather m-4 col">
      <h3>{props.day}</h3>
      <p>Partly Cloudy</p>
      <FontAwesomeIcon icon={faCloudSun} />
      <ul className="list-unstyled mt-3">
        <li>Temperature: 19 C</li>
        <li>Wind: 15 km/h</li>
        <li>Humidity 90%</li>
      </ul>
    </div>
  );
}