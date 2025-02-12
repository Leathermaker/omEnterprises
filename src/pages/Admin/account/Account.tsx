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
          <div className='w-full h-full  rounded-xl'>fdf</div>
          </div>

          <div className='grid grid-rows-2  gap-12 rounded-xl'>
          <div className='w-full h-full bg-gray-200 rounded-xl'>fdf</div>
          <div className='w-full h-full bg-gray-200 rounded-xl'>efdf</div>
          </div>
        </div>
    </div>
  )
}

export default Account