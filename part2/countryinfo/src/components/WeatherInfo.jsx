import { useEffect, useState } from 'react'
import axios from 'axios'

const WeatherInfo = ({ city_name }) => {
    const weather_api_key = import.meta.env.VITE_OPENWEATHERMAP_API_KEY
    // console.log(weather_api_key)

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        console.log('weather name effect running!, ')

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name[0]}&appid=${weather_api_key}`)
            .then(response => {
                // console.log(response.data)
                setWeather(response.data)
            })
    }, city_name)

    if (weather === null) {
        return null
    }

    return (
        <div>
            <h2>The weather in {city_name[0]}</h2>
            <p>The temperature is: {(weather.main.temp - 273.5).toFixed(2)} Celsius</p>
            <img alt="weather_icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <p>The wind speed is: {weather.wind.speed} m/s</p>
        </div>
    )


}

export default WeatherInfo