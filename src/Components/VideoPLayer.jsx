import React , {useEffect,useState} from 'react'
import { Link , NavLink , useParams ,useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../Context'
import axios from 'axios'
import Player from '../Subcomponents/Player'

const VideoPLayer = () => {

let {id} = useParams();
const { nav , setnav, abbreviateNumber, timefunction} = useGlobalContext()
const navigate = useNavigate();
const[Videodata , setvideo] = useState([{}])
const[Videcontent , setcontent] = useState([{}])
const[Idchange , setID] = useState('')
const URL = 'https://youtube138.p.rapidapi.com'

const VideoApi = async(key,id) => {

  const options = {
    params: {id: `${id}`},
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
let {data} = await axios.get(`${URL}/${key}`,options)
  return data
}

useEffect(() => {
  VideoApi('video/details/',id).then(e => setvideo(e))
  VideoApi('video/related-contents/',id).then(e => setcontent(e))
  setnav(true)
},[id])
    

const opts ={height:"480",width:`${nav ? '100%' : '100%'}`}

  return (
    <div className={`container ${nav ? 'w-[100%]' : ''}`}>
    <div className='grid cu-player-grid max-xl:flex-col max-xl:flex  gap-3'>


{/* first div */}
<Player id={id} opts={opts} Videodata={Videodata}/>
 {/* end of first div */}

<div className='w-full'>
        
{/* Main grid container */}

     {Videcontent?.contents?.map(e => {
      return(
      
        <Link className="grid grid-cols-2 max-md:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-2 mb-2" to={`/videoplayer/${e?.video?.videoId}`}>
         
        {/* part 1 */}
        <div className='relative'>
        <img  className='w-[100%] rounded-xl' src={e?.video?.thumbnails?.[1]?.url} alt="Image_not_found" />
        <span className='text-[.65rem] bg-black absolute bottom-[.5rem] right-4 px-2 py-1 rounded text-center'>{timefunction(e?.video?.lengthSeconds)}</span>
        </div>

        {/* part 2 */}
        <div className='flex flex-col justify-start gap-1'>
          <span className='font-bold text-[.8rem]'>{e?.video?.title.length >= 50 ? e?.video?.title.substring(0,50).concat("","...") : e?.video?.title}</span>
          <span className='text-[.9rem] text-gray-400'>{e?.video?.author?.title}</span>
          <span className='text-[.8rem] text-gray-400'>{`${abbreviateNumber(e?.video?.stats?.views)} Views`} <span>{e?.video?.publishedTimeText}</span></span>
          {/* <span className='text-[.8rem] font-semibold bg-gray-600 text-white rounded-md flex justify-center w-[2.2rem] h-[1.3rem]'>new</span> */}
        </div>
   </Link>
      )
     })}
       
    </div>

 </div>
    </div>
  )
}

export default VideoPLayer
