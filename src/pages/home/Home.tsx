import React from 'react'
import About from './components/about/About'
import Hero from './components/hero/Hero'
import Service from './components/serviceSection/Service'
import Strategy from './components/CompaignSection/Compaign'

const Home:React.FC = () => {
  return (
    <>
     <Hero/> 
     <About/>
     <Service/>
     <Strategy/>
    </>
  )
}

export default Home
