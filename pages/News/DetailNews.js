import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import moment from 'moment/moment'
import Image from 'next/image'
import { StorageApi, BaseLayouts } from '../../components/MainCode/MainImport'

export default function DetailNews() {
    const router = useRouter()
    const query = router?.query;

    const [loading, setLoading] = useState('')
    const [listLatest, setListLatest] = useState([]);
    const [detail, setDetail] = useState('')
    useEffect(() => {
        GetDetailNews(query.id)
        LatestNews()
    }, [loading])
    const GetDetailNews = (id) => {
        console.log(id);
        Promise.resolve(StorageApi.getData(`sm_portal/news/${id}`))
            .then(value => {
                setDetail(value.data.data)
            }).catch(error => {
                setDetail('')
            })
    }

    const LatestNews = () => {
        Promise.resolve(StorageApi.getData("sm_master_data/jenis_berita"))
            .then(value => {
                const list = value.data.data
                var latest = ""
                list.map(item => {
                    if (item.jenis_berita == "Latest News") {
                        latest = item.rowid
                    }
                })
                Promise.resolve(StorageApi.getData(`sm_portal/news?jenis_news_id=${latest}`))
                    .then(value => {
                        const datag20 = value.data.data
                        const Listdata = datag20.sort((a, b) => moment(b.tanggal_news).format("DD") - moment(a.tanggal_news).format("DD"))
                        setListLatest(Listdata)
                    }).catch(error => {
                        setListLatest([])
                    })
            }).catch(error => {

            })
    }
    return (
        <>
            <BaseLayouts>
                {/* <!-- Start News Details Area --> */}
                <section className="news-details-area ptb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 mt-0">
                                <div className="blog-details-desc">
                                    <div className="article-content mt-0">
                                        <span><a href="#">Walters</a> / {moment(detail.tanggal_news).format("DD MMMM, YYYY")} /</span>
                                        <h3>{detail.judul_news}</h3>
                                        <div className="article-image">
                                            <img src={detail.image} alt="image" />
                                        </div> <br />
                                        <div>
                                            <p style={{ textAlign: "justify" }}>{detail.isi_konten}</p>
                                        </div>
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
                            <div className="col-lg-4">
                                <aside className="widget-area">

                                    <section className="widget widget_latest_news_thumb">
                                        <h3 className="widget-title">Latest posts</h3>
                                        <aside className="widget-area scroll-bar-vertical scrollbar-hide" style={{ height: "30rem" }}>
                                            <div className='scroll-bar-vertical scrollbar-hide' style={{ height: "20rem" }}>
                                                {listLatest.map((item, index) => {
                                                    return (
                                                        <article className="item" key={index}>
                                                            <a href="#" className="thumb">
                                                                <span className="fullimage cover bg1" role="img"></span>
                                                            </a>
                                                            <div className="info ">
                                                                <h4 className="title usmall p-1" style={{ fontSize: 11 }}>
                                                                    <a href="#">{item.judul_news}</a>
                                                                </h4>
                                                                <span style={{ fontSize: 11 }}>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</span>
                                                            </div>
                                                        </article>
                                                    )
                                                })}
                                            </div>
                                        </aside>
                                    </section>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Start News Details Area --> */}
            </BaseLayouts>
        </>
    )
}