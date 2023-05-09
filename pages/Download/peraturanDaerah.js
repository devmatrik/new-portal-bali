import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { BaseLayouts } from '../../components/MainCode/MainImport'
import {
  SelectJenisBerita,
  StorageApi
} from '../../components/MainCode/MainImport'
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
    LinkApi: "sm_portal/perda",
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
    <BaseLayouts>
      {/* <!-- Start News Details Area --> */}
      <section className="news-details-area ptb-50">
        <div className="container">
                      <div className="row">
                            <div className="col-lg-8 col-md-12 mt-0">
                                <div className="blog-details-desc">
                                    <div className="article-content mt-0">
                                        <h3>Peraturan Daerah</h3>
                                        <div className="article-image">
                                          {/* {event.map((item, index) => ( */}
                                          <div className='container'>
                                            <iframe src="https://docs.google.com/gview?url=https://path.com/to/your/pdf.pdf&embedded=true" style={{width: "650px", height: "500px"}} frameborder="0"></iframe>
                                          </div>
                                          {/* <span>{moment(item.tgl_event).format("DD MMMM, YYYY ")}- {moment(item.tgl_berakhir).format("DD MMMM, YYYY ")}</span> */}
                                          {/* ))} */}
                                        </div> <br />
                                        <embed src="study/sample.pdf" type="application/pdf" height="300px" width="100%" class="responsive" />
                                        <a href="study/sample.pdf">Download</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <aside class="widget-area contactprof">

                                    <section class="widget widget_latest_news_thumb">
                                        <h3 class="widget-title">Wilayah Provinsi Bali</h3>

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
                                            </div>
                                        </div>
                                    </section>
                                </aside>
                            </div>
                        </div>
                  </div>           
      </section>
      {/* <!-- Start News Details Area --> */}        
    </BaseLayouts>
  </>
  )
}