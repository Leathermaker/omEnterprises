import React from 'react'


interface StrategyCardProps {
     title: string;
     description: string;
     icon: React.ReactNode;

}
const StrategyCard:React.FC<StrategyCardProps> = ({title, description, icon}) => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-4 py-12 h-full'>
      <div className='flex items-center justify-center text-5xl'>
        {icon}
      </div>
      <h3 className='text-xl font-bold text-center mt-4'>{title}</h3>
      <p className='text-gray-500 text-center mt-2'>{description}</p>

    </div>
  )
}

export default StrategyCard
