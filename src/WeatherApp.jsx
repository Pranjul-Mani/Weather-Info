import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.5,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    })

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Weather App</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox Info ={weatherInfo}/>
        </div>
    )
}