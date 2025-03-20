import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "c94d9352077d0377f627341577ec8042";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            if (response.ok) {
                setError(false);

                let result = {
                    city: city,
                    temp: jsonResponse.main.temp,
                    tempMin: jsonResponse.main.temp_min,
                    tempMax: jsonResponse.main.temp_max,
                    humidity: jsonResponse.main.humidity,
                    feelsLike: jsonResponse.main.feels_like,
                    weather: jsonResponse.weather[0].description,
                };
                // console.log(result);
                return result;
            } else {
                throw new Error("Invalid city");
            }
        } catch (err) {
            setError(true);
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
        setError(false);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        } catch (err) {
            console.error("Error fetching weather data:", err);
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" placeholder='City Name'  required value={city} onChange={handleChange} sx={{
                    "& .MuiOutlinedInput-root": {
                        backgroundColor: "white",
                        "&:hover fieldset": {
                            borderColor: "blue",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "darkblue",
                        },
                    },
                    "& .MuiInputBase-input": {
                        color: "black",
                    },
                }} />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{ color: "red" }}>No such place exists!</p>}
            </form>
        </div>
    );
}
