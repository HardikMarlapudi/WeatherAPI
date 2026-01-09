import React, {useState} from "react";
import '/src/WeatherAPI.css';

function SearchBar({onSearch}) {
    const [cityInput, setCityInput] = useState('');

    const handleSearch = () => {
        onSearch(cityInput);
        if(!cityInput === "") {
            alert("Please enter a city!");
            return;
        }
        onSearch(cityInput);
    }
   
    return (
        <div>
            <input
            type="text"
            id="cityName"
            placeholder="Search..."
            onChange={(e) => setCityInput(e.target.value)}
            />
            <button id="searchBtn" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar;
