import React, { useEffect, useState } from 'react';
import { BaseLayouts, StorageApi } from '../../components/MainCode/MainImport'

export default function LiveTraffict() {

  const [loading, setLoading] = useState(false)
  const [tableu, setTableu] = useState(false)
  useEffect(() => {
    getData()
  }, [loading])

  const getData = () => {
    Promise.resolve(StorageApi.getData("Tableau/grafik_embed_traffic_new"))
      .then(value => {
        const data = value.data.data


        setTableu(data)

      }).catch(error => {
        // setTableu(data)

      })
  }

  return (
    <BaseLayouts>
        {/* <div class="contact-map">
          <iframe src={`http://202.134.4.215/satupeta_new/PemetaanEmbed?center=-8.4356749,114.9973846&display=off&show_data=`} frameBorder="0" height={550} width={700}></iframe>
        </div> */}
        <div className='grid grid-cols-1 livetraffict'>
          <iframe className='xl:-ml-0 ml-2 !xl:w-full w-[100%] h-[700px]' src={tableu} frameBorder="0" width={1455} height={600} />
        </div>
      </BaseLayouts>
  )
}