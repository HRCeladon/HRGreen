import React from 'react';
import axios from 'axios';
import { useJsApiLoader, GoogleMap, Marker, MarkerClusterer } from '@react-google-maps/api';
import treeOne from '../../../dist/assets/trees-01.png';
import treeTwo from '../../../dist/assets/trees-02.png';
import treeThree from '../../../dist/assets/trees-03.png';

const center = { lat: 39, lng: -95 };

const options = {
  zoomOnClick: true,

}

const Maps = (props) => {
  const [map, setMap] = React.useState(/** @type google.maps.Map */ (null));
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
  });
  const [markers, setMarkers] = React.useState([]);

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (props.email) {
    axios.get('/trees', {email: props.email})
    .then ((results) => {
      setMarkers(results.data[0].trees);
    })
    .catch(err => console.log('Error: ', err));
  } else {
    axios.get('/trees')
    .then((results) => {
      setMarkers(results.data[0].trees);
    })
    .catch(err => console.log('Error: ', err));
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