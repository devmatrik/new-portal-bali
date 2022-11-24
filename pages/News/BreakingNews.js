import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BaseLayouts from '../../components/MainCode/BaseLayouts'
import {
  SelectJenisBerita,
  StorageApi
} from '../../components/MainCode/MainImport'
import Link from 'next/link';
import moment from 'moment/moment';
import Carousel from 'react-grid-carousel'
import Cuaca from '../Cuaca';
import { FilterJenisBerita } from '../../components/Addons/FilterJenisBerita';
import Button from 'react-bootstrap/Button';

// import { Button } from 'antd';
// import Slide from 'react-bootstrap/Carousel'
// import WisataAdat from '../Wisata/wisataAdat';
// import Slider from "react-slick";

export default function BreakingNews() {

  const [listTags, setListTags] = useState([]);
  const [listLatest, setListLatest] = useState([]);
  const [global, setListGlobal] = useState([]);
  const [g20, setListG20] = useState([]);
  const [wisata, setListWisata] = useState([]);
  const [dataBar, setApiData] = useState([]);
  const [kuliner, setListKuliner] = useState([]);
  const [olahraga, setListOlahraga] = useState([]);
  const [budaya, setListBudaya] = useState([]);
  const [technology, setListTechnology] = useState([]);
  const [it, setListITGoverment] = useState([]);
  const [newflash, setListNewFlash] = useState([]);
  const [newEvent, setListNewEvent] = useState([]);
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const [jenis_news, setJenisNews] = useState('')
  const [jenis_berita_id, setJenisBerita] = useState('')
  const [total, setTotal] = useState([]);

  const renderHTML = (rawHTML) => React.createElement("p", { dangerouslySetInnerHTML: { __html: rawHTML } });


  const [dataChart, setDataChart] = useState({
    jenis_berita: [],
    global: [],
    g20: [],
  });

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
    GetAllData();
  }, [loading])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  // API 
  const reset_elm = () => {
    setJenisBerita('')
  }

  const konten = {
    title: "All News",
    //LinkApi: "algors/periode_keselamatan",
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

  const G20 = async () => {
    let arr = []
    if (jenis_berita_id) { arr = [...arr, `jenis_news_id=${jenis_berita_id}`] }
    let param = '';
    param = arr.length > 0 ? '?' + arr.join('&') : '';
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

  const Global = async () => {
    let arr = []
    if (jenis_berita_id) { arr = [...arr, `jenis_news_id=${jenis_berita_id}`] }
    let param = '';
    param = arr.length > 0 ? '?' + arr.join('&') : '';
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

  const NewFlash = () => {
    Promise.resolve(StorageApi.getData("sm_master_data/jenis_berita"))
      .then(value => {
        const list = value.data.data
        var newflash = ""
        list.map(item => {
          if (item.jenis_berita == "News Flash") {
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
          if (item.jenis_berita == "IT Goverment") {
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

  const LatestNews = async (id = "") => {
    let arr = []
    if (jenis_berita_id) { arr = [...arr, `jenis_news_id=${jenis_berita_id}`] }
    if (id) { arr = [...arr, `jenis_news_id=${id}`] }
    let param = '';
    param = arr.length > 0 ? '?' + arr.join('&') : '';
    Promise.resolve(StorageApi.getData('sm_portal/news' + param))
      .then(value => {
        const datag20 = value.data.data
        const Listdata = datag20.sort((a, b) => b.rowid - a.rowid)
        setListLatest(Listdata)
      }).catch(error => {
        setListLatest([])
      })
  }

  const getTags = () => {
    Promise.resolve(StorageApi.getRelasi(`sm_master_data/jenis_berita`))
      .then(value => {
        const detail = value.data.data
        setListTags(detail)
        // console.log(daftar);
      }).catch(error => {
        setListTags([])
        console.log(error);
      })
  }

  const GetAllData = (param) => {
    param == "filter" ? setDataChart({
      jenis_berita: [],
      global: [],
      g20: [],

    }) : ""
    getTagJenisBerita();
    getGlobal();
    getG20();
  }

  const getTagJenisBerita = () => {
    getApiChart('jenis_berita', 'sm_portal/news');
  }

  const getGlobal = () => {
    getApiChart('global', 'sm_portal/news?jenis_news_id=8');
  }

  const getG20 = () => {
    getApiChart('g20', 'sm_portal/news?jenis_news_id=5');
  }

  const getApiChart = async (usestate_name = "", url = "") => {
    let arr = []
    let param = '';
    if (jenis_berita_id) { arr = [...arr, `jenis_news_id=${jenis_berita_id}`] }

    param = arr.length > 0 ? '?' + arr.join('&') : '';
    Promise.resolve(StorageApi.getData(`${url}${param}`))
      .then(value => {
        if (value.data.status) {
          if (usestate_name == "jenis_berita") {
            changeTotal(usestate_name, value.data.data);
          }
          if (usestate_name == "global") {
            changeTotal(usestate_name, value.data.data);
          }
          if (usestate_name == "g20") {
            changeTotal(usestate_name, value.data.data);
          }
        }
      }).catch(error => {
        console.log(error);
      })
  }

  const changeTotal = (name = "", value = "") => {
    setTotal((e) => ({ ...e, [name]: value }))
  }

  const AllFilter = () => {
    LatestNews()
    G20()
    Global()
  }




  return (
    <>
      <BaseLayouts>
        <section className="main-news-area allnews">
          <div className="container">
            <div class="row">
              <div className="col-md-9">
                <div className="section-title">
                  <h2 className='widget-title'><Image className="p-2" src="/images/tag.svg" width={45} height={45} alt="image" />Kategori</h2>
                </div>
              </div>
              <div className="col-md-3">
                <div className="wtitle">
                  <Cuaca></Cuaca>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <FilterJenisBerita
                jenisBerita={
                  <SelectJenisBerita onChange={(e) => setJenisBerita(e.value)} value={jenis_berita_id} placeholder="Pilih Jenis Berita" />
                } title={" "}
                filter={(e) => AllFilter()} reset={(e) => reset_elm()} />
            </div>
            <div className="col-md-12">
              <aside className="widget-area">
                <section className="widget widget_tag_cloud">
                  {/* <h3 className="widget-title">Tags</h3> */}
                  <div className='tagcloud'>
                    {listTags.map((item, index) => {
                      return (
                        <a key={index} style={{ cursor: 'pointer' }} variant="outline-dark" value={jenis_berita_id} onClick={e => LatestNews(item.rowid)} >
                          {item.jenis_berita}
                        </a>
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
                <Carousel cols={4} row={1} gap={10}>
                  {listLatest.map((item, index) => {
                    return (
                      <Carousel.Item key={index}>
                        {/* <div className="row"> */}
                        <div className="single-main-news" style={{ height: 250, width: 250}}>
                          <Link href={`/News/DetailNews?id=${item.rowid}`}>
                            <img src={`${item.image}`} alt="image" style={{ height: "250px", width: "250px" }} />
                          </Link>
                          <div className="news-content">
                            <div className="tag">{item.jenis_berita}</div>
                            <h3 className="bannews">
                              <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                <p style={{ fontSize: '13px', color: '#fff' }}>{item.judul_news.length > 50 ? `${item.judul_news.substring(0, 40)}...` : item.judul_news}</p>
                              </Link>
                            </h3>
                            <span style={{ fontSize: '11px', color: '#fff' }}>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</span>
                          </div>
                        </div>
                        {/* </div> */}
                      </Carousel.Item>
                    )
                  })}
                </Carousel>
                {/* {listLatest.length < 0 ? (<>data kosong</>) : (<>Data kosong</>)} */}
              </div>
            </div>
          </div>
        </section>

        <section className="default-news-area allnews">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-12">

                    {news.map((item, index) => {
                      return (
                        <div className="single-sports-news" key={index}>
                          <div className="section-title">
                            <h2>{item.jenis_berita}</h2>
                          </div>
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
                                <span style={{color: '#ff661f', fontSize: 12, fontWeight: 500}}>{item.jenis_berita}</span>
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <h3>
                                    <a href="#">{item.judul_news.length > 150 ? `${item.judul_news.substring(0, 50)}...` : item.judul_news}</a>
                                  </h3>
                                  <p>{renderHTML(item.isi_konten.length > 200 ? `${item.isi_konten.substring(0, 200)}...` : item.isi_konten)}</p>
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
                    <Carousel>
                        {newflash.map((item, index) => {
                          return (
                          <Carousel.Item key={index}>
                            <div className="single-most-popular-news" >
                              <div className="row align-items-center">
                                  <div className="popular-news-image">
                                    <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                      <img src={item.image} style={{ width: '410px', height: '250px'}} alt="image" />
                                    </Link>
                                  </div>
                                
                                  <div className="popular-news-content">
                                  <span style={{color: '#ff661f', fontSize: 12, fontWeight: 500}}>{item.jenis_berita}</span>
                                    <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                      <h3 >
                                        <a>{item.judul_news.length > 50 ? `${item.judul_news.substring(0, 50)}...` : item.judul_news}</a>
                                      </h3>
                                    </Link>
                                    <p>{renderHTML(item.isi_konten.length > 200 ? `${item.isi_konten.substring(0, 200)}...` : item.isi_konten)}</p>
                                    <p>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</p>
                                  </div>
                              </div>
                            </div>
                            </Carousel.Item>
                          )
                        })}
                    </Carousel>
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
                                  <img src={item.image} style={{width: 200, height: 150}} alt="image" />
                                </Link>
                              </div>
                            </div>

                            <div className="col-lg-8 col-sm-8">
                              <div className="tech-news-content">
                              <span style={{color: '#ff661f', fontSize: 12, fontWeight: 500}}>{item.jenis_berita}</span>
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <h3 >
                                    <a>{item.judul_news.length > 50 ? `${item.judul_news.substring(0, 50)}...` : item.judul_news}</a>
                                  </h3>
                                </Link>
                                <p>{renderHTML(item.isi_konten.length > 30 ? `${item.isi_konten.substring(0, 30)}...` : item.isi_konten)}</p>
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
                                    <a>{item.judul_news.length > 50 ? `${item.judul_news.substring(0, 50)}...` : item.judul_news}</a>
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

                  {/* <div className="col-lg-6">
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
                                    <a>{item.judul_news.length > 50 ? `${item.judul_news.substring(0, 50)}...` : item.judul_news}</a>
                                  </h3>
                                </Link>
                                <p>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}


                  </div> */}

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
                                    <a>{item.judul_news.length > 50 ? `${item.judul_news.substring(0, 50)}...` : item.judul_news}</a>
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
                                    <a>{item.judul_news.length > 50 ? `${item.judul_news.substring(0, 50)}...` : item.judul_news}</a>
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
                                    <a>{item.judul_news.length > 50 ? `${item.judul_news.substring(0, 50)}...` : item.judul_news}</a>
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

                  <div className="col-lg-12">
                    <div className="section-title">
                      <h2>IT Goverment</h2>
                    </div>
                    <Carousel cols={2} row={1} gap={12}>
                      {it.map((item, index) => {
                        return (
                          <Carousel.Item key={index}>
                            <div className="single-business-news">
                              <div className="business-news-image">
                                <Link href={`DetailNews?id=${item.rowid}`}>
                                  <img src={item.image} alt="image" />
                                </Link>
                              </div>

                              <div className="business-news-content">
                              <span style={{color: '#ff661f', fontSize: 12, fontWeight: 500}}>{item.jenis_berita}</span>
                                <Link href={`DetailNews?id=${item.rowid}`}>
                                  <h3 >
                                    <a>{item.judul_news.length > 40 ? `${item.judul_news.substring(0, 40)}...` : item.judul_news}</a>
                                  </h3>
                                </Link>
                                <p>{renderHTML(item.isi_konten.length > 100 ? `${item.isi_konten.substring(0, 100)}...` : item.isi_konten)}</p>
                                <p>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</p>
                              </div>
                            </div>
                          </Carousel.Item>
                        )
                      })}
                    </Carousel>
                  </div>

                </div>
              </div>

              <div className="col-lg-4">
                <aside className="widget-area">
                  <section className="widget widget_latest_news_thumb">
                    <h3 className="widget-title">Latest news</h3>
                    <aside className='widget-area scroll-bar-vertical scrollbar-hide' style={{ height: "30rem" }}>
                      <div className='scroll-bar-vertical scrollbar-hide' style={{ height: "60rem" }}>
                        {listLatest.map((item, index) => {
                          return (
                            <article className="item" key={index}>
                              <Link href={`/News/DetailNews?id=${item.rowid}`} className="thumb">
                                <img className="fullimage cover bg1" role="img" src={`${item.image}`}></img>
                              </Link>
                              <div className="info">
                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                  <h4 className="title usmall" style={{ fontSize: 12 }}>
                                    <a href="#">{item.judul_news}</a>
                                  </h4>
                                </Link>
                                <span style={{ fontSize: 12 }}>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</span>
                              </div>
                            </article>
                          )
                        })}
                      </div>
                    </aside>
                  </section>

                  <section className="widget widget_popular_posts_thumb">
                    <h3 className="widget-title"><Image src="/images/Event.png" width={30} height={30} alt="image" /> Kalender Event</h3>
                    <aside className='widget-area scroll-bar-vertical scrollbar-hide' style={{ height: "30rem" }}>
                      <div className='scroll-bar-vertical scrollbar-hide' style={{ height: "60rem" }}>
                        {newEvent.map((item, index) => {
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
                      </div>
                    </aside>
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