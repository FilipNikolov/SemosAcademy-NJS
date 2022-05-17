import React, { useState } from "react";
import "../css/cities.css"
import { api } from "../constants/ApiContants";

export const Cities = () => {

    const [city, setCity] = useState("");

    function searchWeather() {
        fetch(`${api.root}/weather?q=${city}&appid=${api.key}&units=metric`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
            })
            .catch(err => alert(err))
    }

    return (
        <div className="cities">
            <div className="search-box">
                <input
                    className="search-bar"
                    placeholder="Enter city name!"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className="search-button" onClick={searchWeather}>Search</button>
            </div>
        </div>
    )

}