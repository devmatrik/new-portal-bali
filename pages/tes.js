// import moment from 'moment/moment';
import moment from 'moment-timezone';
import React, { useState, useEffect } from 'react';
// import WeeklyWeather from "../../components/WeeklyWeather";
import Image from 'next/image'

const api = {
  key: "0aacff65b5e02f5d76fefb88183a1298",
  base: "https://api.openweathermap.org/data/2.5/forecast"
}

export default function Cuaca() {
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
            icon : data[index].weather[a].main,
            tingkat_awan: data[index].clouds + "%"
          })
        }
        console.log(result.daily);
        setWeather(cuaca);
        setQuery('');
      });
  }

  return (
    <>
      <div className='bg-green-300'>
        tes
        {weather.map(item => {
          if (item == 0) {
            return;
          }

          return (
            <div className="weekly__card" key={weather.dt}>
              <div className="weekly__inner">
                <div className="weekly__left-content">
                  <div>
                    <h3>
                      {moment.unix(weather.dt).tz(timezone).format("dddd")}
                    </h3>

                    <h4>
                      <span>{weather.temp.max.toFixed(0)}&deg;C</span>
                      <span>{weather.temp.min.toFixed(0)}&deg;C</span>
                    </h4>
                  </div>

                  <div className="weekly__sun-times">
                    <div>
                      <span>Sunrise</span>
                      <span>
                        {moment.unix(weather.sunrise).tz(timezone).format("LT")}
                      </span>
                    </div>

                    <div>
                      <span>Sunset</span>
                      <span>
                        {moment.unix(weather.sunset).tz(timezone).format("LT")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="weekly__right-content">
                  <div className="weekly__icon-wrapper">
                    <div>
                      <Image
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="Weather Icon"
                        layout="fill"
                      />
                    </div>
                  </div>

                  <h5>{weather.weather[0].description}</h5>
                </div>
              </div>
            </div>
          );

        })}
      </div>
    </>
  );
}