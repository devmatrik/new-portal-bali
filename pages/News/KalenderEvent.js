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
import Slide from 'react-bootstrap/Carousel'

export default function KalenderEvent() {

  const [loading, setLoading] = useState(false)
  const [event, setEvent] = useState([])

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
        setEvent(data)
      }).catch(error => {
        setEvent([])
      })
  }

  return (
    <>
      <BaseLayouts>
        {/* <!-- Start Main News Slider Area --> */}
        <section className="main-news-slider-area">
            <div className="container events">
                <div className="section-title"> 
                    <h2><Image src="/images/Event.png" width={30} height={30} alt="image" /> Events</h2> 
                </div>
                <Carousel cols={4} rows={1} gap={40} loop>
                      {event.map((item, index) => (
                        <Carousel.Item key={index}>
                          <div className="row" key={item.rowid}>
                              <div className="single-main-news" >
                                <Link href={`/News/DetailEvent?id=${item.rowid}`}>
                                  <img src={item.image} style={{ width: "400px", height: "250px" }} alt="image" />
                                </Link>
                                <div className="news-content">
                                  <div className="tag">{item.jenis_event}</div>
                                    <h3>
                                      <Link href={`/News/DetailEvent?id=${item.rowid}`}>{item.nama_event}</Link>
                                    </h3>
                                    <span>Date {moment(item.tgl_event).format("DD MMM, YYYY ")}- {moment(item.tgl_berakhir).format("DD MMM, YYYY ")}</span>
                                  </div>
                              </div>
                            </div>
                        </Carousel.Item>
                      ))}
                      </Carousel>
                      <section className="default-news-area ptb-30">
            <div className="container events">
              {event.map((item, index) => (
                  <div className="row mb-20" key={index}>
                    <div className="col-lg-12 ">
                        <div className="single-culture-news">
                            <div className="row align-items-center">
                                <div className="col-lg-3">
                                    <div className="culture-news-image">
                                        <Link href={`/News/DetailEvent?id=${item.rowid}`}>
                                            <img src={item.image} style={{ height: "170px", width : "300px" }} alt="image" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-8">
                                    <div className="culture-news-content mt-0">
                                        <span>{item.jenis_event}</span>
                                        <h3>
                                            <Link href={`/News/DetailEvent?id=${item.rowid}`}>{item.nama_event}</Link>
                                        </h3>
                                        <p>{item.isi_konten.length > 200 ?
                                            `${item.isi_konten.substring(0, 200)}...` : item.description
                                          }</p>
                                        {/* <span><i className="bx bx-map"></i>The Blanco Renaissance Meuseum </span>  */}
                                    <span>{moment(item.tgl_event).format("DD MMMM, YYYY ")}- {moment(item.tgl_berakhir).format("DD MMMM, YYYY ")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="pagination-area justify-content-center">
                            <a href="#" className="prev page-numbers">
                                <i className='bx bx-chevron-left'></i>
                            </a>
                            <a href="#" className="page-numbers">1</a>
                            <span className="page-numbers current" aria-current="page">2</span>
                            <a href="#" className="page-numbers">3</a>
                            <a href="#" className="page-numbers">4</a>
                            <a href="#" className="next page-numbers">
                                <i className='bx bx-chevron-right'></i>
                            </a>
                        </div> */}
                    </div>
                  </div>
              ))}
            </div>
        </section>
        </div>
      </section>
      </BaseLayouts>
    </>
  )
}