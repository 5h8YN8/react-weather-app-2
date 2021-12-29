import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay (props){
console.log(props);
function day (){
    let date = new Date (props.data[0].dt*1000);
    let day = date.getDay();
    let days = ["Sun","Mon","Tue","Thu","Fri","Sat,"];
    return (days[day]);
}
function maxTemp (){
    let max= Math.round(props.data[0].temp.max);
    return `${max}°`;
    }
function minTemp (){
    let min= Math.round(props.data[0].temp.min);
    return `${min}°`;
    }

function getIcon (){
    return props.data[0].weather[0].icon;
}

return (
    <div className="WeatherForecast">
        <div className="col">
        <div className="row">
            <div className="WeatherForecast-day">{day()}</div>
            <div><WeatherIcon iconData={getIcon()} size={32}/></div>
            <div><span className="WeatherForecast-max">{maxTemp()}</span> <span className="WeatherForecast-min">{minTemp ()}</span></div>
        </div>
        </div>
    </div>
);
}
