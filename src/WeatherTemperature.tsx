import { useEffect, useState } from "react";
import { dummyFetch, type WeatherData } from "./data/dummyfetch";

const WeatherTemperature = () => {
    const [weatherData, setWeatherData] = useState({} as WeatherData);
    const [isCelsius, setIsCelsius] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchWeather = async() => {
            setLoading(true)
            try {
                const response = await dummyFetch("https://example.com/api/weather")
                if(response.status === 200){
                    setWeatherData(response.data)
                }
            } catch (error) {
                if (error instanceof Error) {
                    console.log("Error fetching data", error.message);
                } else {
                    console.log("Error fetching data", error);
                }
            } finally {
                setLoading(false)
            }
        }
        fetchWeather()
    }, [])

    if(loading){
        return <p>Loading Weather Data...</p>
    }

  return (
    <div>
        <h2>Weather Temperature</h2>
        {weatherData && (
            <div >
                <p>
                    Temperature:{" "}
                    {isCelsius
                        ? `${weatherData.temperature}°C`
                        : `${(((weatherData.temperature) * 9) / 5 + 32).toFixed()}°F`}
                </p>
                <p>Humidity: {weatherData.humidity}%</p>
                <p>Wind Speed: {weatherData.windSpeed} km/h</p>
                <button onClick={() => setIsCelsius(!isCelsius)}>
                    Switch to {isCelsius ? "Fahrenheit" : "Celsius"}</button>
            </div>
        )}
    </div>
  )
}

export default WeatherTemperature;
