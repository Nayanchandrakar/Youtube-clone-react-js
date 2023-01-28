import React from 'react'
import { useGlobalContext } from '../Context'
import VideoContainer from '../Subcomponents/VideoContainer'

const Home = () => {

  const { apidata ,abbreviateNumber} = useGlobalContext()

  return (
    <div className='container my-[2rem] overflow-hidden'>

      <div className='grid auto-grid gap-8 items-center '>

        {apidata?.contents?.map((e) => {
          if(e.type == "video"){
            return (
              <VideoContainer thumbnail={e?.video?.thumbnails?.[0]?.url} time={e?.video?.lengthSeconds} avtarimage={e?.video?.author?.avatar?.[0]?.url} title={e?.video?.title} authorTitle={e?.video?.author?.title} Views={`${abbreviateNumber(e?.video?.stats?.views)} Views`} publish={e?.video?.publishedTimeText} id={e?.video?.videoId}/>
            )
          }
        })}

      </div>
    </div>
  )
}

export default Home