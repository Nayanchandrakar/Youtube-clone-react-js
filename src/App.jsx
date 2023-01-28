import React,{useState} from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import Search from './Components/Search'
import Subscription from './Components/Subscription'
import History from './Components/History'
import Library from './Components/Library'
import Slidersidebar from './Components/Slidersidebar'
import { useGlobalContext } from './Context'
import LoadingBar from 'react-top-loading-bar'
import VideoPLayer from './Components/VideoPLayer'
import MiniNav from './Components/MiniNav'

const App = () => {
  const {nav ,progress ,setProgress} = useGlobalContext()
return(
  <>
    <BrowserRouter>
    <Header/>
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <Slidersidebar/>
    <div className={`absolute top-16 max-md:left-[10%] ${nav ? "navres1" :  "navres2"} w-[80%]`}>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/subscription' element={<Subscription/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/library' element={<Library/>}/>
      <Route exact path='videoplayer/:id' element={<VideoPLayer/>}/>
      <Route exact path='search/videoplayer/:id' element={<VideoPLayer/>}/>
     </Routes>

     </div>
     <MiniNav/>
    </BrowserRouter>
  </>
)
}

export default App