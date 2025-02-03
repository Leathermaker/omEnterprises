import { WideScreenHandler } from '@/components'
import XpaddingWrapper from '@/components/XpaddingWrapper'
import React from 'react'
import services from '@/assets/svg/onlineMsg.svg'


const ServiceHero:React.FC = () => {
  return (
    <WideScreenHandler>
      <XpaddingWrapper>
        <div className="w-full h-[20rem] md:h-[30rem] xl:h-[30rem] flex  justify-center items-center ">
          <div className="  w-full h-full flex flex-col justify-start  pt-16 ">
                <h1 className="text-start xl:text-5xl md:text-3xl text-2xl font-bold text-blue-950">
                  Communicate Customers <br /> Globally Via <span className="text-OMblue">Our Services</span>
                </h1>
                <div className='mt-4 ps-12 '>
                    <ul className=' text-black/50 list-disc '>
                        <li>Reach More Customers Across India</li>
                        <li>Direct Telecome Operator Connectivity for SMS Service</li>
                        <li>99% Service Uptime Management</li>
                        <li>100% Delivery Rate</li>
                    </ul>
                </div>
              </div>
              <div className="w-full h-full hidden md:flex justify-center items-center">
                <img
                  src={services}
                  alt="servicesImage"
                  className="w-[32rem] aspect-auto"
                />
              </div>
            </div>
          </XpaddingWrapper>
        </WideScreenHandler>
  )
}

export default ServiceHero