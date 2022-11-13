import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BaseLayouts from '../components/MainCode/BaseLayouts'

export default function DetailNews() {
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

                            <div className="post-navigation">
                                <div className="navigation-links">
                                    <div className="nav-previous">
                                        <a href="#">
                                            <i className='bx bx-chevron-left'></i>
                                            Prev Post
                                        </a>
                                    </div>
                                    <div className="nav-next">
                                        <a href="#">
                                            Next Post 
                                            <i className='bx bx-chevron-right'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="comments-area">
                                <h3 className="comments-title">3 Comments:</h3>

                                <ol className="comment-list">
                                    <li className="comment">
                                        <div className="comment-body">
                                            <footer className="comment-meta">
                                                <div className="comment-author vcard">
                                                    <img src="assets/img/client/client-1.jpg" className="avatar" alt="image" />
                                                    <b className="fn">John Jones</b>
                                                </div>
                                                <div className="comment-metadata">
                                                    <a href="index.html">
                                                        <span>April 24, 2022 at 10:59 am</span>
                                                    </a>
                                                </div>
                                            </footer>
                                            <div className="comment-content">
                                                <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                            </div>
                                            <div className="reply">
                                                <a href="#" className="comment-reply-link">Reply</a>
                                            </div>
                                        </div>

                                        <ol className="children">
                                            <li className="comment">
                                                <div className="comment-body">
                                                    <footer className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src="assets/img/client/client-2.jpg" className="avatar" alt="image" />
                                                            <b className="fn">Steven Smith</b>
                                                        </div>
                                                        <div className="comment-metadata">
                                                            <a href="index.html">
                                                                <span>April 24, 2022 at 10:59 am</span>
                                                            </a>
                                                        </div>
                                                    </footer>
                                                    <div className="comment-content">
                                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                    </div>
                                                    <div className="reply">
                                                        <a href="#" className="comment-reply-link">Reply</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>

                                        <div className="comment-body">
                                            <footer className="comment-meta">
                                                <div className="comment-author vcard">
                                                    <img src="assets/img/client/client-3.jpg" className="avatar" alt="image" />
                                                    <b className="fn">Sarah Taylor</b>
                                                </div>
                                                <div className="comment-metadata">
                                                    <a href="index.html">
                                                        <span>April 24, 2022 at 10:59 am</span>
                                                    </a>
                                                </div>
                                            </footer>
                                            <div className="comment-content">
                                                <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                            </div>
                                            <div className="reply">
                                                <a href="#" className="comment-reply-link">Reply</a>
                                            </div>
                                        </div>
                                    </li>
                                </ol>

                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Leave a Reply</h3>

                                    <form className="comment-form">
                                        <p className="comment-notes">
                                            <span id="email-notes">Your email address will not be published.</span>
                                            Required fields are marked 
                                        </p>
                                        <p className="comment-form-author">
                                            <label>Name</label>
                                            <input type="text" id="author" placeholder="Your Name*" name="author" required="required" />
                                        </p>
                                        <p className="comment-form-email">
                                            <label>Email</label>
                                            <input type="email" id="email" placeholder="Your Email*" name="email" required="required" />
                                        </p>
                                        <p className="comment-form-url">
                                            <label>Website</label>
                                            <input type="url" id="url" placeholder="Website" name="url" />
                                        </p>
                                        <p className="comment-form-comment">
                                            <label>Comment</label>
                                            <textarea name="comment" id="comment" cols="45" placeholder="Your Comment..." rows="5" maxlength="65525" required="required"></textarea>
                                        </p>
                                        <p className="comment-form-cookies-consent">
                                            <input type="checkbox" value="yes" name="wp-comment-cookies-consent" id="wp-comment-cookies-consent" />
                                            <label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                        </p>
                                        <p className="form-submit">
                                            <input type="submit" name="submit" id="submit" className="submit" value="Post a comment" />
                                        </p>
                                    </form>
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