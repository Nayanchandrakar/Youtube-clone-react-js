import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../Context';



const VideoContainer = ({id,thumbnail , Views, avtarimage, time, title,authorTitle,publish}) => {
  
  const {LocalHistory,abbreviateNumber,timefunction} = useGlobalContext()
  

  return (
    <NavLink to={`videoplayer/${id}`} >
    <div  className='w-[100%] zoomeffect bg-black hover:bg-zinc-900 rounded-md' onClick={() => LocalHistory(thumbnail , Views, avtarimage, timefunction(time), title,authorTitle,publish) }>
   
         <div className="relative mb-4 ">
          <img src={thumbnail} className=' w-full flex rounded' alt="" />
          <span className='text-[.74rem] bg-black absolute bottom-[.5rem] right-2 px-2 py-1 rounded text-center'>{timefunction(time)}</span>
          </div> 
          <div className='grid gridcolums-2'>
    
          <div className=''>
          <img src={avtarimage} alt="" className='rounded-full w-[2.6vw] max-md:w-[2rem]' />
          </div>
    
          <div className='flex flex-col'>
          <div className='h-[3rem] overflow-hidden mb-2 '>
          <h2 className='font-semibold max-md:text-[1rem] '>{title.length == 48 ? title : title.substring(0,48).concat("","...")}</h2>
          </div>
          <span className='text-gray-400 text-[0.8rem]'>{authorTitle}</span>
          <div className='flex flex-row'>
            <span className='mr-2 text-gray-400 text-[0.7rem]'>{Views}</span>
            <span className='text-gray-400 text-[0.7rem]'>{publish}</span>
          </div>
          </div>
    
          </div>
          </div>
          </NavLink>
  )
}

export default VideoContainer
