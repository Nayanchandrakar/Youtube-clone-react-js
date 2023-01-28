import React from "react";
import {useGlobalContext} from "../Context"
import { NavLink } from "react-router-dom";
import {Menu} from "../Subcomponents/MenuContent"

const Slidersidebar = () => {
const {nav , setquery} = useGlobalContext()

return (
<div className={`w-[15rem] max-md:hidden scrollbarhide overflow-y-auto py-4 h-[100vh] flex flex-col items-start fixed top-[4rem] ${nav ? 'w-20' : ''}`}>


{Menu.map(e => {
  if (e.mark == 'sections') {
    return(
      <NavLink onClick={() => setquery(e.query)} to={e.link} className="w-[100%] hover:transition-all" >
      <div className={`flex flex-row gap-4 font-medium py-[.8rem] w-full rounded px-[1.5rem] hover:bg-neutral-800 ${nav ? 'mini_nav' : ''}`}>
        <img src={e.image} className="w-[1.3rem]" alt="" />
        <span>{e.name}</span>
      </div>
      </NavLink>
    )
}
else if(e.mark == "features"){
  return(
    <NavLink to={e.link} className="w-[100%] hover:transition-all" >
    <div className={`flex flex-row gap-4 font-medium py-[.8rem] w-full rounded px-[1.5rem] hover:bg-neutral-800 ${nav ? 'mini_nav' : ''}`}>
      <img src={e.image} className="w-[1.3rem]" alt="" />
      <span>{e.name}</span>
    </div>
    </NavLink>
  )
}else if(e.mark == 'Explore'){
  return(
    <div className={`${nav ? "hidden" : "block"}`}>
    <div className="flex flex-row gap-4 font-semibold py-[.8rem] w-full rounded-xl px-[1.5rem]">
    <span>{e.name}</span>
    </div>
  </div>
  )
}
else if(e.mark == 'explore'){
    return(
    <div  className={`${nav ? "hidden" : "inline-block w-[100%]"} hover:transition-all`}>
      <NavLink onClick={() => setquery(e.query)} to={e.link} className="w-[100%]" >
      <div  className={`flex flex-row gap-4 font-medium py-[.8rem] w-full rounded px-[1.5rem] hover:bg-neutral-800 ${nav ? 'mini_nav' : ''}`}>
        <img src={e.image} className="w-[1.3rem]" alt="" />
        <span>{e.name}</span>
      </div>
      </NavLink>
    </div>
    )
  }
})}

</div>

)}

export default Slidersidebar;
