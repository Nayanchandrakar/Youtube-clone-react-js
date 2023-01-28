import React from 'react'

const LibraryFeeds = ({iconimage, field, info}) => {
  return (
     <div className='flex flex-col gap-1 py-5 overflow-hidden border-b border-gray-600'>
        <div className='flex flex-row gap-3'><img className='w-[1.5rem]' src={iconimage} alt="" />
        <span className='font-semibold'>{field}</span></div>
        <p className='font-semibold text-[.7rem]'>{info}</p>
     </div>
  )
}

export default LibraryFeeds
