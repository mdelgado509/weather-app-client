// This component displays the forecast in the city the user inputs
import React, { useState } from 'react'
import Conditions from '../Conditions/Conditions'

const Forecast = () => {
  // state for API response
  const [responseObj, setResponseObj] = useState({});
  // state for user input form
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('imperial');

  // this will encode a URI for our city to attach to our URL
  const cityURI = encodeURIComponent(city);

  // the variable URL used in the API call
  const testURL = `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${cityURI}`


  function getForecast(e) {
    e.preventDefault()
    fetch(testURL, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "", // add manually for now but eventually retrieve from proxy server
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
      }
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      setResponseObj(response);
    })
    .catch(err => {
    	console.error(err);
    })
  }

  // returns JSX
  return (
    <div>
      <h1>Find Current Weather Conditions</h1>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input
          type="radio"
          checked={unit === "imperial"}
          value="imperial"
          onChange={e => setUnit(e.target.value)}
        />
        <label>Fahrenheit</label>
        <input
          type="radio"
          checked={unit === "metric"}
          value="metric"
          onChange={e => setUnit(e.target.value)}
        />
        <label>Celcius</label>
        <button type="submit">Get Forecast</button>
      </form>
      <Conditions responseObj={responseObj} unit={unit === "imperial" ? "F" : "C"} />
    </div>
  )
}

export default Forecast;
