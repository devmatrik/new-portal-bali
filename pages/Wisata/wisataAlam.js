import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BaseLayouts from '../../components/MainCode/BaseLayouts'
import {
  StorageApi
} from '../../components/MainCode/MainImport'
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import Link from 'next/link';
import Function from '../../components/Function';

// import { Carousel, Card, Stack, Button } from "react-bootstrap";

import moment from 'moment/moment';

export default function wisataAlam() {
    const [loading, setLoading] = useState(false)
    const [wisata, setWisata] = useState([])
    useEffect(() => {
      getData()
    }, [loading])

    const settings = {
     dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    const konten = {
      title: "Wisata Alam",
      //LinkApi: "algors/periode_keselamatan",
    }

  const getData = () => {
    Promise.resolve(StorageApi.getData("sm_portal/wisata?jenis_wisata_id=4"))
      .then(value => {
        const data = value.data.data
        setWisata(data)

      }).catch(error => {
        setWisata(data)

      })
  }
  return (
    <>
    <BaseLayouts>
   
      <section className="default-news-area">
        <div className="container">
          <div className="tech-news ptb-50">
            <div className="section-title"> 
              <h2><Image className="p-2" src="/images/wisataAlam.svg" width={50} height={50} alt="" /> Wisata Alam</h2>
              {/* <h5 style={{ color: "#ff661f", fontWeight: 600, opacity: "80%" }}>Rekomendasi Wisata Alam di Bali</h5> */}
            </div>
             <Slider {...settings}>
              {wisata.map(item => {
                return(
                  <div className="row">
                    <div className="col-lg-3 col-sm-3 ">
                      <div className="single-tech-news-box" style={{ width: "18rem" }}>
                         <a href="">
                            <img src="/images/tech-news/tech-news-1.jpg" alt="image" />
                        </a>
                      {/* <img className="card-img-top" src="/images/tech-news/tech-news-1.jpg" alt="Card image cap" /> */}
                       <div className="tech-news-content">
                        <h3>
                          {/* <a href="../DetailNews/rowid">
                           {item.judul}
                          </a> */}
                          <Link href={'/isata/' + item.rowid} key={item.rowid}>
                            {item.judul}
                          </Link>
                        
                        </h3>
                        <p>{item.sub_judul}</p>
                        <p>{moment(item.ctddate).format("DD MMMM, YYYY ")}</p>
                      </div>
                      </div>
                    </div>
                  </div>
                  )
                })}

               
  

            </Slider>

            
          </div>
        </div>
      </section>
    {/* End Default News Area */}
    </BaseLayouts>
    </>
  )
}
