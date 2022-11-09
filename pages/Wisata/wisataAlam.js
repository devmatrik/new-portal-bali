import React from 'react'
import Image from 'next/image'
import BaseLayouts from '../../components/MainCode/BaseLayouts'

function wisataAlam() {
  return (
    <>
    <BaseLayouts>
    {/* Jumbotron */}
    <div
      className="bg-image p-5"
      style={{
        backgroundImage: 'url("/images/banner-wisata-alam.png")',
        height: 200
      }}
    >
      <h2 style={{ color: "#ffff" }}>Wisata Alam</h2>
      <h5 style={{ color: "#ffff", fontWeight: 300, opacity: "50%" }}>
        Rekomendasi Wisata Alam di Bali
      </h5>
    </div>
    {/* Jumbotron */}
    {/* Start Default News Area */}
    <section className="default-news-area">
      <div className="container">
        <div className="tech-news ptb-50">
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
        </div>
      </div>
    </section>
    {/* End Default News Area */}
    {/* Start Footer Area */}
    {/* <section className="footer-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-3">
            <div className="single-footer-widget" style={{ borderRadius: 10 }}>
              <a href="#">
                <img src="/images/logo-new-footer-s.png" alt="image" />
              </a>
              <ul className="social mt-1">
                <p>Find us on social media :</p>
                <li>
                  <a href="#" className="facebook" target="_blank">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter" target="_blank">
                    <i className="bx bxl-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin" target="_blank">
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin" target="_blank">
                    <i className="bx bxl-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="single-footer-widget">
              <h2>Smart City Bali</h2>
              <ul className="useful-links-list">
                <li>
                  <a href="#">Smart Emergency</a>
                </li>
                <li>
                  <a href="#">Smart Management</a>
                </li>
                <li>
                  <a href="#">Smart Meeting</a>
                </li>
                <li>
                  <a href="#">Smart Room</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="single-footer-widget">
              <h2>Contact Us</h2>
              <ul className="useful-links-list">
                <li>
                  <a href="#">
                    <i className="bx bx-envelope" /> Email :
                    smartcitybali@mail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-phone-call" /> Call Center : 111
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-map" /> TMC Bali
                  </a>
                  <br />
                  <a>
                    Jl. Gunung Sanghyang No.110, Padangsambian, Kec. Denpasar
                    Bar., Kota Denpasar, Bali 80117
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* End Footer Area */}

    </BaseLayouts>
    </>
  )
}

export default wisataAlam