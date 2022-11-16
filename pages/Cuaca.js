// import moment from 'moment/moment';
import moment from 'moment-timezone';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';

export default function Cuaca() {
  const [query, setQuery] = useState('bali');
  const [loading, setLoader] = useState(false);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    search()
  }, [loading])

  const search = () => {
    fetch(`https://openweathermap.org/data/2.5/weather?lat=-8.65&lon=115.216667&appid=439d4b804bc8187953eb36d2a8c26a02`)
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
    {/* <div className="container"> */}
    <div className="row">
                <div className="col-md-12">
                  <div className="location">
                    <p className='hari'>
                      <Image src="/images/map.png" width={20} height={20} alt="" />
                      {weather.kota},
                      <span className='tanggal'>
                        {weather.hari}
                      </span>
                    </p>
                  </div>
                  <div className="temp">
                    <p className='weather'>
                      <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} width={30} alt="cuaca" />
                      {weather.temp}
                      <span className='wind'>
                        <Image src={'/images/windd.png'} width={20} height={20} alt="" />
                        &nbsp;{weather.kecepatan_angin}
                      </span>
                    </p>
                  </div>
                </div>
                {/* <div className="col-md-6">
                </div> */}
              </div>
      {/* <Card style={{ width: '40rem' }} className={'bg-transparent hapus-border'}>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Subtitle className='font-hari'></Card.Subtitle>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
      </Card> */}
      {/* <div>
      </div> */}
    </>
  );
}