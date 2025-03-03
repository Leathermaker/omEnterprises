import React from 'react'

const QueryCard:React.FC<any> = (props) => {
     console.log(props)
  return (
    <div className='p-4 border-2 border-blue-950/10 rounded-md '>
      <h1 className='text-2xl text-blue-950 font-semibold'>{props.name}</h1>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p className='font-semibold text-blue-950/40'>{props.subject}</p>
      <div className='p-2 bg-gray-200 rounded-lg text-sm h-28 overflow-y-scroll scrollbar-hide'>
      <p>{props.message}</p>
      </div>
    </div>
  )
}

export default QueryCard