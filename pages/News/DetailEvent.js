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

        </BaseLayouts>
    </>
  )
}