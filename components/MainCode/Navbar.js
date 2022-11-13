// import { Button, Avatar } from 'antd';
// import { StorageApi } from "../MainCode/MainImport"
// import { Disclosure } from '@headlessui/react';
// import { getCsrfToken, useSession, signIn, signOut, getSession } from "next-auth/react"
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useSession, getSession } from "next-auth/react"
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  StorageApi
} from '../MainCode/MainImport'

const menuaktif = "nav-link active";
const menunonaktif = "nav-link";
export default function Navbar(props) {

  const showdate = new Date();
  const displaytodaysdate = showdate.getFullYear() + ' ' + (showdate.getMonth() + 1) + ' ' + showdate.getDate();
  const dt = showdate.toDateString();
  
  // const displaytime = showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds();

  const router = useRouter();
  const [openmenu, setOpenmenu] = useState([])
  const [aktif, setaktif] = useState(false)
  const [actionmenu, setActionMenu] = useState('')
  const [menuparent, setMenuParent] = useState([])
  const [menusubparent, setMenuSubParent] = useState([])
  const [loading, setLoading] = useState(false)
  const [brandcumb, setBrandChumb] = useState([]);
  const [subbrandcumb, setSubBrandChumb] = useState([]);
  const { data: session, status } = useSession()
  const link_akses = router.asPath.split('/')
  const link_aktif = link_akses[link_akses.length - 1]

  useEffect(() => {
    Menubrandchumb()
    // cfrToken()
    // redirect();
  }, [loading])


  const Menubrandchumb = () => {
    Promise.resolve(StorageApi.getData("sm_hrm/page_group?kode_sub_unit=SM_PORTAL_USER"))
      .then(value => {
        const detail = value.data.data
        setBrandChumb(detail)
        var subbrandcumb = []
        detail.map(item => {
          if (item.level == 2) {
            subbrandcumb.push({
              id: item.rowid,
              icon: item.icon,
              link: item.link,
              level: item.link,
              page: item.page,
              parent_menu: item.parent_menu
            })
          }
        })
        setSubBrandChumb(subbrandcumb)
      }).catch(error => {
        console.log(error);
      })
  }

  const subMenuOnMouseDown = (subMenuId) => {
    setOpenmenu((prev) => {
      let arr = [...prev]
      arr[subMenuId] = true
      return arr
    })
  }
  const subMenuOnMouseEnter = (subMenuId) => {
    setOpenmenu((prev) => {
      let arr = [...prev]
      arr[subMenuId] = false
      return arr
    })
  }

  return (
    <>
      <section id="main">
        {/* <!-- Start Top Header Area --> */}
        <div className="top-header-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <ul className="top-header-social">
                  <li>
                    <i className='bx bx-calendar'></i>
                    <a href="#">Call Center :<strong> 007</strong></a>
                  </li>
                  <li>
                    <i className='bx bx-calendar'></i>
                    <a href="#">{dt}</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul className="top-header-others">
                  {/* <li>
                                  <div className="languages-list">
                                      <select>
                                          <option value="1">English</option>
                                          <option value="2">العربيّة</option>
                                          <option value="3">Deutsch</option>
                                          <option value="3">Português</option>
                                          <option value="3">简体中文</option>
                                      </select>
                                  </div>
                              </li> */}

                  <li>
                    <i className='bx bx-user'></i>
                    <Link href="/Login">Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Top Header Area --> */}
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
                {/* <li className="nav-item">
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li> */}
                {brandcumb.map(item => {
                  if (item.level == 1 && item.link != "") {
                    return (
                      <>
                        <li className="nav-item">
                            <Link className="nav-link" href={`/${item.link}`}>
                               {item.page}
                              {/* <a className="nav-link">
                              </a> */}
                            </Link>
                        </li>
                      </>
                    )
                  }

                  if (item.link == "") {
                    var no = item.rowid;
                    return (
                      <div onMouseLeave={() => subMenuOnMouseDown(item.rowid)} onMouseEnter={() => subMenuOnMouseEnter(item.rowid)}>
                        <div className="items-center" >
                          {/* <div className={`nav-link`}>
                            {item.page}
                          </div> */}
                          <li className="nav-item">
                            <a href="" className="nav-link ">
                              {item.page}
                              <i className="bx bx-chevron-down" />
                            </a>
                            <ul className={`${openmenu[item.rowid] == false ? "dropdown-menu" : ""} `}>
                            {openmenu[item.rowid] == false && subbrandcumb.map(item => {
                              if (no == item.parent_menu) {
                                return (
                                  <>
                                  <li>
                                    <Link href={`/${item.link}`} >
                                          {item.page}
                                    </Link>
                                  </li>
                                    
                                  </>
                                )
                              }
                            })}
                          </ul>
                          </li>
                          
                          
                        </div>
                      </div>
                    )
                  }
                })}
              </ul>
                  
                {/* <ul className="navbar-nav">
                  
                 
                 {brandcumb.map(item => {
                  debugger
                  if (item.link ="") {
                    return (
                      <>
                      <li className="nav-item">
                        <Link className="nav-link active" href={`/${item.link}`} key={item.rowid}>
                          {item.page}
                        </Link>
                      </li>
                      </>
                      
                    )
                  }
                  })}
                  </ul> */}
                </div>
              </nav>
            </div>
          </div>
                  
{/*                     
                    // <li className="nav-item">
                    //   <a href="#" className="nav-link ">
                    //     Wisata
                    //     <i className="bx bx-chevron-down" />
                    //   </a>
                    //   <ul className="dropdown-menu">
                    //     <li className="nav-item ">
                    //       <Link className="nav-link" href="/Wisata/wisataAlam">
                    //         Wisata Alam
                    //       </Link>
                    //     </li>
                    //     <li className="nav-item">
                    //       <Link href="/Wisata/wisataKuliner" className="nav-link">
                    //         Wisata Kuliner
                    //       </Link>
                    //     </li>
                    //     <li className="nav-item">
                    //       <Link href="/Wisata/kulinerTradisional" className="nav-link">
                    //         Kuliner Tradisional
                    //       </Link>
                    //     </li>
                    //     <li className="nav-item">
                    //       <Link href="/Wisata/wisataAdat" className="nav-link">
                    //         Adat &amp; Budaya
                    //       </Link>
                    //     </li>
                    //     <li className="nav-item">
                    //       <Link href="/Wisata/tempatRekreasi" className="nav-link">
                    //         Tempat Rekreasi
                    //       </Link>
                    //     </li>
                    //     <li className="nav-item">
                    //       <Link href="/Wisata/olehOlehKhas" className="nav-link">
                    //         Oleh - Oleh Khas
                    //       </Link>
                    //     </li>
                    //   </ul>
                    // </li>
                    // <li className="nav-item">
                    //   <a href="#" className="nav-link">
                    //     Public Service
                    //     <i className="bx bx-chevron-down" />
                    //   </a>
                    //   <ul className="dropdown-menu">
                    //     <li className="nav-item">
                    //       <Link href="/PublicService/Penginapan" className="nav-link">
                    //         Penginapan
                    //       </Link>
                    //     </li>
                    //     <li className="nav-item">
                    //       <Link href="/PublicService/travelAgensi" className="nav-link">
                    //         Travel Agensi
                    //       </Link>
                    //     </li>
                    //     <li className="nav-item">
                    //       <Link href="/PublicService/lokasiPelayananPublic" className="nav-link">
                    //         Lokasi Pelayanan Publik
                    //       </Link>
                    //     </li>
                    //     <hr style={{ backgroundColor: "#a0a0a0" }} />
                    //     <li className="nav-item">
                    //       <Link href="/PublicService/eLapor" className="nav-link">
                    //         E-Lapor
                    //       </Link>
                    //     </li>
                    //     <li className="nav-item">
                    //       <Link href="/PublicService/eService" className="nav-link">
                    //         E-Service
                    //       </Link>
                    //     </li>
                    //   </ul>
                    // </li>
                    // <li className="nav-item">
                    //   <Link href="/Event" className="nav-link">
                    //     Event
                    //   </Link>
                    // </li>
                    // <li className="nav-item">
                    //   <Link href="/Traffict" className="nav-link">
                    //     Traffic
                    //   </Link>
                    // </li>
                    // <li className="nav-item">
                    //   <Link href="/News" className="nav-link">
                    //     News
                    //   </Link>
                    // </li>
                    // <li className="nav-item">
                    //   <a href="#" className="nav-link">
                    //     Infographic
                    //     <i className="bx bx-chevron-down" />
                    //   </a>
                    //   <ul className="dropdown-menu">
                    //     <li className="nav-item">
                    //       <Link href="/Infographic/weeklyTraffictReport" className="nav-link">
                    //         Weekly Traffic Report
                    //       </Link>
                    //     </li>
                    //     <li className="nav-item">
                    //       <Link href="/Infographic/montlyTraffictReport" className="nav-link">
                    //         Monthly Traffic Report
                    //       </Link>
                    //     </li>
                    //   </ul>
                    // </li>
                    // <li className="nav-item">
                    //   <a href="#" className="nav-link">
                    //     Gallery
                    //     <i className="bx bx-chevron-down" />
                    //   </a>
                    //   <ul className="dropdown-menu">
                    //     <li className="nav-item">
                    //       <Link href="/Gallery/fotoKegiatan" className="nav-link">
                    //         Foto Kegiatan
                    //       </Link>
                    //     </li>
                    //   </ul>
                    // </li>
                    // <li className="nav-item">
                    //   <Link href="/transportationRoute" className="nav-link">
                    //     Transportation Route
                    //   </Link>
                    // </li>
                    // <li className="nav-item">
                    //   <Link href="/Contact" className="nav-link">
                    //     Contact
                    //   </Link>
                    // </li>
                    // <li className="nav-item">
                    //   <a href="#" className="nav-link">
                    //     Download
                    //     <i className="bx bx-chevron-down" />
                    //   </a>
                    //   <ul className="dropdown-menu">
                    //     <li className="nav-item">
                    //       <Link href="/Download/peraturanDaerah" className="nav-link">
                    //         Peraturan Daerah
                    //       </Link>
                    //     </li>
                    //     <li className="nav-item">
                    //       <Link href="/Download/perUndangUndangan" className="nav-link">
                    //         Perundang - Undangan
                    //       </Link>
                    //     </li>
                    //   </ul>
                    // </li> */}

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