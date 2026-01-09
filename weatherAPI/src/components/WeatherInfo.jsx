import React from 'react';
import '/src/WeatherAPI.css';

function WeatherInfo({data}) {

    return (
        <>
        <h3 id="city">City: {data.city}</h3>
        <h3 id="temperature">Temperature: {data.temperature}</h3>
        <h3 id="condition">Condittion: {data.condition}</h3>
        <h3 id="humidity">Humidity: {data.humidity}</h3>
        <h3 id="windSpeed">Wind Speed: {data.wind_speed}</h3>
        </>
    );
}

export default WeatherInfo;
