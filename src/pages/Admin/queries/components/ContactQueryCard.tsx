import React from 'react'

const ContactQueryCard:React.FC<any> = (props) => {
     console.log("contact", props)
  return (
    <div className= 'relative p-4 border-2 border-blue-950/10 rounded-md '>
        <div className='absolute right-4 top-4'>
            <span className='text-green-700 font-semibold'>{ props.isDeveloper?"Developer":"N/A"}</span>
        </div>
      <h1 className='text-2xl text-blue-950 font-semibold'>{props.companyName}</h1>
      <h1 className=' text-blue-950 font-semibold'>{props.name}</h1>
      <p><span className='font-semibold text-blue-950/40'>Email: </span> {props.email}</p>
      <p> <span className='font-semibold text-blue-950/40'>Hear From: </span>{props.hearAboutUs}</p>
      <p> <span className='font-semibold text-blue-950/40'>Location: </span> {props.location}</p>
      <p className='font-semibold text-blue-950/40'>{props.service}</p>
      <div className='p-2 bg-gray-200 rounded-lg text-sm h-28 overflow-y-scroll scrollbar-hide'>
      <p>{props.message}</p>
      </div>
    </div>
  )
}

export default ContactQueryCard