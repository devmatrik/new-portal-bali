import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import moment from 'moment/moment'
import Image from 'next/image'
import Link from 'next/link'
import { StorageApi, BaseLayouts } from '../../components/MainCode/MainImport'
import {
    WhatsappShareButton,
    WhatsappIcon,
  } from 'next-share'


export default function DetailNews() {
    
    const router = useRouter()
    const query = router?.query;
    const link_akses = router.asPath.split('/')
    const link_aktif = link_akses[link_akses.length - 1].substring(14)
    
    const [listTags, setListTags] = useState([]);
    const [listLatest, setListLatest] = useState([]);
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        GetDetailNews(query?.id)
        LatestNews()
        getTags();
    }, [loading])

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
                                        <span><a href="#"></a> Eling Bali / {moment(detail.tanggal_news).format("DD MMMM, YYYY")}</span>
                                        <h3>{detail.judul_news}</h3>
                                        <div className="article-image">
                                            <img src={detail.image} alt="image" />
                                        </div> <br />
                                        <div>
                                             {renderHTML(detail.isi_konten)}
                                        </div>
                                        <div style={{ marginTop: 10 }}>
                                            <p>Share artikel :
                                            <WhatsappShareButton
                                                url={`https://elingbali.com/News/DetailNews?id=${detail.rowid}`}
                                                title={detail.judul_news}
                                                separator=""
                                                style={{ marginLeft: 5 }}>
                                                <WhatsappIcon size={32} round />
                                            </WhatsappShareButton>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="widget-area">
                                    <section className="widget widget_latest_news_thumb">
                                        <h3 className="widget-title"><Image className="p-2" src="/images/News.png" width={50} height={50} alt="" /> Latest News</h3>
                                        <aside className="widget-area scroll-bar-vertical scrollbar-hide" style={{ height: "30rem" }}>
                                            <div className='scroll-bar-vertical scrollbar-hide' style={{ height: "55rem" }}>
                                                {listLatest.map((item, index) => {
                                                    return (
                                                        <article className="item" key={index}>
                                                            <Link href={`/News/BreakingNews`} className="thumb">
                                                                <img src={`${item.image}`} alt="image" style={{ height: "80px", width : "100px" }} />
                                                            </Link>
                                                            <div className="info">
                                                                <Link href={`/News/BreakingNews`}>
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
                                        <h3 class="widget-title"><Image className="p-2" src="/images/tag.svg" width={45} height={45} alt="image" /> Tags</h3>

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
