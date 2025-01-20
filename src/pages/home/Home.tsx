import React from 'react'
import About from './components/about/About'
import Hero from './components/hero/Hero'
import Service from './components/serviceSection/Service'
import CompaignSecion from './components/CompaignSection/Compaign'
import { AwardSection, Strategy } from './components'
// import ClientSection from './components/clientSection/ClientSection'

const Home:React.FC = () => {
  return (
    <>
     <Hero/> 
     <About/>
     <AwardSection/>
     <Service/>
     <CompaignSecion/>
     {/* <ClientSection/> */}
    <Strategy/>
    </>
  )
}

export default Home
