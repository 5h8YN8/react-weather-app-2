import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay (props){
function day (){
    let date = new Date (props.data.dt*1000);
    let day = date.getDay();
    let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    return (days[day]);
}
function maxTemp (){
    let max= Math.round(props.data.temp.max);
    return `${max}°`;
    }
function minTemp (){
    let min= Math.round(props.data.temp.min);
    return `${min}°`;
    }

function getIcon (){
    return props.data.weather[0].icon;
}

return (
     <div>
        <div className="WeatherForecast-day">{day()}</div>
        <div><WeatherIcon iconData={getIcon()} size={32}/></div>
        <div><span className="WeatherForecast-max">{maxTemp()}</span> <span className="WeatherForecast-min">{minTemp ()}</span></div>
    </div>
  
);
}
