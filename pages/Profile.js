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
                                    <div className='container'>
                                        <Image className="prof" src="/images/LogoElingBali.png" width={240} height={140} alt="image" />
                                    </div>
                                    <div className='container'>
                                        <Image className="prof" src="/images/bannerprofile.svg" width={500} height={320} alt="image" />
                                    </div>
                                </div> <br />
                                <p>Electronic Policing (e-policing) yang merupakan pemolisian di era digital yang dapat mendukung pelayanan kepolisian yang prima yaitu: cepat, tepat, akurat, transparan, akuntabel, informatif dan mudah diakses. Di era kemajuan di bidang ilmu pengetahuan dan teknologi yang begitu cepat berdampak terjadinya globalisasi.</p>
                                <p>Selain segi positif, globalisasi juga membawa permasalahan sosial yang berkaitan dengan gangguan keamanan ataupun kejahatan yang terjadi dalam masyarakat akan semakin kompleks dan semakin canggih karena semakin sistematis terorganisir secara profesional dan memanfaatkan teknologi dan peralatan peralatan modern yang dilakukan oleh orang-orang yang ahli/profesional. Tentu saja kejahatanya akan semakin sulit untuk dicegah, dilacak dan dibuktikan.</p>
                                <p>Selain itu tuntutan dan harapan masyarakat terhadap kinerja polisi dalam menyelenggarakan pemolisiannya akan semakin meningkat yaitu adanya pelayanan prima. Pelayanan prima kepolisan dalam konteks ini dapat dipahami sebagai pelayanan yang cepat, tepat, akurat, transparan, akuntabel, informatif dan mudah diakses.</p>
                                
                                {/* <div className="desc-overview">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="desc-image">
                                                <img src="/images/wisata/" alt="image" />
                                            </div>
                                        </div>
    
                                        <div className="col-lg-6">
                                            <div className="desc-text">
                                                <p>Selain itu tuntutan dan harapan masyarakat terhadap kinerja polisi dalam menyelenggarakan pemolisiannya akan semakin meningkat yaitu adanya pelayanan prima. Pelayanan prima kepolisan dalam konteks ini dapat dipahami sebagai pelayanan yang cepat, tepat, akurat, transparan, akuntabel, informatif dan mudah diakses.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
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
                    <div class="col-lg-4">
                        <aside class="widget-area">

                            <section class="widget widget_latest_news_thumb">
                                <h3 class="widget-title">Wilayah Provinsi Bali</h3>

                                <div className="blog-details-desc">
                                    <div className="article-content mt-0">
                                        <div className="article-image">
                                            <div className='container'>
                                                <Image className="prof" src="/images/balimap.webp" width={768} height={240} alt="image" />
                                            </div>
                                            <div className='container'>
                                                <Image className="prof" src="/images/iconkabupaten.svg" width={900} height={320} alt="image" />
                                            </div>
                                        </div> <br />
                                        {/* <div className="desc-overview">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                </div>
                                                <div className="col-lg-6">
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                        </div>
                            </section>
                        </aside>
                    </div>
                </div>
                {/* <!-- Start Contact Area --> */}
        <section class="contact-area ptb-50">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="contact-map mprof">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d679.5511726623012!2d115.18299524194806!3d-8.64862445997187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd238a5e2861e9d%3A0x86383fe797cfbace!2sPolresta%20Denpasar!5e0!3m2!1sid!2sid!4v1668571688804!5m2!1sid!2sid" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <aside class="widget-area contactprof">
                            <section class="widget widget_stay_connected">
                                <h3 class="widget-title">Location</h3>
                                
                                <ul class="contact-info">
                                    <li>
                                        <span>TMC Bali</span><br />
                                        Jl. Gunung Sanghyang No.110, Padangsambian, Kec. Denpasar Bar., Kota Denpasar, Bali 80117
                                    </li>

                                    <li>
                                        <span>Email</span><br />
                                        smartcitybali@mail.com
                                    </li>

                                    <li>
                                        <span>Call Center</span><br />
                                        111
                                    </li>

                                </ul>
                            </section>
                            
                            <br />
                        </aside>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Contact Area --> */}
        </div>
        </section>
        {/* <!-- Start News Details Area --> */}
        </BaseLayouts>
    </>
  )
}

export default Profile