import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import moment from 'moment/moment'
import { StorageApi, BaseLayouts } from '../../components/MainCode/MainImport'

export default function DetailNews() {
    const router = useRouter()
    const query = router?.query;

    const [loading, setLoading] = useState('')
    const [detail, setDetail] = useState('')
    useEffect(() => {
        GetDetailNews(query.id)
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
    console.log(detail);
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

                                        <article className="item">
                                            <a href="#" className="thumb">
                                                <span className="fullimage cover bg1" role="img"></span>
                                            </a>
                                            <div className="info">
                                                <h4 className="title usmall"><a href="#">Negotiations on a peace agreement between the two countries</a></h4>
                                                <span>28 September, 2022</span>
                                            </div>
                                        </article>

                                        <article className="item">
                                            <a href="#" className="thumb">
                                                <span className="fullimage cover bg2" role="img"></span>
                                            </a>
                                            <div className="info">
                                                <h4 className="title usmall"><a href="#">Love songs helped me through heartbreak</a></h4>
                                                <span>28 September, 2022</span>
                                            </div>
                                        </article>

                                        <article className="item">
                                            <a href="#" className="thumb">
                                                <span className="fullimage cover bg3" role="img"></span>
                                            </a>
                                            <div className="info">
                                                <h4 className="title usmall"><a href="#">This movement aims to establish women rights</a></h4>
                                                <span>28 September, 2022</span>
                                            </div>
                                        </article>

                                        <article className="item">
                                            <a href="#" className="thumb">
                                                <span className="fullimage cover bg4" role="img"></span>
                                            </a>
                                            <div className="info">
                                                <h4 className="title usmall"><a href="#">Giving special powers to police officers to prevent crime</a></h4>
                                                <span>28 September, 2022</span>
                                            </div>
                                        </article>
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