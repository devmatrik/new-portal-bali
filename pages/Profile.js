import React from 'react'
import Image from 'next/image'
import BaseLayouts from '../components/MainCode/BaseLayouts'

function Profile() {
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
                                <span><a href="#">Hunt</a> / 14 November 2022 /</span>
                                <h3>Smart City Bali, Electronic Policing</h3>
                                <div className="article-image">
                                    <Image src="/images/wisata/wisata-alam.jpg" width={760} height={384} alt="image" />
                                </div> <br />
                                <p>Electronic Policing (e-policing) yang merupakan pemolisian di era digital yang dapat mendukung pelayanan kepolisian yang prima yaitu: cepat, tepat, akurat, transparan, akuntabel, informatif dan mudah diakses. Di era kemajuan di bidang ilmu pengetahuan dan teknologi yang begitu cepat berdampak terjadinya globalisasi.</p>
                                <p>Selain segi positif, globalisasi juga membawa permasalahan sosial yang berkaitan dengan gangguan keamanan ataupun kejahatan yang terjadi dalam masyarakat akan semakin kompleks dan semakin canggih karena semakin sistematis terorganisir secara profesional dan memanfaatkan teknologi dan peralatan peralatan modern yang dilakukan oleh orang-orang yang ahli/profesional. Tentu saja kejahatanya akan semakin sulit untuk dicegah, dilacak dan dibuktikan.</p>
                                
                                <div className="desc-overview">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="desc-image">
                                                <img src="/images/wisata/detail.jpg" alt="image" />
                                            </div>
                                        </div>
    
                                        <div className="col-lg-6">
                                            <div className="desc-text">
                                                <p>Selain itu tuntutan dan harapan masyarakat terhadap kinerja polisi dalam menyelenggarakan pemolisiannya akan semakin meningkat yaitu adanya pelayanan prima. Pelayanan prima kepolisan dalam konteks ini dapat dipahami sebagai pelayanan yang cepat, tepat, akurat, transparan, akuntabel, informatif dan mudah diakses.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <h4>Trump discusses various issues with his partys political leaders</h4>
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

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
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

export default Profile