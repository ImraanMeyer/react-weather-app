import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';


// openweather API Key
const API_KEY = "55124ea2024b8eac85c1c5b5dc82062e";

export default class App extends Component {
  state = {
    temprature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    cod: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
      .then(data => data.json())

    if (city && country) {
      this.setState({
        cod: data.cod
      })
      if (this.state.cod === "404") {
        this.setState({
          temprature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: data.message
        })
      } else {
        this.setState({
          temprature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: undefined,
        })
      }
    } else {
      this.setState({
        temprature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values!"
      })
    }
    console.log(this.state)
  }

  render() {
    // Deconstructing state 
    const { temprature, city, country, humidity, description, error } = this.state;

    return (
      <div>
        <h1>App Component</h1>
        <Header />
        <Form getWeather={this.getWeather} />

        <Weather
          temprature={temprature}
          city={city}
          country={country}
          humidity={humidity}
          description={description}
          error={error}
        />
      </div>
    )
  }
}
