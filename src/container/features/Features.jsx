import React from 'react'
import "./Features.css"
import Feature from "../../components/feature/Feature"

const featuresData = [
  {
    title: "improving and distrust instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis harum vel ad laboriosam optio facilis dolorum dignissimos eaque impedit unde?"
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis harum vel ad laboriosam optio facilis dolorum dignissimos eaque impedit unde?"
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis harum vel ad laboriosam optio facilis dolorum dignissimos eaque impedit unde?"
  },
  {
    title: "Really boy law county",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis harum vel ad laboriosam optio facilis dolorum dignissimos eaque impedit unde?"
  }
]

const Features = () => {

  const featuresElements = featuresData.map((item, index) => {
    return <Feature text={item.text} title={item.title} key={item.title + index} />
  })
  return (
    <div className='gpt3__features' id='features'>
      <div className='gpt3__features-heading'>
          <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Your Future Today & Make it Happen</h1>
          <p>Request early access to get started</p>
      </div>
      <div className='gpt3__features-container'>
          {featuresElements}
      </div>
    </div>
  )
}

export default Features
