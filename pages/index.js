import React from 'react'
// import Script from 'next/script'
import Image from 'next/image'
import {
  BaseLayouts
} from '../components/MainCode/MainImport'

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
            <div className="col-lg-8">
              <div className="single-main-news" style={{ borderRadius: 10 }}>
                <a href="detail.html">
                  <img src="/images/main-news/main-news-1.jpg" alt="image" />
                </a>
                <div className="news-content">
                  {/* <div class="tag">National</div> */}
                  <h3>
                    <a href="detail.html">
                      Smart City Bali, Teknologi apa yang dipakai disana?
                    </a>
                  </h3>
                  <span>
                    <a href="detail.html">Walters</a> / 28 September, 2022
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="single-main-news-inner mb-4"
                style={{ borderRadius: 8 }}
              >
                <a href="detail.html">
                  <img src="/images/main-news/main-news-2.jpg" alt="image" />
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
                  {/* <div class="tag">National</div> */}
                  <h3 style={{ fontSize: 20 }}>
                    <a href="detail.html">Smart City Bali</a>
                  </h3>
                  <span>28 September, 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Main News Area */}
      {/* Start Team Area */}
      <section className="team-area pt-30">
        <div className="container">
          <div className="section-title">
            <h2>Explore Bali</h2>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-2">
              <div className="single-team-box">
                <div className="image">
                  <a href="wisata-alam.html">
                    <img src="/images/team/team-2.jpg" alt="image" />
                  </a>
                </div>
                <div className="content">
                  <h3 style={{ fontSize: 14 }}>
                    <a href="wisata-alam.html">Wisata Alam</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="single-team-box">
                <div className="image">
                  <a href="wisata-kuliner.html">
                    <img src="/images/team/team-2.jpg" alt="image" />
                  </a>
                </div>
                <div className="content">
                  <h3 style={{ fontSize: 14 }}>
                    <a href="wisata-kuliner.html">Kuliner Tradisional</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="single-team-box">
                <div className="image">
                  <a href="wisata-adat.html">
                    <img src="/images/team/team-2.jpg" alt="image" />
                  </a>
                </div>
                <div className="content">
                  <h3 style={{ fontSize: 14 }}>
                    <a href="wisata-adat.html">Adat &amp; Budaya</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="single-team-box">
                <div className="image">
                  <a href="rekreasi.html">
                    <img src="/images/team/team-2.jpg" alt="image" />
                  </a>
                </div>
                <div className="content">
                  <h3 style={{ fontSize: 14 }}>
                    <a href="rekreasi.html">Tempat Rekreasi</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="single-team-box">
                <div className="image">
                  <a href="oleh-oleh.html">
                    <img src="/images/team/team-2.jpg" alt="image" />
                  </a>
                </div>
                <div className="content">
                  <h3 style={{ fontSize: 14 }}>
                    <a href="oleh-oleh.html">Oleh- Oleh Khas</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="single-team-box">
                <div className="image">
                  <a href="travel-agensi.html">
                    <img src="/images/team/team-2.jpg" alt="image" />
                  </a>
                </div>
                <div className="content">
                  <h3 style={{ fontSize: 14 }}>
                    <a href="travel-agensi.html">Travel Agensi</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="single-team-box">
                <div className="image">
                  <a href="penginapan.html">
                    <img src="/images/team/team-2.jpg" alt="image" />
                  </a>
                </div>
                <div className="content">
                  <h3 style={{ fontSize: 14 }}>
                    <a href="penginapan.html">Penginapan</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="single-team-box">
                <div className="image">
                  <a href="pelayanan-publik.html">
                    <img src="/images/team/team-2.jpg" alt="image" />
                  </a>
                </div>
                <div className="content">
                  <h3 style={{ fontSize: 14 }}>
                    <a href="pelayanan-publik.html">Pelayanan Publik</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Team Area */}
      {/* Start Default News Area */}
      <section className="default-news-area">
        <div className="container">
          <div className="politics-news">
            <div className="section-title">
              <h2>Upcoming Events</h2>
            </div>
            <div className="row">
              <div className="main-news-slides owl-carousel owl-theme">
                <div className="news-slider-item" style={{ borderRadius: 10 }}>
                  <a href="#">
                    <img
                      src="/images/main-news-slider/main-news-slider-1.jpg"
                      alt="image"
                    />
                  </a>
                  <div className="slider-content">
                    <div className="tag">National</div>
                    <h3 style={{ fontSize: 24 }}>
                      <a href="#">Bali Experience 2022</a>
                    </h3>
                    <span>
                      <a href="">Seminyak</a> / 27 Oct - 7 Nov, 2022
                    </span>
                  </div>
                </div>
                <div className="news-slider-item" style={{ borderRadius: 10 }}>
                  <a href="#">
                    <img
                      src="/images/main-news-slider/main-news-slider-2.jpg"
                      alt="image"
                    />
                  </a>
                  <div className="slider-content">
                    <div className="tag">International</div>
                    <h3 style={{ fontSize: 24 }}>
                      <a href="#">
                        International Conference on Science, Engineering &amp;
                        Technology
                      </a>
                    </h3>
                    <span>
                      <a href="">Seminyak</a> / 27 Oct, 2022
                    </span>
                  </div>
                </div>
                <div className="news-slider-item" style={{ borderRadius: 10 }}>
                  <a href="#">
                    <img
                      src="/images/main-news-slider/main-news-slider-3.jpg"
                      alt="image"
                    />
                  </a>
                  <div className="slider-content">
                    <div className="tag">International</div>
                    <h3 style={{ fontSize: 24 }}>
                      <a href="#">
                        G20 Summit, Bali — Centre for Disaster Protection
                      </a>
                    </h3>
                    <span>
                      <a href="">Bali</a> / 27 Oct - 7 Nov, 2022
                    </span>
                  </div>
                </div>
                <div className="news-slider-item" style={{ borderRadius: 10 }}>
                  <a href="#">
                    <img
                      src="/images/main-news-slider/main-news-slider-3.jpg"
                      alt="image"
                    />
                  </a>
                  <div className="slider-content">
                    <div className="tag">National</div>
                    <h3 style={{ fontSize: 24 }}>
                      <a href="#">Da Maria Inno Hallowen Edition</a>
                    </h3>
                    <span>
                      <a href="">Da Maria</a> / 27 Oct - 7 Nov, 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="health-news ptb-50">
              <div className="section-title">
                <h2>Public Transportaion Route</h2>
              </div>
              <div className="about-image" style={{ borderRadius: 8 }}>
                <img src="/images/about.jpg" alt="image" />
              </div>
            </div>
            <div className="tech-news pb-50">
              <div className="section-title">
                <h2>Blog</h2>
              </div>
              <div className="row">
                <div className="col-lg-3 col-sm-3">
                  <div className="single-tech-news-box" style={{ borderRadius: 8 }}>
                    <a href="detail.html">
                      <img src="/images/tech-news/tech-news-1.jpg" alt="image" />
                    </a>
                    <div className="tech-news-content">
                      <h3>
                        <a href="detail.html">10 Wisata Terindah di Bali</a>
                      </h3>
                      <p>28 September, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-3">
                  <div className="single-tech-news-box" style={{ borderRadius: 8 }}>
                    <a href="detail.html">
                      <img src="/images/tech-news/tech-news-2.jpg" alt="image" />
                    </a>
                    <div className="tech-news-content">
                      <h3>
                        <a href="detail.html">
                          Rekomendasi Kuliner Khas Bali yang Wajib Anda Coba
                        </a>
                      </h3>
                      <p>28 September, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-3">
                  <div className="single-tech-news-box" style={{ borderRadius: 8 }}>
                    <a href="detail.html">
                      <img src="/images/tech-news/tech-news-3.jpg" alt="image" />
                    </a>
                    <div className="tech-news-content">
                      <h3>
                        <a href="detail.html">
                          11 Hotel dengan Desain Unik di Bali
                        </a>
                      </h3>
                      <p>28 September, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-3">
                  <div className="single-tech-news-box" style={{ borderRadius: 8 }}>
                    <a href="detail.html">
                      <img src="/images/tech-news/tech-news-3.jpg" alt="image" />
                    </a>
                    <div className="tech-news-content">
                      <h3>
                        <a href="detail.html">
                          5 Wisata Desa Adat di Bali, Kaya Sejarah dan Budaya
                        </a>
                      </h3>
                      <p>28 September, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Default News Area */}
      {/* Start Copy Right Area */}
      
      {/* End Copy Right Area */}
      {/* Start Go Top Area */}
      <div className="go-top">
        <i className="bx bx-up-arrow-alt" />
      </div>
    </BaseLayouts>    
  </>

  )
}

