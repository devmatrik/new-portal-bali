import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { StorageApi, BaseLayouts } from '../../components/MainCode/MainImport'

export default function DetailNews() {
    const router = useRouter()
    const query = router.query;

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
                                        <span><a href="#">Walters</a> / 28 September 2022 /</span>
                                        <h3>Smart City Bali, Teknologi apa yang dipakai disana?</h3>
                                        <div className="article-image">
                                            <img src="assets/img/news-details/news-details-1.jpg" alt="image" />
                                        </div> <br />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>

                                        <div className="desc-overview">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="desc-image">
                                                        <img src="assets/img/news-details/news-details-2.jpg" alt="image" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="desc-text">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <h4>Trump discusses various issues with his partys political leaders</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                        <ul className="features-list">
                                            <li>
                                                <i className='bx bx-check'></i>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </li>
                                            <li>
                                                <i className='bx bx-check'></i>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
                                            </li>
                                            <li>
                                                <i className='bx bx-check'></i>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </li>
                                        </ul>

                                        <h4>Discuss 5 major issues by keeping people together</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                        <ul className="features-list">
                                            <li>
                                                <i className='bx bx-check'></i>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </li>
                                            <li>
                                                <i className='bx bx-check'></i>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
                                            </li>
                                            <li>
                                                <i className='bx bx-check'></i>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </li>
                                        </ul>

                                        <blockquote className="wp-block-quote">
                                            <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                                        </blockquote>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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