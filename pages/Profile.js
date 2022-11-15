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
                    <div className="col-lg-12 col-md-12 mt-0">
                       
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

export default Profile