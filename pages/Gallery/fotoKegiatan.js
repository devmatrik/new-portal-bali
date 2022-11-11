import React from 'react'
import Image from 'next/image'
import BaseLayouts from '../../components/MainCode/BaseLayouts'
import Carousel from 'react-bootstrap/Carousel';

export default function fotoKegiatan() {
  return (
    <>
        <BaseLayouts>
          <>
        {/* Start Team Area */}
      <section className="default-news-area">
        <div className="container">
          <div className="tech-news ptb-50">
            <div class="section-title"> 
              <h2>Foto Kegiatan</h2>
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
                        <a href="detail-wisata.html"></a>
                      </h3>
                      <p></p>
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
                          
                        </a>
                      </h3>
                      <p></p>
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
                          
                        </a>
                      </h3>
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
                          
                        </a>
                      </h3>
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
                     
                    </div>
                  </div>
                </div>
              
                <div className="col-lg-3 col-sm-3">
                  <div className="single-tech-news-box" style={{ borderRadius: 10 }}>
                    <a href="detail-wisata.html">
                      <img src="/images/tech-news/tech-news-2.jpg" alt="image" />
                    </a>
                    <div className="tech-news-content">
                     
                    </div>
                  </div>
                </div>
              
                <div className="col-lg-3 col-sm-3">
                  <div className="single-tech-news-box" style={{ borderRadius: 10 }}>
                    <a href="detail-wisata.html">
                      <img src="/images/tech-news/tech-news-3.jpg" alt="image" />
                    </a>
                    <div className="tech-news-content">
                     
                    </div>
                  </div>
                </div>
              
                <div className="col-lg-3 col-sm-3">
                  <div className="single-tech-news-box" style={{ borderRadius: 10 }}>
                    <a href="detail-wisata.html">
                      <img src="/images/tech-news/tech-news-3.jpg" alt="image" />
                    </a>
                    <div className="tech-news-content">
                     
                    </div>
                  </div>
                </div>
              </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
      </>

            
        </BaseLayouts>
    </>
  )
}