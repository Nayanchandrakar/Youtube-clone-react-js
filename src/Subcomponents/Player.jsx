import React from 'react'
import YouTube from 'react-youtube'
import { NavLink } from 'react-router-dom'
import { player } from './MenuContent'

const Player = ({Videodata , id , opts}) => {
  return (<>
<div className='w-full'>
   <div className="w-full">
   <YouTube
         videoId={id}
         opts={opts}
    />
   </div>

     <div className='flex flex-col gap-3'>
     <NavLink className=" text-sky-500">{Videodata?.superTitle?.items?.[0]}</NavLink>

     <h3 className='font-bold'>{Videodata?.title}</h3>

     <div className='grid auto-grid gap-2'>
    
<div className='flex flex-row gap-3 justify-start items-center'>
<img  src={Videodata?.author?.avatar?.[2]?.url} alt="" className='rounded-full w-[3rem]' />
        <div className='flex flex-col'>
            <h5 className='font-bold max-md:text-[.8rem]'>{Videodata?.author?.title}</h5>
            <p className='text-[.9rem] text-gray-500'>{Videodata?.author?.stats?.subscribersText}</p>
        </div>

        <span className='bg-white text-black w-[6.5rem] h-[2rem] flex justify-center items-center rounded-3xl font-bold '>Subscribe</span>
</div>

    <div className='flex flex-row items-center justify-end gap-2'>
    {player.map(e => {
        return(
            <div className={`flex-row bg-neutral-800 text-white width${e.width} h-[2rem] flex justify-center items-center rounded-3xl font-semibold gap-1`}>
            <img className='w-[1.3rem]' src={e.image} alt="" />
            <span>{e.field}</span>
            </div>
        )
    })}
    </div>

     </div>

</div>
</div>
  </>)
}

export default Player
