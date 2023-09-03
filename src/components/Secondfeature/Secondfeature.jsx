import React from 'react'
import "./Secondfeature.css"

const Secondfeature = ( {title, text}) => {
  return (
    <div className='gpt3__features-container__feature_2'>
      <div className='gpt3__features-container__feature-title'>
        <div></div>
        <h1>{title}</h1>
      </div>

      <div className='gpt3__features-container_feature_2-text'>
        <p>{text}</p> 
      </div>
    </div>
  )
}

export default Secondfeature
