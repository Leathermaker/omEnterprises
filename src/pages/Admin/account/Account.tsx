import React from 'react'
import avatar from '../../../assets/images/avatar.png'
const Account:React.FC = () => {
  return (
    <div className='bg-gray-100 h-full  '>
        <div className='p-12 h-full w-full grid grid-cols-2 gap-12 '>
          <div className='bg-gray-200 rounded-xl grid grid-rows-2 '>
          <div className='w-5/12 aspect-square  rounded-xl p-12'>
            <img src={avatar} alt="avatar" className='w-full h-full object-cover rounded-xl' />
          </div>
          <div className='w-full h-full  rounded-xl px-12'>
            <h1 className='text-5xl font-semibold text-blue-950/40'>Anil Verma </h1>
            <p className='text-blue-950/20 '>CEO of Om Enterprises</p>
          </div>
          </div>

          <div className='grid grid-rows-2  gap-12 rounded-xl'>
          <div className='w-full h-full bg-gray-200 rounded-xl'>
            <div className='p-4  border-b border-gray-800/10'>
              <h1 className='text-xl  font-semibold text-blue-950/40'>Notifications </h1>
            </div>
          </div>
          <div className='w-full h-full bg-gray-200 rounded-xl'>
          <div className='p-4 border-b border-gray-800/10'>
              <h1 className='text-xl  font-semibold text-blue-950/40'>Transactions </h1>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Account