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
        {/* <section className="default-news-area">
          <div className="container">
            <div className="tech-news ptb-50">
              <div className="section-title">
                <h2><Image className="p-2" src="/images/News.png" width={50} height={50} alt="" /> Kalender Event</h2>
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
                          <div className="tech-news-content">
                            <h3>
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
        </section> */}


        {/* <!-- Start Main News Slider Area --> */}
        <section className="main-news-slider-area">
            <div className="container">
                <div className="section-title"> 
                    <h2>Upcoming Events</h2> 
                </div>
                <div className="main-news-slides owl-carousel owl-theme">
                    <div className="news-slider-item">
                        <a href="#">
                            <img src="assets/img/main-news-slider/main-news-slider-1.jpg" alt="image" />
                        </a>

                        <div className="slider-content">
                            <div className="tag">National</div>
                            <h3>
                                <a href="#">Bali Experience 2022</a>
                            </h3>
                            <span><a href="">Seminyak</a> / 27 Oct - 7 Nov, 2022</span>
                        </div>
                    </div>

                    <div className="news-slider-item">
                        <a href="#">
                            <img src="assets/img/main-news-slider/main-news-slider-2.jpg" alt="image" />
                        </a>

                        <div className="slider-content">
                            <div className="tag">International</div>
                            <h3>
                                <a href="#">International Conference on Science, Engineering & Technology</a>
                            </h3>
                            <span><a href="">Seminyak</a> / 27 Oct, 2022</span>
                        </div>
                    </div>

                    <div className="news-slider-item">
                        <a href="#">
                            <img src="assets/img/main-news-slider/main-news-slider-3.jpg" alt="image" />
                        </a>

                        <div className="slider-content">
                            <div className="tag">International</div>
                            <h3>
                                <a href="#">G20 Summit, Bali — Centre for Disaster Protection</a>
                            </h3>
                            <span><a href="">Bali</a> / 27 Oct - 7 Nov, 2022</span>
                        </div>
                    </div>

                    <div className="news-slider-item">
                        <a href="#">
                            <img src="assets/img/main-news-slider/main-news-slider-3.jpg" alt="image" />
                        </a>

                        <div className="slider-content">
                            <div className="tag">National</div>
                            <h3>
                                <a href="#">Da Maria Inno Hallowen Edition</a>
                            </h3>
                            <span><a href="">Da Maria</a> / 27 Oct - 7 Nov, 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Main News Slider Area -->

        <!-- Start Default News Area --> */}
        <section className="default-news-area ptb-30">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="single-culture-news">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="culture-news-image">
                                        <a href="#">
                                            <img src="assets/img/culture-news/culture-news-14.jpg" alt="image" />
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-8">
                                    <div className="culture-news-content mt-0">
                                        <span>International</span>
                                        <h3>
                                            <a href="#">Ubud Writers and Readers Festival 2022</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <span><i className="bx bx-map"></i>The Blanco Renaissance Meuseum </span> 
                                        <p>31 October 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-culture-news">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="culture-news-image">
                                        <a href="#">
                                            <img src="assets/img/culture-news/culture-news-15.jpg" alt="image" />
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-8">
                                    <div className="culture-news-content mt-0">
                                        <span>International</span>
                                        <h3>
                                            <a href="#">BALI INDONESIA & THE GILI ISLANDS, The Islands of the Gods</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <span><i className="bx bx-map"></i>Denpasar City</span>
                                        <p>31 October 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-culture-news">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="culture-news-image">
                                        <a href="#">
                                            <img src="assets/img/culture-news/culture-news-16.jpg" alt="image" />
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-8">
                                    <div className="culture-news-content mt-0">
                                        <span>National</span>
                                        <h3>
                                            <a href="#">Carnival of Lost Souls</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <span><i className="bx bx-map"></i>Savaya Bali</span>
                                        <p>31 October 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-culture-news">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="culture-news-image">
                                        <a href="#">
                                            <img src="assets/img/culture-news/culture-news-17.jpg" alt="image" />
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-8">
                                    <div className="culture-news-content mt-0">
                                        <span>International</span>
                                        <h3>
                                            <a href="#">KU DE TA Sunset Live</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <span><i className="bx bx-map"></i>KU DE TA</span>
                                        <p>31 October 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-culture-news">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="culture-news-image">
                                        <a href="#">
                                            <img src="assets/img/culture-news/culture-news-18.jpg" alt="image" />
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-8">
                                    <div className="culture-news-content mt-0">
                                        <span>National</span>
                                        <h3>
                                            <a href="#">Live With Purpose Bali 2022</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <span><i className="bx bx-map"></i>Ubud</span>
                                        <p>31 October 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-culture-news">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="culture-news-image">
                                        <a href="#">
                                            <img src="assets/img/culture-news/culture-news-19.jpg" alt="image" />
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-8">
                                    <div className="culture-news-content mt-0">
                                        <span>International</span>
                                        <h3>
                                            <a href="#">Secret Sunrise Celebrate the Sun</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <span><i className="bx bx-map"></i>Byrd House Bali</span>
                                        <p>31 October 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-culture-news">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="culture-news-image">
                                        <a href="#">
                                            <img src="assets/img/culture-news/culture-news-20.jpg" alt="image" />
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-8">
                                    <div className="culture-news-content mt-0">
                                        
                                        <h3>
                                            <a href="#">Halloween Weekend</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <span><i className="bx bx-map"></i>Savaya</span>
                                        <p>31 October 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pagination-area justify-content-center">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Default News Area --> */}

      </BaseLayouts>
    </>
  )
}