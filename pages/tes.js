import moment from 'moment/moment';
import React, { useState, useEffect } from 'react';
const api = {
  key: "0aacff65b5e02f5d76fefb88183a1298",
  base: "https://api.openweathermap.org/data/2.5/forecast"
}

function App() {
  const [query, setQuery] = useState('bali');
  const [loading, setLoader] = useState(false);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    search("Enter")
  }, [loading])

  const search = () => {
    fetch(`https://openweathermap.org/data/2.5/onecall?lat=-8.5&lon=115&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`)
      .then(res => res.json())
      .then(result => {
        const cuaca = []
        const data = result.daily
        const a = 0
        for (let index = 0; index < data.length; index++) {
          cuaca.push({
            temp: data[index].temp.day + "°c",
            hari: moment.unix(data[index].dt).format("DD MMM YYYY"),
            cuaca: data[index].weather[a].main,
            tingkat_awan: data[index].clouds + "%"
          })
        }
        console.log(cuaca);
        setWeather(cuaca);
        setQuery('');
      });
  }

  return (
    <>
      <div className='bg-green-300'>
        tes
        {weather.map(item => {
          <ul>
            <li>Suhu  : {item.temp}</li>
            <li>Weather  : {item.cuaca}</li>
            <li>Cloud  : {item.tingkat_awan}</li>
            {/* <li>Day  : {moment.unix(item.hari).utc()}</li> */}
          </ul>
        })}
      </div>
    </>
  );
}

export default App;