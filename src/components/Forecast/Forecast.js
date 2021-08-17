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


  function getForecast() {
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
      <h1>Find Current Weather Conditions (in Seattle)</h1>
      <button onClick={getForecast}>Get Forecast</button>
      <Conditions responseObj={responseObj} />
    </div>
  )
}

export default Forecast;
