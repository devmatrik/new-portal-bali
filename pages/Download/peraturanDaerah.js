import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { BaseLayouts } from '../../components/MainCode/MainImport'
import {
  SelectJenisBerita,
  StorageApi
} from '../../components/MainCode/MainImport'
// import Slider from "react-slick";
import Link from 'next/link';
import moment from 'moment/moment';
import Carousel from 'react-grid-carousel'
import { FilterJenisBerita } from '../../components/Addons/FilterJenisBerita';

export default function PeraturanDaerah() {

  const [loading, setLoading] = useState(false)
  const [event, setEvent] = useState([])
  
  const [listTags, setListTags] = useState([]);
  const [listLatest, setListLatest] = useState([]);
  const [global, setListGlobal] = useState([]);
  const [tanggal, setTanggal] = useState([]);
  const [nama_peraturan, setNamaPeraturan] = useState([]);
  const [file, setFile] = useState([]);
  const [dataBar, setApiData] = useState([]);
  const [jenis_berita_id, setJenisBerita] = useState('')

  const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

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
    title: "Peraturan Daerah",
    //LinkApi: "algors/periode_keselamatan",
  }

  const getData = () => {
    Promise.resolve(StorageApi.getData(`sm_portal/perda`))
      .then(value => {
        const data = value.data.data
        setEvent(data)
      }).catch(error => {
        setEvent([])
      })
  }

  return (
    <>
    {/* <BaseLayouts>
      <iframe src="https://jdih.baliprov.go.id/produk-hukum/peraturan-perundang-undangan/perda" width="100%" height="400" name="iframe" />
    </BaseLayouts> */}
    <BaseLayouts>
              {/* <!-- Start News Details Area --> */}
              <section className="news-details-area ptb-50">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12 col-md-12 mt-0">
                              <div className="blog-details-desc">
                                  <span><a href="#">Hunt</a> / 14 November 2022 /</span>
                                  <h5>Peraturan Daerah</h5>
                                  
                                <div className="col-md-12">
                                  <FilterJenisBerita
                                    jenisBerita={
                                      <SelectJenisBerita onChange={(e) => setJenisBerita(e.value)} value={jenis_berita_id} placeholder="Pilih Peraturan Daerah" />
                                    } title={" "}
                                    filter={(e) => AllFilter()} reset={(e) => reset_elm()} />
                                </div>   
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
                                                                <p>{renderHTML(item.isi_konten.length > 150 ?
                                                                    `${item.isi_konten.substring(0, 150)}...` : item.isi_konten
                                                                  )}</p>
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
                                <br />             
                                <div className="article-footer">
                                      <div className="article-share">

                                      </div>
                                </div>
                              </div>
                          </div>
                          {/* <div class="col-lg-4">
                              <aside class="widget-area contactprof">

                                  <section class="widget widget_latest_news_thumb">
                                      <h3 class="widget-title">Cari Peraturan Daerah</h3>

                                      <div className="blog-details-desc">
                                          <div className="article-content mt-0">
                                              <div className="article-image">
                                                  <div className='container'>
                                                      <Image className="prof" src="/images/balimap.webp" width={768} height={240} alt="image" />
                                                  </div>
                                                  <div className='container'>
                                                      <Image className="prof" src="/images/iconkabupaten.svg" width={900} height={320} alt="image" />
                                                  </div>
                                              </div> <br />
                                              <div className="desc-overview">
                                          <div className="row align-items-center">
                                              <div className="col-lg-6">
                                              </div>
                                              <div className="col-lg-6">
                                              </div>
                                          </div>
                                      </div>
                                          </div>
                                      </div>
                                  </section>
                              </aside>
                          </div> */}
                      </div>
                      {/* <!-- Start Contact Area --> */}
                      <section class="contact-area ptb-50">
                          <div class="container">
                              <div class="row">
                                  <div class="col-lg-8">
                                      <div class="contact-map mprof">
                                          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15777.77033839834!2d115.2248866!3d-8.6493878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24082a26da0a3%3A0x57ee2644ece89566!2sDITLANTAS%20POLDA%20BALI!5e0!3m2!1sen!2sid!4v1668784013949!5m2!1sen!2sid" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                      </div>
                                  </div>

                                  <div class="col-lg-4">
                                      <aside class="widget-area contactprof">
                                          <section class="widget widget_stay_connected">
                                              <h3 class="widget-title">Location</h3>

                                              <ul class="contact-info">
                                                  <li>
                                                      <span>Backoffice Smart City RSP</span><br />
                                                      Ditlantas Polda Bali Jl. WR Supratman No.7, Dangin Putri Kangin, Kec. Denpasar Utara, Kota Denpasar, Bali 80236
                                                  </li>

                                                  <li>
                                                      <span>Email</span><br />
                                                      support@elingbali.com
                                                  </li>

                                                  {/* <li>
                                      <span>Call Center</span><br />
                                      111
                                  </li> */}

                                              </ul>
                                          </section>

                                          <br />
                                      </aside>
                                  </div>
                              </div>
                          </div>
                      </section>
                      {/* <!-- End Contact Area --> */}
                  </div>
              </section>
              {/* <!-- Start News Details Area --> */}
          </BaseLayouts>
  </>
  )
}