import React, { useState }  from "react";


export default function Temperature (props){
let [temp, setTemp] = useState("celcius");

function showFarhen (event){
    event.preventDefault();
    setTemp ("fahren");
}

function showCel (event){
    event.preventDefault();
    setTemp ("celcius");
}

function convertFahren(){
    return (props.celcius*9)/5 + 32;
}

if (temp==="celcius"){
    return (
        <span>
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit">°C | <a href="/" onClick={showFarhen}>°F</a></span>
        </span>
    );}

    else {
        return (
            <span>
            <span className="temperature">{Math.round(convertFahren())}</span>
            <span className="unit"><a href="/" onClick={showCel}>°C</a> | °F</span>
            </span>
        );
}
}