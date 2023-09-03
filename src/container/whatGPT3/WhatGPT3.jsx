import React from 'react'
import Feature from '../../components/feature/Feature'
import Secondfeature from "../../components/Secondfeature/Secondfeature"
import "./WhatGPT3.css"

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3' id='whgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature 
          title="What is Gpt3"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis harum vel ad laboriosam optio facilis dolorum dignissimos eaque impedit unde"
        />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Secondfeature 
          title="Chatbox"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis harum vel ad laboriosam optio facilis dolorum dignissimos eaque impedit unde"
        />
        <Secondfeature 
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis harum vel ad laboriosam optio facilis dolorum dignissimos eaque impedit unde"
        />
        <Secondfeature 
          title="Education"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis harum vel ad laboriosam optio facilis dolorum dignissimos eaque impedit unde"
        />
      </div>
    </div>
  )
}

export default WhatGPT3
