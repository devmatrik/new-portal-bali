import React from 'react'
// import Script from 'next/script'
import Link from 'next/link'
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

        {/* <!-- Start Preloader --> */}
        {/* <div class="preloader">
            <div class="loader">
                <div class="wrapper">
                    <div class="circle circle-1"></div>
                    <div class="circle circle-1a"></div>
                    <div class="circle circle-2"></div>
                    <div class="circle circle-3"></div>
                </div>
                <span>Loading...</span>
            </div>
        </div> */}
        {/* <!-- End Preloader --> */}

        <section className="main-news-area">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <h2><Image className="p-2" src="/images/wisataAlam.svg" width={50} height={50} alt="" /> Explore Bali</h2>
                {/* <h5 style={{ color: "#ffff", fontWeight: 300, opacity: "80%" }}>Rekomendasi Wisata Alam di Bali</h5> */}
              </div>
              <div className="col-lg-9">
                <Carousel>
                  <Carousel.Item>
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
                              <Link href="/Wisata/wisataAlam">Wisata Alam</Link>
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
                              <Link href="/Wisata/wisataKuliner">Wisata Kuliner</Link>
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
                              <Link href="/Wisata/kulinerTradisional">Kuliner Tradisional</Link>
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
                            <Link href="/Wisata/wisataAdat">
                              <Image src="/images/_adat & budaya.png" width={550} height={550} alt="image" />
                            </Link>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}>
                              <Link href="/Wisata/wisataAdat">Adat & Budaya</Link>                            
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
                              <Link href="/Wisata/tempatRekreasi">Tempat Rekreasi</Link>
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
                              <Link href="/Wisata/olehOlehKhas">Oleh- Oleh Khas</Link>
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
                            <Link href="/PublicService/travelAgensi">
                              <Image src="/images/_travel.png" width={550} height={550} alt="image" />
                            </Link>
                          </div>
                          <div className="content">
                            <h3 style={{ fontSize: 14 }}>
                              <Link href="/PublicService/travelAgensi">Travel Agensi</Link>
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
                              <Link href="/PublicService/Penginapan">Penginapan</Link>
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
                              <Link href="/PublicService/lokasiPelayananPublic">Pelayanan Publik</Link>
                            </h3>
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
                        <h4 className="title usmall"><Link href="/DetailNews">Negotiations on a peace agreement between the two countries</Link></h4>
                        <span>28 September, 2022</span>
                      </div>
                    </article>
                    <article className="item">
                      <a href="#" className="thumb">
                        <span className="fullimage cover bg2" role="img"></span>
                      </a>
                      <div className="info">
                        <h4 className="title usmall"><Link href="/DetailNews">Love songs helped me through heartbreak</Link></h4>
                        <span>28 September, 2022</span>
                      </div>
                    </article>
                    <article className="item">
                      <a href="#" className="thumb">
                        <span className="fullimage cover bg3" role="img"></span>
                      </a>
                      <div className="info">
                        <h4 className="title usmall"><Link href="/DetailNews">This movement aims to establish women rights</Link></h4>
                        <span>28 September, 2022</span>
                      </div>
                    </article>
                  </section>
                </aside>
              </div>
            </div>
            <div className="row">
              <div className="section-title">
                <h2><Image className="p-2" src="/images/News.png" width={50} height={50} alt="" /> Latest News</h2>
                {/* <h5 style={{ color: "#ffff", fontWeight: 300, opacity: "80%" }}>Rekomendasi Wisata Alam di Bali</h5> */}
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
                    <h3 className="widget-title"><Image src="/images/News.png" width={40} height={40} alt="image" /> G20</h3>
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

