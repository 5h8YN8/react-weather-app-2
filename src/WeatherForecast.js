import React, {useState} from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){

    let [loaded,setLoaded] = useState("false");
    let [forecastData,setForecastData]=useState(null);

    function apiComplete (){
        setLoaded("true");

    }
    function handleResponse (response){
        setForecastData(response.data.daily);
        apiComplete();
    }
if (loaded==="true"){
 return (
 <WeatherForecastDay data={forecastData} />
);}
else {
    let  apiKey="f9d6c217fdb897f27b6e330e8c371a9d";
    let lat= (props.coordinates.lat);
    let lon=(props.coordinates.lon);
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    axios.get(apiUrl).then(handleResponse);
 return ("loading");
}
}