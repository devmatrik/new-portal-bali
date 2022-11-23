import React, { useEffect, useState } from 'react'
// import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment/moment'
import {
  BaseLayouts, StorageApi
} from '../components/MainCode/MainImport'
import Slide from 'react-bootstrap/Carousel'
import Carousel from 'react-grid-carousel';
import Cuaca from './Cuaca';
import Button from 'react-bootstrap/Button';
// import { Button } from 'antd'


export default function Home() {

  const [listLatest, setListLatest] = useState([]);
  const [g20, setListG20] = useState([]);
  const [newEvent, setListNewEvent] = useState([]);
  const [loading, setLoading] = useState(false);
  const konten = {
    title: "Portal",
    // LinkApi: "algors/periode_keamanan",
  }
  useEffect(() => {
    G20()
    NewEvent()
    LatestNews()
  }, [loading])

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

  // const NewEvent = () => {
  //   Promise.resolve(StorageApi.getData("sm_master_data/jenis_event"))
  //     .then(value => {
  //       const list = value.data.data
  //       var newEvent = ""
  //       list.map(item => {
  //         if (item.jenis_event == "New Event") {
  //           newEvent = item.rowid
  //         }
  //       })
  //       Promise.resolve(StorageApi.getData(`sm_portal/event?jenis_event_id=${newEvent}`))
  //         .then(value => {
  //           const dataNewEvent = value.data.data
  //           const Listdata = dataNewEvent.sort((a, b) => moment(b.tgl_event).format("DD") - moment(a.tgl_event).format("DD"))
  //           console.log(Listdata);
  //           setListNewEvent(Listdata)
  //         }).catch(error => {
  //           setListNewEvent([])
  //         })
  //     }).catch(error => {

  //     })
  // }

  const NewEvent = () => {
    Promise.resolve(StorageApi.getData(`sm_portal/event`))
      .then(value => {
        const data = value.data.data
        setListNewEvent(data)
      }).catch(error => {
        setListNewEvent([])
      })
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
  return (
    <>
      <BaseLayouts title={konten.title}>
        <section className="main-news-area">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="section-title">
                  <h2 className='widget-title'><Image className="p-2" src="/images/explore.svg" width={50} height={50} alt="image" /> Explore Bali</h2>
                </div>
              </div>
              <div className="col-md-3">
                <div className="wtitle">
                  <Cuaca></Cuaca>
                </div>
              </div>
              <div className="col-lg-12">
                <Slide autoplay loop>
                  <Slide.Item>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="single-team-box">
                          <div className="image">
                            <Link href="/Wisata/wisataAlam">
                              <Image src="/images/_wisata-alam.png" width={550} height={550} alt="image" />
                            </Link>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}>
                              <Link style={{ color: '#fff' }} href="/Wisata/wisataAlam">Wisata Alam</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-team-box">
                          <div className="image">
                            <Link href="/Wisata/wisataKuliner">
                              <Image src="/images/_wisata-kuliner.png" width={550} height={550} alt="image" />
                            </Link>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}>
                              <Link style={{ color: '#fff' }} href="/Wisata/wisataKuliner">Wisata Kuliner</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-team-box">
                          <div className="image">
                            <Link href="/Wisata/kulinerTradisional">
                              <Image src="/images/_kuliner-tradisional.png" width={550} height={550} alt="image" />
                            </Link>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}>
                              <Link style={{ color: '#fff' }} href="/Wisata/kulinerTradisional">Kuliner Tradisional</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide.Item>
                  <Slide.Item>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="single-team-box">
                          <div className="image">
                            <Link href="/Wisata/wisataAdat">
                              <Image src="/images/_adat & budaya.png" width={550} height={550} alt="image" />
                            </Link>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}>
                              <Link style={{ color: '#fff' }} href="/Wisata/wisataAdat">Adat & Budaya</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-team-box">
                          <div className="image">
                            <Link href="/Wisata/tempatRekreasi">
                              <Image src="/images/_rekreasi.png" width={550} height={550} alt="image" />
                            </Link>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}>
                              <Link style={{ color: '#fff' }} href="/Wisata/tempatRekreasi">Tempat Rekreasi</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-team-box">
                          <div className="image">
                            <Link href="/Wisata/olehOlehKhas">
                              <Image src="/images/_oleholeh.png" width={550} height={550} alt="image" />
                            </Link>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}>
                              <Link style={{ color: '#fff' }} href="/Wisata/olehOlehKhas">Oleh- Oleh Khas</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide.Item>
                  <Slide.Item>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="single-team-box">
                          <div className="image">
                            <Link href="/PublicService/travelAgensi">
                              <Image src="/images/_travel.png" width={550} height={550} alt="image" />
                            </Link>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}>
                              <Link style={{ color: '#fff' }} href="/PublicService/travelAgensi">Travel Agensi</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-team-box">
                          <div className="image">
                            <Link href="/PublicService/Penginapan">
                              <Image src="/images/_penginapan.png" width={550} height={550} alt="image" />
                            </Link>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}>
                              <Link style={{ color: '#fff' }} href="/PublicService/Penginapan">Penginapan</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-team-box">
                          <div className="image">
                            <Link href="/PublicService/lokasiPelayananPublic">
                              <Image src="/images/_public.png" width={550} height={550} alt="image" />
                            </Link>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}>
                              <Link style={{ color: '#fff' }} href="/PublicService/lokasiPelayananPublic">Pelayanan Publik</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide.Item>
                </Slide>
              </div>
              
            </div>
            <div className="row ">
              <div className="section-title">
                <h2><Image className="p-2" src="/images/News.png" width={50} height={50} alt="" /> Latest News</h2>
                {/* <h5 style={{ color: "#ffff", fontWeight: 300, opacity: "80%" }}>Rekomendasi Wisata Alam di Bali</h5> */}
              </div>
              <div className="col-lg-9">
                <Carousel cols={3} rows={2} gap={8} loop autoplay>
                  {listLatest.map((item, index) => {
                    return (
                      <Carousel.Item key={index}>
                        <div class="single-new-news">
                            <div class="new-news-image">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                    <img src={`${item.image}`} style={{ width: '410px', height: '250px'}} alt="image" />
                                </Link>
                                <div class="new-news-content">
                                    <span>{item.jenis_berita}</span>
                                    <h3>
                                        <Link href={`/News/DetailNews?id=${item.rowid}`} style={{ fontSize: 13 }}>{item.judul_news.length > 50  ?  `${item.judul_news.substring(0, 50)}...` : item.judul_news}</Link>
                                    </h3>
                                    <p>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</p>
                                </div>
                                <Link href={`/News/DetailNews?id=${item.rowid}`} style={{ fontSize: 13 }}>
                                  <div className="d-grid gap-2">
                                    <Button variant="outline-warning" size="sm">Read More</Button>
                                  </div>
                                </Link>
                            </div>
                        </div>
                      </Carousel.Item>
                    )
                  })}
                </Carousel>
              </div>
              <div className="col-lg-3">
                <aside className="widget-area">
                  <section className="widget widget_latest_news_thumb">
                    <h3 className="widget-title"><Image src="/images/News.png" width={40} height={40} alt="image" /> G20</h3>
                    <aside className='widget-area scroll-bar-vertical scrollbar-hide' style={{ height: "28rem" }}>
                      <div className='scroll-bar-vertical scrollbar-hide' style={{ height: "30rem" }}>
                        {g20.map((item, index) => {
                          return (
                            <article className="item" key={index}>
                              <a href="#" className="thumb">
                                {/* <span className="fullimage cover bg1" role="img"></span> */}
                                <img src={item.image} style={{ height: "80px", width : "100px" }} alt="image" />
                              </a>
                              <div className="info">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <h4 className="title usmall" style={{ fontSize: 12 }}>
                                    <a>{item.judul_news}</a>
                                  </h4>
                                </Link>
                                <span style={{ fontSize: 12, color: '#fff' }}>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</span>
                              </div>
                            </article>
                          )
                        })}
                      </div>
                    </aside>
                  </section>
                  
                  <section className="widget widget_popular_posts_thumb">
                    <h3 className="widget-title"><Image src="/images/Event.png" width={30} height={30} alt="image" /> New Event</h3>
                    <div className='scroll-bar-vertical scrollbar-hide' style={{ height: "20.8rem" }}>
                      {newEvent.map((item, index) => {
                        return (
                          <article className="item" key={index}>
                            <Link href={`/News/DetailEvent?id=${item.rowid}`} className="thumb">
                              {/* <span className="fullimage cover bg1" role="img"></span> */}
                              <img className="fullimage cover bg1" src={item.image} style={{ height: "80px", width : "100px" }} role="image" />
                            </Link>
                            <div className="info">
                              <h4 className="title usmall">
                                <Link href={`/News/DetailEvent?id=${item.rowid}`}>
                                  {item.nama_event}
                                </Link>
                              </h4>
                              <span style={{ color: '#ff661f', fontWeight: 'bold' }}>{moment(item.tgl_event).format("DD MMM, YYYY ")}- {moment(item.tgl_berakhir).format("DD MMM, YYYY ")}</span>
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
        {/* End Default News Area */}
        {/* Start Go Top Area */}
        <div className="go-top">
          <i className="bx bx-up-arrow-alt" />
        </div>
      </BaseLayouts>
    </>
  )
}

