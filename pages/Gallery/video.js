import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Carousel from 'react-grid-carousel'
import { BaseLayouts, SettingApi, StorageApi } from '../../components/MainCode/MainImport'

export default function FotoKegiatan() {

  const [loading, setLoading] = useState();
  const [foto, setListFoto] = useState([])

  useEffect(() => {
    getGambar()
  }, [loading])


  const getGambar = () => {
    Promise.resolve(StorageApi.getData('sm_portal/gallery?jenis_galery_id=1'))
      .then(value => {
        const list = value.data.data
        const list_foto = [];
        list.map(item => {
          list_foto.push({
            foto: `${SettingApi.url}/images/gallery/${item.file}`,
            title: item.title
          })
        })
        setListFoto(list_foto)
      }).catch(error => {
        setListFoto([])
      })
  }

  return (
    <>
      <BaseLayouts>
        <>
          {/* Start Team Area */}
          <section className="default-news-area">
            <div className="container">
              <div className="tech-news ptb-50">
                <div class="section-title">
                  <h2><Image className="p-2" src="/images/foto.svg" width={50} height={50} alt="" /> Foto Kegiatan</h2>
                </div>
                <Carousel cols={4} rows={2} gap={20} loop autoplay showDots>
                  {foto.map((item, index) => (
                    <Carousel.Item key={index}>
                      <div className="single-tech-news-box" style={{ borderRadius: 10, width: "18rem" }}>
                        <a href="detail-wisata.html">
                          <img src={item.foto} alt="image" />
                        </a>
                        <div className="tech-news-content">
                          <h3>
                            <a href="detail-wisata.html"></a>
                          </h3>
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </section>


        </>


      </BaseLayouts>
    </>
  )
}