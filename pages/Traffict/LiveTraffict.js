import React, { useEffect, useState } from 'react';
import { BaseLayouts, StorageApi } from '../../components/MainCode/MainImport'
import CuacaLiveTraffict from '../CuacaLiveTraffict';
import Image from 'next/image';

export default function LiveTraffict() {

  const [loading, setLoading] = useState(false)
  const [tableu, setTableu] = useState(false)
  useEffect(() => {
    getData()
  }, [loading])

  const getData = () => {
    Promise.resolve(StorageApi.getData("Tableau/grafik_embed_traffic_new"))
      .then(value => {
        const data = value.data.data


        setTableu(data)

      }).catch(error => {
        // setTableu(data)

      })
  }

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
    <BaseLayouts>
        <div className="contact-map ltr">
          <iframe src={`http://202.134.4.215/satupeta_new/PemetaanEmbed?center=-8.4356749,114.9973846&display=off&show_data=`} frameBorder="0" height={550} width={700}></iframe>
        </div>
        <div className="contact-map">
          <div class="row liveweather">
              <div className="col-md-1">
                <CuacaLiveTraffict lat={'-8.4355'} lng={'115.243698'}/>
              </div>
              <div className="col-lg-1">
                <CuacaLiveTraffict lat={'-8.4542'} lng={'115.3545'}/>
              </div>
              <div className="col-lg-1">
                <CuacaLiveTraffict lat={'-8.112'} lng={'115.088181'}/>
              </div>
              <div className="col-lg-1">
                <CuacaLiveTraffict lat={'-8.5'} lng={'115'}/>
              </div>
              <div className="col-lg-1">
                <CuacaLiveTraffict lat={'-8.31507'} lng={'114.602547'}/>
              </div>
              <div className="col-lg-1">
                <CuacaLiveTraffict lat={'-6.8512'} lng={'111.3638'}/>
              </div>
              <div className="col-lg-1">
                <CuacaLiveTraffict lat={'-8.5333'} lng={'115.4'}/>
              </div>
              <div className="col-lg-1">
                <CuacaLiveTraffict lat={'-8.5413'} lng={'115.125221'}/>
              </div>
              <div className="col-lg-1">
                <CuacaLiveTraffict lat={'-8.65'} lng={'115.216667'}/>
              </div>
              <div className="col-lg-3">
                <div className="traf">
                  <Image src="/images/traffict.svg" width={500} height={100} alt="" />
                </div>
              </div>
          </div>
        </div>
        <div className='grid grid-cols-1 livetraffict'>
          <iframe className='xl:-ml-0 ml-2 !xl:w-full w-[100%] h-[700px]' src={tableu} frameBorder="0" width={1455} height={600} />
        </div>
      </BaseLayouts>
  )
}