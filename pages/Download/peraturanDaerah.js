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

//   useEffect(() => {
//     getData();
//   }, [loading])

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

//   const getData = () => {
//     Promise.resolve(StorageApi.getData(`sm_portal/perda`))
//       .then(value => {
//         const data = value.data.data
//         setEvent(data)
//       }).catch(error => {
//         setEvent([])
//       })
//   }

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
                                  {/* <span><a href="#">Hunt</a> / 14 November 2022 /</span> */}
                                  <h5>Peraturan Daerah</h5>
                                  
                                {/* <div className="col-md-12">
                                  <FilterJenisBerita
                                    jenisBerita={
                                      <SelectJenisBerita onChange={(e) => setJenisBerita(e.value)} value={jenis_berita_id} placeholder="Pilih Peraturan Daerah" />
                                    } title={" "}
                                    filter={(e) => AllFilter()} reset={(e) => reset_elm()} />
                                </div>    */}
                                <div className="container events">
                                      {/* {event.map((item, index) => ( */}
                                          <div className="row mb-20" >
                                            <div className="col-lg-12 ">
                                                <div className="single-culture-news">
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-3">
                                                            <div className="culture-news-image">
                                                                <Link href="#">
                                                                    <img src="" style={{ height: "170px", width : "300px" }} alt="image" />
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-8">
                                                            <div className="culture-news-content mt-0">
                                                                <span>test</span>
                                                                <h3>
                                                                    <Link href="#">test</Link>
                                                                </h3>
                                                                {/* <p>{renderHTML(item.isi_konten.length > 150 ?
                                                                    `${item.isi_konten.substring(0, 150)}...` : item.isi_konten
                                                                  )}</p> */}
                                                                {/* <span><i className="bx bx-map"></i>The Blanco Renaissance Meuseum </span>  */}
                                                                {/* <span>{moment(item.tgl_event).format("DD MMMM, YYYY ")}- {moment(item.tgl_berakhir).format("DD MMMM, YYYY ")}</span> */}
                                                                <span>test</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                          </div>
                                    {/* ))} */}
                                </div>
                                <br />             
                                <div className="article-footer">
                                      <div className="article-share">

                                      </div>
                                </div>
                              </div>
                          </div>
                      </div>
                      {/* <!-- Start Contact Area --> */}
                      
                      {/* <!-- End Contact Area --> */}
                  </div>
              </section>
              {/* <!-- Start News Details Area --> */}
          </BaseLayouts>
  </>
  )
}