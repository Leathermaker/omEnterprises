import React from 'react'


interface WideScreenHandlerProps{
    children : React.ReactNode;
}

const WideScreenHandler:React.FC<WideScreenHandlerProps> = ({children}) => {
  return (
    <div className='grid grid-cols-12'>
      <div className='3xl:col-span-2'/>
      <div className='col-span-12 3xl:col-span-8'>
        {children}
      </div>
      <div className='3xl:col-span-2'/>
    </div>
  )
}

export default WideScreenHandler