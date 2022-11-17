// import moment from 'moment/moment';
import moment from 'moment-timezone';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';

export default function CuacaLiveTraffict(props) {
  const [query, setQuery] = useState('bali');
  const [loading, setLoader] = useState(false);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    search(`${props.lat}`,`${props.lng}`)
  }, [loading])

  const search = (lat,lng) => {
    console.log(lat);
    fetch(`https://openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=439d4b804bc8187953eb36d2a8c26a02`)
      .then(res => res.json())
      .then(result => {
        const data = result
        setWeather({
          kota: data.name,
          hari: moment.unix(data.dt).format("DD MMMM YYYY"),
          tingkat_awan: data.weather[0].main,
          icon: data.weather[0].icon,
          temp: data.main.temp + "°c",
          kecepatan_angin: data.wind.speed + " knot",
        });
        setQuery();
      });
  }

  return (
    <>
          <div className="hariLive">
            <Image src="/images/map.png" width={20} height={20} alt="" />
            {weather.kota}
          </div>
          <div className="hariLive">
            <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} width={25} alt="cuaca" />
            {weather.temp}
          </div>
    </>
  );
}