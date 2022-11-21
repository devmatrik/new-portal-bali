import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import moment from 'moment/moment'
import Image from 'next/image'
import { StorageApi, BaseLayouts } from '../../components/MainCode/MainImport'

export default function DetailEvent() {

    const router = useRouter()
    const query = router?.query;

    const [loading, setLoading] = useState('')
    const [listEvent, setEvent] = useState([]);
    const [detail, setDetail] = useState('')
    useEffect(() => {
        GetDetailEvent(query.id)
        ListEvent()
    }, [loading])
    const GetDetailEvent = (id) => {
        console.log(id);
        Promise.resolve(StorageApi.getData(`sm_portal/event/${id}`))
            .then(value => {
                setDetail(value.data.data)
            }).catch(error => {
                setDetail('')
            })
    }

    const ListEvent = () => {
        Promise.resolve(StorageApi.getData("sm_master_data/jenis_event"))
            .then(value => {
                const list = value.data.data
                var listev = ""
                list.map(item => {
                    if (item.jenis_berita == "New Event") {
                        latest = item.rowid
                    }
                })
                Promise.resolve(StorageApi.getData(`sm_portal/event?jenis_event_id=${listev}`))
                    .then(value => {
                        const dataNewEvent = value.data.data
                        const Listdata = dataNewEvent.sort((a, b) => moment(b.tanggal_event).format("DD") - moment(a.tanggal_event).format("DD"))
                        setEvent(Listdata)
                    }).catch(error => {
                        setEvent([])
                    })
            }).catch(error => {

            })
    }

  return (
    <>
        <BaseLayouts>
        <section className="news-details-area ptb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mt-0">
                                <div className="blog-details-desc">
                                    <div className="article-image">
                                        <img src={detail.image} width={1500} height={500} alt="image" />
                                    </div>
                                    <div className="article-content mt-0">
                                        <span><a href="#">Hunt</a> / {moment(detail.tanggal_news).format("DD MMMM, YYYY")} /</span>
                                        <h3>{detail.judul_news}</h3>
                                        
                                        <div>
                                            <p style={{ textAlign: "justify" }}>{detail.isi_konten}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </BaseLayouts>
    </>
  )
}