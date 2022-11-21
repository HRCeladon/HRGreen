import React from 'react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

const center = { lat: 39, lng: -95 };

const Maps = (props) => {
  const [map, setMap] = React.useState(/** @type google.maps.Map */ (null));
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
  });

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <GoogleMap center={center} zoom={3} mapContainerStyle={{width: '100%', height: '100%'}} onLoad={maps => setMap(maps)} options={{
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false
    }}></GoogleMap>
  )
}

export default Maps;