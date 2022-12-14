import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useSession, getSession, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  StorageApi,
  Notifikasi
} from '../MainCode/MainImport';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavbarH(props) {

  // const [show, setShow] = useState(false);
  //   function toggle() {
  //       setShow(!show);
  //   }
  // const [toogle, setToogle] = useState(false)

  const router = useRouter();
  const [openmenu, setOpenmenu] = useState([])
  const [loading, setLoading] = useState(false)
  const [brandcumb, setBrandChumb] = useState([]);
  const [subbrandcumb, setSubBrandChumb] = useState([]);
  const { data: session, status } = useSession()
  const link_akses = router.asPath.split('/')
  const link_aktif = link_akses[link_akses.length - 1]
  const [notif, setNotif] = useState(false);
  const [notif_body, setNotifBody] = useState("");

  const menuaktif = "nav-item active";
  const menunonaktif = "nav-item ";

  const submenuaktif = "nav-link active";
  const submenunonaktif = "nav-link ";

  // const [navActive, setNavActive] = useState(false);
  // const [activeIdx, setNavActiveIdx] = useState(0);

  useEffect(() => {
    Menubrandchumb()
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

  const Logout = async (e) => {
    await signOut({
      redirect: false
    });
    setNotif(true)
    setNotifBody("Anda berhasil logout")
    router.push('/');
  }

  return (
    <>
      <Notifikasi onClose={e => setNotif(!notif)} show={notif} body={notif_body} />
      {/* <section id="main"> */}
        <div className="navbar-area">
          <div className="main-responsive-nav">
            <div className="container">
              <div className="main-responsive-menu">
              <Navbar bg="light" expand="lg">
                <Container>
                  <Navbar.Brand href="/">
                    <Image
                      src="/images/logo2.png"
                      width={100}
                      height={100}
                      className="white-logo"
                      alt="image"
                    />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      {brandcumb.map(item => {
                        const page_count = item.link.split('/')
                        const page = page_count[page_count.length -1]
                        if (item.level == 1 && item.link != "") {
                          return (
                            <>
                              <li className={(link_aktif == page) ? menuaktif : menunonaktif}>
                                <Nav.Link href={`/${item.link}`}>
                                  {item.page}
                                </Nav.Link>
                              </li>
                            </>
                          )
                        }

                        if (item.link == !"") {
                          const page_count_sub = item.link.split('/')
                          const pagesub = page_count_sub[page_count_sub.length - 2]
                          var id = item.rowid
                          return (
                              <div className="items-center" key={item.rowid}>
                               <NavDropdown title={item.page} id="basic-nav-dropdown" className={(link_aktif == pagesub) ? menuaktif : menunonaktif}>
                                  <NavDropdown.Item className={`${openmenu[item.rowid] == false ? "dropdown-menu" : ""} `}>
                                    {subbrandcumb.map(item => {
                                      const sub_count = item.link.split('/')
                                      const subpage = sub_count[sub_count.length - 1]
                                      if (id == item.parent_menu) {
                                        return (
                                          <>
                                            <li>
                                              <Nav.Link className={(link_aktif == subpage) ? submenuaktif : submenunonaktif} href={`/${item.link}`} >
                                                {item.page}
                                              </Nav.Link>
                                            </li>
                                          </>
                                        )
                                      }
                                    })}
                                  </NavDropdown.Item>
                                </NavDropdown>
                              </div>
                          )
                        }
                      })}
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
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
                    {session ? (<>
                      <p className='text-white pointer' style={{ cursor: 'pointer' }} onClick={e => Logout(e)}>logout</p>
                    </>) : (<>
                      <Link href="/Login">Login</Link>
                    </>)}
                  </li>
                </ul>
                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    {/* <li className="nav-item">
                      <a href="/" className="nav-link">
                        Home
                      </a>
                    </li> */}
                    {brandcumb.map(item => {
                      const page_count = item.link.split('/')
                      const page = page_count[page_count.length - 1]
                      if (item.level == 1 && item.link != "") {
                        return (
                          <>
                            <li className={(link_aktif == page) ? menuaktif : menunonaktif}>
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
                        const page_count_sub = item.link.split('/')
                        const pagesub = page_count_sub[page_count_sub.length - 2]
                        var id = item.rowid
                        
                        return (
                          <div onMouseLeave={() => subMenuOnMouseDown(item.rowid)} onMouseEnter={() => subMenuOnMouseEnter(item.rowid)} key={item.rowid}>
                            <div className="items-center" >
                             <li className={(link_aktif == pagesub) ? menuaktif : menunonaktif}>
                            {/* <li className={menuaktif}> */}
                                <a href="#" className="nav-link ">
                                  {item.page}
                                  <i className="bx bx-chevron-down" />
                                </a>
                                <ul className={`${openmenu[item.rowid] == false ? "dropdown-menu" : ""} `}>
                                  {openmenu[item.rowid] == false && subbrandcumb.map(item => {
                                    const sub_count = item.link.split('/')
                                    const subpage = sub_count[sub_count.length - 1]
                                    if (id == item.parent_menu) {
                                      return (
                                        <>
                                          <li>
                                            <Link className={(link_aktif == subpage) ? submenuaktif : submenunonaktif} href={`/${item.link}`} >
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
        </div>
        {/* <video src="/images/video.mp4" muted autoPlay loop></video> */}
      {/* </section> */}
      {props.children}
    </>
  )
}