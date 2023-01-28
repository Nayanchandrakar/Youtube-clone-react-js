import React from 'react'
import { useGlobalContext } from '../Context'
import {useNavigate} from "react-router-dom"


const Header = () => {
  const {navigation ,searchtext, setsearchtext, setquery} = useGlobalContext()
 
  const navigate = useNavigate()

const SearchFunction = () => {
    setquery(searchtext)
    navigate('/search')
}
  return (
    <nav className='bg-black flex justify-between mx-[1.5rem] h-[4rem] overflow-hidden fixed z-10 top-0 bottom-0 left-0 right-0 '>
      <div className='flex flex-row justify-center items-center'>
        <img className="max-md:hidden w-6 mr-5" onClick={navigation} src="/images/menu.png" alt="" />
        <img src="/images/youtube-logo.png" className='w-9' alt="" />
        <span className='text-[1.3rem] max-md:text-[1rem] font-bold font-sans '>YouTube<sup className='text-[.7rem] ml-2 max-md:text-[.5rem] text-gray-400 font-thin'>IN</sup></span>
      </div>

      <div className='flex flex-row justify-center items-center gap-5'>
        <input type="text" list='text_editor' onChange={e => setsearchtext(e.target.value)} className='w-[54vw] max-md:w-[30vw] h-[2.5rem] bg-transparent rounded-2xl focus:border-blue-600 outline-none border-[1px] text-white border-gray-700 font-semibold px-[1rem]' placeholder='Search' onKeyDown={(e) => e.code === "Enter" ? SearchFunction() : null} />
        <button onClick={() => SearchFunction()}>
          <img src="/images/search.png" alt="" />
        </button>
      </div>

      <div className='flex flex-row justify-center items-center gap-1'>
        <img src="/images/user.png" className='w-7' alt="" />
        <span className='text-blue-600 max-md:hidden'>Sign in</span>
      </div>
    </nav>
  )
}

export default Header