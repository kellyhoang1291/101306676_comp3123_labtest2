import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function WeatherForecast({data}) {
    const getDate = (d) => {
        let dateTime = new Date(d * 1000)
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return days[dateTime.getDay()] + ', ' + months[dateTime.getMonth()] + ' ' + (dateTime.getDate()+1);
    }

    const style = {
        backgroundColor:'black',
        color: 'white' 
    }
    
    return (
    <>
        {data.list && 
        <CardGroup>
            <Card style={style}>
                <Card.Body>
                    <Card.Title>{getDate(data.list[0].dt)}</Card.Title>
                    <img src={`http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`} alt='weather icon' />
                    <Card.Text>{(data.list[0].main.temp - 273.15).toFixed()} °C</Card.Text>
                    <Card.Text>{data.list[0].weather[0].description}</Card.Text>
                </Card.Body>
            </Card>
            <Card style={style}>
                <Card.Body>
                    <Card.Title>{getDate(data.list[8].dt)}</Card.Title>
                    <img src={`http://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`} alt='weather icon' />
                    <Card.Text>{(data.list[8].main.temp - 273.15).toFixed()} °C</Card.Text>
                    <Card.Text>{data.list[8].weather[0].description}</Card.Text>
                </Card.Body>
            </Card>
            <Card style={style}>
                <Card.Body>
                    <Card.Title>{getDate(data.list[16].dt)}</Card.Title>
                    <img src={`http://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`} alt='weather icon' />
                    <Card.Text>{(data.list[16].main.temp - 273.15).toFixed()} °C</Card.Text>
                    <Card.Text>{data.list[16].weather[0].description}</Card.Text>
                </Card.Body>
            </Card>
            <Card style={style}>
                <Card.Body>
                    <Card.Title>{getDate(data.list[24].dt)}</Card.Title>
                    <img src={`http://openweathermap.org/img/w/${data.list[24].weather[0].icon}.png`} alt='weather icon' />
                    <Card.Text>{(data.list[24].main.temp - 273.15).toFixed()} °C</Card.Text>
                    <Card.Text>{data.list[24].weather[0].description}</Card.Text>
                </Card.Body>
            </Card>
            <Card style={style}>
                <Card.Body>
                    <Card.Title>{getDate(data.list[32].dt)}</Card.Title>
                    <img src={`http://openweathermap.org/img/w/${data.list[32].weather[0].icon}.png`} alt='weather icon' />
                    <Card.Text>{(data.list[32].main.temp - 273.15).toFixed()} °C</Card.Text>
                    <Card.Text>{data.list[32].weather[0].description}</Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>   
        }
    </>
  )
}
