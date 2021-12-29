import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast (){

 return (
    <div className="WeatherForecast">
        <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon iconData="11d" size={32}/>
            <div><span className="WeatherForecast-max">19</span> <span className="WeatherForecast-min">10</span></div>
        </div>
    </div>

);
}