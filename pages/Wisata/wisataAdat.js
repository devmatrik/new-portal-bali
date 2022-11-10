import React from 'react'
import Image from 'next/image'
import BaseLayouts from '../../components/MainCode/BaseLayouts'
import Carousel from 'react-bootstrap/Carousel';

export default function wisataAdat() {
  return (
    <>
      <BaseLayouts>
        {/* Jumbotron */}
        {/* <div
          className="bg-image p-5"
          style={{
            backgroundImage: 'url("/images/banner-adat&budaya.png")',
            height: 200
          }}
        >
          <h2 style={{ color: "#ffff" }}>Wisata Adat</h2>
          <h5 style={{ color: "#ffff", fontWeight: 300, opacity: "80%" }}>
            Rekomendasi Wisata Adat di Bali
          </h5>
        </div> */}
        {/* End Jumbotron */}
        {/* Start Default News Area */}
        <section className="default-news-area">
          <div className="container">
            <div className="tech-news ptb-50">
            <div class="section-title"> 
              <h2>Wisata Adat & Budaya</h2>
              <h5 style={{ color: "#ffff", fontWeight: 300, opacity: "80%" }}>Rekomendasi Wisata Adat & Budaya di Bali</h5>
            </div>
            <Carousel>
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-3 col-sm-3 ">
                    <div className="single-tech-news-box" style={{ borderRadius: 10 }}>
                      <a href="detail-wisata.html">
                        <img src="/images/tech-news/tech-news-1.jpg" alt="image" />
                      </a>
                      <div className="tech-news-content">
                        <h3>
                          <a href="detail-wisata.html">10 Wisata Terindah di Bali</a>
                        </h3>
                        <p>28 September, 2022</p>
                      </div>
                    </div>
                  </div>
                
                  <div className="col-lg-3 col-sm-3">
                    <div className="single-tech-news-box" style={{ borderRadius: 10 }}>
                      <a href="detail-wisata.html">
                        <img src="/images/tech-news/tech-news-2.jpg" alt="image" />
                      </a>
                      <div className="tech-news-content">
                        <h3>
                          <a href="detail-wisata.html">
                            Rekomendasi Kuliner Khas Bali yang Wajib Anda Coba
                          </a>
                        </h3>
                        <p>28 September, 2022</p>
                      </div>
                    </div>
                  </div>
                
                  <div className="col-lg-3 col-sm-3">
                    <div className="single-tech-news-box" style={{ borderRadius: 10 }}>
                      <a href="detail-wisata.html">
                        <img src="/images/tech-news/tech-news-3.jpg" alt="image" />
                      </a>
                      <div className="tech-news-content">
                        <h3>
                          <a href="detail-wisata.html">
                            11 Hotel dengan Desain Unik di Bali
                          </a>
                        </h3>
                        <p>28 September, 2022</p>
                      </div>
                    </div>
                  </div>
                
                  <div className="col-lg-3 col-sm-3">
                    <div className="single-tech-news-box" style={{ borderRadius: 10 }}>
                      <a href="detail-wisata.html">
                        <img src="/images/tech-news/tech-news-3.jpg" alt="image" />
                      </a>
                      <div className="tech-news-content">
                        <h3>
                          <a href="detail-wisata.html">
                            5 Wisata Desa Adat di Bali, Kaya Sejarah dan Budaya
                          </a>
                        </h3>
                        <p>28 September, 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-3 col-sm-3 ">
                    <div className="single-tech-news-box" style={{ borderRadius: 10 }}>
                      <a href="detail-wisata.html">
                        <img src="/images/tech-news/tech-news-1.jpg" alt="image" />
                      </a>
                      <div className="tech-news-content">
                        <h3>
                          <a href="detail-wisata.html">10 Wisata Terindah di Bali</a>
                        </h3>
                        <p>28 September, 2022</p>
                      </div>
                    </div>
                  </div>
                
                  <div className="col-lg-3 col-sm-3">
                    <div className="single-tech-news-box" style={{ borderRadius: 10 }}>
                      <a href="detail-wisata.html">
                        <img src="/images/tech-news/tech-news-2.jpg" alt="image" />
                      </a>
                      <div className="tech-news-content">
                        <h3>
                          <a href="detail-wisata.html">
                            Rekomendasi Kuliner Khas Bali yang Wajib Anda Coba
                          </a>
                        </h3>
                        <p>28 September, 2022</p>
                      </div>
                    </div>
                  </div>
                
                  <div className="col-lg-3 col-sm-3">
                    <div className="single-tech-news-box" style={{ borderRadius: 10 }}>
                      <a href="detail-wisata.html">
                        <img src="/images/tech-news/tech-news-3.jpg" alt="image" />
                      </a>
                      <div className="tech-news-content">
                        <h3>
                          <a href="detail-wisata.html">
                            11 Hotel dengan Desain Unik di Bali
                          </a>
                        </h3>
                        <p>28 September, 2022</p>
                      </div>
                    </div>
                  </div>
                
                  <div className="col-lg-3 col-sm-3">
                    <div className="single-tech-news-box" style={{ borderRadius: 10 }}>
                      <a href="detail-wisata.html">
                        <img src="/images/tech-news/tech-news-3.jpg" alt="image" />
                      </a>
                      <div className="tech-news-content">
                        <h3>
                          <a href="detail-wisata.html">
                            5 Wisata Desa Adat di Bali, Kaya Sejarah dan Budaya
                          </a>
                        </h3>
                        <p>28 September, 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
            </div>
          </div>
        </section>
        {/* End Default News Area */}
      </BaseLayouts>
    </>
  )
}