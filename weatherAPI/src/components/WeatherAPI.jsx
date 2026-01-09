import React, {useState} from 'react';
import axios from 'axios';
import '/src/WeatherAPI.css';

function WeatherAPI() {

    const [city, setCity] = useState('');
    const [temperature, setTemperature] = useState('');
    const [condition, setCondition] = useState('')
    const [humandity, setHumandity] = useState('');
    const [windSpeed, setWindSpeed] = useState('');

    async function searchWeather() {
        const cityName = document.getElementById("cityName").value;
            try {
                const response = await axios.get("https://api.api-ninjas.com/v1/weather?lat=51.5074&lon=-0.1278", {
                    headers: {
                        'X-Api-Key': '1QaEXXiMr42UQHgffVLNDA==uoRjZZaDnhJg5v1O',
                        'Content-Type': 'application/json'
                    }
                });
                const weatherData = response.data;
                setCity(cityName);
                setTemperature(weatherData.temp + ' °C');
                setCondition(`Clouds: ${weatherData.cloud_pct}%`);
                setHumandity(weatherData.humandity + "%");
                setWindSpeed(weatherData.wind_speed + 'm/s');
            } catch (error) {
                console.error("Cannot fetch Weather API", error);
            }

            if (document.getElementById("cityName").value === "") {
                window.alert("Please enter a city!");
            }
        }

    return (
        <div className="border">
            <h2 id="title">Weather API</h2>
        <input type="text" id="cityName" placeholder="Search..."></input>
        <button id="searchBtn" onClick={searchWeather}>Search</button>
        <h3 id="city">{city}</h3>
        <h3 id="temperature">{temperature}</h3>
        <h3 id="condition">{condition}</h3>
        <p id="humandity">{humandity}</p>
        <p id="windSpeed">{windSpeed}</p>
        </div>
    )
}

export default WeatherAPI;
