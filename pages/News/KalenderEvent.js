import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BaseLayouts from '../../components/MainCode/BaseLayouts'
import {
  StorageApi
} from '../../components/MainCode/MainImport'
// import Slider from "react-slick";
import Link from 'next/link';
import moment from 'moment/moment';
import Carousel from 'react-grid-carousel'

export default function KalenderEvent() {

  const [loading, setLoading] = useState(false)
  const [news, setNews] = useState([])

  useEffect(() => {
    getData();
  }, [loading])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  const konten = {
    title: "Kalender Event",
    //LinkApi: "algors/periode_keselamatan",
  }

  const getData = () => {
    Promise.resolve(StorageApi.getData(`sm_portal/event`))
      .then(value => {
        const data = value.data.data
        setNews(data)
      }).catch(error => {
        setNews([])
      })
  }

  return (
    <>
      <BaseLayouts>
        <section className="default-news-area">
          <div className="container">
            <div className="tech-news ptb-50">
              <div className="section-title">
                <h2><Image className="p-2" src="/images/News.png" width={50} height={50} alt="" /> Kalender Event</h2>
                {/* <h5 style={{ color: "#ff661f", fontWeight: 600, opacity: "80%" }}>Rekomendasi Wisata Alam di Bali</h5> */}
              </div>
              <Carousel cols={4} rows={1} gap={20} loop>
                {news.map((item, index) => (
                  <Carousel.Item key={index}>
                    <div className="row" key={item.rowid}>
                      <div className="col-lg-3 col-sm-3 ">
                        <div className="single-tech-news-box rounded-3" style={{ width: "16rem" }}>
                          <a href="">
                            {item.image == 0 ? (<>
                              <img src="./images/tech-news/tech-news-1.jpg" alt="image" />
                            </>) : (<>
                              <img src={item.image} style={{ width: "450px", height: "350px" }} />
                            </>)}
                          </a>
                          {/* <img className="card-img-top" src="/images/tech-news/tech-news-1.jpg" alt="Card image cap" /> */}
                          <div className="tech-news-content">
                            <h3>
                              {/* <a href="../DetailNews/rowid">
                           {item.judul}
                          </a> */}
                              <p style={{ fontSize: 10, marginBottom: "-2px" }}>{item.jenis_event}</p>
                              <Link href={'/News/' + item.rowid} key={item.rowid}>
                                {item.nama_event}
                              </Link>

                            </h3>
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