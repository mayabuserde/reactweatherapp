
import "./styles.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="container">
      <div className="App container border rounded my-5">
        <Search />
        <CurrentWeather />
        <Forecast />
      </div>
      <footer><a href="https://github.com/mayabuserde/reactweatherapp" target="_blank" rel="noreferrer">Open-source code</a>, by <a href="https://mayabuserde.github.io/" target="_blank" rel="noreferrer">Maya Buser De</a></footer>
    </div>
  );
}