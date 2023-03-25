import React from 'react'

import ChartBar from './ChartBar'
import './Chart.css'

export default function Chart(props) {
  return (
    <div className="chart">
        {props.dataPoints.map((dataPoint) => (
            <ChartBar 
                // remember: key helps React render list items efficiently
                // note: to use label as key, label must be unique to each chartbar
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={null} 
                label={dataPoint.label}/>
        ))}
    </div>
  )
}
