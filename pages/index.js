import React from 'react'
// import Script from 'next/script'
import Image from 'next/image'
import {
  BaseLayouts
} from '../components/MainCode/MainImport'
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {
  const konten = {
    title: "Portal",
    // LinkApi: "algors/periode_keamanan",
  }
  return (
    <>
      <BaseLayouts title={konten.title}>
        <section className="main-news-area ">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <Carousel>
                  <Carousel.Item>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="single-team-box">
                          <div className="image">
                            <a href="wisata-alam.html">
                              <img src="/images/_wisata-alam.png" alt="image" />
                            </a>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}>
                              <a href="wisata-alam.html">Wisata Alam</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-team-box">
                          <div className="image">
                            <a href="wisata-kuliner.html">
                              <img src="/images/_wisata-kuliner.png" alt="image" />
                            </a>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}>
                              <a href="wisata-kuliner.html">Wisata Kuliner</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-team-box">
                          <div className="image">
                            <a href="wisata-kuliner.html">
                              <img src="/images/_kuliner-tradisional.png" alt="image" />
                            </a>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}>
                              <a href="wisata-kuliner.html">Kuliner Tradisional</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="single-team-box">
                          <div className="image">
                            <a href="wisata-adat.html">
                              <img src="/images/_adat & budaya.png" alt="image" />
                            </a>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}>
                              <a href="wisata-adat.html">Adat & Budaya</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-team-box">
                          <div className="image">
                            <a href="rekreasi.html">
                              <img src="/images/_rekreasi.png" alt="image" />
                            </a>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}>
                              <a href="rekreasi.html">Tempat Rekreasi</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-team-box">
                          <div className="image">
                            <a href="oleh-oleh.html">
                              <img src="/images/_oleholeh.png" alt="image" />
                            </a>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}><a href="oleh-oleh.html">Oleh- Oleh Khas</a></h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="single-team-box">
                          <div className="image">
                            <a href="travel-agensi.html">
                              <img src="/images/_travel.png" alt="image" />
                            </a>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}><a href="travel-agensi.html">Travel Agensi</a></h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-team-box">
                          <div className="image">
                            <a href="penginapan.html">
                              <img src="/images/_penginapan.png" alt="image" />
                            </a>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}><a href="penginapan.html">Penginapan</a></h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-team-box">
                          <div className="image">
                            <a href="pelayanan-publik.html">
                              <img src="/images/_public.png" alt="image" />
                            </a>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}><a href="pelayanan-publik.html">Pelayanan Publik</a></h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="col-lg-3">
                <aside className="widget-area">
                  <section className="widget widget_latest_news_thumb">
                    <h3 className="widget-title"><Image src="/images/Event.png" width={30} height={30} alt="image" /> New Event</h3>
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
                  </section>
                </aside>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div
                  className="single-main-news-inner mb-4"
                  style={{ borderRadius: 8 }}
                >
                  <a href="detail.html">
                    <img src="/images/jepun.jpg" alt="image" />
                  </a>
                  <div className="news-content">
                    {/* <div class="tag">National</div> */}
                    <h3 style={{ fontSize: 20 }}>
                      <a href="detail.html">
                        Jepun Bali, Jaringan Elektronik Policing untuk Bali
                      </a>
                    </h3>
                    <span>28 September, 2022</span>
                  </div>
                </div>
                <div
                  className="single-main-news-inner mb-5"
                  style={{ borderRadius: 8 }}
                >
                  <a href="detail.html">
                    <img src="/images/main-news/main-news-2.jpg" alt="image" />
                  </a>
                  <div className="news-content">
                    <h3 style={{ fontSize: 20 }}>
                      <a href="detail.html">Smart City Bali</a>
                    </h3>
                    <span>28 September, 2022</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="single-main-news-inner mb-4"
                  style={{ borderRadius: 8 }}
                >
                  <a href="detail.html">
                    <img src="/images/jepun.png" alt="image" />
                  </a>
                  <div className="news-content">
                    {/* <div class="tag">National</div> */}
                    <h3 style={{ fontSize: 20 }}>
                      <a href="detail.html">
                        Jepun Bali, Jaringan Elektronik Policing untuk Bali
                      </a>
                    </h3>
                    <span>28 September, 2022</span>
                  </div>
                </div>
                <div
                  className="single-main-news-inner mb-5"
                  style={{ borderRadius: 8 }}
                >
                  <a href="detail.html">
                    <img src="/images/main-news/main-news-2.jpg" alt="image" />
                  </a>
                  <div className="news-content">
                    <h3 style={{ fontSize: 20 }}>
                      <a href="detail.html">Smart City Bali</a>
                    </h3>
                    <span>28 September, 2022</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="single-main-news-inner mb-4"
                  style={{ borderRadius: 8 }}
                >
                  <a href="detail.html">
                    <img src="/images/jepun.png" alt="image" />
                  </a>
                  <div className="news-content">
                    {/* <div class="tag">National</div> */}
                    <h3 style={{ fontSize: 20 }}>
                      <a href="detail.html">
                        Jepun Bali, Jaringan Elektronik Policing untuk Bali
                      </a>
                    </h3>
                    <span>28 September, 2022</span>
                  </div>
                </div>
                <div
                  className="single-main-news-inner mb-5"
                  style={{ borderRadius: 8 }}
                >
                  <a href="detail.html">
                    <img src="/images/main-news/main-news-2.jpg" alt="image" />
                  </a>
                  <div className="news-content">
                    <h3 style={{ fontSize: 20 }}>
                      <a href="detail.html">Smart City Bali</a>
                    </h3>
                    <span>28 September, 2022</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <aside className="widget-area">
                  <section className="widget widget_latest_news_thumb">
                    <h3 className="widget-title"><Image src="/images/Event.png" width={30} height={30} alt="image" />Popular News</h3>
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

