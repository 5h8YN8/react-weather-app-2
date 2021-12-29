import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo (props) {
    return (    
    <div className="weatherInfo">
    <h1>{props.data.city}</h1>
        <ul>
            <li> <FormattedDate date={props.data.time}/> </li>
            <li className="text-capitalize">{props.data.desc}</li>
        </ul>
    <div className="row crt-tmp">
        <div className="col-6">
            <WeatherIcon iconData={props.data.icon}/>
            <Temperature celcius={props.data.temperature} />
        </div>
        <div className="col-6">
        <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
        </ul>
        </div>
    </div>
    </div>
    );
}