import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BaseLayouts from '../../components/MainCode/BaseLayouts'
import {
  StorageApi
} from '../../components/MainCode/MainImport'
// import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import Link from 'next/link';
import Function from '../../components/Function';
import Carousel from 'react-grid-carousel'

// import { Carousel, Card, Stack, Button } from "react-bootstrap";

import moment from 'moment/moment';

export default function Pelayanan() {

    const [loading, setLoading] = useState(false)
    const [wisata, setWisata] = useState([])

    useEffect(() => {
      getData();
    }, [loading])

    const settings = {
     dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    const konten = {
      title: "Pelayanan",
      //LinkApi: "algors/periode_keselamatan",
    }

  const getData = () => {
    Promise.resolve(StorageApi.getData("sm_master_data/jenis_service"))
      .then(value => {
        const list = value.data.data
        var param = ""
        list.map(item => {
          if (item.jenis_service == "Pelayanan") {
            param = item.rowid
          }
        })
        Promise.resolve(StorageApi.getData(`sm_portal/public_service?jenis_service_id=${param}`))
          .then(value => {
            const data = value.data.data
            setWisata(data)
          }).catch(error => {
            setWisata([])
          })
      }).catch(error => {
      })  }
  return (
    <>
    <BaseLayouts>
   
      <section className="default-news-area">
        <div className="container">
          <div className="tech-news ptb-50">
            <div className="section-title"> 
               <h2><Image className="p-2" src="/images/pelayananW.svg" width={50} height={50} alt="" /> Lokasi Pelayanan Public</h2>
                  <h5 style={{ color: "#ff661f", fontWeight: 600, opacity: "80%" }}>Lokasi Pelayanan Public di Bali</h5>
            </div>
            <Carousel cols={4} rows={1} gap={20} loop>
                  {wisata.map((item, index) => (
                    <Carousel.Item key={index}>
                    <div className="row" key={item.rowid}>
                    <div className="col-lg-3 col-sm-3 ">
                      <div className="single-tech-news-box rounded-3" style={{ width: "16rem" }}>
                         <a href="">
                          {item.image == 0 ? (<>
                             <img src="/images/tech-news/tech-news-1.jpg" alt="image" />
                            </>) :(<>
                            <img src={item.image} style={{ width: "450px", height:"350px" }}/>
                            </>)}
                        </a>
                      {/* <img className="card-img-top" src="/images/tech-news/tech-news-1.jpg" alt="Card image cap" /> */}
                       <div className="tech-news-content">
                        <h3>
                          {/* <a href="../DetailNews/rowid">
                           {item.judul}
                          </a> */}
                          <Link href={'/PublicService/' + item.rowid} key={item.rowid}>
                            {item.judul}
                          </Link>
                        
                        </h3>
                        <p>{item.sub_judul}</p>
                        <p>{moment(item.ctddate).format("DD MMMM, YYYY ")}</p>
                      </div>
                      </div>
                    </div>
                  </div>
                    </Carousel.Item>
                  ))}
              </Carousel>
          </div>
        </div>
      </section>
    {/* End Default News Area */}
    </BaseLayouts>
    </>
  )
}
