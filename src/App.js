
import "./styles.css";

import Weather from "./Weather";


export default function App() {
  return (
    <div className="container">
    <div className="App container border rounded my-3">
        <Weather />
      </div>
      <footer><a href="https://github.com/mayabuserde/reactweatherapp" target="_blank" rel="noreferrer">Open-source code</a>, by <a href="https://mayabuserde.github.io/" target="_blank" rel="noreferrer">Maya Buser De</a></footer>
    </div>
  );
}