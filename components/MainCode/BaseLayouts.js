import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import { StorageApi} from '../../components/MainCode/MainImport'
import { NavItem } from 'react-bootstrap'

// import Konten from './Konten'
// import { useRouter } from "next/router";

export default function BaseLayouts(props) {
 
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const query = router?.query;
  const link_akses = router.asPath.split('/')
  const link_aktif = link_akses[link_akses.length - 1].substring(14)
  const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
  

   const GetDetailNews = async(id) => {
    console.log(link_aktif);
      await Promise.resolve(StorageApi.getData(`sm_portal/news/${link_aktif}`))
        .then(value => {
            setDetail(value.data.data)
            console.log(setDetail);
        }).catch(error => {
            setDetail('')
        })
    }

   useEffect(() => {
      GetDetailNews(query?.id)
  }, [loading])

  return (
    <div >
      <Head>
        <meta charSet="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" type="image/png" href="/images/icon-jepun.png" />
        <link rel="icon" href="/images/icon-jepun.png" />
      </Head>
    <Navbar>
      {props.children}
    </Navbar>
    <Footer>
    </Footer>
    
    {/* <Konten></Konten> */}

    {/* <Script src="js/jquery.min.js"></Script>
    <Script src="js/popper.min.js"></Script>
    <Script src="js/bootstrap.min.js"></Script>
    <Script src="js/jquery.meanmenu.js"></Script>
    <Script src="js/owl.carousel.min.js"></Script>
    <Script src="js/jquery.magnific-popup.min.js"></Script>
    <Script src="js/nice-select.min.js"></Script>
    <Script src="js/jquery.ajaxchimp.min.js"></Script>
    <Script src="js/form-validator.min.js"></Script> */}
    {/* <Script src="js/contact-form-script.js"></Script> */}
    {/* <Script src="js/wow.min.js"></Script>
    <Script src="js/main.js"></Script> */}      
    </div>
  )
}

