import React, { useState } from "react";
import axios from "axios";
import './Weather.css';

export default function Weather () 
{
const[weatherData,setWeatherData]=useState({ready:false});

function handleResponse (response){
    console.log(response);
    setWeatherData({
    ready: true,
    time:"Monday 9:00AM",
    city: (response.data.name),
    humidity: (response.data.main.humidity),
    temperature: (response.data.main.temp),
    wind: (response.data.wind.speed),
    desc: (response.data.weather[0].description),
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
    
}

if (weatherData.ready===true){
    return (
    <div className="Weather container">
    <form>
    <div className="row">
        <div className="col-10">
        <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
        </div>
        <div className="col-2">
        <input type="submit" value="Search" className="btn btn-primary w-100"/>
        </div>
        </div>
    </form>
    
    <h1>{weatherData.city}</h1>
    <ul>
        <li>{weatherData.time}</li>
        <li className="text-capitalize">{weatherData.desc}</li>
    </ul>
<div className="row crt-tmp">
    <div className="col-6">
        <img 
        src={weatherData.icon}
         alt={weatherData.desc}>
        </img>
        <span className="temperature">{Math.round(weatherData.temperature)}</span>
        <span className="unit">°C</span>
    </div>
    <div className="col-6">
    <ul>
        <li>Precipitation: 32%</li>
        <li>Humidity: {weatherData.humidity}%</li>
        <li>Wind: {weatherData.wind} km/h</li>
    </ul>
    </div>

</div>
    </div>
    );
}

else {
    const apiKey="f9d6c217fdb897f27b6e330e8c371a9d";
    let city="New York"
    let apiurl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    axios.get(apiurl).then(handleResponse);
    return ("Loading...");
}}