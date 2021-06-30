
import DailyWeather from "./DailyWeather";

export default function Forecast() {
  return (
    <div className="Forecast row justify-content-center">
      <DailyWeather day="Mon" className="col" />
      <DailyWeather day="Tue" className="col" />
      <DailyWeather day="Wed" className="col" />
      <DailyWeather day="Thu" className="col" />
      <DailyWeather day="Fri" className="col" />
    </div>
  );
}
