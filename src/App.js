
import "./styles.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App container border rounded my-5">
      <Search />
      <CurrentWeather />
      <Forecast />
    </div>
  );
}