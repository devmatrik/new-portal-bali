import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import moment from 'moment/moment'
import Image from 'next/image'
import { StorageApi, BaseLayouts } from '../../components/MainCode/MainImport'
import {
    WhatsappShareButton,
    WhatsappIcon,
  } from 'next-share'

export default function DetailEvent() {

    const router = useRouter()
    const query = router?.query;
    const link_akses = router.asPath.split('/')
    const link_aktif = link_akses[link_akses.length - 1].substring(15)

    const [loading, setLoading] = useState('')
    const [detail, setDetail] = useState([])

    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

    useEffect(() => {
        GetDetailEvent(query.id)
    }, [loading])

    const GetDetailEvent = async(id) => {
        console.log(link_aktif);
        await Promise.resolve(StorageApi.getData(`sm_portal/event/${link_aktif}`))
            .then(value => {
                setDetail(value.data.data)
                console.log(setDetail);
            }).catch(error => {
                setDetail('')
            })
    }

  return (
    <>
        <BaseLayouts>
        <section className="news-details-area ptb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mt-0">
                                <div className="blog-details-desc">
                                    <div className="article-image">
                                        <img src={detail.image} width={1500} height={500} alt="image" />
                                    </div>
                                    <div className="article-content mt-0">
                                        <span><a href="#" style={{ color: '#ff661f'}}>Event</a> / {moment(detail.tgl_event).format("DD MMMM, YYYY")} - {moment(detail.tgl_berakhir).format("DD MMMM, YYYY")}</span>
                                        <h3>{detail.nama_event}</h3>
                                        <div>
                                            <p style={{ textAlign: "justify" }}>{renderHTML(detail.isi_konten)}</p>
                                        </div>
                                        <div style={{ marginTop: 10 }}>
                                            <p>Share artikel :
                                            <WhatsappShareButton
                                                url={`https://elingbali.com/News/DetailEvent?id=${detail.rowid}`}
                                                title={detail.nama_event}
                                                separator=""
                                                style={{ marginLeft: 5 }}>
                                                <WhatsappIcon size={32} round />
                                            </WhatsappShareButton>
                                            </p>
                                        </div>
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