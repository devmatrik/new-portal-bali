import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import moment from 'moment/moment'
import Image from 'next/image'
import Link from 'next/link'
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
        Promise.resolve(StorageApi.getData(`sm_portal/news`))
          .then(value => {
            const datag20 = value.data.data
            const Listdata = datag20.sort((a, b) => b.rowid - a.rowid)
            setListLatest(Listdata)
          }).catch(error => {
            setListLatest([])
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
                                        <span><a href="#">Hunt</a> / {moment(detail.tanggal_news).format("DD MMMM, YYYY")} /</span>
                                        <h3>{detail.judul_news}</h3>
                                        <div className="article-image">
                                            <img src={detail.image} alt="image" />
                                        </div> <br />
                                        <div>
                                            <p style={{ textAlign: "justify" }}>{detail.isi_konten}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="widget-area">
                                    <section className="widget widget_latest_news_thumb">
                                        <h3 className="widget-title">Latest News</h3>
                                        <aside className="widget-area scroll-bar-vertical scrollbar-hide" style={{ height: "30rem" }}>
                                            <div className='scroll-bar-vertical scrollbar-hide' style={{ height: "55rem" }}>
                                                {listLatest.map((item, index) => {
                                                    return (
                                                        <article className="item" key={index}>
                                                            <Link href={`/News/DetailNews?id=${item.rowid}`} className="thumb">
                                                            </Link>
                                                            <div className="info">
                                                                <Link href={`/News/DetailNews?id=${item.rowid}`}>
                                                                <h4 className="title usmall"><a href="#">{item.judul_news}</a></h4>
                                                                </Link>
                                                                <span>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</span>
                                                            </div>
                                                        </article>
                                                    )
                                                })}
                                            </div>
                                        </aside>
                                    </section>

                                    <section class="widget widget_tag_cloud">
                                        <h3 class="widget-title">Tags</h3>

                                        <div class="tagcloud">
                                            <a href="#">News</a>
                                            <a href="#">Business</a>
                                            <a href="#">Health</a>
                                            <a href="#">Politics</a>
                                            <a href="#">Magazine</a>
                                            <a href="#">Sport</a>
                                            <a href="#">Tech</a>
                                            <a href="#">Video</a>
                                            <a href="#">Global</a>
                                            <a href="#">Culture</a>
                                            <a href="#">Fashion</a>
                                        </div>
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