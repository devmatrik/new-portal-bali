import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';
import BaseLayouts from '../../components/MainCode/BaseLayouts'
import {
  StorageApi
} from '../../components/MainCode/MainImport'
import { useRouter } from 'next/router'

import moment from 'moment/moment';
import MetaDecorator from '../../components/Meta/MetaDecorator'


export default function DetailPublicService() {
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(false)

     useEffect(() => {
      getData()
    }, [loading])
    const router = useRouter()
    const { id } = router.query

    const [wisata, setWisata] = useState([])

    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

    const getData = () => {
         Promise.resolve(StorageApi.detailData("sm_portal/public_service", id))
        .then(value => {
          const detail = value.data.data
          
          setDetail(detail)
        }).catch(error => {
          console.log(error);
        //   setIsModalVisible(false)
        })
    }
    // console.log(router.query)

  return (
    <>

    <div>
        <MetaDecorator image={detail.image} title={detail.judul}   imagetw={detail.image} url="https://elingbali.com"/>
    </div>
    <BaseLayouts>
        {/* <!-- Start News Details Area --> */}
        <section className="news-details-area ptb-50">
            <div className="container">

                    <div className="row">
                    <div className="col-lg-8 col-md-12 mt-0">
                        <div className="blog-details-desc">
                            <div className="article-content mt-0">
                                
                                <span>{moment(detail.ctddate).format("DD MMMM, YYYY ")}</span>
                                <h3>{detail.judul}</h3>
                                <div className="article-image">
                                    <img src={detail.image} alt="image" />
                                </div> <br />
                                <p>{renderHTML(detail.isi_konten)}</p>                                

                            </div>

                            <div className="article-footer">
                                <div className="article-share">
                                    <ul className="social">
                                        <li><span>Share:</span></li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className='bx bxl-facebook'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className='bx bxl-twitter'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className='bx bxl-instagram'></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    
                </div>
                     

                
            </div>
        </section>
        {/* <!-- Start News Details Area --> */}
    </BaseLayouts>
    </>
  )
}