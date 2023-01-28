import React from 'react'
import { NavLink } from 'react-router-dom'

const ContentLoader = () => {
  return (
    <NavLink onClick={() => setquery('New')} to="/" className="w-[100%]" >
    <div className={`flex px-[1.5rem] flex-row gap-4 font-medium py-[.8rem] w-full rounded-xl hover:bg-neutral-800 ${nav ? 'mini_nav' : ''}`}>
      <img src="/images/sidebar1.png" className="w-[1.3rem]" alt="" />
      <span>Home</span>
    </div>
  </NavLink>
  )
}

export default ContentLoader
