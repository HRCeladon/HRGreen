import React, {useState} from "react";
import TripView from './TripView.jsx'

const TripClick = () => {
  const [showTrip, setShowTrip] = useState(false)

  return (
    <>
      {!showTrip && (<button className='trip-entry-button' onClick={() => setShowTrip(true)}>View This Trip</button>)}
      <TripView  showTrip={showTrip} onClose={() => setShowTrip(false)}/>
    </>
  )
}

export default TripClick