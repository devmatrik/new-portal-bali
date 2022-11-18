import dynamic from 'next/dynamic';
import { useEffect } from 'react';
const MapsAddress = dynamic(import('./MapsAddress'), { ssr: false });

const Map = ({ lat, lng, address }) => {

  useEffect(() => {

  })

  return (
    <MapsAddress alamat={address} latitude={lat} longitude={lng} />
  );
};

export default Map