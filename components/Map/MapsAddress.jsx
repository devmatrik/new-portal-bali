import { useCallback, useEffect, useMemo } from 'react';
import Script from 'next/script'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Search from './SerachMap';
import { useState } from 'react';
import { useRef } from 'react';

const position = [-2.493297321775668, 115.49701916362277];
const apiKey = "AIzaSyAve2YN0Q80YBX3cWzoji9o9HDQrKvAewM";
// const apiKey = "";


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MapsAddress = ({ alamat, latitude, longitude }) => {


  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")
  const [drag, setDrag] = useState("")
  const [ket, setKet] = useState("")
  const [list, setList] = useState(<></>)
  const markerRef = useRef(null);

  useEffect(() => {
  }, [])

  const data_search = (x) => {
    setLat(x.result.y)
    setLng(x.result.x)
    setKet(x.result.label)
    if (latitude) latitude(x.result.y ? x.result.y : "")
    if (longitude) longitude(x.result.x ? x.result.x : "")
    if (alamat) alamat(x.result.label ? x.result.label : "")
  }

  function DraggableMarker(props) {
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState([props.lat, props.lng])
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        async dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
          }
          let lat = marker.getLatLng().lat;
          let lng = marker.getLatLng().lng;
          let lists = await Promise.resolve(Search.SearchManual({ apiKey, lat, lng }))
          let tmp = [];
          let n = 1;

          for (const x of lists) {
            await tmp.push(<><li key={n += 1} data={`${x.y}#${x.x}#${x.label}`} onClick={(e) => {
              let d = e.currentTarget.getAttribute('data').split('#');
              setLat(d[0])
              setLng(d[1])
              setKet(d[2])
            }} className='hover:text-orange-600 mb-2 cursor-pointer text-[12px] opacity-90 shadow-xl'>{n}. {x.label}</li></>)
          }

          let tmp2 = <>
            <div>
              <div style={{
                display: "block",
                position: "absolute",
                bottom: "0px",
                left: "0",
                // right: "10px",
                margin: "0 auto",
                zIndex: "400"
              }}>
                <div className='!w-[310px] !h-[200px] bg-white p-2 ml-2 mr-2 mb-2 rounded-md overflow-hidden'>
                  <span className='font-bold text-lg'>Daftar Alamat</span>
                  <div className='h-[inherit] !overflow-y-auto pb-4'>
                    <div className='mt-2 grid grid-cols-1'>
                      <ul>
                        {tmp}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </>
          setList(tmp2)

          setDrag(`${marker.getLatLng().lat},${marker.getLatLng().lng}`)
          data_search({
            result: {
              y: marker.getLatLng().lat,
              x: marker.getLatLng().lng,
              label: lists[0].label
            }
          })
        },
      }),
      [],
    )

    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])

    return (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        icon={iconM}
        position={position}
        ref={markerRef}>
        <Popup minWidth={90}>
          {ket}
        </Popup>
      </Marker>
    )
  }

  const iconM = new L.Icon({
    iconUrl: '/icons/pin_merah.png',
    iconRetinaUrl: '/icons/pin_merah.png',
    iconSize: new L.Point(32, 32),
  });

  return (
    <>
      <MapContainer
        center={position}
        zoom={5}
        maxZoom={20}
        style={{ width: "96%", height: "90%", zIndex: "1 !important", position: "absolute" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {
          lat && lng ? <>
            <DraggableMarker lat={lat} lng={lng} label={ket} />
          </> : <></>
        }

        {list}

        <Search.SearchField eventDrag={drag} data_search={data_search} apiKey={apiKey} />


      </MapContainer>


      <Script
        id="will-fail"
        src="https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.umd.js"
        onError={(e) => {
          console.error('Script failed to load', e)
        }}
      />

    </>

  );
};

export default MapsAddress

