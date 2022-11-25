import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function WeatherForecast({data}) {
    const getDate = (d) => {
        let dateTime = new Date(d * 1000)
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return days[dateTime.getDay()] + ', ' + months[dateTime.getMonth()] + ' ' + (dateTime.getDate());
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
                    <Card.Title>{getDate(data.list[1].dt)}</Card.Title>
                    <img src={`http://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`} alt='weather icon' />
                    <Card.Text>{(data.list[1].main.temp - 273.15).toFixed()} °C</Card.Text>
                    <Card.Text>{data.list[1].weather[0].description}</Card.Text>
                </Card.Body>
            </Card>
            <Card style={style}>
                <Card.Body>
                    <Card.Title>{getDate(data.list[9].dt)}</Card.Title>
                    <img src={`http://openweathermap.org/img/w/${data.list[9].weather[0].icon}.png`} alt='weather icon' />
                    <Card.Text>{(data.list[9].main.temp - 273.15).toFixed()} °C</Card.Text>
                    <Card.Text>{data.list[9].weather[0].description}</Card.Text>
                </Card.Body>
            </Card>
            <Card style={style}>
                <Card.Body>
                    <Card.Title>{getDate(data.list[17].dt)}</Card.Title>
                    <img src={`http://openweathermap.org/img/w/${data.list[17].weather[0].icon}.png`} alt='weather icon' />
                    <Card.Text>{(data.list[17].main.temp - 273.15).toFixed()} °C</Card.Text>
                    <Card.Text>{data.list[17].weather[0].description}</Card.Text>
                </Card.Body>
            </Card>
            <Card style={style}>
                <Card.Body>
                    <Card.Title>{getDate(data.list[25].dt)}</Card.Title>
                    <img src={`http://openweathermap.org/img/w/${data.list[25].weather[0].icon}.png`} alt='weather icon' />
                    <Card.Text>{(data.list[25].main.temp - 273.15).toFixed()} °C</Card.Text>
                    <Card.Text>{data.list[25].weather[0].description}</Card.Text>
                </Card.Body>
            </Card>
            <Card style={style}>
                <Card.Body>
                    <Card.Title>{getDate(data.list[33].dt)}</Card.Title>
                    <img src={`http://openweathermap.org/img/w/${data.list[33].weather[0].icon}.png`} alt='weather icon' />
                    <Card.Text>{(data.list[33].main.temp - 273.15).toFixed()} °C</Card.Text>
                    <Card.Text>{data.list[33].weather[0].description}</Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>   
        }
    </>
  )
}
