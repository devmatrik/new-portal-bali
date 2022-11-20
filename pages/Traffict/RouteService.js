import React from 'react'
import Image from 'next/image'
import BaseLayouts from '../../components/MainCode/BaseLayouts'

export default function RouteService() {
  return (
    <>
      <BaseLayouts>
        <div class="grid grid-col-1 route">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27982.0992479593!2d-81.35428553933833!3d28.75650994456714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e76d5129fed6b1%3A0x1a6cd960f325cfcb!2sLake%20Mary%2C%20FL%2032746%2C%20USA!5e0!3m2!1sen!2sbd!4v1602575597158!5m2!1sen!2sbd"></iframe> */}
          <iframe src={`https://satupeta.net/PemetaanEmbed?center=-8.4356749,114.9973846&display=off&show_data=`} frameBorder="0" height={550} width={1455}></iframe>
        </div>
      </BaseLayouts>
    </>
  )
}
