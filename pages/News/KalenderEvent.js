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
                    <h2>Upcoming Events</h2> 
                </div>
                <Carousel cols={4} rows={1} gap={40} loop>
                      {event.map((item, index) => (
                        <Carousel.Item key={index}>
                          <div className="row" key={item.rowid}>
                              <div className="single-main-news">
                                <a href="#">
                                  <img src={item.image} style={{ width: "350px", height: "250px" }} alt="image" />
                                </a>
                                <div className="news-content">
                                  <div className="tag">{item.jenis_event}</div>
                                    <h3>
                                      <a href="#">{item.nama_event}</a>
                                    </h3>
                                    <span><a href=""></a> / {moment(item.tgl_event).format("DD MMM, YYYY ")}- {moment(item.tgl_berakhir).format("DD MMM, YYYY ")}</span>
                                  </div>
                              </div>
                            </div>
                        </Carousel.Item>
                      ))}
                      </Carousel>
                </div>
            </section>
        {/* <!-- End Main News Slider Area -->

        <!-- Start Default News Area --> */}
        <section className="default-news-area ptb-30">
            <div className="container">
              {event.map((item, index) => (
                  <div className="row events mb-20" key={index}>
                    <div className="col-lg-9 ">
                        <div className="single-culture-news">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="culture-news-image">
                                        <a href="#">
                                            <img src={item.image} alt="image" />
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-8">
                                    <div className="culture-news-content mt-0">
                                        <span>{item.jenis_event}</span>
                                        <h3>
                                            <a href="#">{item.nama_event}</a>
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
        {/* <!-- End Default News Area --> */}

      </BaseLayouts>
    </>
  )
}