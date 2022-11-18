import { GeoSearchControl, GoogleProvider } from 'leaflet-geosearch';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'


const SearchField = ({ apiKey, data_search, eventDrag }) => {
  const provider = new GoogleProvider({
    params: {
      key: apiKey,
    },
  });

  // const provider = new BingProvider({
  //   params: {
  //     key : apiKey
  //   },
  // });

  useEffect(() => {

  }, [])

  const searchCustom = async () => {
    const results = await provider.search({ query: "-6.228345285615809, 106.89928430964342" });
    return results
  }


  // @ts-ignore
  const searchControl = new GeoSearchControl({
    provider: provider,
    popupFormat: (e) => data_search(e),
    style: 'button',
    showMarker: false,
    animateZoom: true,
    notFoundMessage: 'Sorry, that address could not be found.',
  });


  const map = useMap();
  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);

  return null;
};


const SearchManual = async ({ apiKey, lat, lng }) => {


  const provider = new GoogleProvider({
    params: {
      key: apiKey,
    },
  });

  const results = await provider.search({ query: `${lat}, ${lng}` });
  return results

};

export default { SearchField, SearchManual }