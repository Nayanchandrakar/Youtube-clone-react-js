import React from 'react'
import { useGlobalContext } from '../Context'

const Subscription = () => {
  const {apidata} = useGlobalContext()
  
  return (
    <div className="container">
      <div className='flex justify-center items-center h-[80vh]'>
        <h3 className='font-bold'>No Subscription available.</h3>
      </div>
    </div>
  )
}

export default Subscription