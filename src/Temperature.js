import React from "react";


export default function Temperature (props){

    return (
        <span>
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit">°C </span>
        </span>
    );}
