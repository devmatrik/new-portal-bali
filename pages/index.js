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
    <section className="main-news-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="single-main-news" style={{ borderRadius: 10 }}>
                    <a href="detail.html">
                      <Image src="/img/main-news/main-news-1.jpg" width={100} height={100} alt="image" />
                    </a>
                    <div className="news-content">
                      
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
                      {/* <img src="img/main-news/main-news-2.jpg" alt="image" /> */}
                    </a>
                    <div className="news-content">
                      
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
                      {/* <img src="img/main-news/main-news-2.jpg" alt="image" /> */}
                    </a>
                    <div className="news-content">
                      
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
    </BaseLayouts>    
  </>

  )
}

