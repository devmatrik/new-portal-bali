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

export default function BreakingNews() {

  const [listLatest, setListLatest] = useState([]);
  const [g20, setListG20] = useState([]);
  const [newEvent, setListNewEvent] = useState([]);
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
    title: "All News",
    //LinkApi: "algors/periode_keselamatan",
  }

  const getData = () => {
    Promise.resolve(StorageApi.getData("sm_master_data/jenis_berita"))
      .then(value => {
        const list = value.data.data
        var param = ""
        list.map(item => {
          if (item.jenis_berita == "Breaking News") {
            param = item.rowid
          }
        })
        Promise.resolve(StorageApi.getData(`sm_portal/news?jenis_news_id=${param}`))
          .then(value => {
            const data = value.data.data
            setNews(data)
          }).catch(error => {
            setNews([])
          })
      }).catch(error => {
      })
  }

  return (
    <>
      <BaseLayouts>
        <section className="main-news-area allnews">
            <div className="container">
              <div className="col-lg-12">
                        <aside className="widget-area">
                            <section className="widget widget_tag_cloud">
                                <h3 className="widget-title">Tags</h3>
                                <div className="tagcloud">
                                    <a href="#">News</a>
                                    <a href="#">Business</a>
                                    <a href="#">Health</a>
                                    <a href="#">Politics</a>
                                    <a href="#">Magazine</a>
                                    <a href="#">Sport</a>
                                    <a href="#">Tech</a>
                                    <a href="#">Video</a>
                                    <a href="#">Global</a>
                                    <a href="#">Culture</a>
                                    <a href="#">Fashion</a>
                                    <a href="#">Event</a>
                                    <a href="#">Breaking News</a>
                                    <a href="#">IT Goverment</a>
                                </div>
                            </section>

                        </aside>
              </div>
              <br />
              
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title">
                        <h2><Image className="p-2" src="/images/News.png" width={50} height={50} alt="" />News</h2>
                      </div>
                      <Carousel>
                        <Carousel.Item>
                        <div className="row">
                          <div className='col-lg-6'>
                            <div className="single-main-news">
                              <a href="#">
                                <img src="/images/jepun.png" alt="image" />
                              </a>
                              <div className="news-content">
                                <div className="tag">World news</div>
                                  <h3>
                                    <a href="#">Speech to the nation on the current situation and the warning of coronavirus</a>
                                  </h3>
                                  <span><a href="">Walters</a> / 28 September, 2022</span>
                                </div>
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className="single-main-news">
                              <a href="#">
                                <img src="/images/jepun.png" alt="image" />
                              </a>
                              <div className="news-content">
                                <div className="tag">World news</div>
                                  <h3>
                                    <a href="#">Speech to the nation on the current situation and the warning of coronavirus</a>
                                  </h3>
                                  <span><a href="">Walters</a> / 28 September, 2022</span>
                                </div>
                            </div>
                          </div>
                        </div>
                        </Carousel.Item>
                      </Carousel>
                      </div>
                  </div>
            </div>
        </section>

        <section className="default-news-area allnews">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="most-popular-news">
                            <div className="section-title"> 
                                <h2>Most popular</h2> 
                            </div>
    
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="single-most-popular-news">
                                        <div className="popular-news-image">
                                            <a href="#">
                                                <img src="assets/img/most-popular/most-popular-1.jpg" alt="image" />
                                            </a>
                                        </div>
                                        
                                        <div className="popular-news-content">
                                            <span>Politics</span>
                                            <h3>
                                                <a href="#">The Prime Ministers said that selfish nations are constantly dying for their won interests.</a>
                                            </h3>
                                            <p><a href="#">Patricia</a> / 28 September, 2022</p>
                                        </div>
                                    </div>
    
                                    <div className="single-most-popular-news">
                                        <div className="popular-news-image">
                                            <a href="#">
                                                <img src="assets/img/most-popular/most-popular-2.jpg" alt="image" />
                                            </a>
                                        </div>
    
                                        <div className="popular-news-content">
                                            <span>Premer league</span>
                                            <h3>
                                                <a href="#">Manchester Uniteds dream of winning by a goal was fulfilled</a>
                                            </h3>
                                            <p><a href="#">Gonzalez</a> / 28 September, 2022</p>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="col-lg-6">
                                    <div className="most-popular-post">
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 col-sm-4">
                                                <div className="post-image">
                                                    <a href="#">
                                                        <img src="assets/img/most-popular/most-popular-3.jpg" alt="image" />
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-lg-8 col-sm-8">
                                                <div className="post-content">
                                                    <span>Culture</span>
                                                    <h3>
                                                        <a href="#">As well as stopping goals, Christiane Endler is opening.</a>
                                                    </h3>
                                                    <p>28 September, 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="most-popular-post">
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 col-sm-4">
                                                <div className="post-image">
                                                    <a href="#">
                                                        <img src="assets/img/most-popular/most-popular-4.jpg" alt="image" />
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-lg-8 col-sm-8">
                                                <div className="post-content">
                                                    <span>Technology</span>
                                                    <h3>
                                                        <a href="#">The majority of news published online presents more videos</a>
                                                    </h3>
                                                    <p>28 September, 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="most-popular-post">
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 col-sm-4">
                                                <div className="post-image">
                                                    <a href="#">
                                                        <img src="assets/img/most-popular/most-popular-5.jpg" alt="image" />
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-lg-8 col-sm-8">
                                                <div className="post-content">
                                                    <span>Business</span>
                                                    <h3>
                                                        <a href="#">This movement aims to establish womens rights.</a>
                                                    </h3>
                                                    <p>28 September, 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="most-popular-post">
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 col-sm-4">
                                                <div className="post-image">
                                                    <a href="#">
                                                        <img src="assets/img/most-popular/most-popular-6.jpg" alt="image" />
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-lg-8 col-sm-8">
                                                <div className="post-content">
                                                    <span>Politics</span>
                                                    <h3>
                                                        <a href="#">Trump discusses various issues with his partys political leaders.</a>
                                                    </h3>
                                                    <p>28 September, 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="video-news">
                            <div className="section-title"> 
                                <h2>Top video</h2> 
                            </div>

                            <div className="video-slides owl-carousel owl-theme">
                                <div className="video-item">
                                    <div className="video-news-image">
                                        <a href="#">
                                            <img src="assets/img/video-news/video-news-1.jpg" alt="image" />
                                        </a>

                                        <a href="https://www.youtube.com/watch?v=UG8N5JT4QLc" className="popup-youtube">
                                            <i className='bx bx-play-circle'></i>
                                        </a>
                                    </div>

                                    <div className="video-news-content">
                                        <h3>
                                            <a href="#">Apply these 10 secret techniques to improve travel</a>
                                        </h3>
                                        <span>28  September, 2022</span>
                                    </div>
                                </div>

                                <div className="video-item">
                                    <div className="video-news-image">
                                        <a href="#">
                                            <img src="assets/img/video-news/video-news-2.jpg" alt="image" />
                                        </a>

                                        <a href="https://www.youtube.com/watch?v=UG8N5JT4QLc" className="popup-youtube">
                                            <i className='bx bx-play-circle'></i>
                                        </a>
                                    </div>

                                    <div className="video-news-content">
                                        <h3>
                                            <a href="#">The lazy man’s guide to travel you to our moms</a>
                                        </h3>
                                        <span>28  September, 2022</span>
                                    </div>
                                </div>

                                <div className="video-item">
                                    <div className="video-news-image">
                                        <a href="#">
                                            <img src="assets/img/video-news/video-news-3.jpg" alt="image" />
                                        </a>

                                        <a href="https://www.youtube.com/watch?v=UG8N5JT4QLc" className="popup-youtube">
                                            <i className='bx bx-play-circle'></i>
                                        </a>
                                    </div>

                                    <div className="video-news-content">
                                        <h3>
                                            <a href="#">Sony laptops are still part of the sony family</a>
                                        </h3>
                                        <span>28  September, 2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="politics-news">
                            <div className="section-title"> 
                                <h2>Politics</h2> 
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="single-politics-news">
                                        <div className="politics-news-image">
                                            <a href="#">
                                                <img src="assets/img/politics-news/politics-news-1.jpg" alt="image" />
                                            </a>
                                        </div>
                                        
                                        <div className="politics-news-content">
                                            <span>Politics</span>
                                            <h3>
                                                <a href="#">Organizing conference among our selves to make it better financially</a>
                                            </h3>
                                            <p><a href="#">Jonson Steven</a> / 28 September, 2022</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="politics-news-post">
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 col-sm-4">
                                                <div className="politics-news-image">
                                                    <a href="#">
                                                        <img src="assets/img/politics-news/politics-news-2.jpg" alt="image" />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-8 col-sm-8">
                                                <div className="politics-news-content">
                                                    <h3>
                                                        <a href="#">Politically, new riots have started inside the country</a>
                                                    </h3>
                                                    <p>28 September, 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="politics-news-post">
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 col-sm-4">
                                                <div className="politics-news-image">
                                                    <a href="#">
                                                        <img src="assets/img/politics-news/politics-news-3.jpg" alt="image" />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-8 col-sm-8">
                                                <div className="politics-news-content">
                                                    <h3>
                                                        <a href="#">Public discussion in 5 major issues</a>
                                                    </h3>
                                                    <p>28 September, 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="politics-news-post">
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 col-sm-4">
                                                <div className="politics-news-image">
                                                    <a href="#">
                                                        <img src="assets/img/politics-news/politics-news-4.jpg" alt="image" />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-8 col-sm-8">
                                                <div className="politics-news-content">
                                                    <h3>
                                                        <a href="#">Preparations are being made in a  new way for the elections</a>
                                                    </h3>
                                                    <p>28 September, 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="business-news">
                            <div className="section-title"> 
                                <h2>Business</h2> 
                            </div>

                            <div className="business-news-slides owl-carousel owl-theme">
                                <div className="single-business-news">
                                    <div className="business-news-image">
                                        <a href="#">
                                            <img src="assets/img/business-news/business-news-1.jpg" alt="image" />
                                        </a>
                                    </div>
                                    
                                    <div className="business-news-content">
                                        <span>Business</span>
                                        <h3>
                                            <a href="#">We have to make a business plan while maintaining mental heatlh during this epidemic</a>
                                        </h3>
                                        <p><a href="#">Patricia</a> / 28 September, 2022</p>
                                    </div>
                                </div>

                                <div className="single-business-news">
                                    <div className="business-news-image">
                                        <a href="#">
                                            <img src="assets/img/business-news/business-news-2.jpg" alt="image" />
                                        </a>
                                    </div>
                                    
                                    <div className="business-news-content">
                                        <span>News</span>
                                        <h3>
                                            <a href="#">Many people are established today by doing ecommerce business during the time of Corona</a>
                                        </h3>
                                        <p><a href="#">Sanford</a> / 28 September, 2022</p>
                                    </div>
                                </div>

                                <div className="single-business-news">
                                    <div className="business-news-image">
                                        <a href="#">
                                            <img src="assets/img/business-news/business-news-1.jpg" alt="image" />
                                        </a>
                                    </div>
                                    
                                    <div className="business-news-content">
                                        <span>Business</span>
                                        <h3>
                                            <a href="#">We have to make a business plan while maintaining mental heatlh during this epidemic</a>
                                        </h3>
                                        <p><a href="#">Patricia</a> / 28 September, 2022</p>
                                    </div>
                                </div>

                                <div className="single-business-news">
                                    <div className="business-news-image">
                                        <a href="#">
                                            <img src="assets/img/business-news/business-news-2.jpg" alt="image" />
                                        </a>
                                    </div>
                                    
                                    <div className="business-news-content">
                                        <span>News</span>
                                        <h3>
                                            <a href="#">Many people are established today by doing ecommerce business during the time of Corona</a>
                                        </h3>
                                        <p><a href="#">Sanford</a> / 28 September, 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title"> 
                                    <h2>Sports</h2> 
                                </div>

                                <div className="single-sports-news">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="sports-news-image">
                                                <a href="#">
                                                    <img src="assets/img/sports-news/sports-news-1.jpg" alt="image" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-8 col-sm-8">
                                            <div className="sports-news-content">
                                                <h3>
                                                    <a href="#">Start a new men’s road World Championships</a>
                                                </h3>
                                                <p>28 September, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-sports-news">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="sports-news-image">
                                                <a href="#">
                                                    <img src="assets/img/sports-news/sports-news-2.jpg" alt="image" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-8 col-sm-8">
                                            <div className="sports-news-content">
                                                <h3>
                                                    <a href="#">He look the first wicket with the first ball in this match.</a>
                                                </h3>
                                                <p>28 September, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-sports-news">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="sports-news-image">
                                                <a href="#">
                                                    <img src="assets/img/sports-news/sports-news-3.jpg" alt="image" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-8 col-sm-8">
                                            <div className="sports-news-content">
                                                <h3>
                                                    <a href="#">The last time of the match is goning on</a>
                                                </h3>
                                                <p>28 September, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="section-title"> 
                                    <h2>Tech</h2> 
                                </div>

                                <div className="single-tech-news">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="tech-news-image">
                                                <a href="#">
                                                    <img src="assets/img/tech-news/tech-news-1.jpg" alt="image" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-8 col-sm-8">
                                            <div className="tech-news-content">
                                                <h3>
                                                    <a href="#">5 more phones have come to  the market with features.</a>
                                                </h3>
                                                <p>28 September, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-tech-news">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="tech-news-image">
                                                <a href="#">
                                                    <img src="assets/img/tech-news/tech-news-2.jpg" alt="image" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-8 col-sm-8">
                                            <div className="tech-news-content">
                                                <h3>
                                                    <a href="#">Like humans, the new robot has a lot of memory power</a>
                                                </h3>
                                                <p>28 September, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-tech-news">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="tech-news-image">
                                                <a href="#">
                                                    <img src="assets/img/tech-news/tech-news-3.jpg" alt="image" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-8 col-sm-8">
                                            <div className="tech-news-content">
                                                <h3>
                                                    <a href="#">All new gadgets are being made in technology</a>
                                                </h3>
                                                <p>28 September, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="culture-news">
                            <div className="section-title"> 
                                <h2>Culture</h2> 
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="single-culture-news">
                                        <div className="culture-news-image">
                                            <a href="#">
                                                <img src="assets/img/culture-news/culture-news-1.jpg" alt="image" />
                                            </a>
                                        </div>
                                        
                                        <div className="culture-news-content">
                                            <span>Culture</span>
                                            <h3>
                                                <a href="#">Entertainment activists started again a few months later</a>
                                            </h3>
                                            <p><a href="#">Steven</a> / 28 September, 2022</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="culture-news-post">
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 col-sm-4">
                                                <div className="culture-news-image">
                                                    <a href="#">
                                                        <img src="assets/img/culture-news/culture-news-2.jpg" alt="image" />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-8 col-sm-8">
                                                <div className="culture-news-content">
                                                    <h3>
                                                        <a href="#">Working in the garden is a tradition for women</a>
                                                    </h3>
                                                    <p>28 September, 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="culture-news-post">
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 col-sm-4">
                                                <div className="culture-news-image">
                                                    <a href="#">
                                                        <img src="assets/img/culture-news/culture-news-3.jpg" alt="image" />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-8 col-sm-8">
                                                <div className="culture-news-content">
                                                    <h3>
                                                        <a href="#">The fashion that captures the lives of women</a>
                                                    </h3>
                                                    <p>28 September, 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="culture-news-post">
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 col-sm-4">
                                                <div className="culture-news-image">
                                                    <a href="#">
                                                        <img src="assets/img/culture-news/culture-news-4.jpg" alt="image" />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-8 col-sm-8">
                                                <div className="culture-news-content">
                                                    <h3>
                                                        <a href="#">A group of artists performed music in a group way</a>
                                                    </h3>
                                                    <p>28 September, 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="health-news">
                            <div className="section-title"> 
                                <h2>Health</h2> 
                            </div>

                            <div className="health-news-slides owl-carousel owl-theme">
                                <div className="single-health-news">
                                    <div className="health-news-image">
                                        <a href="#">
                                            <img src="assets/img/health-news/health-news-1.jpg" alt="image" />
                                        </a>
                                    </div>
                                    
                                    <div className="health-news-content">
                                        <span>Health</span>
                                        <h3>
                                            <a href="#">At present, diseases have become the main obstacle for children to get out healthy</a>
                                        </h3>
                                        <p><a href="#">Tikelo</a> / 28 September, 2022</p>
                                    </div>
                                </div>

                                <div className="single-health-news">
                                    <div className="health-news-image">
                                        <a href="#">
                                            <img src="assets/img/health-news/health-news-2.jpg" alt="image" />
                                        </a>
                                    </div>
                                    
                                    <div className="health-news-content">
                                        <span>Fitness</span>
                                        <h3>
                                            <a href="#">Morning yoga is very important for maintaining good physical fitness</a>
                                        </h3>
                                        <p><a href="#">Patricia</a> / 28 September, 2022</p>
                                    </div>
                                </div>

                                <div className="single-health-news">
                                    <div className="health-news-image">
                                        <a href="#">
                                            <img src="assets/img/health-news/health-news-1.jpg" alt="image" />
                                        </a>
                                    </div>
                                    
                                    <div className="health-news-content">
                                        <span>Health</span>
                                        <h3>
                                            <a href="#">At present, diseases have become the main obstacle for children to get out healthy</a>
                                        </h3>
                                        <p><a href="#">Tikelo</a> / 28 September, 2022</p>
                                    </div>
                                </div>

                                <div className="single-health-news">
                                    <div className="health-news-image">
                                        <a href="#">
                                            <img src="assets/img/health-news/health-news-2.jpg" alt="image" />
                                        </a>
                                    </div>
                                    
                                    <div className="health-news-content">
                                        <span>Fitness</span>
                                        <h3>
                                            <a href="#">Morning yoga is very important for maintaining good physical fitness</a>
                                        </h3>
                                        <p><a href="#">Patricia</a> / 28 September, 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <aside className="widget-area">
                            <section className="widget widget_latest_news_thumb">
                                <h3 className="widget-title">Latest news</h3>

                                <article className="item">
                                    <a href="#" className="thumb">
                                        <span className="fullimage cover bg1" role="img"></span>
                                    </a>
                                    <div className="info">
                                        <h4 className="title usmall"><a href="#">Negotiations on a peace agreement between the two countries</a></h4>
                                        <span>28 September, 2022</span>
                                    </div>
                                </article>

                                <article className="item">
                                    <a href="#" className="thumb">
                                        <span className="fullimage cover bg2" role="img"></span>
                                    </a>
                                    <div className="info">
                                        <h4 className="title usmall"><a href="#">Love songs helped me through heartbreak</a></h4>
                                        <span>28 September, 2022</span>
                                    </div>
                                </article>

                                <article className="item">
                                    <a href="#" className="thumb">
                                        <span className="fullimage cover bg3" role="img"></span>
                                    </a>
                                    <div className="info">
                                        <h4 className="title usmall"><a href="#">This movement aims to establish women rights</a></h4>
                                        <span>28 September, 2022</span>
                                    </div>
                                </article>

                                <article className="item">
                                    <a href="#" className="thumb">
                                        <span className="fullimage cover bg4" role="img"></span>
                                    </a>
                                    <div className="info">
                                        <h4 className="title usmall"><a href="#">Giving special powers to police officers to prevent crime</a></h4>
                                        <span>28 September, 2022</span>
                                    </div>
                                </article>

                                <article className="item">
                                    <a href="#" className="thumb">
                                        <span className="fullimage cover bg5" role="img"></span>
                                    </a>
                                    <div className="info">
                                        <h4 className="title usmall"><a href="#">Copy paste the style of your element Newspaper</a></h4>
                                        <span>28 September, 2022</span>
                                    </div>
                                </article>
                            </section>

                            <section className="widget widget_featured_reports">
                                <h3 className="widget-title">Featured reports</h3>

                                <div className="single-featured-reports">
                                    <div className="featured-reports-image">
                                        <a href="#">
                                            <img src="assets/img/featured-reports/featured-reports-1.jpg" alt="image" />
                                        </a>

                                        <div className="featured-reports-content">
                                            <h3>
                                                <a href="#">All the highlights from western fashion week summer 2022</a>
                                            </h3>
                                            <p><a href="#">Patricia</a> / 28 September, 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="widget widget_stay_connected">
                                <h3 className="widget-title">Stay connected</h3>
                                
                                <ul className="stay-connected-list">
                                    <li>
                                        <a href="#">
                                            <i className='bx bxl-facebook'></i>
                                            120,345 Fans
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="twitter">
                                            <i className='bx bxl-twitter'></i>
                                            25,321 Followers
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="linkedin">
                                            <i className='bx bxl-linkedin'></i>
                                            7,519 Connect
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="youtube">
                                            <i className='bx bxl-youtube'></i>
                                            101,545 Subscribers
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="instagram">
                                            <i className='bx bxl-instagram'></i>
                                            10,129 Followers
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="wifi">
                                            <i className='bx bx-wifi'></i>
                                            952 Subscribers
                                        </a>
                                    </li>
                                </ul>
                            </section>

                            <section className="widget widget_popular_posts_thumb">
                                <h3 className="widget-title">Popular posts</h3>

                                <article className="item">
                                    <a href="#" className="thumb">
                                        <span className="fullimage cover bg1" role="img"></span>
                                    </a>
                                    <div className="info">
                                        <h4 className="title usmall"><a href="#">Match between United States and England at AGD stadium</a></h4>
                                        <span>28 September, 2022</span>
                                    </div>
                                </article>

                                <article className="item">
                                    <a href="#" className="thumb">
                                        <span className="fullimage cover bg2" role="img"></span>
                                    </a>
                                    <div className="info">
                                        <h4 className="title usmall"><a href="#">For the last time, he addressed the people</a></h4>
                                        <span>28 September, 2022</span>
                                    </div>
                                </article>

                                <article className="item">
                                    <a href="#" className="thumb">
                                        <span className="fullimage cover bg3" role="img"></span>
                                    </a>
                                    <div className="info">
                                        <h4 className="title usmall"><a href="#">The coronavairus is finished and the outfit is busy</a></h4>
                                        <span>28 September, 2022</span>
                                    </div>
                                </article>

                                <article className="item">
                                    <a href="#" className="thumb">
                                        <span className="fullimage cover bg4" role="img"></span>
                                    </a>
                                    <div className="info">
                                        <h4 className="title usmall"><a href="#">A fierce battle is going on between the two in the game</a></h4>
                                        <span>28 September, 2022</span>
                                    </div>
                                </article>
                            </section>
                        </aside>
                    </div>
                </div>
            </div>
        </section>

      </BaseLayouts>
    </>
  )
}