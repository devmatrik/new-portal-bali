import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BaseLayouts from '../../components/MainCode/BaseLayouts'
import {
  StorageApi
} from '../../components/MainCode/MainImport'
import Link from 'next/link';
import moment from 'moment/moment';
import Slide from 'react-bootstrap/Carousel'
import Carousel from 'react-grid-carousel'
import Cuaca from '../Cuaca';
// import Slider from "react-slick";

export default function BreakingNews() {

  const [listTags, setListTags] = useState([]);  
  const [listLatest, setListLatest] = useState([]);
  const [g20, setListG20] = useState([]);
  const [newEvent, setListNewEvent] = useState([]);
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getTags();
    LatestNews();
    G20();
    NewEvent();
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

  const LatestNews = () => {
    Promise.resolve(StorageApi.getData(`sm_portal/news`))
      .then(value => {
        const datag20 = value.data.data
        const Listdata = datag20.sort((a, b) => b.rowid - a.rowid)
        setListLatest(Listdata)
      }).catch(error => {
        setListLatest([])
      })
  }

  const NewEvent = () => {
    Promise.resolve(StorageApi.getData("sm_master_data/jenis_event"))
      .then(value => {
        const list = value.data.data
        var newEvent = ""
        list.map(item => {
          if (item.jenis_event == "New Event") {
            newEvent = item.rowid
          }
        })
        Promise.resolve(StorageApi.getData(`sm_portal/event?jenis_event_id=${newEvent}`))
          .then(value => {
            const dataNewEvent = value.data.data
            const Listdata = dataNewEvent.sort((a, b) => moment(b.tgl_event).format("DD") - moment(a.tgl_event).format("DD"))
            console.log(Listdata);
            setListNewEvent(Listdata)
          }).catch(error => {
            setListNewEvent([])
          })
      }).catch(error => {

      })
  }

  const G20 = () => {
    Promise.resolve(StorageApi.getData("sm_master_data/jenis_berita"))
      .then(value => {
        const list = value.data.data
        var g20 = ""
        list.map(item => {
          if (item.jenis_berita == "G20") {
            g20 = item.rowid
          }
        })
        Promise.resolve(StorageApi.getData(`sm_portal/news?jenis_news_id=${g20}`))
          .then(value => {
            const datag20 = value.data.data
            const Listdata = datag20.sort((a, b) => moment(b.tanggal_news).format("DD") - moment(a.tanggal_news).format("DD"))
            setListG20(Listdata)
          }).catch(error => {
            setListG20([])
          })
      }).catch(error => {

      })
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

  const getTags = () => {
    Promise.resolve(StorageApi.getData(`sm_master_data/jenis_berita`))
    .then(value => {
      const data = value.data.data
      setListTags(data)
    }).catch(error => {
      setListTags([])
    }).catch(error => {

    })
  }

  return (
    <>
      <BaseLayouts>
        <section className="main-news-area allnews">
            <div className="container">
              <div class="row">
                <div className="col-md-9">
                  <div className="section-title">
                    <h3 className='widget-title'><Image className="p-2" src="/images/explore.svg" width={50} height={50} alt="image" />Tags</h3>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="wtitle">
                    <Cuaca></Cuaca>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <aside className="widget-area">
                  <section className="widget widget_tag_cloud">
                    {/* <h3 className="widget-title">Tags</h3> */}
                      <div className="tagcloud" >
                        {listTags.map((item, index) => {
                           return (
                            <Link key={index} href={`sm_master_data/jenis_berita`}>
                              {item.jenis_berita}
                            </Link>
                          )
                        })}
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
                      <Carousel cols={5} row={1} gap={10}>
                        {listLatest.map((item, index) => {
                          return (
                          <Carousel.Item key={index}>
                            {/* <div className="row"> */}
                                <div className="single-main-news" style={{height:250}}>
                                  <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                    <img src={`${item.image}`} alt="image"  style={{height:"250px",width:"auto !important"}}/>
                                  </Link>
                                  <div className="news-content">
                                    {/* <div className="tag">World news</div> */}
                                      <h3 className="bannews">
                                        <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                          {item.judul_news}
                                        </Link>
                                      </h3>
                                      <span>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</span>
                                    </div>
                                </div>
                            {/* </div> */}
                          </Carousel.Item>
                          )
                        })}
                      </Carousel>
                      </div>
                  </div>
            </div>
        </section>

        <section className="default-news-area allnews">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            

                            <div className="col-lg-6">
                                <div className="section-title"> 
                                    <h2>News Flash</h2> 
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
                    </div>

                    <div className="col-lg-4">
                        <aside className="widget-area">
                            <section className="widget widget_latest_news_thumb">
                                <h3 className="widget-title">Latest news</h3>
                                <div className='scroll-bar-vertical scrollbar-hide' style={{ height: "20.8rem" }}>
                                {listLatest.map((item, index) => {
                                  return (
                                <article className="item" key={index}>
                                    <Link href={`/News/DetailNews?id=${item.rowid}`} className="thumb">
                                        <img className="fullimage cover bg1" role="img" src={`${item.image}`}></img> 
                                    </Link>
                                    <div className="info">
                                      <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                        <h4 className="title usmall"><a href="#">{item.judul_news}</a></h4>
                                      </Link>
                                        <span>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</span>
                                    </div>
                                </article>
                                  )
                                })}
                                </div>
                            </section>

                            <section className="widget widget_popular_posts_thumb">
                                <h3 className="widget-title">Kalender Event</h3>
                                <div className='scroll-bar-vertical scrollbar-hide' style={{ height: "20.8rem" }}>
                                {newEvent.map((item, index) => {
                                  return (
                                <article className="item" key={index}>
                                    <a href="#" className="thumb">
                                        <img className="fullimage cover bg1" role="img" src={`${item.image}`}></img>
                                    </a>
                                    <div className="info">
                                        <h4 className="title usmall"><a href="#">{item.nama_event}</a></h4>
                                        <span>{moment(item.tgl_event).format("DD MMMM, YYYY")}</span>
                                    </div>
                                </article>
                                  )
                                })}
                                </div>
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