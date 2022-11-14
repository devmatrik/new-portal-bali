import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useSession, getSession } from "next-auth/react"
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  StorageApi
} from '../MainCode/MainImport'

export default function Navbar(props) {
    
  const menuaktif = "nav-link active";
  const menunonaktif = "nav-link";

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
        <div className="navbar-area">
          <div className="main-responsive-nav">
            <div className="container">
              <div className="main-responsive-menu">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/logo2.png"
                      width={100}
                      height={100}
                      className="white-logo"
                      alt="image"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="main-navbar">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link className="navbar-brand" href="/">
                  <Image
                    src="/images/logo2.png"
                    width={100}
                    height={100}
                    className="white-logo"
                    alt="image"
                  />
                </Link>
                <ul className="top-header-others">
                  <li>
                    <i className='bx bx-user'></i>
                    <Link href="/Login">Login</Link>
                  </li>
                </ul>
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
    </>
  )
}