import React, { useState } from "react";
import axios from "axios";
import './Weather.css';
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather (props) 
{
let [city, setCity] =useState(props.defaultCity);    
const[weatherData,setWeatherData]=useState({ready:false});

function handleResponse (response){
    setWeatherData({
    ready: true,
    time: new Date(response.data.dt * 1000),
    coordinates: response.data.coord,
    city: (response.data.name),
    humidity: (response.data.main.humidity),
    temperature: (response.data.main.temp),
    wind: (response.data.wind.speed),
    desc: (response.data.weather[0].description),
    icon: (response.data.weather[0].icon)
    });
    
}

function search (){
    const apiKey="f9d6c217fdb897f27b6e330e8c371a9d";
    let apiurl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    axios.get(apiurl).then(handleResponse);
}

function handleSubmit (event) {
    event.preventDefault();
    search ();
}

function updateCity (event){
    event.preventDefault();
    setCity(event.target.value);
}

if (weatherData.ready===true){
    return (
    <div className="Weather container">
    <form onSubmit={handleSubmit}>
    <div className="row">
        <div className="col-9">
        <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={updateCity}/>
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100"/>
        </div>
        </div>
    </form>
    <WeatherInfo data={weatherData}/>
    <WeatherForecast coordinates={weatherData.coordinates}/>
    </div>
    );
}

else {
    search();
    return ("Loading...");
}}