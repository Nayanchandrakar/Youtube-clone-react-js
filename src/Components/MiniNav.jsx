import React,{useState} from 'react'
import { Menu } from '../Subcomponents/MenuContent'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../Context'

const MiniNav = () => {

    const {nav} = useGlobalContext();
    const[onbutt,offbut] = useState(true)

  return (
   <div className="scrollbarhide bg-slate-900 flex-row w-[90%] h-[4rem] bottom-4 my-auto mx-[5%] overflow-x-auto overflow-y-hidden rounded-lg fixed hidden max-md:flex">
   {Menu.map(e => {
  if (e.mark == 'sections') {
    return(
      <NavLink onClick={() => setquery(e.query)} to={e.link} className="w-[100%] hover:transition-all" >
      <div className={`flex flex-row gap-4 font-medium py-[.8rem] w-full rounded px-[1.5rem] hover:bg-slate-800 mini_nav`}>
        <img src={e.image} className="w-[1.3rem]" alt="" />
        <span>{e.name}</span>
      </div>
      </NavLink>
    )
}
else if(e.mark == "features"){
  return(
    <NavLink to={e.link} className="w-[100%] hover:transition-all" >
    <div className={`flex flex-row gap-4 font-medium py-[.8rem] w-full rounded px-[1.5rem] hover:bg-slate-800 mini_nav`}>
      <img src={e.image} className="w-[1.3rem]" alt="" />
      <span>{e.name}</span>
    </div>
    </NavLink>
  )
}

else if(e.mark == "Menuevent"){
  return(
    <NavLink onClick={() => onbutt ? offbut(false) : offbut(true)} className="w-[100%] hover:transition-all" >
    <div className={`flex flex-row gap-4 font-medium py-[.8rem] w-full rounded px-[1.5rem] hover:bg-slate-800 mini_nav`}>
      <img src={e.image} className="w-[1.3rem]" alt="" />
      <span>{e.name}</span>
    </div>
    </NavLink>
  )
}else if(e.mark == 'Explore'){
  return(
    <div className='hidden'>
    <div className="flex flex-row gap-4 font-semibold py-[.8rem] w-full rounded-xl px-[1.5rem]">
    <span>{e.name}</span>
    </div>
  </div>
  )
}
else if(e.mark == 'explore'){
    return(
    <div  className={`${onbutt ? "hidden" : "inline-block w-[100%]"} hover:transition-all`}>
      <NavLink onClick={() => setquery(e.query)} to={e.link} className="w-[100%]" >
      <div  className={`flex flex-row gap-4 font-medium py-[.8rem] w-full rounded px-[1.5rem] hover:bg-slate-800 mini_nav`}>
        <img src={e.image} className="w-[1.3rem]" alt="" />
        <span>{e.name}</span>
      </div>
      </NavLink>
    </div>
    )
  }
})}
   </div>
  )
}

export default MiniNav
