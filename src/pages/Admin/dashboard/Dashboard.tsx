import React from 'react'

const Dashboard:React.FC = () => {
  return (
    <div className='bg-gray-100 h-full overflow-y-scroll '>
      <div>
        <div className='h-[50rem] w-full bg-gray-200'></div>
        <div className='h-[50rem] w-full bg-gray-300'></div>
        <div className='h-[50rem] w-full bg-gray-400'></div>
        <div className='h-[50rem] w-full bg-gray-500'></div>
        <div className='h-[50rem] w-full bg-gray-600'></div>
        <div className='h-[50rem] w-full bg-gray-700'></div>
        <div className='h-[50rem] w-full bg-gray-800'></div>
      </div>
    </div>
  )
}

export default Dashboard