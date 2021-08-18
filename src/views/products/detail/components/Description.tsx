import React from 'react'

const Description = (props: {name: string, resume: string, sellingPoints: string[]}) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.resume}</p>
      <ul>
        {props.sellingPoints.map((item, index) => <li data-testid="sellingPoint" key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Description
