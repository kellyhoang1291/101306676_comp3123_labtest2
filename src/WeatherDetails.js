import React from 'react'

export default function WeatherDetails({data}) {

    const getDate = () => {
        let dateTime = new Date(data.dt * 1000)
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return days[dateTime.getDay()] + ', ' + months[dateTime.getMonth()] + ' ' + dateTime.getDate();
    }

    return (
        <>
            {data.main && (
                    <div>
                    <h2>{data.name}, {data.sys.country}</h2>
                    <p>{getDate()}</p>
                    <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt='weather icon' />
                    <p>Temperature: {(data.main.temp - 273.15).toFixed()} °C</p>
                    <p>Feel Like: {(data.main.feels_like - 273.15).toFixed()} °C</p>
                    <p>Wind Degree: {data.wind.deg} meter/sec</p>
                    <p>Humidity: {data.main.humidity} %</p>
                    <p>Visbility: {data.visibility} meter</p>
                    <p>Pressure:{data.main.pressure} hPa</p>
                    <p>Clouds: {data.clouds.all}%</p>
                </div>
                )
            }
        </>
        
   
    )
}
