import React from 'react'
import VideoContainer from '../Subcomponents/VideoContainer'
import {LibraryData} from "../Subcomponents/MenuContent"
import LibraryFeeds from '../Subcomponents/LibraryFeeds'
import { useGlobalContext } from '../Context'
import { Link } from 'react-router-dom'

const Library = () => {
const {historydata} = useGlobalContext();
return (
<section className='container my-[2rem] overflow-hidden'>

<div className='grid flex-row gap-9'>

<div className='flex flex-col mr-3'>
      <div className='flex flex-col items-center justify-center'>
         <img className='rounded-full w-[5rem]' src="https://yt3.ggpht.com/ytc/AMLnZu9SCY-XP4jS-cvd7zLiUGvsCanME4ais7w5apN-69Sx7Oc99ZqjLmuzGtCL_CWs=s160-c-k-c0x00ffffff-no-rj" alt="" />
         <span className='my-3 font-semibold'>Andrew Twarog</span>
        </div>

         <div className=''>
          <div className='flex flex-row justify-between py-2 border-t border-gray-700'>
          <span className=' text-[.8rem] text-gray-500 text-start'>Subscriptions</span>
          <span className='text-[.8rem] text-gray-500'>0</span>
          </div>
          <div  className='flex flex-row justify-between py-2 border-y border-gray-700'>
          <span className='  text-[.8rem] text-gray-500 text-start'>Likes</span>
          <span className='text-[.8rem] text-gray-500'>0</span>
          </div>
         </div>
    </div>



<div>

<div className='flex justify-between flex-row mb-7'>

<div className={`flex flex-row py-1 gap-4 font-medium  rounded px-[1rem]`}>
<img src={'/images/sidebar5.png'} className="w-[1.3rem]" alt="" />
<span>History</span>
</div>

<Link to="/history" className={`text-center font-medium py-1 rounded-full px-[1rem] hover:bg-blue-400`}>
<span className='text-blue-700'>See all</span>
</Link>
</div>


<div className='grid auto-grid border-b border-gray-600 pb-8 row_gap'>

{historydata()?.map(e => {
 return(
  <VideoContainer thumbnail={e?.thumbnail} Views={e?.Views} avtarimage={e?.avtarimage} time='2324' title={e?.title} authorTitle={e?.authorTitle} publish={e?.publish} />
 )
})}


</div>
{LibraryData.map(e => {
    return <LibraryFeeds iconimage={e.image} field={e.field} info={e.info}/>
})}
</div>








</div>



    </section>
  )
}

export default Library