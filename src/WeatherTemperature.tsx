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

  return (
    <div>
        <h2>Weather Temperature</h2>
    </div>
  )
}

export default WeatherTemperature;
