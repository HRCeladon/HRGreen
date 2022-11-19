import React, {useState, useEffect} from 'react';

const Planner = ({showPlanner}) => {

  return (showPlanner && (
    <div>
      <h2>Plan Trip </h2>
    </div>
    )
  )
}

export default Planner