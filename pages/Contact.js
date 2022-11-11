import React from 'react'
import Image from 'next/image'
import BaseLayouts from '../components/MainCode/BaseLayouts'

function Contact() {
  return (
<>
  {/* Start Page Banner */}
  <BaseLayouts>
  <div className="page-title-area">
    <div className="container">
      <div className="page-title-content">
        <h2>Contact <Image className="p-2" src="/images/Contact.png" width={50} height={50} alt="" /></h2>
      </div>
    </div>
  </div>
  {/* End Page Banner */}
  {/* Start Contact Area */}
  <section className="contact-area ptb-50">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed/v1/place?q=Bali,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
          </div>
        </div>
        <div className="col-lg-4">
          <aside className="widget-area">
            <section className="widget widget_stay_connected">
              <h3 className="widget-title">Location</h3>
              <ul className="contact-info">
                <li>
                  <span>TMC Bali</span>
                  <br />
                  Jl. Gunung Sanghyang No.110, Padangsambian, Kec. Denpasar
                  Bar., Kota Denpasar, Bali 80117
                </li>
                <li>
                  <span>Email</span>
                  <br />
                  smartcitybali@mail.com
                </li>
                <li>
                  <span>Call Center</span>
                  <br />
                  111
                </li>
              </ul>
            </section>
            <br />
            <section className="widget widget_stay_connected">
              <h3 className="widget-title">Stay connected</h3>
              <ul className="stay-connected-list">
                <li>
                  <a href="#">
                    <i className="bx bxl-facebook" />
                    120,345 Fans
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter" />
                    25,321 Followers
                  </a>
                </li>
                <li>
                  <a href="#" className="youtube">
                    <i className="bx bxl-youtube" />
                    101,545 Subs
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram">
                    <i className="bx bxl-instagram" />
                    10,129 Followers
                  </a>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </div>
  </section>
  {/* End Contact Area */}
  {/* Start Footer Area */}

  </BaseLayouts>

</>
  )
}

export default Contact