import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import moment from 'moment/moment'
import Image from 'next/image'
import Link from 'next/link'
import { StorageApi, BaseLayouts } from '../../components/MainCode/MainImport'

export default function DetailNews() {
    const router = useRouter()
    const query = router?.query;

    const [listTags, setListTags] = useState([]);
    const [listLatest, setListLatest] = useState([]);
    const [detail, setDetail] = useState([]);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState('')
    useEffect(() => {
        GetDetailNews(query.id)
        LatestNews()
        getTags();
        getData();
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

    const getData = () => {
        Promise.resolve(StorageApi.getData("sm_master_data/jenis_berita"))
          .then(value => {
            const list = value.data.data
            var param = ""
            list.map(item => {
              if (item.jenis_berita == "Breaking News") {
                param = item.rowid
              }
            })
            Promise.resolve(StorageApi.getData(`sm_portal/news?jenis_news_id=${param}`))
              .then(value => {
                const data = value.data.data
                setNews(data)
              }).catch(error => {
                setNews([])
              })
          }).catch(error => {
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

    const getTags = () => {
        Promise.resolve(StorageApi.getData(`sm_master_data/jenis_berita`))
          .then(value => {
            const data = value.data.data
            setListTags(data)
          }).catch(error => {
            setListTags([])
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
                                                            <Link href={`/News/?id=${item.rowid}`} className="thumb">
                                                                <img src={`${item.image}`} alt="image" style={{ height: "80px", width : "100px" }} />
                                                            </Link>
                                                            <div className="info">
                                                                <Link href={`/News/?id=${item.rowid}`}>
                                                                    <h4 className="title usmall" style={{ fontSize: 12 }}>
                                                                        <a>{item.judul_news}</a>
                                                                    </h4>
                                                                </Link>
                                                                <span style={{ fontSize: 12, color: '#fff' }}>{moment(item.tanggal_news).format("DD MMMM, YYYY")}</span>
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
                                        {listTags.map((item, index) => {
                                            return (
                                                <Link key={index} href={`sm_master_data/jenis_berita`}>
                                                {item.jenis_berita}
                                                </Link>
                                            )
                                        })}
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