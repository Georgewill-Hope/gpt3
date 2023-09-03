import React from 'react'
import { Header, Blog, Features, Footer, Possibility, WhatGPT3} from "./container"
import { Navbar, CTA, Brand,} from "./components"

import "./App.css"

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App

