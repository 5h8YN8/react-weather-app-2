import React from "react";


export default function FormattedDate (props) {
let day =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"];
let days = day[props.date.getDay()];  
let hour= props.date.getHours(); 
if (hour <10) {
    hour= `0${hour}`;
} 
let minutes = props.date.getMinutes(); 
if (minutes <10) {
    minutes= `0${minutes}`;
} 
return (<div>{days} {hour}:{minutes}</div>);
}