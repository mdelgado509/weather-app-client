// This component renders specific weather conditions
import React from 'react';

const Conditions = props => {
  // returns conditions for valid API responses
  return (
    <div>
      {props.responseObj.cod === 200 ?
          <div>
             <p><strong>{props.responseObj.name}, {props.responseObj.sys.country}</strong></p>
             <p>It is currently {Math.round(props.responseObj.main.temp)} degrees (Kelvin) out with {props.responseObj.weather[0].description}.</p>
          </div> : null}
    </div>
  )
}

export default Conditions;

// Sample responseObj
// {
//   "coord": {
//     "lon": -122.3321,
//     "lat": 47.6062
//   },
//   "weather": [
//     {
//       "id": 803,
//       "main": "Clouds",
//       "description": "broken clouds",
//       "icon": "04d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 297.6,
//     "feels_like": 297.67,
//     "temp_min": 290.41,
//     "temp_max": 301.02,
//     "pressure": 1013,
//     "humidity": 60
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 4.63,
//     "deg": 230,
//     "gust": 10.29
//   },
//   "clouds": {
//     "all": 75
//   },
//   "dt": 1629146837,
//   "sys": {
//     "type": 1,
//     "id": 3417,
//     "country": "US",
//     "sunrise": 1629119226,
//     "sunset": 1629170414
//   },
//   "timezone": -25200,
//   "id": 5809844,
//   "name": "Seattle",
//   "cod": 200
// }
