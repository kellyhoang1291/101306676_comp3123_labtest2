import React from 'react'
import axios from 'axios';
import { useState } from "react";
import WeatherDetails from './WeatherDetails';
import WeatherForecast from './WeatherForecast';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import image from "./cloud.jpg"


export default function Weather() {
    const [data, setData] = useState({})
    const [city, setCity] = useState("")
    const [forecast, setForecast] = useState({})

    const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cf7c1b678146af099524604c6dc00adc`
    const WEATHER_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=cf7c1b678146af099524604c6dc00adc`

    const getCity = (event) => {
		if (event.key === "Enter") {
			axios.get(WEATHER_URL).then((response) => {
				setData(response.data);
				console.log(response.data);
			});

            axios.get(WEATHER_FORECAST_URL).then((response) => {
                setForecast(response.data);
                console.log(response.data);
            });

			setCity("");
		}
    }
    return (
        <>
        <div>
        <input 
            type='text'
            value={city}
            onChange={(event) => setCity(event.target.value)}
            onKeyPress={getCity}
            placeholder='Enter city'/>
        </div>
        <br />
        <div>
            <Card style={{backgroundImage: `url(${image})`, backgroundSize:'100%', color:'white', border: 'none', padding:'2rem' }} >
                <WeatherDetails data={data} />
            </Card>
            <Card style={{border: 'none'}}>
                <WeatherForecast data={forecast}  />
            </Card>
            
            
        </div>
        
        </>
    )
    
}