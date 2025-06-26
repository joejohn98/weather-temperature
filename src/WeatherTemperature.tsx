import { useState } from "react";

const WeatherTemperature = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [isCelsius, setIsCelsius] = useState(true);
    const [loading, setLoading] = useState(false);

    
  return (
    <div>
        <h2>Weather Temperature</h2>
    </div>
  )
}

export default WeatherTemperature;
