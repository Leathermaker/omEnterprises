import { Button } from '@/components'
import React from 'react'
import AddPlanForm from './components/AddPlanForm'

const Plan:React.FC = () => {
  return (
    <div className='py-4 min-h-screen'>
   <div className='flex justify-center items-center gap-3'>
     <Button title='Add Plan'/>
     <Button title='Plans'/>
   </div>

   <div className='my-12'>
   <AddPlanForm/>
   </div>
    </div>
  )
}

export default Plan