// import { Button, Avatar } from 'antd';
// import { StorageApi } from "../MainCode/MainImport"
// import { Disclosure } from '@headlessui/react';
// import { getCsrfToken, useSession, signIn, signOut, getSession } from "next-auth/react"
import { React } from "react";
// import styles from '/styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';


export default function Navbar(props) {
    return (
   <>
   <section id="main">
      {/* <nav>
        <div className="logo">
          <Image src="/images/logo2.png" width={110} height={110} alt="" />
        </div>
        
        <ul className="menu">
          <li className="nav-item">
            <a href="index.html" className="nav-link active">
              Home
            </a>
          </li>
          <li><a href="#next">Wisata</a></li>
          <li><a href="#">Public Service</a></li>
          <li><a href="#">Event</a></li>
          <li><a href="#">Traffic</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Infographic</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Transportation Route</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Download</a></li>
        </ul>
      </nav> */}
      <div className="navbar-area">
        <div className="main-responsive-nav">
          <div className="container">
            <div className="main-responsive-menu">
              <div className="logo">
                <a href="index.html">
                  
                  <Image
                  src="/images/logo2.png"
                  width={100}
                  height={100}
                  className="white-logo"
                  alt="image"
                />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main-navbar">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="index.html">
               
                <Image
                  src="/images/logo2.png"
                  width={100}
                  height={100}
                  className="white-logo"
                  alt="image"
                />
              </a>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="/localhost:3000" className="nav-link active">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link ">
                      Wisata
                      <i className="bx bx-chevron-down" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item ">
                        <Link className="nav-link" href="/Wisata/wisataAlam">
                            Wisata Alam
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a href="wisata-kuliner.html" className="nav-link">
                          Wisata Kuliner
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="kuliner-tradisional.html" className="nav-link">
                          Kuliner Tradisional
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="wisata-adat.html" className="nav-link">
                          Adat &amp; Budaya
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="rekreasi.html" className="nav-link">
                          Tempat Rekreasi
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="oleh-oleh.html" className="nav-link">
                          Oleh - Oleh Khas
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Public Service
                      <i className="bx bx-chevron-down" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="penginapan.html" className="nav-link">
                          Penginapan
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="travel-agensi.html" className="nav-link">
                          Travel Agensi
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pelayanan-publik.html" className="nav-link">
                          Lokasi Pelayanan Publik
                        </a>
                      </li>
                      <hr style={{ backgroundColor: "#a0a0a0" }} />
                      <li className="nav-item">
                        <a href="e-lapor.html" className="nav-link">
                          E-Lapor
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="e-service.html" className="nav-link">
                          E-Service
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="event.html" className="nav-link">
                      Event
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="traffic.html" className="nav-link">
                      Traffic
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="news.html" className="nav-link">
                      News
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Infographic
                      <i className="bx bx-chevron-down" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="weekly-report.html" className="nav-link">
                          Weekly Traffic Report
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="monthly-report.html" className="nav-link">
                          Monthly Traffic Report
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Gallery
                      <i className="bx bx-chevron-down" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="foto-kegiatan.html" className="nav-link">
                          Foto Kegiatan
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="transportation.html" className="nav-link">
                      Transportation Route
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Download
                      <i className="bx bx-chevron-down" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Peraturan Daerah
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Perundang- Undangan
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* s */}
              </div>
            </nav>
          </div>
        </div>
        <div className="others-option-for-responsive">
          <div className="container">
            <div className="dot-menu">
              <div className="inner">
                <div className="circle circle-one" />
                <div className="circle circle-two" />
                <div className="circle circle-three" />
              </div>
            </div>
            <div className="container">
              <div className="option-inner">
                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <form className="search-box">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search for.."
                      />
                      <button type="submit">
                        <i className="bx bx-search" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <video src="/images/video.mp4" muted autoPlay loop></video>
    </section>
    {props.children}
   
  {/* Start Navbar Area */}
  {/* <div className="navbar-area">
    <div className="main-responsive-nav">
      <div className="container">
        <div className="main-responsive-menu">
          <div className="logo">
            <a href="index.html">
              <Image
                src=""
                className="white-logo"
                width={100}
                height={100}
                alt="image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="main-navbar">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar">
          <a className="navbar-brand" href="index.html">
            <Image
          </a>
          <div
            className="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="index.html" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link ">
                  Wisata
                  <i className="bx bx-chevron-down" />
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item ">
                    <a href="wisata-alam.html" className="nav-link">
                      Wisata Alam
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="wisata-kuliner.html" className="nav-link">
                      Kuliner Tradisional
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="wisata-adat.html" className="nav-link">
                      Adat &amp; Budaya
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="rekreasi.html" className="nav-link">
                      Tempat Rekreasi
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="oleh-oleh.html" className="nav-link">
                      Oleh - Oleh Khas
                    </a>
                  </li>
                  <hr style={{ backgroundColor: "#a0a0a0" }} />
                  <li className="nav-item">
                    <a href="penginapan.html" className="nav-link">
                      Penginapan
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="travel-agensi.html" className="nav-link">
                      Travel Agensi
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pelayanan-publik.html" className="nav-link">
                      Pelayanan Publik
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="event.html" className="nav-link">
                  Event
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Public Service
                  <i className="bx bx-chevron-down" />
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a href="e-lapor.html" className="nav-link">
                      E-Lapor
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="e-service.html" className="nav-link">
                      E-Service
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="live-traffic.html" className="nav-link">
                  Live Traffic
                </a>
              </li>
              <li className="nav-item">
                <a href="transportation.html" className="nav-link">
                  Transportation Route
                </a>
              </li>
              <li className="nav-item">
                <a href="infographic.html" className="nav-link">
                  Infographic
                </a>
              </li>
              <li className="nav-item">
                <a href="gallery.html" className="nav-link">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
            
          </div>
        </nav>
      </div>
    </div>
    <div className="others-option-for-responsive">
      <div className="container">
        <div className="dot-menu">
          <div className="inner">
            <div className="circle circle-one" />
            <div className="circle circle-two" />
            <div className="circle circle-three" />
          </div>
        </div>
        <div className="container">
          <div className="option-inner">
            <div className="others-options d-flex align-items-center">
              <div className="option-item">
                <form className="search-box">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for.."
                  />
                  <button type="submit">
                    <i className="bx bx-search" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
   </>
  )
}