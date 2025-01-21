import React from 'react'
import { TestinomialTypes } from './Testinomials'
import StarRating from '../../../../components/ui/StartRating'

const TestinomialCard:React.FC<TestinomialTypes> = ({image, from, comment, rating}) => {
  return (
    <div className='relative bg-white shadow-lg min-w-[18rem] w-[20rem] h-fit rounded-lg pb-12 p-4 pt-6'>
        {/* image section */}
        <div className='absolute -top-12 h-24 aspect-square rounded-full bg-white p-2 shadow-md'>
           <img src={image} alt="avatar" className='h-full w-full rounded-full object-cover' />
        </div>

        <div className=' flex justify-end'>
        <StarRating rating={rating} maxStars={5} starColor="text-OMblue" />
        </div>
        <div className='mt-8 text-black/80 '>
            {comment}
        </div>
        <div className='mt-4'>
            <p className='text-2xl font-semibold '>{from}</p>
        </div>
    </div>
  )
}

export default TestinomialCard
