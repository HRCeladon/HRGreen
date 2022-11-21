import React, {useState} from "react";
import Planner from './Planner.jsx'

const PlannerButton = () => {
  const [showPlanner, setPlanner] = useState(false)

  return (
    <>
      <button className='trip-planner-button' onClick={() => setPlanner(true)}>Plan New Trip</button>
      <Planner className='trip-planner-form' showPlanner={showPlanner} onClose={() => setPlanner(false)}/>
    </>
  )
}

export default PlannerButton