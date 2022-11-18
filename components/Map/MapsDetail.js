import React, { Component } from 'react'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from "react-leaflet-markercluster";

const position = [-2.493297321775668, 115.49701916362277];

const iconH = new L.Icon({
  iconUrl: '/icons/pin_hijau.png',
  iconRetinaUrl: '/icons/pin_hijau.png',
  iconSize: new L.Point(32, 32),

});

const iconK = new L.Icon({
  iconUrl: '/icons/pin_kuning.png',
  iconRetinaUrl: '/icons/pin_kuning.png',
  iconSize: new L.Point(32, 32),
});

const iconM = new L.Icon({
  iconUrl: '/icons/pin_merah.png',
  iconRetinaUrl: '/icons/pin_merah.png',
  iconSize: new L.Point(32, 32),
});

export default class MapsDetail extends Component {

  render(props) {
    var lat = this.props.lat ? this.props.lat : -2.493297321775668
    var lng = this.props.lng ? this.props.lng : 115.49701916362277
    var jalan = this.props.jalan ? this.props.jalan : ""
    return (
      <MapContainer center={position} zoom={4}
        style={{ width: 'full', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={iconM}>
          <Popup>
            {jalan}
          </Popup>
        </Marker>
      </MapContainer>
    )
  }
}
