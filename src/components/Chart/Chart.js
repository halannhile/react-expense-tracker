import React from 'react'

import ChartBar from './ChartBar'
import './Chart.css'

export default function Chart(props) {

    // pull only the values from the props object and create an array 
    // since Math.max() needs to be in this form: Math.max(1,2,3)
    // we'll then need to pull out only the elements of this array and input to max()
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);

    // find max total expense from all the months 
    // spread operator ... to pull out only the elements of dataPointValue array
    const totalMaximum = Math.max(...dataPointValue);

  return (
    <div className="chart">
        {props.dataPoints.map((dataPoint) => (
            <ChartBar 
                // remember: key helps React render list items efficiently
                // note: to use label as key, label must be unique to each chartbar
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={totalMaximum} 
                label={dataPoint.label}/>
        ))}
    </div>
  )
}
