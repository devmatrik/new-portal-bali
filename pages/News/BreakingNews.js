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
import WisataAdat from '../Wisata/wisataAdat';
// import Slider from "react-slick";

export default function BreakingNews() {

  const [listTags, setListTags] = useState([]);
  const [listLatest, setListLatest] = useState([]);
  const [global, setListGlobal] = useState([]);
  const [g20, setListG20] = useState([]);
  const [wisata, setListWisata] = useState([]);
  const [kuliner, setListKuliner] = useState([]);
  const [olahraga, setListOlahraga] = useState([]);
  const [budaya, setListBudaya] = useState([]);
  const [technology, setListTechnology] = useState([]);
  const [it, setListITGoverment] = useState([]);
  const [newflash, setListNewFlash] = useState([]);
  const [newEvent, setListNewEvent] = useState([]);
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getTags();
    LatestNews();
    G20();
    NewEvent();
    Global();
    Wisata();
    Olahraga();
    Technology();
    IT();
    NewFlash();
    Budaya();
    Kuliner();
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

  const NewFlash = () => {
    Promise.resolve(StorageApi.getData("sm_master_data/jenis_berita"))
      .then(value => {
        const list = value.data.data
        var newflash = ""
        list.map(item => {
          if (item.jenis_berita == "NewFlash") {
            newflash = item.rowid
          }
        })
        Promise.resolve(StorageApi.getData(`sm_portal/news?jenis_news_id=${newflash}`))
          .then(value => {
            const datanewflash = value.data.data
            const Listdata = datanewflash.sort((a, b) => moment(b.tanggal_news).format("DD") - moment(a.tanggal_news).format("DD"))
            setListNewFlash(Listdata)
          }).catch(error => {
            setListNewFlash([])
          })
      }).catch(error => {

      })
  }

  const Global = () => {
    Promise.resolve(StorageApi.getData("sm_master_data/jenis_berita"))
      .then(value => {
        const list = value.data.data
        var global = ""
        list.map(item => {
          if (item.jenis_berita == "Global") {
            global = item.rowid
          }
        })
        Promise.resolve(StorageApi.getData(`sm_portal/news?jenis_news_id=${global}`))
          .then(value => {
            const dataglobal = value.data.data
            const Listdata = dataglobal.sort((a, b) => moment(b.tanggal_news).format("DD") - moment(a.tanggal_news).format("DD"))
            setListGlobal(Listdata)
          }).catch(error => {
            setListGlobal([])
          })
      }).catch(error => {

      })
  }

  const Wisata = () => {
    Promise.resolve(StorageApi.getData("sm_master_data/jenis_berita"))
      .then(value => {
        const list = value.data.data
        var wisata = ""
        list.map(item => {
          if (item.jenis_berita == "Wisata") {
            wisata = item.rowid
          }
        })
        Promise.resolve(StorageApi.getData(`sm_portal/news?jenis_news_id=${wisata}`))
          .then(value => {
            const datawisata = value.data.data
            const Listdata = datawisata.sort((a, b) => moment(b.tanggal_news).format("DD") - moment(a.tanggal_news).format("DD"))
            setListWisata(Listdata)
          }).catch(error => {
            setListWisata([])
          })
      }).catch(error => {

      })
  }

  const Kuliner = () => {
    Promise.resolve(StorageApi.getData("sm_master_data/jenis_berita"))
      .then(value => {
        const list = value.data.data
        var kuliner = ""
        list.map(item => {
          if (item.jenis_berita == "Kuliner") {
            kuliner = item.rowid
          }
        })
        Promise.resolve(StorageApi.getData(`sm_portal/news?jenis_news_id=${kuliner}`))
          .then(value => {
            const datakuliner = value.data.data
            const Listdata = datakuliner.sort((a, b) => moment(b.tanggal_news).format("DD") - moment(a.tanggal_news).format("DD"))
            setListKuliner(Listdata)
          }).catch(error => {
            setListKuliner([])
          })
      }).catch(error => {

      })
  }

  const Budaya = () => {
    Promise.resolve(StorageApi.getData("sm_master_data/jenis_berita"))
      .then(value => {
        const list = value.data.data
        var budaya = ""
        list.map(item => {
          if (item.jenis_berita == "Budaya") {
            budaya = item.rowid
          }
        })
        Promise.resolve(StorageApi.getData(`sm_portal/news?jenis_news_id=${budaya}`))
          .then(value => {
            const databudaya = value.data.data
            const Listdata = databudaya.sort((a, b) => moment(b.tanggal_news).format("DD") - moment(a.tanggal_news).format("DD"))
            setListBudaya(Listdata)
          }).catch(error => {
            setListBudaya([])
          })
      }).catch(error => {

      })
  }

  const Technology = () => {
    Promise.resolve(StorageApi.getData("sm_master_data/jenis_berita"))
      .then(value => {
        const list = value.data.data
        var technology = ""
        list.map(item => {
          if (item.jenis_berita == "Technology") {
            technology = item.rowid
          }
        })
        Promise.resolve(StorageApi.getData(`sm_portal/news?jenis_news_id=${technology}`))
          .then(value => {
            const datatech = value.data.data
            const Listdata = datatech.sort((a, b) => moment(b.tanggal_news).format("DD") - moment(a.tanggal_news).format("DD"))
            setListTechnology(Listdata)
          }).catch(error => {
            setListTechnology([])
          })
      }).catch(error => {

      })
  }

  const IT = () => {
    Promise.resolve(StorageApi.getData("sm_master_data/jenis_berita"))
      .then(value => {
        const list = value.data.data
        var it = ""
        list.map(item => {
          if (item.jenis_berita == "IT") {
            it = item.rowid
          }
        })
        Promise.resolve(StorageApi.getData(`sm_portal/news?jenis_news_id=${it}`))
          .then(value => {
            const datait = value.data.data
            const Listdata = datait.sort((a, b) => moment(b.tanggal_news).format("DD") - moment(a.tanggal_news).format("DD"))
            setListITGoverment(Listdata)
          }).catch(error => {
            setListITGoverment([])
          })
      }).catch(error => {

      })
  }

  const Olahraga = () => {
    Promise.resolve(StorageApi.getData("sm_master_data/jenis_berita"))
      .then(value => {
        const list = value.data.data
        var olahraga = ""
        list.map(item => {
          if (item.jenis_berita == "Olahraga") {
            olahraga = item.rowid
          }
        })
        Promise.resolve(StorageApi.getData(`sm_portal/news?jenis_news_id=${olahraga}`))
          .then(value => {
            const dataolahraga = value.data.data
            const Listdata = dataolahraga.sort((a, b) => moment(b.tanggal_news).format("DD") - moment(a.tanggal_news).format("DD"))
            setListOlahraga(Listdata)
          }).catch(error => {
            setListOlahraga([])
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
                  <h3 className='widget-title'><Image className="p-2" src="/images/explore.svg" width={50} height={50} alt="image" />Kategori</h3>
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
                        <div className="single-main-news" style={{ height: 250 }}>
                          <Link href={`/News/DetailNews?id=${item.rowid}`}>
                            <img src={`${item.image}`} alt="image" style={{ height: "250px", width: "auto !important" }} />
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
                      <h2>Breaking News</h2>
                    </div>
                    {news.slice(0, 3).map((item, index) => {
                      return (
                        <div className="single-sports-news" key={index}>
                          <div className="row align-items-center">
                            <div className="col-lg-4 col-sm-4">
                              <div className="sports-news-image">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <img src={item.image} alt="image" />
                                </Link>
                              </div>
                            </div>

                            <div className="col-lg-8 col-sm-8">
                              <div className="sports-news-content">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <h3>
                                    <a href="#">{item.judul_news}</a>
                                  </h3>
                                  <p>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="col-lg-6">
                    <div className="section-title">
                      <h2>News Flash</h2>
                    </div>

                    {newflash.slice(0, 3).map((item, index) => {
                      return (
                        <div className="single-tech-news" key={index}>
                          <div className="row align-items-center">
                            <div className="col-lg-4 col-sm-4">
                              <div className="tech-news-image">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <img src={item.image} alt="image" />
                                </Link>
                              </div>
                            </div>

                            <div className="col-lg-8 col-sm-8">
                              <div className="tech-news-content">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <h3 >
                                    <a>{item.judul_news}</a>
                                  </h3>
                                </Link>
                                <p>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}

                  </div>

                  <div className="col-lg-6">
                    <div className="section-title">
                      <h2>G20</h2>
                    </div>

                    {g20.slice(0, 3).map((item, index) => {
                      return (
                        <div className="single-tech-news" key={index}>
                          <div className="row align-items-center">
                            <div className="col-lg-4 col-sm-4">
                              <div className="tech-news-image">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <img src={item.image} alt="image" />
                                </Link>
                              </div>
                            </div>

                            <div className="col-lg-8 col-sm-8">
                              <div className="tech-news-content">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <h3 >
                                    <a>{item.judul_news}</a>
                                  </h3>
                                </Link>
                                <p>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}

                  </div>

                  <div className="col-lg-6">
                    <div className="section-title">
                      <h2>Global</h2>
                    </div>

                    {global.slice(0, 3).map((item, index) => {
                      return (
                        <div className="single-tech-news" key={index}>
                          <div className="row align-items-center">
                            <div className="col-lg-4 col-sm-4">
                              <div className="tech-news-image">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <img src={item.image} alt="image" />
                                </Link>
                              </div>
                            </div>

                            <div className="col-lg-8 col-sm-8">
                              <div className="tech-news-content">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <h3 >
                                    <a>{item.judul_news}</a>
                                  </h3>
                                </Link>
                                <p>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="col-lg-6">
                    <div className="section-title">
                      <h2>Wisata</h2>
                    </div>

                    {wisata.slice(0, 3).map((item, index) => {
                      return (
                        <div className="single-tech-news" key={index}>
                          <div className="row align-items-center">
                            <div className="col-lg-4 col-sm-4">
                              <div className="tech-news-image">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <img src={item.image} alt="image" />
                                </Link>
                              </div>
                            </div>

                            <div className="col-lg-8 col-sm-8">
                              <div className="tech-news-content">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <h3 >
                                    <a>{item.judul_news}</a>
                                  </h3>
                                </Link>
                                <p>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}


                  </div>

                  <div className="col-lg-6">
                    <div className="section-title">
                      <h2>Technology</h2>
                    </div>

                    {technology.slice(0, 3).map((item, index) => {
                      return (
                        <div className="single-tech-news" key={index}>
                          <div className="row align-items-center">
                            <div className="col-lg-4 col-sm-4">
                              <div className="tech-news-image">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <img src={item.image} alt="image" />
                                </Link>
                              </div>
                            </div>

                            <div className="col-lg-8 col-sm-8">
                              <div className="tech-news-content">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <h3 >
                                    <a>{item.judul_news}</a>
                                  </h3>
                                </Link>
                                <p>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="col-lg-6">
                    <div className="section-title">
                      <h2>Budaya</h2>
                    </div>

                    {budaya.slice(0, 3).map((item, index) => {
                      return (
                        <div className="single-tech-news" key={index}>
                          <div className="row align-items-center">
                            <div className="col-lg-4 col-sm-4">
                              <div className="tech-news-image">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <img src={item.image} alt="image" />
                                </Link>
                              </div>
                            </div>

                            <div className="col-lg-8 col-sm-8">
                              <div className="tech-news-content">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <h3 >
                                    <a>{item.judul_news}</a>
                                  </h3>
                                </Link>
                                <p>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}


                  </div>

                  <div className="col-lg-6">
                    <div className="section-title">
                      <h2>Olahraga</h2>
                    </div>

                    {olahraga.slice(0, 3).map((item, index) => {
                      return (
                        <div className="single-tech-news" key={index}>
                          <div className="row align-items-center">
                            <div className="col-lg-4 col-sm-4">
                              <div className="tech-news-image">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <img src={item.image} alt="image" />
                                </Link>
                              </div>
                            </div>

                            <div className="col-lg-8 col-sm-8">
                              <div className="tech-news-content">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <h3 >
                                    <a>{item.judul_news}</a>
                                  </h3>
                                </Link>
                                <p>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="col-lg-6">
                    <div className="section-title">
                      <h2>IT Goverment</h2>
                    </div>

                    {it.slice(0, 3).map((item, index) => {
                      return (
                        <div className="single-tech-news" key={index}>
                          <div className="row align-items-center">
                            <div className="col-lg-4 col-sm-4">
                              <div className="tech-news-image">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <img src={item.image} alt="image" />
                                </Link>
                              </div>
                            </div>

                            <div className="col-lg-8 col-sm-8">
                              <div className="tech-news-content">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <h3 >
                                    <a>{item.judul_news}</a>
                                  </h3>
                                </Link>
                                <p>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <aside className="widget-area">
                  <section className="widget widget_latest_news_thumb">
                    <h3 className="widget-title">Latest news</h3>
                    {g20.slice(0, 4).map((item, index) => {
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
                  </section>

                  <section className="widget widget_popular_posts_thumb">
                    <h3 className="widget-title"><Image src="/images/Event.png" width={30} height={30} alt="image" /> Kalender Event</h3>
                    {newEvent.slice(0, 4).map((item, index) => {
                      return (
                        <article className="item" key={index}>
                          <Link href={`/News/DetailEvent?id=${item.rowid}`} className="thumb">
                            <img className="fullimage cover bg1" role="img" src={`${item.image}`}></img>
                          </Link>
                          <div className="info">
                            <h4 className="title usmall">
                              <Link href={`/News/DetailEvent?id=${item.rowid}`}>
                                {item.nama_event}
                              </Link>
                            </h4>
                            <span>{moment(item.tgl_event).format("DD MMMM, YYYY")}</span>
                          </div>
                        </article>
                      )
                    })}
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