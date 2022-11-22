import React from 'react';
import { useJsApiLoader, GoogleMap, Marker, MarkerClusterer } from '@react-google-maps/api';
import treeOne from '../../../dist/assets/trees-01.png';
import treeTwo from '../../../dist/assets/trees-02.png';
import treeThree from '../../../dist/assets/trees-03.png';



const center = { lat: 39, lng: -95 };

const markers = [
  { lat: 39, lng: -95},
  { lat: 39.1, lng: -95},
  { lat: 39.2, lng: -95},
  { lat: 39.3, lng: -95},
  { lat: 39.4, lng: -95},
  { lat: 39, lng: -95.1},
  { lat: 29, lng: -98},
  { lat: 47, lng: -122}
]

const options = {
  zoomOnClick: true,

}

const Maps = (props) => {
  const [map, setMap] = React.useState(/** @type google.maps.Map */ (null));
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
  });

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <GoogleMap center={center} zoom={4} mapContainerStyle={{width: '100%', height: '100%'}} onLoad={maps => setMap(maps)} options={{
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false
    }}>
      <MarkerClusterer options={options}>
        {clusterer => markers.map((pos, index) => {
          return <Marker key={index} position={pos} icon={{
            url: ((index % 3) === 0 ? treeOne : (index % 3) === 1 ? treeTwo : treeThree),
            scaledSize: new google.maps.Size(25, 35)
          }}
          clusterer={clusterer}/>
        })}
      </MarkerClusterer>
    </GoogleMap>
  )
}

export default Maps;