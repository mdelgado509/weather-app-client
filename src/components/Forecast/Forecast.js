// This component displays the forecast in the city the user inputs
import React, { useState } from 'react'
const testURL = "https://community-open-weather-map.p.rapidapi.com/weather?q=Seattle"

const Forecast = () => {
  const [responseObj, setResponseObj] = useState({})

  function getForecast() {
    fetch(testURL, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "", // add manually for now but eventually retrieve from proxy server
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
      }
    })
    .then(response => response.json())
    .then(response => setResponseObj(response))
    .catch(err => {
    	console.error(err)
    })
  }

  // returns JSX
  return (
    <div>
      <h1>Find Current Weather Condition (in Seattle)</h1>
      <div>
        {JSON.stringify(responseObj)}
      </div>
      <button onClick={getForecast}>Get Forecast</button>
    </div>
  )
}

export default Forecast;
